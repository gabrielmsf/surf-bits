# 🏄‍♂️ Surf Bits (surf-bits.com)

O **Surf Bits** é um portal estático de alta performance focado em curadoria de equipamentos, ofertas exclusivas e guias de compra especializados para a comunidade surfista. 

Construído com uma arquitetura focada em **SEO**, **velocidade** e **conversão**, o projeto utiliza as melhores práticas de desenvolvimento estático moderno para garantir baixo custo de manutenção e máxima eficiência.

---

## 🎯 Objetivo do Projeto

Criar um ecossistema de conteúdo transacional robusto que converta intenção de busca em receita via afiliados, eliminando a complexidade de backends pesados e focando 100% na experiência do usuário e na entrega de valor. O projeto opera em escala global, servindo como um hub centralizado para surfistas de múltiplas regiões.

---

## 🌍 Internacionalização & Localização

O Surf Bits é nativamente **multi-idioma** e **multi-região**, projetado para escalar globalmente desde o dia um.

*   **Idiomas Suportados:** Português (PT), Inglês (EN) e Espanhol (ES) estão disponíveis para *todas* as regiões.
*   **Página Inicial (Diretório):** A raiz do domínio (`/`) atua como um seletor global de localização, direcionando o usuário para a região de interesse.
*   **Estrutura de Regiões:**
    *   **Nível 1 (Países):** Inicialmente Brasil 🇧🇷, Estados Unidos 🇺🇸 e Austrália 🇦🇺.
    *   **Nível 2 (Sub-regiões):** Suporte arquitetural para regiões específicas dentro de países (ex: Califórnia, Gold Coast, Floripa).

---

## 📈 Estratégia de Evolução

O projeto segue um modelo de crescimento incremental rigoroso:

1.  **FASE 1 — Surf Spots Discovery:** Foco em atrair tráfego orgânico e construir autoridade através de um mapa abrangente de picos de surf (Meta: 50+ locais).
2.  **FASE 2 — Surf Bits Deals (MVP):** Introdução da monetização. Curadoria de ofertas e guias de compra fundamentais (ex: *"Melhor prancha para iniciantes"*).
3.  **FASE 3 — Reviews e Comparativos:** Expansão para conteúdo técnico aprofundado e testes de produtos validados pela comunidade.

---

## 🛠 Stack Técnica (Mandatória)

Para garantir os princípios de performance e portabilidade:

*   **Framework:** [Astro](https://astro.build/) (Static Site Generator - SSG)
*   **Componentes:** React (Apenas como [Astro Islands](https://docs.astro.build/en/concepts/islands/))
*   **Estilização:** Tailwind CSS
*   **Conteúdo:** Markdown/MDX (via Astro Content Collections)
*   **Linguagem:** TypeScript (Strict Mode)
*   **Deploy:** Estático (Cloudflare Pages / Vercel / Coolify)

---

## 📁 Estrutura do Projeto

Seguimos uma estrutura rigorosa para facilitar a escalabilidade e manutenção:

```text
/
├── public/              # Assets estáticos (imagens fixas, robots.txt, favicons)
├── src/
│   ├── content/         # Markdown/MDX + assets (Content Collections validadas por Zod)
│   ├── data/            # JSON/TS exports (dados estáticos e configurações)
│   ├── pages/           # Rotas do site (Static File-based Routing)
│   ├── layouts/         # Estrutura base e SEO (layouts "finos")
│   ├── components/
│   │   ├── ui/          # Componentes .astro puros (zero client-side JS)
│   │   └── islands/     # Componentes React interativos (islands de interatividade)
│   ├── styles/          # Design tokens e CSS global (Tailwind)
│   ├── lib/             # Helpers puros e utilitários agnósticos
│   └── lib/routes.ts    # Gerenciador centralizado de rotas
├── astro.config.mjs     # Configuração núcleo do Astro
└── tailwind.config.mjs  # Tokens de design do Tailwind
```

---

## 🚀 Guia de Desenvolvimento

### Requisitos
- Node.js (Versão LTS recomendada)
- npm ou pnpm

### Rodando Localmente
1.  **Instale as dependências:**
    ```bash
    npm install
    ```
2.  **Inicie o ambiente de desenvolvimento:**
    ```bash
    npm run dev
    ```
3.  **Acesse:** `http://localhost:4321`

### Build para Produção
```bash
npm run build
npm run preview
```

---

## 📝 Boas Práticas (Regras de Ouro)

1.  **Static First:** Se pode ser estático, *deve* ser estático. Zero runtime server.
2.  **Performance:** Imagens devem usar o componente `<Image />` do Astro. Lighthouse 95+ é o alvo.
3.  **SEO:** Cada página deve possuir Title, Description e Canonical URL únicos.
4.  **Islands:** Use componentes React (`islands/`) apenas para interatividade real. Prefira `client:visible`.
5.  **Git Workflow:** Nunca commit na `main`. Use branches por feature e squash commits.

---

## 🗺 Planejamento e Roadmap

O acompanhamento detalhado das fases de desenvolvimento, tarefas pendentes e status do projeto pode ser encontrado no arquivo [plan.md](./plan.md).
