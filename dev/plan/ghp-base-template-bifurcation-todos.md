# GHP Todo Pack - Base Template Bifurcation

Purpose:
Split the current dirty `main` work into two low-risk GHP worktrees that can each commit independently toward a reusable base template.

Working rule:
Do not start either worktree by copying the whole dirty tree. Each worktree should claim only the files listed in its issue, then leave everything else untouched.

Current source branch:
`main`

Recommended parent label set:

- `foundation`
- `base-template`
- `ghp`
- `strapi`

## Todo 1 - Config And Tooling Base Template

Title:
`Base template: isolate config, GHP, MCP, Strapi validation, and repo-local skills`

Goal:
Create the reusable configuration baseline for the Strapi LaunchPad-derived base template without changing application screens, content models, or onboarding UX.

Why this is separate:
This work changes package metadata, MCP wiring, validation commands, local skills, and project-level automation. Keeping it separate makes review low risk because it can be validated through command output instead of visual QA.

Branch suggestion:
`codex/base-template-config-tooling`

Primary files to claim:

- `.ghp/config.json`
- `.mcp.json`
- `.codex/config.toml`
- `.agents/skills/strapi5/**`
- `.claude/**`
- `.yarnrc.yml`
- `.prettierrc`
- `.prettierignore`
- `.gitignore`
- `package.json`
- `yarn.lock`
- `skills-lock.json`
- `strapi-launchpad.code-workspace`
- `scripts/copy-env.mts`

Secondary files to claim only if the diff is clearly config-only:

- `.github/ISSUE_TEMPLATE/content.md`
- `.github/ISSUE_TEMPLATE/feature.md`
- `.github/ISSUE_TEMPLATE/fix.md`
- `.github/PULL_REQUEST_TEMPLATE.md`
- `.github/workflows/deploy-demo.yaml`
- `strapi/package.json`
- `strapi/yarn.lock`
- `strapi/config/admin.ts`
- `strapi/config/api.ts`
- `strapi/config/database.ts`
- `strapi/config/env/production/admin.ts`
- `strapi/config/features.ts`
- `strapi/config/middlewares.ts`
- `strapi/config/plugins.ts`
- `strapi/config/server.ts`
- `strapi/scripts/prefillLoginFields.js`
- `strapi/scripts/updateUuid.js`
- `strapi/tsconfig.json`
- `strapi/src/extensions/documentation/**`

Do not claim:

- `next/app/**`
- `next/components/**`
- `next/context/**`
- `next/lib/**`
- `next/types/**`
- `strapi/src/api/**`
- `strapi/src/admin/**`
- `dev/design/**`
- `dev/data/**`
- `stapi-docs-website/**`

Implementation checklist:

- Preserve the repo-local GHP config and confirm the main branch is `main`.
- Keep Strapi MCP configured at `http://localhost:1337/api/mcp/streamable`.
- Keep the repo-local `strapi5` skill installed under `.agents/skills/strapi5`.
- Keep `yarn check:strapi` as the root Strapi validation command.
- Keep any MCP SDK resolution scoped to the Strapi MCP plugin compatibility problem. Do not globally downgrade SDK consumers that need a newer SDK.
- Document any package peer warnings that remain after install.
- Make no visual or CMS schema changes.

Validation:

```bash
yarn install
yarn check:strapi
yarn --cwd strapi strapi content-types:list
yarn --cwd strapi strapi --help
git status --short --branch
```

Optional MCP validation:

```bash
$env:PORT='1338'; yarn --cwd strapi develop
```

Then verify:

- `http://localhost:1338/admin` returns `200`
- `http://localhost:1338/api/mcp/streamable` is the configured MCP endpoint
- MCP client tool listing succeeds or the remaining plugin incompatibility is captured in the PR notes with logs

Acceptance:

- Config/tooling files are committed in one focused PR.
- `yarn check:strapi` passes.
- The PR has no `next/app/**`, `next/components/**`, or `strapi/src/api/**` changes.
- The PR explains the Strapi MCP endpoint path and SDK compatibility decision.
- The PR can be reverted without removing app or CMS feature work.

PR summary:

- Adds repo-local GHP and MCP base configuration
- Adds Strapi validation command
- Installs repo-local Strapi 5 skill
- Pins compatible MCP SDK range for the Strapi MCP plugin if still required
- Leaves onboarding UX and app code for the separate worktree

Rollback:
Revert the config/tooling PR. No content or UI migration rollback should be needed.

## Todo 2 - Launch Getting Started Onboarding Wizard

Title:
`Base template: isolate Launch getting-started onboarding wizard`

Goal:
Turn the LaunchPad-derived app work into a coherent first-run getting-started onboarding experience for the base template, without widening into repo tooling, deployment config, or Strapi MCP setup.

Why this is separate:
This work is product-facing. It should be reviewed through app build, lint, and browser QA. It should not carry package-manager, MCP, GHP, or Strapi validation changes.

Branch suggestion:
`codex/base-template-launch-onboarding`

Primary files to claim:

