# AGENTS.md — Dev Roast

Guidelines for agentic coding agents operating in this repository.

---

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript 5 (strict mode)
- **Styling:** Tailwind CSS v4 + `tailwind-variants`
- **UI primitives:** `@base-ui/react` (headless)
- **Syntax highlighting:** `shiki` (Server Components only)
- **Linter/Formatter:** Biome 2
- **Package manager:** pnpm

---

## Commands

```bash
pnpm dev        # start dev server (Turbopack)
pnpm build      # production build + TypeScript check
pnpm lint       # biome lint (no auto-fix)
pnpm format     # biome format --write
pnpm check      # biome check --write (lint + format, auto-fix)
```

There is **no test suite** in this project. TypeScript type-checking is run as
part of `pnpm build` (Next.js runs `tsc --noEmit` internally). To type-check
without a full build:

```bash
pnpm exec tsc --noEmit
```

---

## Project Structure

```
src/
  app/
    layout.tsx              # Root layout — font vars, lang="pt-BR"
    globals.css             # @theme design tokens (Tailwind v4)
    page.tsx                # Home page
    components/
      page.tsx              # Visual playground at /components route
  components/
    ui/
      AGENTS.md             # Component-specific authoring rules (read this too)
      badge.tsx
      button.tsx
      code-block.tsx
      diff-line.tsx
      toggle.tsx
```

---

## Code Style

### Formatting (enforced by Biome)

- **Indent:** 2 spaces
- **Quotes:** single (`'`) in JS/TS; double (`"`) in JSX attributes
- **Semicolons:** omitted (`asNeeded`)
- **Trailing commas:** none
- **Arrow parens:** omitted when single arg (`asNeeded`)
- **Line width:** 80 characters
- **Line endings:** LF

Biome auto-formats on save (configured in `.vscode/settings.json`) and via
`pnpm check`. Always run `pnpm check` before committing.

### Imports

- Use **named imports** only — no default imports from local modules
- Import types with `import type { ... }` (not `import { type ... }`)
- Path alias `@/` maps to `src/` — use it for all non-relative imports
- Biome organizes imports automatically on save; respect its ordering

```ts
// Correct
import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { Button } from '@/components/ui/button'

// Wrong
import React from 'react'
import Button from '@/components/ui/button'
```

### TypeScript

- Strict mode is enabled — no implicit `any`, no non-null assertion shortcuts
- Always define prop types explicitly; prefer extending native HTML element
  props via `ComponentProps<'element'>` from React
- Combine with `VariantProps<typeof tv(...)>` for variant typing
- Use `type` aliases, not `interface`, for component prop types
- Avoid `as` casts unless genuinely necessary; prefer type narrowing

### Naming Conventions

- **Files:** `kebab-case.tsx` (e.g. `code-block.tsx`, `diff-line.tsx`)
- **Components:** `PascalCase` function names (e.g. `export function CodeBlock`)
- **`tv()` instances:** `camelCase`, named after the component
  (e.g. `const button = tv(...)`, `const diffLine = tv(...)`)
- **CSS variables:** `kebab-case` matching design token names
  (e.g. `--color-bg-page`, `--color-accent-green`)

---

## Component Authoring Rules

> See also: `src/components/ui/AGENTS.md` for the authoritative component spec.

### Anatomy

Every UI component follows this template:

```tsx
import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const component = tv({ base: '...', variants: { ... }, defaultVariants: { ... } })

type ComponentProps = ComponentProps<'div'> & VariantProps<typeof component>

export function Component({ variant, className, ...props }: ComponentProps) {
  return <div className={component({ variant, className })} {...props} />
}
```

- **Named exports only** — never `export default`
- **`defaultVariants`** must be defined for every variant axis
- For multi-part components use `slots` inside `tv()`
- Pass `className` directly into the `tv()` call — do not use `twMerge` separately
- When slots are used, merge the external `className` into the root slot:
  `root({ class: className })`

### Server vs. Client Components

- Components are **Server Components by default** (no directive needed)
- Add `'use client'` **only** when the component requires:
  - Browser event handlers (`onClick`, `onChange`, etc.)
  - React state or effects (`useState`, `useEffect`)
  - A `@base-ui/react` interactive primitive
- `shiki` calls (`codeToHtml`, `codeToTokens`) must remain in Server Components
  — they are `async` and cannot run on the client

### Interactive States (required for interactive components)

All interactive components must handle: `hover:`, `active:`, `disabled:`,
`focus-visible:`. Use `@base-ui/react` data-attributes for headless state:
`data-[checked]:`, `data-[unchecked]:`, `data-[open]:`, etc.

---

## Design Tokens

Tokens are defined in `src/app/globals.css` under `@theme` and consumed as
Tailwind utility classes (e.g. `bg-bg-page`, `text-accent-green`).

| Token group    | Examples                                              |
| -------------- | ----------------------------------------------------- |
| Backgrounds    | `bg-page`, `bg-surface`, `bg-elevated`, `bg-input`    |
| Borders        | `border-primary`, `border-hover`, `border-focus`      |
| Text           | `text-primary`, `text-secondary`, `text-tertiary`     |
| Accents        | `accent-green`, `accent-red`, `accent-amber`, `accent-cyan` |
| Syntax (shiki) | handled by shiki themes — not exposed as CSS vars     |

### Fonts

- `font-mono` → JetBrains Mono (primary — UI, code, labels)
- `font-sans` → IBM Plex Mono (secondary — descriptions, prose)

Both are loaded via `next/font/google` in `src/app/layout.tsx` and injected as
CSS variables `--font-jetbrains-mono` and `--font-ibm-plex-mono`.

---

## Adding a New Component

1. Create `src/components/ui/<name>.kebab.tsx`
2. Follow the component template above
3. Add `'use client'` only if truly needed
4. Export a named function — never a default export
5. Register the component in `src/app/components/page.tsx` under a new
   `<section>` with the heading `// component_name` in green (`text-accent-green`)
6. Run `pnpm check` to lint and format before committing

---

## Biome Suppression Comments

When a Biome rule must be suppressed (e.g. `dangerouslySetInnerHTML` from
shiki, or array index keys for positional lists), use inline suppression with a
justification comment:

```tsx
// biome-ignore lint/security/noDangerouslySetInnerHtml: trusted output from shiki
dangerouslySetInnerHTML={{ __html: html }}

// biome-ignore lint/suspicious/noArrayIndexKey: line numbers are positional by nature
key={i}
```

Never suppress `recommended` rules globally in `biome.json`.
