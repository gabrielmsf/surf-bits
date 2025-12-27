# 🗺 Roadmap de Implementação - Surf Bits

Este documento serve como a fonte da verdade para o progresso do desenvolvimento do portal Surf Bits.

---

## 📈 Estratégia de Evolução

O crescimento do projeto é dividido em 3 fases principais, focadas em ROI rápido e SEO:

1.  **FASE 1 — Surf Spots Discovery:** Foco em atrair tráfego orgânico e construir autoridade. Mapeamento extensivo de picos de surf (50+ locais) para gerar volume de visitantes antes da monetização.
2.  **FASE 2 — Surf Bits Deals (MVP):** Introdução da monetização. Curadoria de ofertas e guias de compra fundamentais (ex: *"Melhor prancha para iniciantes"*).
3.  **FASE 3 — Reviews e Comparativos:** Expansão técnica. Avaliações detalhadas de equipamentos e ferramentas de comparação, validadas por dados de cliques da Fase 2.

---

## 🛠 Status das Tarefas

### Setup Inicial (Concluído ✅)
- [x] Inicializar projeto Astro com TypeScript (Strict Mode).
- [x] Configurar integração com **React** (para islands interativas) e **Tailwind CSS 4**.
- [x] Implementar estrutura de pastas conforme as *Regras de Sites Estáticos*.
- [x] Criar `BaseLayout.astro` com suporte a metadados SEO (OpenGraph, Twitter).
- [x] Criar `src/lib/routes.ts` para gerenciamento centralizado de URLs.
- [x] Desenvolver landing page "Em Breve" para validação de deploy.

### Arquitetura Global & i18n (Concluído ✅)
- [x] Definir estratégia de roteamento para idiomas e regiões (Ex: `/[lang]/[country]`).
- [x] Implementar utilitários de i18n (dicionários de tradução para UI).
- [x] Criar Página Inicial (Diretório) listando as regiões disponíveis (BR, US, AU).
- [x] Configurar Landing Pages específicas para cada país (BR, US, AU) usando rota dinâmica.

### Infraestrutura & Deploy
- [x] Criar `robots.txt` permitindo acesso total.
- [x] Implementar `sitemap-index.xml` (Astro Sitemap integration).
- [ ] Realizar o primeiro deploy no **Coolify**.
- [ ] Configurar domínios e certificados SSL para `surf-bits.com`.

### Desenvolvimento da Fase 1 (Spots Discovery)
- [ ] Produzir conteúdo para 50 locais de surf (Meta Inicial).
- [ ] Validar apresentação visual das páginas de Spots.
- [ ] Integrar scripts de Analytics (GA/Plausible) para monitoramento de tráfego.

### Desenvolvimento da Fase 2 (Deals - MVP)
- [ ] Definir Schema Zod para as `Content Collections` (Deals).
- [ ] Desenvolver Componente `ProductCard` focado em conversão e Affiliate CTAs.
- [ ] Implementar sistema de filtragem/tags para ofertas (opcional para MVP).
- [ ] Mapear e produzir o conteúdo das 5 páginas core de equipamentos.

### Qualidade e SEO
- [ ] Auditar Core Web Vitals (Meta: Score 100/100).
- [ ] Validar conformidade Schema.org (Product/Review/Place).
- [ ] Validar se todos os componentes React são `islands` identificáveis e usam `client:visible`.

---

© 2025 Surf Bits - Surf Hard, Shop Smart.
