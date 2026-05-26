# GHP Todo - Launch Getting Started Onboarding Wizard

Title:
`Base template: isolate Launch getting-started onboarding wizard`

Labels:
`foundation`, `base-template`, `onboarding`, `nextjs`, `strapi`

Branch:
`codex/base-template-launch-onboarding`

Worktree:
`C:\Users\jaden.black\dev\clients\indigo\repos\.worktrees\strapi-launchpad-launch-onboarding`

## Goal

Turn the LaunchPad-derived app work into a coherent first-run getting-started onboarding experience for the base template, without widening into repo tooling, deployment config, or Strapi MCP setup.

## Scope

- First-run onboarding wizard UX
- Starter/template copy
- LaunchPad-to-base-template navigation cleanup
- Local React fallback content
- Optional Strapi mapping only when required for wizard content
- Browser QA notes for the wizard flow

## Primary Files To Claim

- `README.md`
- `next/README.md`
- `next/app/[locale]/(marketing)/**`
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

## CMS Files To Claim Only If Required

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

## Planning And Assets To Claim Only If Referenced

- `dev/plan/v1.0.0.rc1/**`
- `dev/agents/**`
- `dev/templates/**`
- selected files under `dev/data/plumbing-stock/**`
- selected files under `dev/design/package-brandkit/**`

## Do Not Claim

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

## Implementation Notes

- Make the first screen an actual usable onboarding wizard, not a marketing landing page.
- Define the first-run path: what the user sees first, what the wizard asks, and what is optional.
- Separate generic base-template copy from client-specific Call Indigo copy where practical.
- Preserve local React fallback content while Strapi mapping is not fully approved.
- Keep UI changes scoped to onboarding, template entry, preview, and related navigation.
- Avoid Storybook setup unless a reviewer explicitly asks for isolated component controls.

## Validation

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

## Acceptance

- The PR contains onboarding wizard and related app/CMS files only.
- The PR does not include GHP, MCP, repo-local skill, or deployment config changes.
- `yarn --cwd next lint` passes or any pre-existing lint blocker is documented with exact output.
- `yarn --cwd next build` passes or any pre-existing build blocker is documented with exact output.
- Browser QA notes identify checked routes, viewport sizes, and remaining visual issues.
- The wizard can become the reusable base-template starting point.

## Rollback

Revert the onboarding PR. Config, MCP, and Strapi validation should remain intact from the separate worktree.
