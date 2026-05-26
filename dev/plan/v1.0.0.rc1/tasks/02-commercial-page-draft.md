# Task 02 - Commercial Page Draft

Status: proposed

## Goal

Create `/commercial` as the first service-specific final draft page.

## Scope

- Add Commercial route
- Render Indigo Facilities content from the shared content module
- Include Facility Management, Facility Partners, proof ribbon, services, workflow, and CTA

## Files

- `next/app/commercial/page.tsx`
- `next/content/indigo-website.ts`
- shared Indigo website components only
- `build-v1/content/**`

## Validation

```bash
yarn --cwd next lint
yarn --cwd next build
```

BrowserOS MCP:

- Open `/commercial`
- Capture desktop screenshot
- Capture mobile screenshot
- Check DOM for `Indigo Facilities`
- Check proof ribbon text

## Approval Gate

Stakeholder approves Commercial draft before CMS mapping begins.
