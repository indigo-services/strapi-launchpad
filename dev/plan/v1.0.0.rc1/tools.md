# Tool Priorities

Purpose:
Keep the v1 website workflow tool-focused without making the stakeholder review scope too large.

## First PR Tool Scope

Use only docs and repo inspection tools:

- `rg`
- `Get-Content -Raw`
- `yarn prettier "build-v1/**/*.md" "build/plan/release-website-1.0.0_draft.md" --check`

No app code, CMS schema work, Storybook setup, or browser screenshots in the first PR.

Prompt context:

- `build-v1/tasks/00-first-pr-system-test.md`
- `build-v1/pr/00-first-pr-system-test.md`
- `build-v1/context-routing.md`
- target docs only

## Browser QA

Primary tool:

- BrowserOS MCP

Use for:

- page navigation
- desktop/mobile screenshots
- DOM snapshots
- console and network review when available
- visual/layout QA

Do not use:

- Playwright
- Puppeteer
- Chrome DevTools Protocol
- other browser automation CLIs

## Strapi 5 CMS Work

Primary tools:

- Strapi 5 MCP, when available
- Strapi CLI

Use Strapi 5 MCP for:

- content type inspection
- component/schema review
- content entry inspection
- CMS field mapping checks

Use Strapi CLI for:

- local Strapi develop/build validation
- schema-generated type/build checks
- import/export when explicitly approved

Expected commands:

```bash
yarn strapi
yarn check:strapi
yarn --cwd strapi strapi --help
```

Rule:
Do not change Strapi schemas in the first stakeholder PR. Strapi work starts after Home and Commercial draft pages are accepted.

Context:
Use `build-v1/strapi-forge-summary.md` instead of the full Strapi Forge WIP unless more detail is explicitly needed.

## Storybook

Status:
Optional later tool.

Use Storybook only if one of these becomes true:

- stakeholders need isolated component review
- repeated visual variants become hard to inspect in the page
- the team wants controls for editable content before Strapi wiring

Do not add Storybook setup or stories in the first PR.
