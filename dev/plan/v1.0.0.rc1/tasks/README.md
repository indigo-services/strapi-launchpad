# Approvable Task List

Use these tasks in order. Each one can become its own PR or approval checkpoint.

1. `00-first-pr-system-test.md` - docs-only workflow scaffold
2. `01-variable-content-home.md` - Home page content module and draft
3. `02-commercial-page-draft.md` - Commercial route and draft
4. `03-asset-refresh.md` - official image replacement
5. `04-quality-signoff.md` - BrowserOS MCP QA and loose-end cleanup
6. `05-strapi-mapping.md` - CMS field mapping after draft approval

Rule:
Do not start the next implementation task until the prior task has stakeholder approval or is explicitly deferred.

Stakeholder scope:
Use `build-v1/plan/website-v1-stakeholder-scope.md` as the small-scope source for the first PR.

Context routing:
Use `build-v1/context-routing.md` before creating a Codex agent prompt. Every task should name one model profile and include only the files listed by that task.
