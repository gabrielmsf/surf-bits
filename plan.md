# 🗺 Roadmap de Implementação - Surf Bits

Este documento serve como a fonte da verdade para o progresso do desenvolvimento do portal Surf Bits.

---

## 📈 Estratégia de Evolução

O crescimento do projeto é dividido em 3 fases principais, focadas em ROI rápido e SEO:

1.  **FASE 1 — Surf Bits Deals (MVP):** Foco em conversão imediata. Curadoria de ofertas e guias de compra fundamentais (ex: *"Melhor prancha para iniciantes"*). Alvo: 5 a 8 páginas estrategicamente otimizadas.
2.  **FASE 2 — Reviews e Comparativos:** Expansão técnica. Avaliações detalhadas de equipamentos e ferramentas de comparação, validadas por dados de cliques da Fase 1.
3.  **FASE 3 — Conteúdo Editorial & Lifestyle:** Expansão de autoridade. Guias de picos, cultura surf e lifestyle para aumentar o tempo de permanência e autoridade do domínio.

---

## 🛠 Status das Tarefas

### Setup Inicial (Concluído ✅)
- [x] Inicializar projeto Astro com TypeScript (Strict Mode).
- [x] Configurar integração com **React** (para islands interativas) e **Tailwind CSS 4**.
- [x] Implementar estrutura de pastas conforme as *Regras de Sites Estáticos*.
- [x] Criar `BaseLayout.astro` com suporte a metadados SEO (OpenGraph, Twitter).
- [x] Criar `src/lib/routes.ts` para gerenciamento centralizado de URLs.
- [x] Desenvolver landing page "Em Breve" para validação de deploy.

### Arquitetura Global & i18n
- [ ] Definir estratégia de roteamento para idiomas e regiões (Ex: `/br/pt`, `/us/en`).
- [ ] Implementar utilitários de i18n (dicionários de tradução para UI).
- [ ] Criar Página Inicial (Diretório) listando as regiões disponíveis (BR, US, AU).
- [ ] Configurar Landing Pages específicas para cada país (BR, US, AU).

### Infraestrutura & Deploy
- [x] Criar `robots.txt` permitindo acesso total.
- [ ] Implementar `sitemap-index.xml` (Astro Sitemap integration).
- [ ] Realizar o primeiro deploy no **Coolify**.
- [ ] Configurar domínios e certificados SSL para `surf-bits.com`.

### Desenvolvimento da Fase 1 (MVP)
- [ ] Definir Schema Zod para as `Content Collections` (Deals e Reviews).
- [ ] Desenvolver Componente `ProductCard` focado em conversão e Affiliate CTAs.
- [ ] Implementar sistema de filtragem/tags para ofertas (opcional para MVP).
- [ ] Mapear e produzir o conteúdo das 5 páginas core de equipamentos.
- [ ] Integrar scripts de Analytics (GA/Plausible) conforme regras de performance.

### Qualidade e SEO
- [ ] Auditar Core Web Vitals (Meta: Score 100/100).
- [ ] Validar conformidade Schema.org (Product/Review).
- [ ] Validar se todos os componentes React são `islands` identificáveis e usam `client:visible`.

---

© 2025 Surf Bits - Surf Hard, Shop Smart.
