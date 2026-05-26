# Task 05 - Strapi Mapping

Status: proposed

## Goal

Map the approved React content shape to Strapi without changing the approved page design.

## Scope

- Define Strapi component mapping
- Prepare seed/content migration plan
- Keep local React content fallback
- Use Strapi 5 MCP first for inspection and mapping
- Use Strapi CLI for validation
- Use `build-v1/strapi-forge-summary.md` as compact expert context

## Files

- `build-v1/content/**`
- `build-v1/generated/**`
- `build-v1/strapi-forge-summary.md`
- `strapi/src/api/**` only after schema approval
- `next/content/indigo-website.ts`

## Validation

Only if Strapi schema changes happen:

```bash
yarn check:strapi
yarn --cwd strapi strapi --help
```

## Approval Gate

Stakeholder approves CMS field mapping before schema changes.
