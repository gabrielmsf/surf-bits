# Arquitetura e Migração

Este documento define as regras arquiteturais para garantir portabilidade (anti lock-in) e estabilidade do projeto Surf Bits.

## 1. Estrutura de URLs (Rule A2)

Para garantir estabilidade independentemente da estrutura de arquivos, as URLs dos posts (spots) seguem estritamente este padrão:

`/[lang]/[country]/[region]/[slug]`

- **lang**: Código ISO do idioma (pt, en, es).
- **country**: Código ISO do país (br, us, au).
- **region**: Identificador da região (ex: `sao-paulo-sao-sebastiao`).
- **slug**: Identificador único do post, definido EXPLICITAMENTE no frontmatter (campo `url_slug`).

### Regra de Ouro:
A URL **NUNCA** deve depender do nome do arquivo físico. O campo `url_slug` no frontmatter é a fonte da verdade.

## 2. Frontmatter e Conteúdo (Rule A1, A3)

Todo conteúdo deve ser agnóstico de framework.

### Campos Obrigatórios (Frontmatter):
- `name`: Título do post/spot.
- `url_slug`: Identificador único para a URL (imutável).
  - *Nota: Usamos `url_slug` em vez de `slug` para evitar conflitos internos com o Astro.*
- `date`: Data de publicação/criação (ISO 8601).
- `description`: Meta description.
- `tags`: Array de strings.
- `draft`: Boolean (opcional, default `false`).

### Markdown Puro:
- Use Markdown padrão.
- Evite componentes `.astro` ou React dentro do corpo do conteúdo se possível.
- Se usar MDX, mantenha os componentes importados neutros.

## 3. Separação de Responsabilidades (Rule A4)

- **Conteúdo**: `src/content/spots` (apenas dados/texto).
- **Apresentação**: `src/pages`, `src/layouts`, `src/components`.
- **Lógica de Build**: `src/lib` e integrações.

## 4. Migração Futura

Para migrar para outro SSG (Next.js, Hugo, Eleventy):
1. Copie a pasta `src/content`.
2. O Frontmatter padronizado garantirá que metadados sejam preservados.
3. A lógica de URL `/[lang]/[country]/[region]/[url_slug]` deve ser re-implementada no roteador do novo framework.
