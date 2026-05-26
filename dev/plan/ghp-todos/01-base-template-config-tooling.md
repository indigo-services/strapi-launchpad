# GHP Todo - Base Template Config And Tooling

Title:
`Base template: isolate config, GHP, MCP, Strapi validation, and repo-local skills`

Labels:
`foundation`, `base-template`, `ghp`, `strapi`, `config`

Branch:
`codex/base-template-config-tooling`

Worktree:
`C:\Users\jaden.black\dev\clients\indigo\repos\.worktrees\strapi-launchpad-config-tooling`

## Goal

Create the reusable configuration baseline for the Strapi LaunchPad-derived base template without changing application screens, content models, or onboarding UX.

## Scope

- Repo-local GHP configuration
- VS Code GHP extension recommendation and workspace settings
- MCP client configuration
- Strapi MCP endpoint compatibility
- Strapi CLI validation command
- Repo-local Strapi 5 skill installation
- Package-manager lockfile updates required for the tooling baseline
- Project-level metadata and local developer setup files

## Primary Files To Claim

- `.ghp/config.json`
- `.mcp.json`
- `.codex/config.toml`
- `.agents/skills/strapi5/**`
- `.claude/**`
- `.vscode/extensions.json`
- `.vscode/settings.json`
- `.yarnrc.yml`
- `.prettierrc`
- `.prettierignore`
- `.gitignore`
- `package.json`
- `yarn.lock`
- `skills-lock.json`
- `strapi-launchpad.code-workspace`
- `scripts/copy-env.mts`

## Secondary Files To Claim Only If Config-Only

- `.github/ISSUE_TEMPLATE/content.md`
- `.github/ISSUE_TEMPLATE/feature.md`
- `.github/ISSUE_TEMPLATE/fix.md`
- `.github/PULL_REQUEST_TEMPLATE.md`
- `.github/workflows/deploy-demo.yaml`
- `strapi/package.json`
- `strapi/yarn.lock`
- `strapi/config/**`
- `strapi/scripts/prefillLoginFields.js`
- `strapi/scripts/updateUuid.js`
- `strapi/tsconfig.json`
- `strapi/src/extensions/documentation/**`

## Do Not Claim

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

## Implementation Notes

- Keep Strapi MCP configured at `http://localhost:1337/api/mcp/streamable`.
- Keep VS Code recommending `bretwardjames.gh-projects`.
- Keep `yarn check:strapi` as the root Strapi validation command.
- Keep the repo-local `strapi5` skill under `.agents/skills/strapi5`.
- If an MCP SDK pin remains necessary, explain that it is scoped to `@sensinum/strapi-plugin-mcp` compatibility.
- Do not change frontend UI or Strapi content schemas in this PR.

## Validation

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
- MCP client tool listing succeeds, or the plugin incompatibility is documented with logs

## Acceptance

- Config/tooling files are committed in one focused PR.
- `yarn check:strapi` passes.
- The PR has no `next/app/**`, `next/components/**`, or `strapi/src/api/**` changes.
- The PR explains the Strapi MCP endpoint and SDK compatibility decision.
- The PR can be reverted without removing app or CMS feature work.

## Rollback

Revert the config/tooling PR. No content or UI migration rollback should be needed.
