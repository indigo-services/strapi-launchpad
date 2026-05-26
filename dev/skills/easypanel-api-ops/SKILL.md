---
name: easypanel-api-ops
description: Use when working on this repo's Easypanel control-plane automation, health checks, service bootstrap, status inspection, cron guidance, or Strapi/Next deployment recommendations. Prefer the local easypanel ops scripts and env templates over ad hoc API calls.
---

# Easypanel API Ops

Use this skill when the task touches Easypanel automation for this repository.

## First steps

1. Read the portable config from `.env.example`, `.env.easypanel.example`, `.env.production`, and `strapi/easypanel.env`.
2. Prefer the local CLI over direct fetch code:
   - `yarn easypanel:doctor`
   - `yarn easypanel:status`
   - `yarn easypanel:health`
   - `yarn easypanel:recommend`
   - `yarn easypanel:cron`
   - `yarn easypanel:bootstrap`
   - `yarn deploy:easypanel:api`
3. Treat `EASYPANEL_API` as canonical. `EASYPANEL-API` is legacy compatibility only.
4. In this repo, assume Next is on Vercel unless the user explicitly says otherwise. Easypanel is primarily the Strapi target.

## API surface

- The configured self-hosted Easypanel URL serves Swagger at `EASYPANEL_API_URL`.
- The real mutation/query surface for this environment is TRPC under `/trpc/*`.
- Do not reintroduce the old REST-style `/projects/:id/services` assumptions in this repo unless you have verified that the target server supports them.

## Expected config

- `EASYPANEL_API_URL=https://vps10.riolabs.ai/api`
- `EASYPANEL_PROJECT_NAME`
- `EASYPANEL_SERVICE_NAME`
- `EASYPANEL_SERVICE_TYPE`
- `EASYPANEL_STRAPI_CONTAINER`
- Optional but recommended:
  - `EASYPANEL_STRAPI_DOMAIN`
  - `EASYPANEL_ADMIN_PATH`

## Strapi-specific guidance

- `strapi/easypanel.env` is the base Strapi runtime template for Easypanel.
- `ADMIN_PATH` is only safe to depend on if Strapi config actually reads it.
- If the deployment plan depends on absolute public URLs or reverse proxy behavior, inspect `strapi/config/server.ts` and `strapi/config/admin.ts` before assuming those knobs are wired.
- SQLite is acceptable for lightweight single-instance deployments. Prefer Postgres when scale, concurrency, or backup guarantees become material.

## Scope control

- If the task is just diagnosis, run `doctor`, `status`, `health`, and `recommend` before editing code.
- If the task is service synchronization, prefer `bootstrap` or `deploy:easypanel:api`.
- If the target service is `compose`, prefer syncing `docker-compose.yml` and Strapi env rather than inventing separate Next and Strapi app services.
- If the task expands into domain provisioning, DB provisioning, or non-trivial Strapi config hardening, capture Easypanel-specific overflow in `EASYPANEL_OPS_BACKLOG.md` and cross-provider overflow in `TOOLSET_BACKLOG.md` instead of silently widening the implementation.
