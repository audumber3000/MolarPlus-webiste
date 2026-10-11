# Curogrid public website

The public marketing site for Curogrid, at `curogrid.com`. The app itself lives at
`app.curogrid.com`; this site is the public front door.

Curogrid is clinic software for Indian clinics: tokens and the waiting line, appointments,
patient files, prescriptions, billing, stock, reports, and a phone app for the whole staff. It
sets itself up for the clinic's speciality. It is used by the doctor, the compounder and the
sister, so the product and the site use plain words.

Next.js 16 (App Router), React 19, TypeScript, Tailwind 4. Every page is prebuilt as static HTML;
only `/api/contact` runs on the server. `AGENTS.md` warns that this Next version differs from
older ones: read `node_modules/next/dist/docs/` before changing framework code.

## Commands

```bash
npm install
npm run dev      # http://localhost:3003 (3003 so it runs beside the other sites)
npm run build    # production build
npm run lint     # eslint
npx tsc --noEmit # typecheck (there is no test suite)
```

## Where things are

| Path | What it holds |
|---|---|
| `lib/specialities.ts` | **The single source of truth for specialities.** See below. |
| `content/pricing.ts` | Plans and prices. Mirrors `core/plans.py` in the app repo. |
| `content/features.ts` | The four feature pages and the smaller feature list. |
| `content/faq.ts` | General questions for home, pricing and `/faq`. |
| `content/legal.ts` | The four legal pages. **Read its header before editing or launching.** |
| `content/blog/` | Blog posts, as typed data in the repo (`guides.ts`, `specialities.ts`). |
| `content/pages.ts` | Copy shared by a page and its Markdown twin (home facts, mobile, hospital, about). |
| `content/markdown.ts` | Builds `/llms-full.txt`, `/pricing.md`, `/features.md` and `/faq.md` from the data files. |
| `lib/site.ts` | Name, URLs, phone, WhatsApp, address, social and store links. |
| `lib/routes.ts` | Every public page. Feeds `sitemap.xml`, `/sitemap` and `llms.txt`. |
| `lib/seo.ts`, `lib/jsonld.ts` | Page metadata and structured data builders. |
| `lib/shots.ts` | The screenshots, each with its alt text. |
| `app/[speciality]/page.tsx` | One template that renders every speciality page. |
| `design/tokens.css` | The app's design tokens, copied from the app repo. Never type a hex. |

## Specialities

Each speciality has a landing page at the site root, such as
`/physiotherapy-clinic-management-software`. All of them are rendered by
`app/[speciality]/page.tsx` from `lib/specialities.ts`. The header menu, the homepage grid,
`/specialities`, the footer, the sitemap and `llms.txt` read the same file, so **adding a
speciality is one entry there** and nothing else.

Every list in that file (services, prices, medicines, tests, procedures, how a course is booked)
is copied from the app repo. The file's header names the exact source files. When the app
changes, change the site; a page that promises something the app no longer does is a broken
promise to a doctor on day one.

The app supports ten specialities. Six have pages. The other four (eye, orthopaedics, general
surgery, diabetes) are in `ALSO_SUPPORTED` and are named on the site without a link. Eye clinics
are the largest group without a page and should be next.

Any root URL that is not a listed speciality returns 404 (`dynamicParams = false`).

## Rules for this site

- **Only real screenshots.** No drawn dashboards. Screenshots come from `lib/shots.ts`.
- **No invented numbers.** No customer counts, ratings, testimonials or logos until real ones exist.
- **Say what it does not do.** Hospital inpatient work is not built; `/hospitals` says so.
- **Plain words.** Token, waiting line, still to pay. Write for the compounder as well as the doctor.
- **Tokens only.** Colours come from `design/tokens.css` through Tailwind (`bg-teal-600`).
  The two exceptions are the share image and the browser theme colour, which cannot read CSS.
- **Square corners.** `rounded-sm` (3px) and `rounded-md` (4px). Only the phone frame is round.

## Before the site goes live

These are marked `TODO (blocks launch)` in `lib/site.ts` or in `content/legal.ts`:

