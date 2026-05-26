# Changelog

All notable changes to the Indigo Studio website project.

## [0.2.0] - 2026-05-22

### Changed

- **Branding**: Brand name updated from "INDIGO" to "Call Indigo" across Home page
- **Email domain**: Public contact email updated from indigoservices-tx.com to call-indigo.com
- **Images**: Replaced 3 Unsplash placeholder URLs with local stock images served from `/images/`
  - Hero: project/work scene
  - Commercial pathway: plumbing/service work
  - Residential pathway: residential repairs
- **Alt text**: Updated image alt attributes to match actual image content

### Added

- `next/public/images/` directory with hero.jpg, commercial.jpg, residential.jpg
- Image mapping documentation in task 01

### Technical

- No new dependencies
- No component changes — all edits in content module only
- Build and lint pass with no new errors

---

## [0.1.0] - 2026-05-21

### Added

- Home page content driven from `next/content/indigo-website.ts`
- Variable content module with site, navigation, home sections
- Approval landing page with hero, pathways, services, process, trust, and contact sections
- Build-v1 workflow scaffold with tasks, content, and planning docs
