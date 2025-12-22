---
trigger: always_on
---

Princípios Fundamentais
Stack Obrigatória

Framework: Astro (SSG/Static)
Componentes Interativos: React (islands)
Estilos: Tailwind CSS
TypeScript: strict mode

Mandamentos

SSG sempre: Zero runtime server, tudo estático
Conteúdo no repositório: Sem CMS/admin, update via PR
Rotas estáveis: URLs nunca mudam (SEO)
Migrável para Next.js: Separar conteúdo de renderização


Estrutura de Pastas (EXATA)
/
  public/                  # Assets estáticos (imagens, robots.txt)
  src/
    content/               # Markdown/MDX + assets (Content Collections)
    data/                  # JSON/TS exports (dados, configs)
    pages/                 # Rotas (file-based routing)
    layouts/               # Layouts finos
    components/
      ui/                  # Componentes sem JS client
      islands/             # Componentes React interativos
    styles/                # Tokens e estilos globais
    lib/                   # Helpers puros (sem Astro)

Regras por Categoria
1. CONTEÚDO (src/content/)
✅ SEMPRE:

Usar Astro Content Collections com schemas Zod
Frontmatter simples e serializável
Slug explícito no frontmatter (nunca derivar só do filename)
Markdown para conteúdo, MDX apenas quando necessário

Frontmatter permitido:
yamltitle: string
description: string
slug: string
date: date
tags: string[]
image: string
draft: boolean
❌ NUNCA no frontmatter:

Funções
Objetos complexos
Referências a imports do Astro


2. ROTAS (src/pages/)
✅ SEMPRE:

Rotas dinâmicas via getStaticPaths() (SSG)
Criar helper centralizado em src/lib/routes.ts
Nomear compatível com Next.js

Exemplos de rotas:
src/pages/index.astro              → /
src/pages/sao-paulo/[bairro].astro → /sao-paulo/:bairro
src/pages/blog/[slug].astro        → /blog/:slug
❌ NUNCA:

Gerar URLs hardcoded em múltiplos lugares
Usar SSR (apenas SSG)


3. COMPONENTES
3.1 UI Pura (src/components/ui/)
✅ SEMPRE:

Componentes .astro sem JS no client
Props simples e serializáveis
Sem fetch, sem side effects
Sem acesso desnecessário a Astro.*

3.2 Ilhas React (src/components/islands/)
✅ SEMPRE:

Arquivo .tsx (React puro, sem imports do Astro)
Instanciar em .astro com diretiva client:*
Preferir client:visible (abaixo da dobra)
Usar client:load apenas quando necessário

Padrão de implementação:
typescript// src/components/islands/VoteWidget.tsx (React puro)
export function VoteWidget({ initialVotes }: { initialVotes: number }) {
  // lógica React
}

// src/components/ui/VoteSection.astro (ponte)
---
import VoteWidget from '@/components/islands/VoteWidget';
---
<VoteWidget client:visible initialVotes={10} />
❌ NUNCA:

Componentes React que importam APIs do Astro
Mini-apps inteiros em client JS para páginas estáticas


4. LAYOUTS (src/layouts/)
✅ SEMPRE:

Layouts finos (estrutura, SEO, header/footer)
Sem lógica de negócio no layout
Componente SEO centralizado (src/components/ui/Seo.astro ou src/lib/seo.ts)

Props SEO obrigatórias:

title
description
canonical
og:image

❌ NUNCA:

Lógica de negócios no layout
Features muito específicas do Astro no core


5. DADOS (src/data/ e src/lib/)
✅ SEMPRE:

Dados em JSON/TS agnóstico (não Astro-specific)
Fetch durante build-time com cache
Helpers puros em src/lib/ (formatters, slug, SEO utils)
Salvar snapshots de APIs externas no repo

❌ NUNCA:

Depender de endpoint server-side para renderizar
Buscar dados em runtime


6. IMAGENS E ASSETS
✅ SEMPRE:

Imagens fixas em public/
Caminhos estáveis (/images/...)
Atributos width, height, loading="lazy", decoding="async"

❌ NUNCA:

Depender de otimização proprietária como requisito
Caminhos dinâmicos/bundler-specific


7. ESTILOS
✅ SEMPRE:

Tailwind CSS
Tokens centralizados (src/styles/tokens.css ou tailwind.config.*)
Consistência em todo o projeto

❌ NUNCA:

Estilos espalhados por página
Múltiplos sistemas de estilo


8. SCRIPTS E INTEGRAÇÕES
✅ SEMPRE:

Analytics via <script> (GA, Plausible)
Formulários via serviços externos (Formspark, Tally, Netlify Forms)
Endpoints serverless independentes do framework

❌ NUNCA:

API routes dentro do framework como dependência central


9. TYPESCRIPT E QUALIDADE
✅ SEMPRE:

TypeScript em src/lib, src/data, ilhas React
strict: true
ESLint + Prettier configurados
Lockfile (package-lock.json ou pnpm-lock.yaml) commitado


10. BUILD E DEPLOY
✅ SEMPRE:

Build: astro build → dist/
Hosting: CDN/static (Cloudflare Pages, Netlify, Vercel)
Sem runtime server

Checklist de validação:

 Páginas renderizam sem runtime server
 Sem dependência de banco para page render
 Tudo acessível via arquivos estáticos

❌ NUNCA:

SSR sem justificativa documentada em ADR


Anti-Padrões (NUNCA FAZER)
❌ URLs hardcoded espalhadas no código
❌ Conteúdo dentro de templates de página
❌ React dependendo de APIs do Astro
❌ SSR por conveniência
❌ Interatividade grande sem necessidade
❌ Fetch de dados em runtime
❌ Componentes sem separação UI/islands
❌ Lógica de negócio em layouts

Checklist de Validação (Para cada Feature)
Antes de Criar Branch

 Feature realmente precisa de interatividade?
 Pode ser 100% estática?

Durante Desenvolvimento

 Estrutura de pastas está correta?
 Conteúdo está em src/content/ com schema?
 Components React estão em islands/?
 URLs tem helper centralizado?
 Não há fetch em runtime?
 Imagens em public/ com caminhos estáveis?

Antes de Squash na Main

 TypeScript sem erros (strict: true)
 ESLint/Prettier passando
 Build funcionando (astro build)
 Preview estático funcional
 Rotas estão estáveis (não vão mudar)
 Código é migrável para Next.js


Mapa de Migração (Referência)
Quando migrar para Next.js:
Astro                    → Next.js
─────────────────────────────────────────
src/content/*            → continua (fs + parser)
src/data/*               → continua
src/components/islands/* → components/
src/pages/*.astro        → app/.../page.tsx
getStaticPaths()         → generateStaticParams()
Seo component            → metadata

Comandos Rápidos
bash# Criar nova feature
git checkout -b feature/nome-da-feature

# Desenvolver...
npm run dev

# Validar build
npm run build
npm run preview

# Fechar feature (squash)
git checkout main
git merge --squash feature/nome-da-feature
git commit -m "feat: descrição da feature"
git push

Resumo em 7 Linhas (Memorize)

Astro sempre, SSG sempre
Conteúdo em src/content, validado e com slug estável
Rotas e helpers desenhados "como Next"
UI pura separada de ilhas React
Dados em JSON/TS agnóstico; fetch só no build com cache
Assets em public/ e caminhos estáveis
Sem SSR/servers por padrão; exceções documentadas