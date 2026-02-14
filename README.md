# Site COCRIS - Associação Beneficente Coração de Cristo

Site institucional premium da COCRIS, organização sem fins lucrativos dedicada à educação infantil e assistência social no Distrito Federal.

## 🎯 Sobre o Projeto

Este é o site oficial da Associação Beneficente Coração de Cristo (COCRIS), desenvolvido com tecnologias modernas para oferecer uma experiência premium aos visitantes, transparência total nas operações e facilitar doações e engajamento da comunidade.

### Funcionalidades Principais

- ✅ **Páginas Institucionais Completas**: Home, Quem Somos, Unidades, Projetos, Blog, Doações, Transparência, Compliance, Contato
- ✅ **7 Unidades Educacionais**: CEPIs e Creches com páginas individuais detalhadas
- ✅ **Sistema de Blog**: Com categorias, tags, busca e posts dinâmicos
- ✅ **Formulários Integrados**: Newsletter, Contato e Doações
- ✅ **Transparência Total**: Documentos financeiros, relatórios e auditorias
- ✅ **SEO Avançado**: Meta tags, Schema.org, sitemap dinâmico, robots.txt
- ✅ **Design Responsivo**: Mobile-first, otimizado para todos os dispositivos
- ✅ **Performance Otimizada**: Lazy loading, cache, compressão de imagens
- ✅ **Identidade Visual Autêntica**: Logo oficial, cores da marca (vermelho #E31E24, azul #0066CC, amarelo #FFC107)

## 🚀 Tecnologias

### Frontend
- **React 19** - Framework UI moderno
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização utilitária
- **Wouter** - Roteamento leve
- **shadcn/ui** - Componentes UI premium

### Backend
- **Node.js** - Runtime JavaScript
- **Express 4** - Framework web
- **tRPC 11** - API type-safe
- **Drizzle ORM** - ORM TypeScript-first

### Database
- **MySQL/TiDB** - Banco de dados relacional
- **SQLite** - Desenvolvimento local

### DevOps
- **Vite** - Build tool e dev server
- **TSX** - TypeScript execution
- **pnpm** - Gerenciador de pacotes
- **Vitest** - Framework de testes

## 📦 Instalação

### Pré-requisitos

- Node.js 22.x ou superior
- pnpm 9.x ou superior
- MySQL 8.x ou TiDB Cloud

### Passos

1. **Clone o repositório:**
```bash
git clone https://github.com/vml-arquivos/site-cocris.git
cd site-cocris
```

2. **Instale as dependências:**
```bash
pnpm install
```

3. **Configure as variáveis de ambiente:**
```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

4. **Execute as migrações do banco de dados:**
```bash
pnpm db:push
```

5. **Inicie o servidor de desenvolvimento:**
```bash
pnpm dev
```

6. **Acesse o site:**
```
http://localhost:3000
```

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev              # Inicia servidor de desenvolvimento

# Build
pnpm build            # Compila para produção
pnpm start            # Inicia servidor de produção

# Database
pnpm db:push          # Aplica migrações ao banco de dados
pnpm db:studio        # Abre interface visual do banco

# Testes
pnpm test             # Executa todos os testes
pnpm test:watch       # Executa testes em modo watch

# Linting
pnpm lint             # Verifica código com ESLint
pnpm type-check       # Verifica tipos TypeScript
```

## 📁 Estrutura do Projeto

```
cocris-site/
├── client/                 # Frontend React
│   ├── public/            # Assets estáticos
│   │   ├── images/        # Imagens do site
│   │   └── robots.txt     # SEO robots
│   └── src/
│       ├── components/    # Componentes reutilizáveis
│       ├── pages/         # Páginas da aplicação
│       ├── contexts/      # React contexts
│       ├── hooks/         # Custom hooks
│       └── lib/           # Utilitários
├── server/                # Backend Node.js
│   ├── _core/            # Core do servidor
│   ├── db.ts             # Configuração do banco
│   ├── routers.ts        # Rotas tRPC
│   └── sitemap.ts        # Gerador de sitemap
├── drizzle/              # Schema e migrações
│   └── schema.ts         # Definição das tabelas
├── shared/               # Código compartilhado
├── storage/              # Helpers S3
├── DEPLOY.md             # Guia de deploy
└── README.md             # Este arquivo
```

## 🎨 Identidade Visual

### Cores Principais
- **Vermelho Primário**: #E31E24 (Coração, paixão, amor)
- **Azul Secundário**: #0066CC (Confiança, profissionalismo)
- **Amarelo Destaque**: #FFC107 (Alegria, otimismo)

### Tipografia
- **Fonte Principal**: Montserrat (Google Fonts)
- **Peso**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### Logo
- Logo oficial da COCRIS com coração vermelho e azul
- Localização: `/client/public/images/logo-cocris.png`

## 🔐 Segurança

- ✅ Proteção CSRF
- ✅ Sanitização de inputs
- ✅ Conformidade LGPD
- ✅ Headers de segurança HTTP
- ✅ Rate limiting em APIs
- ✅ Validação de dados com Zod

## 📊 SEO e Performance

### SEO
- Meta tags otimizadas em todas as páginas
- Schema.org markup (Organization, Article, LocalBusiness)
- Sitemap.xml dinâmico
- Robots.txt configurado
- Open Graph e Twitter Cards
- URLs amigáveis e semânticas

### Performance
- Lazy loading de imagens
- Code splitting automático
- Compressão Gzip/Brotli
- Cache de assets estáticos
- Otimização de imagens (WebP)
- Core Web Vitals otimizados

## 🧪 Testes

O projeto inclui testes automatizados com Vitest:

```bash
# Executar todos os testes
pnpm test

# Executar testes em modo watch
pnpm test:watch

# Executar testes com coverage
pnpm test:coverage
```

Testes incluem:
- Autenticação e autorização
- Rotas tRPC
- Formulários e validações
- Integração com banco de dados

## 🚢 Deploy

Consulte o arquivo [DEPLOY.md](./DEPLOY.md) para instruções detalhadas de deploy no Coolify ou outras plataformas.

### Deploy Rápido

1. **Configure as variáveis de ambiente no Coolify**
2. **Conecte o repositório GitHub**
3. **Configure os comandos de build:**
   - Build: `pnpm install && pnpm run build`
   - Start: `NODE_ENV=production node dist/server/_core/index.js`
4. **Deploy!**

## 📱 Contato

**COCRIS - Associação Beneficente Coração de Cristo**

- 📍 Endereço: Avenida Recanto das Emas, Quadra 301, Lote 26, Brasília-DF
- 📞 Telefones: (61) 3575-4125 / 3575-4119
- 📧 Email: contato@cocris.org
- 🌐 Site: https://cocris.org
- 📘 Facebook: /cocris
- 📷 Instagram: @cocris

## 📄 Licença

Este projeto é propriedade da Associação Beneficente Coração de Cristo (COCRIS). Todos os direitos reservados.

## 🤝 Contribuindo

Este é um projeto privado da COCRIS. Para sugestões ou melhorias, entre em contato através dos canais oficiais.

## 🙏 Agradecimentos

Desenvolvido com ❤️ para transformar vidas através da educação e do amor.

---

**© 2026 COCRIS - Associação Beneficente Coração de Cristo. Todos os direitos reservados.**
