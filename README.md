# LaunchPad - Official Strapi Demo

![LaunchPad](./LaunchPad.jpg)

Welcome aboard **LaunchPad**, the official Strapi demo application, where we launch your content into the stratosphere at the speed of _"we-can't-even-measure-it!"_.
This repository contains the following:

- A Strapi project with content-types and data already onboard
- A Next.js client that's primed and ready to fetch the content from Strapi faster than you can say "blast off!"

## 🌌 Get started

Strap yourself in! You can get started with this project on your local machine by following the instructions below, or you can [request a private instance on our website](https://strapi.io/demo)

### Prerequisites

- **Node.js** v18 or higher
- **Yarn** as your package manager (this project uses Yarn internally for its scripts)

> **Don't have Yarn installed?** You can enable it via Node.js Corepack:
>
> ```sh
> corepack enable
> ```
>
> Or install it globally via npm:
>
> ```sh
> npm install -g yarn
> ```

## 1. Clone and Install

To infinity and beyond! Clone the repo and install root dependencies:

```sh
git clone https://github.com/strapi/launchpad.git
cd launchpad
yarn install
```

## 2. Setup

Run the setup script to install dependencies in both projects (Strapi and Next.js) and copy the environment files:

```sh
yarn setup
```

## 3. Seed the Data

Populate your Strapi instance with demo content:

```sh
yarn seed
```

## 4. Start the Development Servers

Launch both Strapi and Next.js concurrently from the root:

```sh
yarn dev
```

This starts the Strapi server first, waits for it to be ready, then starts the Next.js frontend. You're now a spacefaring content master!

Visit http://localhost:1337/admin to create your first Strapi user, and http://localhost:3000 to discover your space rocket website.

## Features Overview ✨

### User

<br />

- **An intuitive, minimal editor** The editor allows you to pull in dynamic blocks of content. It’s 100% open-source, and it’s fully extensible.<br />
- **Media Library** Upload images, video or any files and crop and optimize their sizes, without quality loss.<br />
- **Flexible content management** Build any type of category, section, format or flow to adapt to your needs. <br />
- **Sort and Filter** Built-in sorting and filtering: you can manage thousands of entries without effort.<br />
- **User-friendly interface** The most user-friendly open-source interface on the market.<br />
- **SEO optimized** Easily manage your SEO metadata with a repeatable field and use our Media Library to add captions, notes, and custom filenames to optimize the SEO of media assets.<br /><br />

### Global

<br />

- [Customizable API](https://strapi.io/features/customizable-api): Automatically build out the schema, models, controllers for your API from the editor. Get REST or GraphQL API out of the box without writing a single line of code.<br />
- [Media Library](https://strapi.io/features/media-library): The media library allows you to store your images, videos and files in your Strapi admin panel with many ways to visualize and manage them.<br />
- [Role-Based Access Control (RBAC)](https://strapi.io/features/custom-roles-and-permissions): Role-Based Access Control is a feature available in the Administration Panel settings that let your team members have access rights only to the information they need.<br />
- [Internationalization (i18n)](https://strapi.io/features/internationalization): Internationalization (i18n) lets you create many content versions, also called locales, in different languages and for different countries.<br />
- [Audit Logs](https://strapi.io/blog/reasons-and-best-practices-for-using-audit-logs-in-your-application): The Audit Logs section provides a searchable and filterable display of all activities performed by users of the Strapi application<br />
- [Data transfer](https://strapi.io/blog/importing-exporting-and-transferring-data-with-the-strapi-cli): Streams your data from one Strapi instance to another Strapi instance.<br />
- [Review Worfklows](https://docs.strapi.io/user-docs/settings/review-workflows): Create and manage any desired review stages for your content, enabling your team to collaborate in the content creation flow from draft to publication. <br />

## Resources

[Docs](https://docs.strapi.io) • [Discord](https://discord.strapi.io) • [YouTube](https://www.youtube.com/c/Strapi/featured) • [Strapi Design System](https://design-system.strapi.io/) • [Marketplace](https://market.strapi.io/) • [Cloud Free Trial](https://cloud.strapi.io)

## Customization

- The Strapi application contains a custom population middlewares in every api route.

- The Strapi application contains a postinstall script that will regenerate an uuid for the project in order to get some anonymous usage information concerning this demo. You can disable it by removing the uuid inside the `./strapi/packages.json` file.

- The Strapi application contains a patch for the @strapi/admin package. It is only necessary for the hosted demos since we automatically create the Super Admin users for them when they request this demo on our website.

## CLI Tools

| Command | Description |
|---------|-------------|
| `yarn setup` | Install dependencies and copy env files |
| `yarn dev` | Start Strapi + Next.js concurrently |
| `yarn seed` | Import demo content from `strapi/data/export_latest.tar.gz` |
| `yarn export` | Export current Strapi data |
| `yarn fix-permissions` | Rebuild Super Admin permissions (fixes "No permissions to see this field" after import) |
| `yarn bootstrap` | Full wipe + admin + seed + permission fix |
| `yarn bootstrap:clean` | Full wipe + admin only (no seed) |

---

## Roadmap — Indigo Studio Pipeline

This LaunchPad is **Stage 1** of the Indigo Studio pipeline. Each stage builds on the previous, using Strapi-native community features and documented protocols.

### Stage 1: LaunchPad Demo (v0.1 — current)

Full-stack Strapi + Next.js starter with demo content, admin permission tooling, and CLI bootstrap scripts.

- 11 content types with i18n, dynamic zones, and SEO
- Community plugins: navigation, config-sync, soft-delete, content-manager-organizer, documentation
- Seed data export/import with permission repair
- Admin panel customization via Strapi's `src/admin/` hooks

### Stage 2: User Pattern Import (v0.2 — worktree)

Template system for importing user-facing content patterns from LaunchPad into downstream Strapi instances.

- Extract LaunchPad content types and components as portable schema packages
- Strapi CLI `strapi export/import` with `--only content` for data portability
- Config-sync plugin for transferring plugin configurations between instances
- Admin panel rebrand via Strapi's native `src/admin/` customization API

### Stage 3: Platform Schema & Data Import (v0.3)

Automated schema and data migration from LaunchPad into Indigo Studio Platform instances.

- Strapi data transfer protocol for instance-to-instance streaming
- Schema diffing and migration generation
- Plugin configuration deployment via config-sync
- Media asset transfer between instances

### Stage 4: Platform Plugin & Extension Layer (v0.4)

Strapi plugin architecture for extending ISP with LaunchPad-derived capabilities.

- Custom Strapi plugins following [Strapi plugin protocol](https://docs.strapi.io/dev-docs/plugins-development)
- Plugin marketplace integration for community extensions
- Admin panel extensions via Strapi's documented extension points
- Webhook and middleware layers for cross-instance orchestration

### Stage 5: Ecosystem & Distribution (v0.5)

Distribution tooling for the full Indigo Studio ecosystem.

- One-click deployment templates (Vercel, EasyPanel)
- CI/CD pipelines for multi-instance management
- Environment promotion (dev → staging → production) via Strapi transfer
- Documentation and contribution guides
