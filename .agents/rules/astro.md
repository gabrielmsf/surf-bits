# Regras Astro (Surf Bits)

Estas regras são PERMANENTES e devem ser seguidas em qualquer alteração de código ou conteúdo.

## A. Migração e Portabilidade (Anti Lock-in)

1.  **Frontmatter Padrão**:
    Todo arquivo em `src/content/spots` DEVE ter:
    - `name`: Título do post.
    - `url_slug`: String única para URL (kebab-case). *Evitar usar campo `slug` para não conflitar com Astro.*
    - `date`: Data de criação (ISO 8601).
    - `tags`: Lista de tags (array).
    - `draft`: Boolean.
    - `description`: Resumo.

2.  **URLs Estáveis**:
    - A URL é gerada como `/[lang]/[country]/[region]/[slug]`.
    - O `slug` vem EXCLUSIVAMENTE do frontmatter `url_slug`.
    - O nome do arquivo NÃO deve influenciar a URL final.

3.  **Conteúdo Limpo**:
    - Markdown puro preferencialmente.
    - Zero dependência de componentes `.astro` dentro do corpo do markdown (exceto via MDX provider neutro).

## B. Escalabilidade (High Volume)

1.  **Paginação Obrigatória**:
    - Qualquer listagem de spots (por país, tag, ou região) DEVE ser paginada.
    - Nunca renderizar listas completas (`map` em todos os posts) no client ou em uma única página HTML.

2.  **Build Efficiency**:
    - Evitar lógica complexa dentro de `getStaticPaths`.
    - Computar dados pesados uma vez e reutilizar se possível.

3.  **Deploy no Coolify**:
    - Build deve gerar estáticos (`dist`).
    - Use `NODE_OPTIONS` se observar erros de memória (OOM).

## C. Observabilidade

1.  **Guardrails**:
    - O build falhará se exceder 20.000 páginas (configurável via `MAX_PAGES_FAIL`).
    - Verificar logs de build para warnings de volume.
