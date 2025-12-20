# Surf Bits (surf-bits.com)
O Surf Bits é um portal estático focado em curadoria de equipamentos, ofertas e guias de compra para a comunidade surfista. O projeto prioriza a monetização rápida e o baixo custo de manutenção, utilizando uma arquitetura baseada em performance e simplicidade.
🎯 Objetivo do Projeto
Criar um ecossistema de conteúdo transacional que converta intenção de compra em receita via afiliados, sem a complexidade de um backend ou a sobrecarga de um CMS tradicional.
📈 Estratégia de Evolução (Fases)
O projeto segue um modelo de crescimento incremental obrigatório:
 * FASE 1 — Surf Bits Deals (MVP): Curadoria de ofertas e guias de compra ("Melhor prancha para iniciantes"). Foco total em 5 a 8 páginas de alta conversão.
 * FASE 2 — Reviews e Comparativos: Expansão de conteúdo técnico detalhado após a indexação e os primeiros cliques serem validados.
 * FASE 3 — Conteúdo Editorial / Spots: Adição de conteúdo de lifestyle e guias de picos de surf (opcional e tardio).
💸 Monetização
 * Affiliate Marketing: Inserção estratégica de links de afiliados (Amazon, Decathlon e lojas especializadas).
 * Foco Transacional: Todo conteúdo na Fase 1 deve ter um call-to-action (CTA) claro para compra.
🛠 Stack Técnica
 * Framework: Astro (Static Site Generator)
 * Conteúdo: Markdown (Arquivos locais versionados)
 * Deploy: Coolify (Auto-hospedado)
 * Estilização: Tailwind CSS (opcional, mas recomendado pela performance)
 * Versionamento: Git (GitHub/GitLab)
📁 Estrutura de Pastas Sugerida
surf-bits/
├── public/              # Assets estáticos (favicons, robots.txt)
├── src/
│   ├── components/      # Componentes UI (Cards de produtos, Botões de compra)
│   ├── content/         # Arquivos Markdown (Ofertas e Guias)
│   │   ├── deals/       # Conteúdo da Fase 1
│   │   └── reviews/     # Conteúdo da Fase 2
│   ├── layouts/         # Templates base (Layout padrão, SEO)
│   ├── pages/           # Rotas do site (index.astro, 404.astro)
│   └── styles/          # CSS Global
├── astro.config.mjs     # Configurações do Astro
├── package.json         # Dependências e scripts
└── README.md            # Documentação do projeto

🚀 Como Rodar Localmente
Certifique-se de ter o Node.js instalado.
 * Instale as dependências:
   npm install

 * Inicie o servidor de desenvolvimento:
   npm run dev

 * Acesse em: http://localhost:4321
🚢 Deploy via Coolify
Para publicar o Surf Bits no seu servidor via Coolify:
 * Novo Recurso: No painel do Coolify, selecione "New Resource" > "Public Repository" ou "Private Repository" (conectando seu GitHub).
 * Configuração de Build: * O Coolify detectará automaticamente o Astro (Nixpacks).
   * Build Command: npm run build
   * Install Command: npm install
   * Publish Directory: dist
 * Domínio: Aponte o domínio surf-bits.com para o IP do seu servidor e configure-o na aba "Settings" do recurso no Coolify.
 * Deploy: Clique em "Deploy".
📝 Boas Práticas
SEO & Performance
 * Imagens: Sempre utilizar o componente <Image /> do Astro para otimização automática.
 * Metadados: Cada página deve ter um title único e uma description focada em CTR.
 * Links Internos: Manter uma estrutura de silos para fortalecer as páginas de "Deals".
 * Core Web Vitals: O site deve manter 90+ em todas as métricas do Lighthouse.
Conteúdo (Markdown)
 * Manter o frontmatter limpo:
   ---
title: "As 5 Melhores Pranchas de Surf para Iniciantes em 2025"
description: "Guia completo de compra com os melhores preços."
affiliateLink: "https://amazon.com.br/..."
---

🗺 Roadmap (Próximas Tarefas)
 * [ ] Configurar projeto base com Astro.
 * [ ] Criar Layout base com foco em SEO (Meta tags, OpenGraph).
 * [ ] Desenvolver componente de ProductCard (Imagem, Preço, Botão Afiliado).
 * [ ] Mapear e criar as 5 primeiras páginas de ofertas (Fase 1).
 * [ ] Configurar o arquivo robots.txt e sitemap-index.xml.
 * [ ] Realizar o primeiro deploy no Coolify.
 * [ ] Validar tracking de cliques nos links de afiliados.
Seria útil se eu gerasse agora a estrutura base do arquivo astro.config.mjs ou o componente de SEO para as suas páginas?
