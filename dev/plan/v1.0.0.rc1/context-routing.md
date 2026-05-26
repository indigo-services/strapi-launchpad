# Context and Model Routing

Purpose:
Keep Codex prompts small, task-specific, and routed to the right capability profile.

## Core Rule

Every Codex task prompt must be assembled from a task packet, not from the whole repo.

Use this prompt shape:

```text
Goal:
Scope:
Files:
Do not touch:
Context to include:
Tools:
Model profile:
Validation:
Done means:
```

If a field is missing, infer the smallest safe version.

## Context Budget

Default context per task:

- the task packet from `build-v1/tasks/`
- the active stakeholder scope from `build-v1/plan/website-v1-stakeholder-scope.md`
- `build-v1/content/indigoservices-source-facts.md` when correcting public website facts or visible copy
- only the files listed in the task packet
- one relevant tool profile from `build-v1/tools.md`

Do not include by default:

- full repo summaries
- old release plans
- Strapi source files for non-CMS tasks
- generated screenshots for code-only tasks
- Storybook docs unless the task is specifically Storybook-related
- Strapi Forge WIP unless the task touches CMS mapping, Strapi schema, Strapi content, or agent/tooling setup

## Context Routing Matrix

| Task Type             | Include                                                                                                      | Exclude                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| First PR docs         | `build-v1/README.md`, `build-v1/tools.md`, task packet, PR packet                                            | `next/**`, `strapi/**`, screenshots                                         |
| First PR source facts | Task 00 packet, `build-v1/content/indigoservices-source-facts.md`, stakeholder scope, PR packet              | app code, CMS schemas, screenshots                                          |
| Home draft            | Home task packet, stakeholder scope, old-site source facts, current Home component, content module           | Strapi schema files, Storybook, old LaunchPad content unless comparing copy |
| Commercial draft      | Commercial task packet, stakeholder scope, old-site source facts, shared content module, commercial files    | Residential implementation, Strapi schema files                             |
| Asset refresh         | Asset task packet, image briefs, current image references, BrowserOS MCP screenshot notes                    | Strapi schema files, unrelated components                                   |
| Browser QA            | QA task packet, local URLs, expected headings/CTAs, BrowserOS MCP profile                                    | source files unless a bug needs code tracing                                |
| Strapi mapping        | Strapi mapping task packet, approved content module, Strapi Forge summary, current Strapi content-type files | visual design docs, Storybook unless preview controls are required          |
| Release               | release task packet, release gates, validation proof, PR packet                                              | source files except files changed in the PR                                 |

## Model Profiles

Use model profiles instead of naming a model in every task unless a tool runner requires it.

### Fast Docs Profile

Use for:

- small docs edits
- PR descriptions
- task packet cleanup
- validation summaries

Reasoning:

- low or medium

Context:

- task packet plus target docs only

### Implementation Profile

Use for:

- React page changes
- content module wiring
- route creation
- small UI tweaks

Reasoning:

- medium or high

Context:

- task packet
- exact target files
- minimal nearby components
- validation commands

### Expert CMS Profile

Use for:

- Strapi 5 schema mapping
- dynamic zone modeling
- content import/export planning
- Strapi MCP/CLI setup

Reasoning:

- high

Context:

- task packet
- `build-v1/strapi-forge-summary.md`
- relevant Strapi content-type/component files
- approved React content shape

### Visual QA Profile

Use for:

- BrowserOS MCP rendered-page review
- responsive screenshots
- loose-end QA

Reasoning:

- medium

Context:

- QA task packet
- expected visible copy
- local URLs
- screenshots/DOM snapshots produced by BrowserOS MCP

## Prompt Assembly Checklist

Before starting a task:

1. Pick one task packet from `build-v1/tasks/`.
2. Pick one model profile from this file.
3. Pick one primary tool profile from `build-v1/tools.md`.
4. List exact files allowed for reading/editing.
5. Include only the current blocker or acceptance target.
6. State what not to touch.
7. State the cheapest useful validation.

Stop and narrow scope if:

- more than one task packet is needed
- a prompt needs broad repo architecture
- a task needs both visual QA and CMS schema work
- the file list crosses `next/**` and `strapi/**` without an approved integration task

## Strapi Forge Usage

Strapi Forge is a WIP reference at:
`C:/Users/jaden.black/dev/stack/.config-agentic/strapi-forge`

Use it as expert context only for Strapi/tooling tasks. Do not paste the full source into prompts.

Preferred include:

- `build-v1/strapi-forge-summary.md`

Only read the original WIP files when:

- the summary is missing needed detail
- the task specifically asks to revise Strapi expert guidance
- the Strapi toolchain changes
