# Guia de Estilo de Conteúdo

Novos posts (spots) devem seguir estritamente este padrão para garantir compatibilidade e indexação correta.

## Localização
Arquivos devem ser criados em: `src/content/spots/[country]/[lang]/[slug].md`

## Frontmatter Obrigatório

```yaml
---
name: "Nome do Spot"
url_slug: "nome-do-spot-slug"  # DEVE ser kebab-case e fixo
date: 2025-01-01               # Data de criação
description: "Descrição curta para SEO e cards."
tags: ["surf", "reef-break"]
draft: false                   # Se true, não aparece em prod (dependendo da lógica)
country: "br"                  # br, us, au
region: "regiao-slug"          # ex: sao-paulo-sao-sebastiao
best_season: "Inverno"
skill_level: "Avançado"
getting_there: "Texto sobre como chegar..."
lat: -23.1234                  # Opcional
lon: -45.1234                  # Opcional
---
```

## Corpo do Texto
- Escreva em Markdown padrão.
- Use h2 (`##`) para seções principais.
- Não use HTML puro a menos que estritamente necessário.

## Imagens
- Imagens da galeria são mapeadas via `src/data/spot_images.json` usando o `url_slug` como chave.
- Não insira tags `<img>` hardcoded no markdown se for parte da galeria padrão.
