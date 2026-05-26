# Website v1 Stakeholder Scope

Status: first PR scope source

## Goal

Create a small, approval-driven path to replace the current `call-indigo.com` home page with official Indigo content and a Commercial page draft.

First correction source:
`build-v1/content/indigoservices-source-facts.md`

## First Visible Draft

Pages:

- Home
- Commercial

Not included yet:

- Residential implementation
- Strapi schema changes
- Storybook setup
- production deploy

## Tool Priorities

Browser QA:

- BrowserOS MCP only

CMS planning:

- Strapi 5 MCP
- Strapi CLI

Component preview:

- Storybook later, only if stakeholder review needs isolated component previews

Context discipline:

- every task uses one task packet
- every prompt includes only the listed files
- every task declares one model profile from `build-v1/context-routing.md`
- Strapi Forge WIP is summarized, not pasted into prompts

## First PR

The first PR is docs-only:

- `build-v1` workspace
- task packets
- tool priorities
- context/model routing rules
- compact Strapi Forge summary
- corrected old-site source facts
- PR packet

Purpose:
Prove the workflow and corrected source facts before app code changes.

## Approval Sequence

1. Approve workflow scaffold.
2. Approve Home content and layout draft.
3. Approve Commercial content and layout draft.
4. Approve images.
5. Run BrowserOS MCP quality signoff.
6. Map approved content to Strapi 5.
