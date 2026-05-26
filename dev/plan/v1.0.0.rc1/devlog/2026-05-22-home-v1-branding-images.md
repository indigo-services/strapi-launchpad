# Devlog — 2026-05-22

## Session: Home Page v1 Branding, Images, and Production Publish

### Part 1: Content changes (app-indigo-studio)

**Commits to this repo:**

- `8d6ad1d` feat: rebrand to Call Indigo, replace Unsplash images with local stock
- `59d1a02` docs: update task 01 status to ready for review
- `4cfcbb5` docs: add v1 changelog, devlog, stock images, and stakeholder artifacts
- `a5445fb` docs: add repo boundary rules to AGENTS.md, rewrite Next.js README

**What changed:**

- `next/content/indigo-website.ts`: brandName INDIGO → Call Indigo, email domain → call-indigo.com, 3 Unsplash URLs → local `/images/` paths, alt text updated
- `next/public/images/`: 3 new stock images (hero, commercial, residential) copied from `build-v1/content/plumbing-stock/`
- `build-v1/tasks/01-variable-content-home.md`: status → ready for review, added image mapping table
- `AGENTS.md`: added Repo Boundary Rules section with deployment table and publish protocol
- `next/README.md`: replaced stale blog template README with actual project docs

**Validation:**

- `yarn --cwd next lint` — pre-existing errors only (94 errors, 23 warnings, none in our files)
- `yarn --cwd next build` — passes (exit 0), Home page builds as static
- BrowserOS MCP QA — no console errors, brand renders as "Call Indigo", hero image loads, all nav/CTAs functional

### Part 2: Production publish (website-call-indigo)

**Incident:** Initially force-pushed the entire monorepo to `website-call-indigo`, which broke the production repo. The `website-call-indigo` repo is a standalone Next.js project for Vercel — it must not receive the Strapi monorepo.

**Resolution:**

1. Restored `website-call-indigo` to v0.9.0 release state
2. Created a clean standalone Next.js app from `next/` directory (no node_modules, no .next, no Strapi)
3. Added standalone `vercel.json` (no `cd next &&` prefix in build command)
4. Force pushed clean app as commit `5def098`

**Lesson learned:** Never `git push` or `git push --force` from this monorepo to `website-call-indigo`. Always use the publish protocol (copy `next/` files only to a clean repo, then push). Documented in AGENTS.md.

### Part 3: Workflow artifacts created

- `build-v1/CHANGELOG.md` — versioned release notes
- `build-v1/devlog/2026-05-22-home-v1-branding-images.md` — this file
- `AGENTS.md` — repo boundary rules + publish protocol
- `next/README.md` — project documentation
- Memory: `feedback-repo-boundary.md` — critical lesson saved for future sessions

**What's next:**

- Client reviews live site at call-indigo.com
- Commercial page implementation (task 02)
- Better stock photography when approved assets available
- Strapi CMS migration after both pages approved
