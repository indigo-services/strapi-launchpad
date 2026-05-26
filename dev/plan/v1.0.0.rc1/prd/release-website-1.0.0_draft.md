# Call Indigo Website v1.0.0 Draft Plan

Status: stakeholder working draft  
Release slice: first public replacement draft  
Primary surfaces: `https://call-indigo.com/` and `https://call-indigo.com/commercial`
Working directory: `build-v1/`

## Task Frame

Goal:
Ship two polished draft pages that can replace the current plumbing-template home page with official Indigo positioning, variable React content, improved imagery, and a Strapi-ready content shape.

Scope:

- Home page
- Commercial services page
- Shared content model/data file for editable copy, CTAs, stats, services, proof points, FAQs, and images
- Visual refresh using the existing React/Tailwind page quality as the base
- Tool-driven QA pass for spelling, loose ends, broken links, responsive layout, and obvious visual issues
- Isolated planning, generated artifacts, QA notes, and PR packets under `build-v1/`

Do not touch:

- Residential page implementation in this first slice
- Full Strapi CMS migration beyond mapping the data shape
- Production deployment until stakeholder approval
- Unrelated Strapi admin or dashboard work

Validation:

- `yarn --cwd next lint`
- `yarn --cwd next build`
- `yarn next` or `yarn dev:heal` for local review
- BrowserOS MCP screenshot pass for desktop and mobile
- Content QA checklist in this document

Done means:

- Home and Commercial pages are final draft quality
- All visible copy is editable from React data
- Images are replaced or intentionally marked as pending
- Commercial page has clear Indigo Facilities positioning
- Known placeholders, blockers, and launch risks are listed

## Quick Verdict

Use the existing React/Tailwind homepage as the implementation base. Do not rebuild the site from scratch. The priority is to make the content and visuals official, centralized, and easy to change.

First draft should be React-content-driven, not CMS-hook-driven. Strapi comes next by matching the same data fields to Strapi components or dynamic zones.

All v1 planning, generated prompts, QA evidence, agent packets, and PR notes belong in `build-v1/`. App implementation still happens in the owning app folders, but only after the related `build-v1/tasks/*` packet is approved.

## Current Problem

The live home page still reads like a generic plumbing template:

- Generic phone number
- Plumbing-only hero
- Template service cards
- Placeholder brand logos
- Narrow service story
- Stock-like images
- Residential/commercial split is not clear enough

The replacement needs to communicate:

- Indigo is the single call for the whole address
- Residential and commercial are separate paths
- Commercial offer is Indigo Facilities
- Facility management membership plus facility partner services are the core commercial story
- Content can be edited quickly without hunting through JSX

## First Release Content Strategy

### Page 1: Home

Primary message:
`Your single phone call for any address`

Primary actions:

- Commercial
- Residential

Required CTA:

- `Call us today: {{primary_phone}}`

Home page role:

- Route visitors by need
- Establish Indigo as official, trusted, and address-wide
- Avoid overcommitting to one trade such as plumbing
- Give a visible path to Commercial first and Residential later

Recommended home sections:

1. Hero: address-wide promise, commercial/residential split, phone CTA
2. Two-path chooser: Indigo Facilities and Indigo Homes
3. Service coverage summary: maintenance, repairs, projects, make-readies, inspections
4. Trust/proof ribbon: years, Texas base, service area, insured/licensed language where verified
5. How it works: call, inspect, scope, schedule, maintain
6. Final CTA: call Indigo or choose a path

### Page 2: Commercial

Primary brand:
`Indigo Facilities`

Primary message:
Love your facility forever with Indigo Facility Management. National crews provide facility services so teams can have peace of mind across the full lifecycle of owning, leasing, renting, buying, or selling an address.

Secondary message:
In addition to membership, Indigo provides nationally insured facility services through Indigo Facility Partners.

Required data ribbon:

- `500+ crews`
- `250+ locations`
- `All 50 states serviced daily`

Commercial page role:

- Explain Indigo Facility Management
- Explain Indigo Facility Partners
- Make commercial services feel national, organized, insured, and official
- Capture service intent through phone CTA or form/link

Recommended commercial sections:

1. Hero: Indigo Facilities, national address-wide service promise, phone CTA
2. Proof ribbon: 500+ crews, 250+ locations, all 50 states
3. Indigo Facility Management: membership, free inspection, FM scope program
4. Indigo Facility Partners: insured partner services and project support
5. Commercial services: maintenance, repairs, trades, make-ready, exterior, vendor coordination
6. FM Scope workflow: inspect, define, forecast, schedule, report
7. Final CTA: request commercial inspection or call

## Deferred Page

### Residential

Residential is important but not part of this first final draft.

Hold these messages for step two:

