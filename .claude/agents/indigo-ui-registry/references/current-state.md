# Current State

Use these current repo facts when making component decisions.

## UI baseline

- `next/components.json` shows a shadcn-style setup
- aliases:
  - `@/components`
  - `@/components/ui`
  - `@/lib/utils`
- current frontend stack is Next.js with Tailwind

## Decision order

1. existing `next/components/**`
2. existing `next/components/ui/**`
3. shadcn-compatible composition
4. narrowly chosen FOSS dependency

## Avoid

- introducing broad UI kits for one component
- copying large external component systems wholesale
- deep forking when a thin wrapper would work
