# Task 01 - Variable Content Home Draft

Status: ready for review

## Goal

Make the Home page render official Indigo copy from a local React content module.

## Scope

- Create `next/content/indigo-website.ts`
- Move visible Home page copy into data
- Replace plumbing-template positioning with address-wide Indigo positioning
- Keep UI tweaks minimal

## Files

- `next/app/page.tsx`
- `next/content/indigo-website.ts`
- `next/public/images/hero.jpg`
- `next/public/images/commercial.jpg`
- `next/public/images/residential.jpg`
- relevant Home page component files only
- `build-v1/content/**` for draft copy

## Image Mapping

| Slot                | File                                 | Source                                                      |
| ------------------- | ------------------------------------ | ----------------------------------------------------------- |
| Hero                | `next/public/images/hero.jpg`        | `build-v1/content/plumbing-stock/poroject-07.jpg`           |
| Commercial pathway  | `next/public/images/commercial.jpg`  | `build-v1/content/plumbing-stock/plumbing-sink.jpg`         |
| Residential pathway | `next/public/images/residential.jpg` | `build-v1/content/plumbing-stock/Residential_1_Repairs.jpg` |

Unused stock (future use): `Residential_4_Plumbing.jpg`, `tm-rowbg-four-800x5330.jpg`

## Branding

- Brand name: `Call Indigo`
- All three Unsplash placeholder URLs replaced with local `/images/` paths
- Alt text updated to match image context

## Validation

```bash
yarn --cwd next lint
yarn --cwd next build
```

BrowserOS MCP:

- Open `/`
- Capture desktop screenshot
- Capture mobile screenshot
- Check DOM for H1 and CTAs

## Future Recommendations

- Swap stock images with approved Indigo photography or generated facility images when available
- Update SEO title to include "Call Indigo" once domain is confirmed
- Commercial page will need its own hero image per release plan

## Approval Gate

Stakeholder approves Home draft before Commercial implementation begins.