- `Indigo Homes`
- `Indigo Home Management`
- `Indigo Home Services`
- Austin, Buda, Kyle, San Marcos local service area
- Headquartered in Austin TX, established 2012, family owned and operated
- Plumbing, electrical, HVAC, carpentry, make-readies, painting, flooring, landscaping, remodeling, construction, handyman services, repairs, and more
- Senior, military, and member discounts

## Variable Content Model

Create one local content module first. Strapi should later mirror this shape.

Suggested file:
`next/content/indigo-website.ts`

Suggested shape:

```ts
export const indigoWebsiteContent = {
  site: {
    brandName: 'INDIGO',
    primaryPhone: '{{primary_phone}}',
    email: '{{contact_email}}',
    serviceArea: 'Austin, Texas and national commercial coverage',
  },
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Commercial', href: '/commercial' },
    { label: 'Residential', href: '/residential' },
    { label: 'Contact', href: '#contact' },
  ],
  home: {
    hero: {},
    pathways: [],
    proof: [],
    sections: [],
    faqs: [],
    images: {},
  },
  commercial: {
    hero: {},
    proofRibbon: [],
    management: {},
    partners: {},
    services: [],
    workflow: [],
    faqs: [],
    images: {},
  },
};
```

Rules:

- JSX renders content only.
- No hardcoded service copy inside page components after this slice.
- Images use named content keys, not scattered literal URLs.
- Unknown stakeholder values stay as `{{tokens}}` until verified.

## Strapi-Ready Mapping

Do not block first draft on Strapi. Keep the mapping ready.

Future Strapi content types/components:

- `page.home`
- `page.commercial`
- `shared.hero`
- `shared.cta`
- `shared.stat`
- `shared.service-card`
- `shared.image-asset`
- `shared.faq`
- `commercial.management-block`
- `commercial.partner-block`
- `commercial.workflow-step`

Recommended Strapi fields:

- `title`
- `subtitle`
- `body`
- `ctaPrimaryLabel`
- `ctaPrimaryHref`
- `ctaSecondaryLabel`
- `ctaSecondaryHref`
- `stats`
- `services`
- `workflow`
- `faqs`
- `image`
- `seoTitle`
- `seoDescription`

CMS handoff requirement:
The React content module should be convertible to Strapi seed JSON without changing page component structure.

## Visual Direction

Use official, service-business design instead of SaaS or plumbing-template design.

Design qualities:

- Clean, practical, trustworthy
- Indigo/navy base with strong white space
- Real service/facility imagery
- Minimal decorative effects
- Clear buttons and phone CTA
- Commercial page should feel national and operational

Avoid:

- Space/LaunchPad language
- Generic plumber-only positioning
- Placeholder logo strips
- Fake reviews unless approved
- Unverified license numbers
- Overly playful visuals
- One-note purple gradients

## Image Plan

Image priority:

1. Hero image for Home: professional property/facility/home service scene
2. Home pathway images: one commercial, one residential
3. Commercial hero image: facilities/property operations
4. Commercial management image: inspection/planning/reporting
5. Commercial partner services image: crews/trucks/trades

Allowed sources:

- Existing approved Indigo assets, if available
- Generated images for official-looking commercial/residential service scenes
- Strapi media uploads later

Image QA:

- No stock-watermark look
- No unreadable fake text inside images
- No incorrect trade-only signal unless the section is trade-specific
- Crops work on desktop and mobile
- Alt text exists and matches the section

## Tooling Standard

BrowserOS MCP is the browser authority for this release slice.

Use BrowserOS MCP for:

- rendered-page inspection
- screenshots
- DOM snapshots
- responsive checks
- visual QA
- console/network review when available

Do not use for this slice unless explicitly approved:

- Playwright
- Puppeteer
- Chrome DevTools Protocol
- ad hoc browser automation CLIs

Normal project CLIs still apply for non-browser work:

- `rg`
- `Get-Content -Raw`
- `yarn --cwd next lint`
- `yarn --cwd next build`
- `yarn ghp:*`

CMS tools:

- Strapi 5 MCP for CMS inspection, schema review, and content mapping when available
- Strapi CLI for local Strapi validation and approved import/export work

Storybook:

- Optional later tool for isolated component preview
- Do not add Storybook setup to the first stakeholder PR

Context routing:

- Use `build-v1/context-routing.md` before creating a Codex task prompt
- Include one task packet, exact allowed files, one tool profile, and one model profile
- Use `build-v1/strapi-forge-summary.md` as the Strapi expert context instead of pasting the full WIP source
- Do not include Strapi Forge context for Home copy, Commercial layout, asset briefs, or BrowserOS-only QA

## Build v1 Workspace

Use `build-v1/` for all isolated v1 work products:

