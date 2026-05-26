# Task 00 - First PR System Test

Status: proposed
PR size: tiny
Risk: low

## Goal

Prove the v1 workflow works before touching the website UI by correcting the planning source of truth with verified business information from `indigoservices-tx.com`.

## Scope

- Add `build-v1` workspace
- Add specialty-agent packets
- Add approvable task list
- Add stakeholder-safe scope in `build-v1/plan/`
- Update release plan to use BrowserOS MCP as the browser QA authority
- Document Strapi 5 MCP, Strapi CLI, and Storybook as tool priorities without starting that work
- Add old-site source facts for phone, email, business identity, services, and verification-needed claims

## Files

- `build-v1/**`
- `build/plan/release-website-1.0.0_draft.md` if force-added or kept as local reference

## Do Not Touch

- `next/**`
- `strapi/**`
- production deployment config
- generated image assets
- Strapi schemas
- Storybook setup

## Tools

- `rg`
- `Get-Content -Raw`
- `yarn prettier build-v1/**/*.md build/plan/release-website-1.0.0_draft.md --check`
- source review of `https://indigoservices-tx.com/`

Browser tools:

- none required for this PR

## Validation

```bash
yarn prettier build-v1/**/*.md build/plan/release-website-1.0.0_draft.md --check
```

## Done Means

- `build-v1` exists
- stakeholder scope exists under `build-v1/plan/`
- `build-v1/content/indigoservices-source-facts.md` exists
- source facts identify corrected phone, email, business identity, service categories, and claims requiring verification
- tasks are approvable one by one
- BrowserOS MCP rule is written down
- Strapi 5 MCP and Strapi CLI are identified for later CMS work
- Storybook is explicitly deferred
- no app code changed

## PR Description

Title:
`docs: add build-v1 workflow scaffold`

Summary:

- Creates isolated `build-v1` planning workspace
- Adds specialty-agent packets
- Adds first approvable task list
- Adds old-site source facts from `indigoservices-tx.com`
- Documents BrowserOS MCP as the browser QA tool for the v1 website slice
- Documents Strapi 5 MCP/CLI and defers Storybook until useful

Validation:

- `yarn prettier build-v1/**/*.md build/plan/release-website-1.0.0_draft.md --check`

Rollback:

- Revert the docs-only PR.
