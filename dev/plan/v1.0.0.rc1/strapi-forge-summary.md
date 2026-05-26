# Strapi Forge Summary

Source:
`C:/Users/jaden.black/dev/stack/.config-agentic/strapi-forge`

Status:
WIP expert reference. Use as guidance, not as authoritative repo state.

## Relevant Takeaways

- Strapi 5 plus Next.js 16 App Router is the target template pattern.
- REST is the preferred CMS API for this project slice because it is simpler than GraphQL and matches the existing app direction.
- Strapi dynamic zones should map to React components through a component map.
- Draft/preview should use Next.js Draft Mode when preview work begins.
- Strapi uploads should be handled through `next/image` remote patterns when CMS media is wired.
- Local React content should remain a fallback during early development.

## AI Tooling Takeaways

Use now:

- Strapi 5 MCP when available for content-type inspection, entry inspection, schema review, and field mapping
- Strapi CLI for local validation and approved import/export work
- BrowserOS MCP for rendered-page QA in this website slice

Watch later:

- Official Strapi MCP Server RFC
- Strapi AI content-type builder features
- Strapi AI media and translation features
- Community Strapi expert skills

## Repo-Specific Notes

This repo currently uses:

- Strapi `5.38.0`
- Next `16.2.3`
- React `19.2.0`
- Tailwind `3.4.1`
- Yarn Berry

The Strapi Forge WIP references newer Strapi examples. Prefer this repo's installed versions when commands or generated schema behavior differ.

## Context Use Rule

Include this summary only for:

- Strapi mapping
- Strapi schema review
- Strapi MCP/CLI setup
- CMS content import/export planning
- expert-agent prompt creation for CMS work

Do not include it for:

- Home page copy edits
- Commercial page layout implementation
- image generation briefs
- BrowserOS visual QA
- first PR docs-only workflow checks
