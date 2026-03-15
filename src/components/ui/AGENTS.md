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
- Para componentes com base-ui, usar `ComponentProps<typeof PrimitiveComponent>` como base

### Variantes
- Utilizar `tailwind-variants` (`tv()`) para definir variantes e estilos base
- Passar `className` diretamente na chamada da variante: `tv({ variant, size, className })` — não usar `twMerge` separado
- Definir `defaultVariants` para todos os eixos de variação
- Para componentes com múltiplas partes internas, usar `slots` do `tailwind-variants`

### Comportamento interativo
- Componentes com estado/comportamento devem usar primitivos do **`@base-ui/react`** (headless)
- Adicionar diretiva `'use client'` apenas nos componentes que precisam de interatividade no cliente
- Exemplos: `Switch` para toggle, futuramente `Dialog`, `Select`, `Tooltip`, etc.

### Estilização
- Utilizar Tailwind CSS v4 com classes utilitárias
- Estados interativos via data-attributes do base-ui: `data-[checked]:`, `data-[unchecked]:`, `data-[open]:`, etc.
- Estados interativos obrigatórios: `hover:`, `active:`, `disabled:`, `focus-visible:`
- Cores do design system referenciadas via variáveis CSS definidas no `@theme` do `globals.css`

### Fontes
- `font-mono` → JetBrains Mono (fonte principal, UI e código)
- `font-sans` → IBM Plex Mono (fonte secundária, descrições)
