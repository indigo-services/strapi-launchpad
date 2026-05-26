# Repo Map

Use these paths as the default Strapi change surface in Indigo Studio.

## Core backend paths

- `strapi/src/api/page/content-types/page/schema.json`
- `strapi/src/api/page/middlewares/page-populate.ts`
- `strapi/src/components/dynamic-zone/*.json`
- `strapi/src/components/shared/*.json`
- `strapi/types/generated/*.d.ts`

## Core frontend paths

- `next/app/[locale]/(marketing)/page.tsx`
- `next/lib/shared/PageContent.tsx`
- `next/components/dynamic-zone/manager.tsx`
- `next/components/dynamic-zone/**`

## Current modeling shape

- homepage assembly is page-driven and CMS-backed
- section rendering is centered on the dynamic-zone manager
- populate middleware is a critical contract, not an optional afterthought

## Default validation mindset

- inspect current schema first
- inspect current consumer second
- change the smallest possible surface
- keep frontend and populate contract aligned