- `build-v1/agents/` - specialty-agent packets
- `build-v1/artifacts/` - screenshots, reports, and review evidence
- `build-v1/content/` - copy drafts and variable content planning
- `build-v1/context-routing.md` - prompt context and model-profile rules
- `build-v1/generated/` - generated prompts, image briefs, snippets, and temporary outputs
- `build-v1/pr/` - PR descriptions, validation proof, and rollback notes
- `build-v1/qa/` - BrowserOS MCP QA checklists and issue logs
- `build-v1/tasks/` - approvable task packets
- `build-v1/tools.md` - tool priorities and deferrals
- `build-v1/strapi-forge-summary.md` - compact WIP Strapi expert summary

## Tools And CLIs

### Repo Inspection

Use:

```bash
rg --files
rg -n "ApprovalLandingPage|homepage|commercial|Indigo"
Get-Content -Raw <file>
```

Purpose:

- Find exact page/component ownership
- Avoid re-exploring the whole repo

### Local Development

Use:

```bash
yarn next
```

Use full stack only when Strapi content is being verified:

```bash
yarn dev:heal
```

### Next Validation

Use:

```bash
yarn --cwd next lint
yarn --cwd next build
```

### Repo Validation

Use when release scope expands beyond the Next app:

```bash
yarn doctor
yarn check:format
yarn check:strapi
```

For docs-only edits, use cheap validation and state why broader validation was skipped.

### Browser QA

Use BrowserOS MCP:

- Open `http://localhost:3000`
- Open `http://localhost:3000/commercial`
- Capture desktop screenshot
- Capture mobile screenshot
- Check nav, CTA links, layout, image loading, and console errors

Fallback:

- No automatic fallback. If BrowserOS MCP is unavailable, stop and record the blocker unless the stakeholder approves another browser tool.

### Visual Report

Use only if it does not bypass the BrowserOS MCP QA requirement:

```bash
yarn report:visual
```

### Release Tracking

Use GHP for release coordination:

```bash
yarn ghp:plan
yarn ghp:start <issue>
yarn ghp:status
```

Production release must follow `docs/release-gates.md`.

### Strapi 5 CMS Tools

Use after Home and Commercial drafts are approved:

```bash
yarn strapi
yarn check:strapi
yarn --cwd strapi strapi --help
```

Use Strapi 5 MCP for CMS inspection and field mapping when available.

Do not change Strapi schema in the first stakeholder PR.

### Storybook

Storybook may help later for isolated component review and content controls. It is too early for the first stakeholder PR unless stakeholders ask for component-level previews.

### Deployment Boundary

This repo owns Indigo Studio and local Next workbench. The public website production deploy may be owned by `website-call-indigo` per release gates. Confirm repo ownership before production deploy.

## Specialty Agent Packets

Use small, bounded packets. Do not give agents the whole repo.

### BrowserOS QA Agent

Goal:
Validate rendered Home and Commercial pages through BrowserOS MCP.

Files:

- rendered local pages
- `build-v1/qa/**`
- `build-v1/artifacts/**`

Tools:

- BrowserOS MCP navigation
- BrowserOS MCP screenshots
- BrowserOS MCP DOM snapshots
- BrowserOS MCP console/network inspection when available

Do not use:

- Playwright
- Puppeteer
- Chrome DevTools Protocol
- generic browser automation CLIs

Done means:

- Desktop and mobile evidence is captured
- console/layout/link/image issues are listed
- no browser QA was performed outside BrowserOS MCP

### Content Agent

Goal:
Turn draft stakeholder copy into final draft Home and Commercial copy.

Files:

- `build-v1/content/**`
- `build/plan/release-website-1.0.0_draft.md`
- future `next/content/indigo-website.ts`

Tools:

- Markdown review
- Spellcheck/grammar pass
- SEO/AEO keyword pass

Done means:

- No placeholder template language
- No unverified claims except marked tokens
- Home and Commercial copy is ready for JSX data

### Frontend Agent

Goal:
Wire Home and Commercial pages to variable React content.

Files:

- `next/app/page.tsx`
- `next/app/commercial/page.tsx`
- `next/components/approval-home/landing-page.tsx` or replacement components
- `next/content/indigo-website.ts`

Tools:

- `rg`
- `yarn next`
- `yarn --cwd next lint`
- `yarn --cwd next build`

Done means:

- Page components render from data
- Home and Commercial routes exist
- Existing React quality is preserved

### Visual Asset Agent

Goal:
Replace template imagery with official-looking assets.

Files:

- `next/public/**` or existing public asset folder
- `next/content/indigo-website.ts`

Tools:

- Image generation or approved asset library
- BrowserOS MCP screenshot check

Done means:

- Images match Indigo Homes/Facilities positioning
- Mobile crops are acceptable
- No broken image URLs

### CMS Mapping Agent

