# DevRoast

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

> Cole seu código. Receba um roast.

**DevRoast** é uma aplicação web que analisa trechos de código e devolve uma avaliação com nota de 0 a 10 — em modo sério (feedback técnico direto) ou em modo roast (crítica honesta e sarcástica). O objetivo é tornar a revisão de código mais divertida e expor os piores exemplos da internet no Hall da Vergonha.

---

## Sobre o projeto

O DevRoast foi desenvolvido durante a **NLW (Next Level Week)** da Rocketseat. A ideia central é simples: você cola um trecho de código, escolhe o modo de análise e a IA te devolve uma avaliação detalhada com pontos de melhoria — ou uma sequência de críticas impiedosas dependendo do quanto você ativou o roast mode.

Os resultados mais vergonhosos ficam no **Shame Leaderboard**, um ranking público dos códigos com as piores notas já submetidos.

---

## Tech stack

| Tecnologia | Uso |
|---|---|
| [Next.js 16](https://nextjs.org) (App Router + Turbopack) | Framework principal |
| [TypeScript 5](https://www.typescriptlang.org) (strict) | Linguagem |
| [Tailwind CSS v4](https://tailwindcss.com) | Estilização |
| [tailwind-variants](https://www.tailwind-variants.org) | Variantes de componentes |
| [@base-ui/react](https://base-ui.com) | Primitivos de UI headless |
| [Shiki](https://shiki.style) | Syntax highlighting |
| [Biome 2](https://biomejs.dev) | Linter e formatter |
| [pnpm](https://pnpm.io) | Gerenciador de pacotes |

---

## Como rodar localmente

**Pré-requisitos:** Node.js 20+ e pnpm 9+

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/nlw-operator-devroast.git
cd nlw-operator-devroast

# 2. Instale as dependências
pnpm install

# 3. Inicie o servidor de desenvolvimento
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Outros comandos disponíveis

```bash
pnpm build    # build de produção + checagem de tipos
pnpm lint     # lint com Biome (sem auto-correção)
pnpm check    # lint + format com auto-correção (Biome)
```

---

## Estrutura do projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz — fontes, Navbar, cor de fundo global
│   ├── globals.css         # Design tokens (@theme Tailwind v4)
│   ├── page.tsx            # Página inicial — editor de código e leaderboard preview
│   └── components/
│       └── page.tsx        # Playground de componentes (/components)
└── components/
    ├── navbar.tsx           # Cabeçalho global da aplicação
    └── ui/
        ├── badge.tsx        # Badge de severidade (critical, warning, good)
        ├── button.tsx       # Botão com variantes (primary, secondary, ghost)
        ├── card.tsx         # Card de issue do roast
        ├── code-block.tsx   # Bloco de código com syntax highlighting (Shiki)
        ├── diff-line.tsx    # Linha de diff (added, removed, context)
        ├── score-ring.tsx   # Anel de score animado (0–10)
        ├── table-row.tsx    # Linha do leaderboard
        └── toggle.tsx       # Toggle switch (roast mode)
```

---

## Roadmap

- [x] Design system — componentes UI base
- [x] Página inicial com layout estático
- [ ] Editor de código interativo (input do usuário)
- [ ] Integração com IA para análise e geração do roast
- [ ] Página de resultados com score, cards de issues e diff
- [ ] Shame Leaderboard — ranking público dos piores códigos

