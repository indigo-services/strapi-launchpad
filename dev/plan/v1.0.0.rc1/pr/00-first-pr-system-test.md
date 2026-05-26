# PR 00 - System Test

Title:
`docs: add build-v1 workflow scaffold`

## Purpose

Create a tiny docs-only PR to prove the v1 workflow and correct the planning source of truth from `indigoservices-tx.com` before any website, CMS, or asset implementation starts.

## Scope

- Add `build-v1` isolated workspace
- Add approvable task packets
- Add specialty-agent packets
- Add context/model routing rules
- Add tool priorities for BrowserOS MCP, Strapi 5 MCP, Strapi CLI, and Storybook
- Add compact Strapi Forge WIP summary
- Add old-site source facts for corrected Indigo business information
- Add stakeholder-safe v1 scope under `build-v1/plan/`
- Update the v1 release draft to point to the isolated workflow

## Not In Scope

- Home page code changes
- Commercial page code changes
- Strapi schema changes
- Strapi content imports
- Storybook stories or setup
- Browser screenshots
- full Strapi Forge WIP import
- Production deploy

## Validation

```bash
yarn prettier "build-v1/**/*.md" "build/plan/release-website-1.0.0_draft.md" --check
```

## Review Notes

This PR is intentionally small. Approval means the team agrees to the v1 workflow, tool priorities, and task sequence.

It also proves that future Codex prompts should be assembled from task packets, exact file lists, one tool profile, and one model profile.

It should also prove that website copy starts from corrected business facts: phone, email, service categories, and verification-needed claims from the old Indigo site.

## Rollback

Revert the docs-only PR.
