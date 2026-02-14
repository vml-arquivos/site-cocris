# Guia de Deploy - Site COCRIS no Coolify

Este documento contém todas as instruções necessárias para fazer o deploy do site da COCRIS em uma VPS usando Coolify.

## 📋 Pré-requisitos

- VPS com Ubuntu 22.04 ou superior
- Coolify instalado e configurado
- Domínio configurado (opcional, mas recomendado)
- Acesso SSH à VPS

## 🚀 Passos para Deploy no Coolify

### 1. Preparar o Repositório

O código já está no GitHub em: `https://github.com/vml-arquivos/site-cocris`

### 2. Configurar Projeto no Coolify

1. Acesse o painel do Coolify
2. Clique em "New Resource" → "Application"
3. Selecione "Public Repository"
4. Cole a URL do repositório: `https://github.com/vml-arquivos/site-cocris`
5. Configure o branch: `main`

### 3. Configurar Build Settings

**Build Pack:** Node.js

**Build Command:**
```bash
pnpm install && pnpm run build
```

**Start Command:**
```bash
NODE_ENV=production node dist/server/_core/index.js
```

**Port:** `3000`

### 4. Variáveis de Ambiente Necessárias

Configure as seguintes variáveis de ambiente no Coolify:

```env
# Database
DATABASE_URL=mysql://usuario:senha@host:3306/cocris_db

# JWT e Auth
JWT_SECRET=seu_jwt_secret_aqui_minimo_32_caracteres

# OAuth (se usar autenticação Manus)
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im
VITE_APP_ID=seu_app_id

# Owner Info
OWNER_OPEN_ID=seu_owner_id
OWNER_NAME=COCRIS

# Forge API (se usar)
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=sua_api_key
VITE_FRONTEND_FORGE_API_KEY=sua_frontend_key
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im

# App Config
VITE_APP_TITLE=CoCris - Associação Beneficente Coração de Cristo
VITE_APP_LOGO=/images/logo-cocris.png

# Analytics (opcional)
VITE_ANALYTICS_ENDPOINT=seu_endpoint_analytics
VITE_ANALYTICS_WEBSITE_ID=seu_website_id

# Node Environment
NODE_ENV=production
```

### 5. Configurar Banco de Dados

#### Opção A: MySQL/MariaDB na VPS

```bash
# Instalar MySQL
sudo apt update
sudo apt install mysql-server -y

# Configurar banco
sudo mysql
CREATE DATABASE cocris_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'cocris_user'@'localhost' IDENTIFIED BY 'senha_segura_aqui';
GRANT ALL PRIVILEGES ON cocris_db.* TO 'cocris_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

#### Opção B: TiDB Cloud (Recomendado para produção)

1. Crie uma conta em https://tidbcloud.com
2. Crie um novo cluster
3. Copie a connection string
4. Use como `DATABASE_URL`

### 6. Executar Migrações

Após o primeiro deploy, execute as migrações:

```bash
# Via SSH na VPS
cd /caminho/do/projeto
pnpm db:push
```

### 7. Configurar Domínio (Opcional)

1. No Coolify, vá em "Domains"
2. Adicione seu domínio: `cocris.org` ou `www.cocris.org`
3. Coolify configurará automaticamente SSL com Let's Encrypt

### 8. Configurar Nginx (se necessário)

Se você não estiver usando o proxy reverso do Coolify:

```nginx
server {
    listen 80;
    server_name cocris.org www.cocris.org;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 🔧 Configurações Adicionais

### Performance

1. **Habilitar Gzip no Nginx:**
```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;
```

2. **Cache de Assets:**
```nginx
location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### Segurança

1. **Firewall:**
```bash
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

2. **Headers de Segurança (Nginx):**
```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
```

### Monitoramento

1. **PM2 para gerenciamento de processo (alternativa ao Coolify):**
```bash
npm install -g pm2
pm2 start dist/server/_core/index.js --name cocris-site
pm2 startup
pm2 save
```

2. **Logs:**
```bash
# Via PM2
pm2 logs cocris-site

# Via Coolify
# Acesse a aba "Logs" no painel
```

## 📊 Pós-Deploy

### Verificações

1. ✅ Site acessível via domínio
2. ✅ SSL configurado e funcionando
3. ✅ Banco de dados conectado
4. ✅ Todas as páginas carregando
5. ✅ Formulários funcionando
6. ✅ Imagens carregando corretamente

### Testes

```bash
# Testar conexão
curl https://cocris.org

# Testar API
curl https://cocris.org/api/trpc/units.list

# Verificar SSL
curl -I https://cocris.org | grep -i "strict-transport"
```

### Backup

Configure backups automáticos:

```bash
# Backup do banco de dados
mysqldump -u cocris_user -p cocris_db > backup_$(date +%Y%m%d).sql

# Agendar backup diário (crontab)
0 2 * * * /usr/bin/mysqldump -u cocris_user -pSENHA cocris_db > /backups/cocris_$(date +\%Y\%m\%d).sql
```

## 🐛 Troubleshooting

### Site não carrega

1. Verificar logs: `pm2 logs` ou no painel do Coolify
2. Verificar se o processo está rodando: `pm2 list`
3. Verificar porta: `netstat -tulpn | grep 3000`

### Erro de banco de dados

1. Verificar `DATABASE_URL` nas variáveis de ambiente
2. Testar conexão: `mysql -h host -u user -p`
3. Verificar se as migrações foram executadas

### Imagens não carregam

1. Verificar se as imagens estão no diretório `client/public/images`
2. Verificar permissões: `chmod -R 755 client/public/images`
3. Verificar configuração do Nginx para servir arquivos estáticos

## 📞 Suporte

Para problemas específicos do Coolify, consulte:
- Documentação: https://coolify.io/docs
- Discord: https://coolify.io/discord

## 🔄 Atualizações

Para atualizar o site:

1. Faça push das alterações para o GitHub
2. No Coolify, clique em "Redeploy"
3. Aguarde o build e deploy automático

Ou via SSH:

```bash
cd /caminho/do/projeto
git pull origin main
pnpm install
pnpm run build
pm2 restart cocris-site
```

## ✅ Checklist Final

- [ ] Repositório GitHub configurado
- [ ] Coolify configurado com o repositório
- [ ] Variáveis de ambiente configuradas
- [ ] Banco de dados criado e conectado
- [ ] Migrações executadas
- [ ] Domínio configurado (se aplicável)
- [ ] SSL ativo
- [ ] Site acessível e funcionando
- [ ] Backups configurados
- [ ] Monitoramento ativo

---

**Desenvolvido para COCRIS - Associação Beneficente Coração de Cristo**
