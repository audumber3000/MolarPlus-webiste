# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Which directory is live

This repo contains **two** website folders. Almost all work happens in one:

- **`website-molarplus/`** — the live MolarPlus marketing site (Next.js 15 App Router). **This is the project.** All commands below run from inside it.
- **`website/`** — a legacy static HTML multi-brand site (Clintal, Flexio, Sonolin, etc.). No build system, effectively dead. Do not touch unless explicitly asked.

> The `website-molarplus/README.md` is **stale**: it claims Next 14 + `output: 'export'` static export with routes at `/features`, `/pricing`. None of that is true anymore — see Architecture below. Trust the code, not that README.

## Commands

All from `website-molarplus/`:

```bash
npm install          # .npmrc forces legacy-peer-deps=true (React 19 peer conflicts) — keep it
npm run dev          # local dev → http://localhost:3000
npm run build        # production build (server/ISR, NOT static export)
npm start            # serve the production build
npm run lint         # next lint (eslint)
npx tsc --noEmit     # typecheck only (no test suite exists in this repo)

npm run studio:dev      # run Sanity Studio locally (blog CMS)
npm run studio:deploy   # deploy Sanity Studio
```

There are no automated tests. Verify changes with `npx tsc --noEmit` + `npm run build`.

## Architecture

Next.js 15 App Router, TypeScript, Tailwind. Deployed on Vercel as a **server/ISR app** (the blog uses `revalidate`, OG images render on demand, and `next.config.js` defines `redirects()` — all incompatible with static export).

### Umbrella product routing (path-based)
MolarPlus is an umbrella brand (by Clino Health) with two products, routed by path on one domain:
- `/` — umbrella product-chooser homepage (`app/page.tsx`)
- `/clinic/*` — MolarPlus Clinic (the main product): `features`, `pricing`, `platform`, `find-dentist`. Homepage body is `components/HomeClient.tsx`.
- `/lab` — MolarPlus Lab
- Shared across products: `/about`, `/blog`, `/contact`, legal pages.

There are **no 301 redirects** from the old flat URLs (`/features`, etc.) to `/clinic/*` — this was a deliberate break-and-start-fresh. Don't add them.

`components/Nav.tsx` is **context-aware**: it calls `usePathname()`, detects `umbrella | clinic | lab`, and swaps the product chip, nav links, and CTA destinations accordingly.

### Shared constants (never hardcode these)
- `lib/constants.ts` — `APP_URL` (app.molarplus.com), `LAB_URL` (lab.molarplus.com). Login/signup CTAs point at `${APP_URL}/login`, `${LAB_URL}/login`, etc.
- `lib/seo.ts` — `SITE_URL`, `SITE_NAME`, default metadata, and the `colors` object. **Import colors/brand values from here; never inline hex.** See `STYLE_GUIDE.md` for the full design system (Inter font only, `colors.primary` #2a276e as the single accent, no emojis on umbrella/product pages, restrained "serious medical-SaaS" tone).

### SEO
Per-page Metadata API (title/description/canonical/OG/Twitter), JSON-LD structured data on key pages, `app/sitemap.ts` and `app/robots.ts`. OG images are generated dynamically with `next/og` `ImageResponse` at `app/opengraph-image.tsx` and `app/lab/opengraph-image.tsx`.

### Blog content (two systems — Sanity is current)
- **Current:** Sanity CMS. `app/blog/*` fetches via `lib/sanity.ts` (`getAllBlogPosts`, `getBlogPostBySlug`, …), rendered with `@portabletext/react`. Config in `sanity.config.ts` + `sanity/`. Studio runs via `npm run studio:dev`.
- **Legacy (do not extend):** local MDX in `content/blogs/*.mdx` via `lib/mdx.ts`, and `.tsx` articles in `content/articles/` via `lib/articles.ts`. `scripts/migrate-mdx-to-sanity.mjs` migrated these into Sanity. New posts go in Sanity, not these folders.

### Analytics
Two stacks load from `app/layout.tsx`:
- **Google Analytics** — `components/GoogleAnalytics.tsx` (`NEXT_PUBLIC_GA_ID`).
- **PostHog** — the `analytics/` module (`events.ts` catalog, `track.ts` fail-safe wrapper, `PostHogProvider.tsx`). Shares the **same PostHog project as the MolarPlus app**. Every event carries `source: 'marketing_site'`; all custom marketing events are prefixed `mkt_`. Keep event names in `analytics/events.ts` — don't scatter string literals. Full details in `analytics/README.md`.

### Deployment
**Hosted on Vercel.** The production domain (`www.molarplus.com`) points at Vercel, which **auto-deploys on every push to `main`** — there is no manual deploy step. (Do not deploy this elsewhere; an earlier Railway experiment was removed.)

### Environment
`.env.local` (gitignored) holds `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_POSTHOG_KEY`/`_HOST`, Sanity project vars (`NEXT_PUBLIC_SANITY_*`), and `SANITY_API_WRITE_TOKEN` (migration script only). The `NEXT_PUBLIC_*` vars are **inlined at build time**, so any new one must be added in the **Vercel project settings → Environment Variables** before it takes effect in production — setting it only in `.env.local` affects local dev, not the deployed site.