Goal:
Prepare Strapi content mapping without blocking React draft.

Files:

- `strapi/src/api/**` only if schema work is approved later
- `next/content/indigo-website.ts`
- this plan

Tools:

- Strapi 5 MCP
- Strapi admin
- Strapi CLI
- Strapi REST/API review when needed
- `yarn check:strapi` only if schema changes happen

Done means:

- Field mapping is clear
- React data can become Strapi seed/content
- No CMS hook dependency added to the first draft

### QA Agent

Goal:
Find mistakes and loose ends before stakeholder review.

Files:

- rendered pages
- content file
- page components

Tools:

- BrowserOS MCP screenshots
- `yarn --cwd next lint`
- `yarn --cwd next build`
- link click pass

Done means:

- Desktop and mobile screenshots reviewed
- Spelling and placeholder pass complete
- Broken links/images listed or fixed

### Release Agent

Goal:
Keep the work traceable and release-ready.

Files:

- `docs/release-gates.md`
- release issue/PR notes
- this plan

Tools:

- `yarn ghp:plan`
- `yarn ghp:status`
- Vercel/EasyPanel only when production release begins

Done means:

- Issue/PR states repo ownership
- Validation proof is recorded
- Rollback note exists

## Implementation Sequence

### Step 0: Confirm Inputs

Needed before final stakeholder draft:

- Final primary phone number
- Final contact email
- Whether license numbers should be shown
- Whether "all 50 states serviced daily" is approved public copy
- Approved image source or permission to generate images

### Step 1: Home Page Final Draft

Actions:

1. Create shared content module.
2. Move current home copy into data.
3. Replace plumbing-only copy with address-wide Indigo copy.
4. Add Commercial and Residential path CTAs.
5. Replace or mark images.
6. Run local browser review.

Validation:

```bash
yarn --cwd next lint
yarn --cwd next build
```

Done:
Home page is stakeholder-review ready.

### Step 2: Commercial Page Final Draft

Actions:

1. Add `/commercial` route.
2. Add Indigo Facilities page content.
3. Add proof ribbon.
4. Add Facility Management section.
5. Add Facility Partners section.
6. Add services and workflow sections.
7. Share header/footer/components with Home.
8. Run local browser review.

Validation:

```bash
yarn --cwd next lint
yarn --cwd next build
```

Done:
Commercial page is stakeholder-review ready.

### Step 3: Quality Pass

Checklist:

- No `LaunchPad` copy
- No fake phone number
- No plumbing-only positioning on Home
- No placeholder logos
- No broken images
- No unapproved license numbers
- No lorem ipsum
- No obvious spelling mistakes
- CTAs route correctly
- Mobile text does not overlap
- Home and Commercial share a coherent visual system
- Commercial page has the required proof ribbon
- Unknown values are marked as `{{tokens}}`

### Step 4: Stakeholder Review

Deliver:

- Local URL
- Home screenshot
- Commercial screenshot
- List of unresolved tokens
- List of images needing approval
- Validation commands/results

### Step 5: Strapi Follow-Up

Only after Home and Commercial drafts are accepted:

1. Mirror `indigoWebsiteContent` in Strapi components.
2. Create or update page entries.
3. Add media assets to Strapi.
4. Replace local content import with server-side fetch or adapter.
5. Keep local JSON/TS fallback for dev speed.

## Acceptance Criteria

Home:

- H1 is `Your single phone call for any address`
- Commercial and Residential CTAs are visible in first viewport
- Phone CTA is visible
- Page does not look like a plumbing-only template
- Content is variable-driven

Commercial:

- H1 or primary heading includes `Indigo Facilities`
- Page explains Facility Management and Facility Partners
- Proof ribbon includes 500+ crews, 250+ locations, all 50 states
- Free inspection and FM scope program are included
- Content is variable-driven

Technical:

- Lint passes
- Build passes
- BrowserOS MCP screenshots reviewed
- No unrelated files changed

Stakeholder:

- Unknown values are clearly marked
- Images are approved or listed as pending
- Final draft pages are ready for copy/design signoff

## Risks And Blockers

- Final phone number is not confirmed.
- License/insurance wording must be verified before publishing.
- National service claims must be approved before public release.
- Image source may require stakeholder approval.
- Production deployment repo ownership must be confirmed before release.

## Release Notes Skeleton

Version:
`v1.0.0 website draft`

Repos:

- `app-indigo-studio`
- `website-call-indigo` if production deploy happens there

Domains:

- `https://call-indigo.com`
- `https://call-indigo.com/commercial`

Validation proof:

- `yarn --cwd next lint`
- `yarn --cwd next build`
- Browser desktop/mobile screenshots

Rollback:

- Revert website PR or restore prior Vercel deployment.
- Content rollback is separate if Strapi entries are later edited.
