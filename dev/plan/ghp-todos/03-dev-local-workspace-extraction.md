# GHP Todo - Dev Local Workspace Extraction

Title:
`Base template: extract /dev into a local workspace sync boundary`

Labels:
`foundation`, `base-template`, `cleanup`, `dev-workspace`

Branch:
`codex/base-template-dev-workspace`

Worktree:
`C:\Users\jaden.black\dev\clients\indigo\repos\.worktrees\strapi-launchpad-dev-workspace`

## Goal

Make the repository `dev/` material its own local development workspace boundary so `main` can stay clean while research assets, generated docs, local data, and agent/tooling experiments remain recoverable and intentionally synced.

## Decision To Make

Pick one durable model before opening a PR:

- Local-only workspace: keep `dev/` ignored in the base template and document how local agents use it.
- Feature-flagged sync: keep selected `dev/plan/**`, `dev/templates/**`, or `dev/agents/**` files behind an explicit repo setting or setup step.
- Submodule/user-repo sync: replace `dev/` with a submodule that points to a separate user or org repository for local workspace assets.

## Scope

- Preserve all current `dev/**` content in a dedicated worktree.
- Classify each `dev/**` path as base-template, local-only, generated, archived, or submodule candidate.
- Remove broad `dev/**` noise from `main` after preservation.
- Keep config/tooling and onboarding branches independent.

## Primary Files To Claim

- `dev/**`

## Secondary Files To Claim Only If Needed

- `.gitignore`
- `.gitmodules`
- setup or sync scripts for a future `dev` submodule or local workspace
- docs explaining the selected `/dev` model

## Do Not Claim

- `.ghp/**`
- `.mcp.json`
- `.codex/**`
- `.vscode/**`
- `.agents/**`
- `.claude/**`
- `package.json`
- `yarn.lock`
- `next/**`
- `strapi/**`

## Implementation Notes

- Do not commit generated Storybook output to the base template by default.
- Do not commit local database dumps, downloaded zip archives, or large generated docs unless intentionally archived.
- A Git worktree cannot be mounted as the tracked `/dev` directory of the same repository; use a sibling worktree now, then choose ignore, sync, or submodule as the durable model.
- If choosing submodule, create or identify the target user/org repo before replacing `dev/`.

## Validation

```bash
git status --short --branch
git ls-files --others --exclude-standard dev
git worktree list
```

Optional review:

```bash
git ls-files --others --exclude-standard dev | Measure-Object
```

## Acceptance

- The dedicated dev workspace worktree preserves all current `dev/**` files.
- `main` no longer carries unreviewed `dev/**` noise.
- The selected `/dev` model is documented before any PR is opened.
- Config/tooling and onboarding branches do not absorb broad `dev/**` content.

## Rollback

Recover any needed `dev/**` file from the dev workspace worktree before discarding or ignoring it in `main`.
