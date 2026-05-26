# Build v1 Workspace

Purpose:
Keep all Call Indigo website v1 planning, generated artifacts, task packets, QA notes, and stakeholder review material isolated from the older `build/` workspace.

Primary release slice:

- Home page
- Commercial services page

Working rule:
Implementation files stay in their owning app directories, but planning, generated drafts, screenshots, prompts, QA notes, and approval packets start here.

Directory map:

- `agents/` - specialty-agent packets with minimum context
- `artifacts/` - screenshots, exported audits, generated reports, and review evidence
- `content/` - stakeholder copy drafts and variable content planning
- `context-routing.md` - prompt context and model-profile rules
- `generated/` - generated prompts, asset briefs, snippets, and temporary outputs
- `plan/` - stakeholder-safe v1 scope and release planning
- `pr/` - PR packets, descriptions, validation proof, and rollback notes
- `qa/` - BrowserOS MCP QA plans, issue logs, and signoff checklists
- `strapi-forge-summary.md` - compact WIP Strapi expert summary
- `tasks/` - approvable task breakdowns
- `tools.md` - tool priorities for BrowserOS MCP, Strapi 5 MCP, Strapi CLI, and Storybook

Tool rule:
BrowserOS MCP is the browser inspection, screenshot, DOM snapshot, responsive QA, and visual review tool for this slice. Do not use Playwright, Puppeteer, Chrome DevTools, or other browser automation tools unless BrowserOS MCP is unavailable and the stakeholder approves a fallback.

CMS rule:
Strapi 5 MCP and Strapi CLI are the preferred CMS tools, but CMS schema work is intentionally outside the first stakeholder PR.

Storybook rule:
Storybook is optional later. Do not add Storybook setup or stories until isolated component review becomes useful.

Context rule:
Use `context-routing.md` before starting an agent task. Include only the task packet, exact target files, one tool profile, and one model profile.
