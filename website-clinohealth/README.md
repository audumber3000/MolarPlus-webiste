# Clino Health — umbrella site

The corporate site for **clinohealth.com**: who Clino Health is, and every brand and app
underneath it. Next.js 15 App Router, TypeScript, Tailwind, fully static.

Rebuilt in August 2026 from the previous hand-written static site in `../website/`, which had
nav and footer markup copy-pasted across six pages and still advertised three brands that no
longer exist..

## Commands

```bash
npm install     # .npmrc sets legacy-peer-deps=true (React 19 peer conflicts)
npm run dev     # http://localhost:3002
npm run build   # production build — all 17 routes prerender
npm start       # serve the build on :3002
npx tsc --noEmit
```

Port 3002 keeps it clear of `website-molarplus` (3000) and `SyrupDesk`.

## The one file that matters

`lib/brands.ts` describes the whole portfolio — every brand and the apps under it. It drives:

- the mega-menu in `components/Nav.tsx`
- the `/products` index and `components/BrandGrid.tsx`
- every `/brands/[slug]` page (via `generateStaticParams`)
- the footer columns and `app/sitemap.ts`
- the `subOrganization` array in the Organization JSON-LD

Adding a brand is one edit there. Nothing else needs touching.

`status: 'development'` is not just a badge — those brands render as plain text instead of
links, because there is no site to send anyone to. Do not flip one to `'live'` before its
`url` actually resolves.

## Routes

| Route | What it is |
|---|---|
| `/` | Home — hero, brands, the healthtech argument, privacy |
| `/products` | Every brand with its four apps |
| `/brands/[slug]` | One brand in depth (4 static pages) |
| `/platform` | How we build — the shared spine under the brands |
| `/about` | Company, story, values |
| `/contact` | WhatsApp / phone / email |
| `/security`, `/privacy`, `/terms` | Trust and legal |

`next.config.js` redirects the old site's brand folders (`/MolarPlus/*`, `/Sonolin/*`,
`/Flexio/*`, `/Clintal/*`, `/bdent/*`) so existing inbound links keep resolving.

## Before this goes live

- **Legal review.** `/privacy` and `/terms` have not been read by a lawyer. Both file headers
  list the blocking gaps — registered entity + CIN, a named Grievance Officer (required under
  the DPDP Act 2023), and the hosting region and sub-processor list.
- **Brand names.** "Hospital Management System" and "Imaging and Diagnostics" are descriptions,
  not brand names. Replace them in `lib/brands.ts` when the real names are decided.
- **Contact form.** The old site had one with no handler that silently dropped every message.
  `/contact` leads with WhatsApp, phone and email instead. If a form is wanted, it needs a real
  endpoint first — see the note in `app/contact/page.tsx`.
- **Analytics.** Not wired up. MolarPlus and SyrupDesk use PostHog; this site has nothing yet.
