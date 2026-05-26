# Specialty Agent Packets

Use one packet per bounded task. Give each agent only the files and tools listed in the task.

Before assigning an agent:

- choose one task packet from `build-v1/tasks/`
- choose one model profile from `build-v1/context-routing.md`
- choose one tool profile from `build-v1/tools.md`
- list exact files allowed for reading/editing
- exclude everything else

## BrowserOS QA Agent

Goal:
Validate rendered Home and Commercial pages through BrowserOS MCP.

Allowed tools:

- BrowserOS MCP navigation
- BrowserOS MCP screenshot capture
- BrowserOS MCP DOM snapshot
- BrowserOS MCP console/network inspection if available

Do not use:

- Playwright
- Puppeteer
- Chrome DevTools Protocol
- generic browser CLI automation

Output:

- screenshot paths or artifact names
- viewport sizes checked
- console errors
- visual/layout issues
- broken link/image notes

## Content Agent

Goal:
Refine stakeholder copy into variable content for Home and Commercial.

Allowed files:

- `build-v1/content/**`
- `build-v1/tasks/**`
- `build/plan/release-website-1.0.0_draft.md`
- future `next/content/indigo-website.ts`

Output:

- final draft copy
- unresolved tokens
- claims needing approval

## Frontend Agent

Goal:
Wire approved variable content into React pages with minimal UI tweaks.

Allowed files:

- `next/app/page.tsx`
- `next/app/commercial/page.tsx`
- `next/components/approval-home/**` or replacement Indigo website components
- `next/content/indigo-website.ts`

Required CLIs:

- `yarn --cwd next lint`
- `yarn --cwd next build`

Browser validation:

- BrowserOS MCP only

## Asset Agent

Goal:
Create or select official-looking service images and asset briefs.

Allowed files:

- `build-v1/generated/**`
- `build-v1/artifacts/**`
- final approved assets under the Next public asset directory

Output:

- image briefs
- asset approval notes
- alt text
- crop notes for desktop/mobile

## Release Agent

Goal:
Keep PRs small, traceable, and release-gated.

Allowed files:

- `build-v1/pr/**`
- `docs/release-gates.md`
- release issue/PR notes

Required CLIs:

- `yarn ghp:plan`
- `yarn ghp:status`

## Strapi 5 CMS Agent

Goal:
Map approved React content to Strapi 5 without expanding the stakeholder draft PR.

Model profile:
Expert CMS Profile from `build-v1/context-routing.md`.

Allowed tools:

- Strapi 5 MCP
- Strapi CLI

Allowed files after approval:

- `build-v1/content/**`
- `build-v1/generated/**`
- `build-v1/strapi-forge-summary.md`
- `strapi/src/api/**`

Required CLIs when schema work starts:

- `yarn check:strapi`
- `yarn --cwd strapi strapi --help`

Do not do in first PR:

- schema changes
- content imports
- Storybook setup

## Storybook Agent

Status:
Parked until later.

Use only if stakeholder review needs isolated component previews or editable controls before Strapi wiring.
