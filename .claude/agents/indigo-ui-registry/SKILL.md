---
name: indigo-ui-registry
description: "shadcn component selection, FOSS component hunting, visual registry growth, and reusable module preparation for Indigo Studio. Use when matching a design/spec/image to UI building blocks, choosing between existing components and external FOSS components, preparing components for Storybook or registry capture, or planning how a UI block should evolve into a reusable Strapi-backed module."
---

# Indigo UI Registry

Use this skill to choose components for maintainability first, not novelty first.

## Workflow

1. Start with the spec, screenshot, or block requirement.
2. Check whether the repo already has the component or primitive needed.
3. Check shadcn-compatible composition before introducing a new dependency.
4. Hunt FOSS components only when the existing stack cannot meet the need cleanly.
5. Wrap external components behind Indigo-owned interfaces.
6. Record future registry or Storybook follow-up instead of forcing premature infrastructure.

## Selection Rules

- Prefer existing project components first.
- Prefer `components/ui` primitives and `components.json` conventions second.
- Prefer thin wrappers around external components over deep forks.
- Reject components that look clever but create long-term maintenance drag.
- Favor accessibility, composability, and predictable styling over visual gimmicks.

## FOSS Component Hunting Rules

When matching a spec/design:

- identify the actual primitive need first: accordion, tabs, pricing grid, marquee, comparison slider, estimator, etc.
- separate must-have behavior from decorative flair
- choose the smallest dependency that satisfies the must-have behavior
- note portability risk, license risk, and style override risk

## Registry Rules

- Treat Indigo-owned wrappers as the real product surface.
- Keep a component registry mindset even if Storybook is not live yet.
- For reusable blocks, capture:
  - purpose
  - primitives used
  - external dependencies
  - visual proof path
  - future Strapi field candidates

## Storybook And Visual Registry Rules

- Do not force Storybook setup in a task that only needs a component delivered.
- If Storybook or a visual registry is missing, leave a next-step note instead of blocking delivery.
- When a component is clearly reusable, structure it so a future story or registry entry is easy to add.

## Strapi Readiness Rules

When a UI block is likely to become a CMS-backed module:

- separate content from display logic
- identify repeatable items early
- avoid baking editorial content into animation or layout code
- note likely Strapi fields, but do not over-model before approval

## References

Read only when needed:

- `references/current-state.md`
- `references/future-todos.md`
