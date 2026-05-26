---
name: indigo-strapi-standards
description: "Strapi schema standards, dynamic-zone modeling, populate middleware discipline, and validation workflow for Indigo Studio. Use when changing `strapi/src/api/**`, `strapi/src/components/**`, generated Strapi types, page assembly contracts, or when deciding how a new CMS-backed block should be modeled, localized, related, or validated."
---

# Indigo Strapi Standards

Use this skill to keep Strapi work small, durable, and compatible with the current Next + Strapi setup.

## Workflow

1. Read the current schema and the exact consuming frontend path before proposing changes.
2. Prefer the smallest schema delta that satisfies the task.
3. Extend an existing component or dynamic-zone contract before creating a new top-level type.
4. Keep editorial structure explicit. Do not hide business logic in content modeling.
5. Update the populate layer and consuming code together.
6. Run the cheapest useful validation before widening scope.

## Modeling Rules

- Prefer repeatable components for repeated structured content inside a section.
- Prefer relations only when the content has standalone lifecycle, reuse, or cross-page meaning.
- Prefer one dynamic-zone block per section-level concept.
- Do not create near-duplicate components with only cosmetic differences.
- Localize only fields that truly need localization.
- Keep naming plain and consistent with existing Strapi conventions in this repo.

## Integration Rules

- Inspect these paths first when relevant:
  - `strapi/src/api/**/content-types/**/schema.json`
  - `strapi/src/components/**/*.json`
  - `strapi/src/api/**/middlewares/*populate.ts`
  - `next/components/dynamic-zone/**`
  - `next/types/strapi.ts`
- If a block is page-level, check whether it belongs in the `page` dynamic zone before inventing another content type.
- If a change affects page rendering, identify the exact Next component that consumes it.

## Validation

- For schema changes: verify JSON shape and affected populate middleware.
- For cross-stack changes: verify the frontend contract still matches the modeled data.
- Prefer a startup or smoke validation after meaningful Strapi changes.
- State migrations, content backfill, and editorial risks explicitly.

## Stop Conditions

Stop and escalate when:

- the schema change would duplicate an existing concept
- a relation/component boundary is unclear
- localization strategy is inconsistent
- the frontend consumer is unknown

## References

Read only when needed:

- `references/repo-map.md`
- `references/future-todos.md`
