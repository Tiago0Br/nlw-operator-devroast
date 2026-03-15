# UI Components — Padrões de criação

## Estrutura do componente

Cada componente segue o seguinte padrão:

```tsx
import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const component = tv({ ... })

type ComponentProps = ComponentProps<'elemento-html'> & VariantProps<typeof component>

export function Component({ ...props }: ComponentProps) { ... }
```

## Regras

### Exports
- Sempre utilizar **named exports** (`export function`, nunca `export default`)

### Tipagem
- Sempre estender as props nativas do elemento HTML subjacente via `ComponentProps<'elemento'>` do React
- Combinar com `VariantProps<typeof variante>` para tipagem automática das variantes

### Variantes
- Utilizar `tailwind-variants` (`tv()`) para definir variantes e estilos base
- Passar `className` diretamente na chamada da variante: `tv({ variant, size, className })` — não usar `twMerge` separado
- Definir `defaultVariants` para todos os eixos de variação

### Estilização
- Utilizar Tailwind CSS v4 com classes utilitárias
- Cores do design system referenciadas via valores hexadecimais diretos (ex: `bg-[#10B981]`) até que variáveis CSS globais sejam configuradas
- Estados interativos obrigatórios: `hover:`, `active:`, `disabled:`, `focus-visible:`

### Fontes
- `font-mono` → JetBrains Mono (fonte principal, UI e código)
- `font-sans` → IBM Plex Mono (fonte secundária)

## Variantes disponíveis por componente

### Button (`button.tsx`)

| Prop | Valores | Padrão |
|------|---------|--------|
| `variant` | `primary` \| `secondary` \| `ghost` | `primary` |
| `size` | `sm` \| `md` \| `lg` | `md` |

- **primary** — fundo `#10B981` (accent-green), texto escuro. Ação principal da tela.
- **secondary** — sem fundo, borda `#2A2A2A`, texto `#FAFAFA`. Ações secundárias.
- **ghost** — sem fundo, borda sutil, texto `#6B7280`. Ações terciárias e links.
