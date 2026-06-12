# Marketing-site analytics (PostHog)

The marketing site (`www.molarplus.com`) is instrumented with PostHog using the
**same PostHog project as the MolarPlus app** — same key, same host. We do **not**
run a second project.

## Files

- `events.ts` — the `mkt_*` event catalog + the `MARKETING_SOURCE` constant. All
  marketing event names live here; never scatter string literals.
- `track.ts` — fail-safe `track()` wrapper + typed helpers (`trackSignupStarted`,
  `trackAppStoreClick`, …). Every helper no-ops if PostHog isn't loaded, so
  analytics can never break the page.
- `PostHogProvider.tsx` — `'use client'` bootstrap. Initializes PostHog, registers
  the `source` super-property, and captures `$pageview` on App Router navigations.
  Mounted in `app/layout.tsx`.

## Configuration

Set in `.env.local` (and in Vercel project env):

```
NEXT_PUBLIC_POSTHOG_KEY=<same value the app uses as VITE_POSTHOG_API_KEY>
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

While `NEXT_PUBLIC_POSTHOG_KEY` is empty, PostHog stays fully disabled (no-op) —
the site builds and runs normally. **Ask the project owner for the key** (it is the
exact same value the app uses); do not mint a new one.

## Separation: app vs. marketing

- Every event is stamped with `source: 'marketing_site'` via
  `posthog.register(...)` in `loaded`. Filter/break-down by `source = marketing_site`
  in any insight, and build a dedicated "Marketing" dashboard on it.
- Every custom marketing event is prefixed `mkt_` so it can never collide with the
  app's catalog (`signup_completed`, `patient_created`, …).

## Identity stitching — domain finding

**Same root domain.** Marketing is `www.molarplus.com`; the app is
`app.molarplus.com`; lab is `lab.molarplus.com`. All share the root `molarplus.com`,
so PostHog's cookie is cross-subdomain **by default** (`cross_subdomain_cookie` is
left enabled — do not disable it).

Result: a visitor's anonymous marketing activity automatically links to their user
once the app calls `identify(...)` at signup/login. **No `distinct_id` link-passing
is needed**, and no app-side change is required. This site never calls `identify`
for anonymous visitors — the app owns identify.

This unlocks the full acquisition funnel in PostHog:
`$pageview` (marketing) → `mkt_signup_started` → `signup_completed` (app) →
`onboarding_completed` → first patient.

## Event catalog (wired)

| Event | Where |
|---|---|
| `$pageview` / autocapture | automatic, all pages |
| `mkt_signup_started` `{ location, destination }` | Nav login/signup (clinic + lab), hero CTAs, pricing CTAs |
| `mkt_cta_clicked` `{ location, label }` | Nav "Get Started" (umbrella) |
| `mkt_demo_requested` `{ location }` | homepage "Book a demo" |
| `mkt_contact_submitted` `{ form_id }` | homepage contact form (no raw PII) |
| `mkt_pricing_viewed` | pricing plans mount |
| `mkt_app_store_clicked` / `mkt_play_store_clicked` `{ product }` | Apple / Google badges |
| `mkt_desktop_download_clicked` `{ platform }` | Windows / Mac badges |
| `mkt_faq_expanded` `{ question }` | homepage FAQ accordion (open only) |

`mkt_video_played` is catalogued for future use.
