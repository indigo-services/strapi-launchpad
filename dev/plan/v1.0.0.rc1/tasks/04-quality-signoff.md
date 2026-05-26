# Task 04 - Quality Signoff

Status: proposed

## Goal

Find mistakes, loose ends, visual issues, broken links, and placeholder content before stakeholder signoff.

## Scope

- Home
- Commercial
- Header/footer/shared CTAs
- Images
- Mobile layout
- Final unresolved token list

## Validation

```bash
yarn --cwd next lint
yarn --cwd next build
```

BrowserOS MCP:

- Desktop Home
- Mobile Home
- Desktop Commercial
- Mobile Commercial
- DOM snapshot for headings/CTA text
- Console error check

## Done Means

- No `LaunchPad` copy
- No fake phone number unless marked as `{{primary_phone}}`
- No placeholder logos
- No broken images
- No unapproved license or insurance claim
- No mobile overlap
- Open issues are listed in `build-v1/qa/open-issues.md`
