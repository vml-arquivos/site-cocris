# CoCris Site - TODO List

## 🔴 ATUALIZAÇÃO COM CONTEÚDO REAL - PRIORIDADE MÁXIMA

### Identidade Visual e Logo
- [x] Substituir logo placeholder pelo logo oficial da COCRIS (images.png)
- [x] Extrair paleta de cores do logo (vermelho #E31E24, azul #0066CC, amarelo)
- [x] Atualizar index.css com cores da identidade visual real
- [ ] Aplicar cores do logo em todos os componentes (Header, Footer, Buttons)

### Conteúdo do Site cocris.org
- [x] Acessar e extrair conteúdo real de cocris.org
- [x] Coletar missão, visão e valores reais
- [x] Extrair história e informações institucionais autênticas
- [x] Coletar informações sobre projetos e programas reais
- [x] Obter dados de contato reais (telefones, emails, endereços)

### Imagens Reais das Unidades
- [x] Copiar logo oficial (images.png) para client/public/images/
- [x] CEPI Arara Canindé - usar Arara-Caninde.png
- [x] CEPI Sabiá do Campo - usar cepi-sabia-do-campo.jpg
- [x] CEPI Flamboyant - usar CEPI-FLAMBOYANT.png
- [x] Outras unidades - usar images.jfif e download.jfif
- [x] Fotos de atividades - cropped-AulaDeMovimento_M2(1).jpg, cropped-unnamed.jpg
- [x] Foto da equipe - WhatsApp-Image-2022-05-05-at-15.01.15-1.jpeg
- [x] Fotos de eventos - IMG-20201228-WA0052.jpg, mqdefault.jpg, etc.

### Atualização de Páginas com Conteúdo Real
- [x] Home - hero com imagens reais e conteúdo do cocris.org
- [ ] Quem Somos - história e informações reais
- [ ] Unidades - fotos reais de cada CEPI/Creche
- [ ] Projetos - informações autênticas dos programas
- [x] Header - logo real da COCRIS
- [x] Footer - logo real e informações corretas

### Banco de Dados
- [x] Atualizar unidades com dados reais do cocris.org
- [x] Verificar e corrigir endereços, telefones e emails

---

## ✅ Fase 1: Estrutura Base e Migração
- [x] Migrar código do repositório temp-repo para o projeto atual
- [x] Atualizar fontes para Montserrat/Roboto/Open Sans
- [x] Configurar paleta de cores institucional no index.css
- [x] Criar schema do banco de dados (unidades, blog, newsletter, contatos, doações)
- [x] Implementar componentes reutilizáveis (Header, Footer, Cards)

## ✅ Fase 2: Páginas Institucionais
- [x] Página Inicial - Hero section com animações premium
- [x] Página Inicial - Seção Missão, Visão e Valores
- [x] Página Inicial - Seção de Impacto Social
- [x] Página Quem Somos - História da CoCris
- [x] Página Quem Somos - Equipe e Diretoria
- [x] Página Quem Somos - Estrutura Organizacional

## ✅ Fase 3: Sistema de Unidades
- [x] Criar schema para unidades no banco de dados
- [x] Importar dados do units.json para o banco
- [x] Página Nossas Unidades - Grid com cards das 6 unidades
- [x] Página Individual de cada Unidade (slug dinâmico)
- [ ] Adicionar mapa com localização das unidades
- [ ] Otimizar SEO local para cada unidade

## ✅ Fase 4: Sistema de Blog/Notícias
- [x] Criar schema para blog no banco de dados
- [x] Página Blog - Listagem de posts com paginação
- [x] Página Blog - Sistema de categorias e tags
- [x] Página Blog - Busca avançada
- [x] Página Individual de Post (slug dinâmico)
- [x] Sistema de visualizações de posts

## ✅ Fase 5: Página de Doações
- [x] Criar schema para doações no banco de dados
- [x] Página Doações - Formulário de doação
- [x] Página Doações - Opções de pagamento (PIX, Cartão, Boleto)
- [x] Página Doações - Informações bancárias
- [x] Página Doações - Contador de doações
- [ ] Sistema de recibos de doação

## ✅ Fase 6: Página de Transparência
- [x] Criar schema para documentos de transparência
- [x] Página Transparência - Relatórios financeiros
- [x] Página Transparência - Prestação de contas
- [x] Página Transparência - Documentos institucionais
- [ ] Sistema de upload e download de documentos

## ✅ Fase 7: Página de Contato
- [x] Criar schema para contatos no banco de dados
- [x] Página Contato - Formulário de contato
- [x] Página Contato - Mapa com todas as unidades
- [x] Página Contato - Informações de contato
- [ ] Sistema de notificação de novos contatos

## ✅ Fase 8: Área do Colaborador
- [x] Botão "Área do Colaborador" no header
- [x] Link para https://democonexa.casadf.com.br/login
- [x] Botão no rodapé também
- [x] Abrir em nova aba

## Fase 9: SEO e Performance
- [ ] Meta tags dinâmicas para todas as páginas
- [ ] Schema.org para Organization
- [ ] Gerar sitemap.xml dinâmico
- [ ] Otimizar imagens com lazy loading

## Fase 10: Testes e Deploy
- [x] Testes automatizados (16 testes passando)
- [ ] Testar responsividade em todos os dispositivos
- [ ] Deploy para produção
