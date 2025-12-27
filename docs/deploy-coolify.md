# Deploy no Coolify

Este projeto usa **Astro** (SSG) e é otimizado para deploy no Coolify usando **Nixpacks**.

## Configuração de Build

O arquivo `nixpacks.toml` na raiz define o ambiente:

```toml
[phases.setup]
nixPkgs = ["nodejs_20"]

[phases.install]
cmds = ["npm install --legacy-peer-deps"]

[phases.build]
cmds = ["npm run build"]

[start]
cmd = "npx serve dist -s -l 3000"
```

### Comandos
- **Build**: `npm run build` (Gera arquivos estáticos em `dist/`)
- **Start**: `npx serve dist` (Servidor estático leve)

## Mitigação de OOM (Out Of Memory) (Rule B5)

Para builds com milhares de páginas, o Node.js pode exceder o limite de memória padrão.

Se o build falhar com erro de memória, configure a variável de ambiente no Coolify:

```bash
NODE_OPTIONS="--max-old-space-size=4096"
```

Ajuste o valor (4096 = 4GB) conforme a capacidade do servidor.

## Verificações de Build (Rule C1, C2)

O build inclui um check automático (`src/lib/build-metrics.ts`) que:
1. Conta o número de páginas geradas.
2. Emite **WARNING** se > 10.000 páginas.
3. **FALHA** o build se > 20.000 páginas (Guardrail de escalabilidade).

Esses limites podem ser ajustados via ENV:
- `MAX_PAGES_WARNING`
- `MAX_PAGES_FAIL`