- `README.md`
- `next/README.md`
- `next/app/[locale]/(marketing)/page.tsx`
- `next/app/[locale]/(marketing)/ClientSlugHandler.tsx`
- `next/app/[locale]/(marketing)/[slug]/page.tsx`
- `next/app/[locale]/(marketing)/[slug]/loading.tsx`
- `next/app/[locale]/(marketing)/blog/page.tsx`
- `next/app/[locale]/(marketing)/blog/loading.tsx`
- `next/app/[locale]/(marketing)/blog/[slug]/page.tsx`
- `next/app/[locale]/(marketing)/blog/[slug]/loading.tsx`
- `next/app/[locale]/(marketing)/products/page.tsx`
- `next/app/[locale]/(marketing)/products/loading.tsx`
- `next/app/[locale]/(marketing)/products/[slug]/page.tsx`
- `next/app/[locale]/(marketing)/products/[slug]/loading.tsx`
- `next/app/[locale]/sign-up/page.tsx`
- `next/app/[locale]/layout.tsx`
- `next/app/layout.tsx`
- `next/app/globals.css`
- `next/app/prism.css`
- `next/app/api/preview/route.ts`
- `next/app/api/exit-preview/route.ts`
- `next/app/context/SlugContext.tsx`
- `next/components/**`
- `next/context/**`
- `next/lib/**`
- `next/types/**`
- `next/i18n.config.ts`
- `next/next.config.mjs`
- `next/tailwind.config.ts`
- `next/postcss.config.mjs`
- `next/components.json`
- `next/migration-log.md`

CMS files to claim only if required for the wizard content contract:

- `strapi/src/admin/**`
- `strapi/src/api/page/**`
- `strapi/src/api/article/**`
- `strapi/src/api/blog-page/**`
- `strapi/src/api/category/**`
- `strapi/src/api/faq/**`
- `strapi/src/api/global/**`
- `strapi/src/api/logo/**`
- `strapi/src/api/plan/**`
- `strapi/src/api/product/**`
- `strapi/src/api/product-page/**`
- `strapi/src/api/redirection/**`
- `strapi/src/api/testimonial/**`
- `strapi/src/index.ts`
- `strapi/types/generated/**`

Planning and asset files to claim only when directly referenced by the onboarding wizard:

- `dev/plan/v1.0.0.rc1/**`
- `dev/agents/**`
- `dev/templates/**`
- selected files under `dev/data/plumbing-stock/**`
- selected files under `dev/design/package-brandkit/**`

Do not claim:

- `.ghp/**`
- `.mcp.json`
- `.codex/**`
- `.agents/**`
- `.claude/**`
- `.github/**`
- root package-manager changes unless needed only to make the wizard compile
- `yarn.lock` unless the wizard adds or removes a runtime dependency
- `strapi/config/**`
- `strapi/package.json`
- `strapi/yarn.lock`
- `scripts/copy-env.mts`
- `skills-lock.json`
- `stapi-docs-website/**`

Implementation checklist:

- Define the first-run path: what a user sees first, what the wizard asks, and what is optional.
- Keep the first screen as an actual usable onboarding/wizard experience, not a marketing landing page.
- Ensure LaunchPad/Call Indigo copy is separated from generic base-template copy where practical.
- Preserve local React fallback content while Strapi mapping is not fully approved.
- Keep UI changes scoped to onboarding, template entry, preview, and related navigation.
- If Strapi schemas are touched, keep schema changes minimal and tied to wizard content only.
- Avoid Storybook setup unless a reviewer explicitly asks for isolated component controls.

Validation:

```bash
yarn --cwd next lint
yarn --cwd next build
```

If Strapi schema or generated types are claimed:

```bash
yarn check:strapi
```

Browser QA:

- Use BrowserOS MCP as the preferred rendered-page QA tool.
- Check desktop and mobile.
- Verify no console errors during first-run wizard interaction.
- Verify CTA/navigation paths do not lead to dead ends.
- Verify text does not overflow on mobile.

Acceptance:

- The PR contains the onboarding wizard and related app/CMS files only.
- The PR does not include GHP, MCP, repo-local skill, or deployment config changes.
- `yarn --cwd next lint` passes or any pre-existing lint blocker is documented with exact output.
- `yarn --cwd next build` passes or any pre-existing build blocker is documented with exact output.
- Browser QA notes identify checked routes, viewport sizes, and any remaining visual issues.
- The wizard can become the reusable base-template starting point.

PR summary:

- Adds or cleans up Launch getting-started onboarding wizard flow
- Separates starter/template copy from client-specific copy where feasible
- Keeps Strapi mapping optional and scoped
- Leaves repo tooling and MCP setup to the config worktree

Rollback:
Revert the onboarding PR. Config, MCP, and Strapi validation should remain intact from the separate worktree.

## Parked Until Explicitly Claimed

These paths should not be bundled into either PR unless a specific diff is inspected and assigned:

- `dev/data/**` except selected wizard assets
- `dev/design/**` except selected wizard assets
- `dev/strapi-forge/**`
- `stapi-docs-website/**`
- large generated images, zips, databases, and static Storybook exports
- unrelated Strapi content entries or data imports

## Suggested Execution Order

1. Create the config/tooling GHP issue first.
2. Create its worktree and commit only the config/tooling file set.
3. Rebase or refresh the onboarding worktree after the config PR is merged or clearly stable.
4. Create the onboarding GHP issue and commit only the app/CMS wizard file set.

This order keeps the base template deterministic before the product-facing onboarding flow is reviewed.