1. Confirm the domain and the app address.
2. Confirm the phone and WhatsApp numbers. The shared Clino Health numbers are used as a stand-in.
3. Create the `support@curogrid.com` mailbox.
4. Set `CONTACT_WEBHOOK_URL`. Until then the forms say they are not connected and point to WhatsApp.
5. Add the social profile links and the store links (`SOCIAL`, `APP_LINKS`). Store badges stay
   out of the footer until one is set.
6. Have a lawyer review the legal pages, decide the refund terms, then remove `index: false`
   from `/privacy`, `/terms` and `/refund-policy` and from `lib/routes.ts`.
7. Re-check the hosting facts on `/security` against the live AWS account.
8. Retake screenshots for each speciality (see below), so a physiotherapy page shows a
   physiotherapy clinic.
9. Set `NEXT_PUBLIC_POSTHOG_KEY` for analytics.

## Assets in `public/`

| Path | What | Count |
|---|---|---|
| `logo.svg`, `logo-reversed.svg`, `mark.svg` | The logo for light and dark backgrounds, and the mark alone | 3 |
| `favicon.*`, `icon-*.png`, `apple-touch-icon.png`, `og-image-1200x630.png`, `site.webmanifest` | Browser and share icons | 10 |
| `brand/01-logo`, `02-mark`, `03-app-icons` | The full logo kit, SVG and PNG, with its `README.md` (colours, clear space, what not to do) | 44, plus an overview sheet |
| `screenshots/web/` | The web app at desktop size: dashboard, today, appointments, patients, patient file, billing | 6 |
| `screenshots/tablet/` | The same screens on an iPad | 6 |
| `screenshots/phone-android/` | The phone app on Android: home, today, line, appointments, patients, patient file, bills | 7 |
| `screenshots/phone-ios/` | The phone app on iPhone | 6 |
| `store/` | Finished store pictures with headlines and doctor photos: Google Play, App Store (iPhone and iPad), desktop, and a contact sheet | 26 |
| `photos/` | Five doctor photographs from Unsplash, with `CREDITS.md` | 5 |
| `elements/` | Small brand shapes used in the store pictures: cross, pill, ticket | 3 |
| `badges/` | The official Google Play, App Store and Microsoft badges | 4 |

## Before these go on a public page

- **`design/screenshots-not-for-publishing/in-progress/` is kept out of `public/` on purpose.** Anything in `public/` is served to the world at its URL, linked or not. Those pictures come from test runs, with
  test clinic names ("Roles Clinic", "Devices Clinic") and an emulator's device name. Retake them
  on the staged clinic first.
- **The four clean screenshot sets show made-up data.** The clinic is "Sanjeevani Clinic" and
  every patient is invented. Safe to publish.
- **The doctor photos are unverified.** `photos/CREDITS.md` records where each came from. Who the
  people are, and whether they signed a model release, has not been checked. Do not put a name or
  a quote beside any of them.
- **The store badges are the official artwork.** Never redraw them. A badge becomes a link when
  its URL is set in `APP_LINKS` in `lib/site.ts`.
- **The clean screenshots show a general clinic.** No speciality has its own set yet. Stage a
  clinic of each kind and retake them, using the store-listing tools in the Curogrid repo.

## Where the assets come from

Refresh from the Curogrid repo (`~/Developer/curogrid`) rather than editing copies here:

- Logos and icons: `CuroGrid-Logo-Kit/`
- Screenshots and store pictures: `marketing/store-listing/` (`captures/` and `out/`; its
  `README.md` explains how to stage the clinic and retake them)
- Colour tokens: `curogrid-app/src/ui/tokens.css`

## Brand in short

- Typeface: Plus Jakarta Sans for everything; JetBrains Mono for IDs and numbers.
- Colour: dark teal (`teal-900`) for headers and the side menu, teal-600 for primary buttons,
  grey and white for everything else. Use the tokens in `design/tokens.css`; never type a hex.
- Shape: square or very slightly rounded corners. No big rounded cards.
- A named service (WhatsApp, Google) gets its real logo, never a look-alike icon.
