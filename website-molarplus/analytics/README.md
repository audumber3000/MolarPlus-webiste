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

## The acquisition funnel

The live funnel definition, in order. Steps 3–6 fire in the **app** repo
(`xpress-scan/frontend`), which registers `source: 'app'` as its counterpart
super-property.

| # | Step | Event | Fired by |
|---|---|---|---|
| 1 | Landed | `$pageview` | marketing |
| 2 | Clicked to app | `mkt_signup_started` | marketing |
| 3 | Reached signup | `$pageview` on `/signup` | app (`capture_pageview: true`) |
| 4 | Account created | `signup_completed` | app — `Signup.jsx`, `googleRedirectAuth.js` |
| 5 | Onboarded | `onboarding_completed` | app — `ClinicOnboarding.jsx` |
| 6 | Activated | `patient_created` | app — 4 manual paths + import |

Step 3 exists deliberately. `mkt_signup_started` is a *click*, and a browser can
drop an in-flight request while navigating cross-domain, so treat step 2 as
diagnostic ("which CTA earns clicks") and step 3 as the authoritative one. It also
separates a broken/slow hand-off (2→3 drop) from an abandoned signup form (3→4).

**Do not add `mkt_pricing_viewed` as a funnel step.** Every step in a PostHog
funnel is mandatory, so that would count everyone who signed up without opening
pricing as a drop-off. Use it as a *filter* on the funnel instead.

## Content attribution (where visitors come from)

`captureFirstTouch()` in `track.ts` runs on the first `$pageview` and records
**set-once person properties**:

- `first_touch_type` — `blog | clinic | lab | umbrella | other`
- `first_touch_blog_slug` — which post, when the entry was a blog page

Person properties are stored server-side and survive the app's `identify()` merge
at signup, so `signup_completed` can be broken down by `first_touch_type` even
though the property was set days earlier on a different domain. A super-property
or `sessionStorage` value would not survive that journey. Set-once means the first
landing page wins forever, which is what first-touch attribution means.

PostHog already captures `$initial_pathname`, `$initial_referrer` and
`$initial_utm_*` automatically — we add only the semantic bucket and the slug,
which are far easier to break down by than raw URL strings.

## Event catalog (wired)

| Event | Where |
|---|---|
| `$pageview` / autocapture | automatic, all pages |
| `mkt_signup_started` `{ location, destination, product }` | **every** app hand-off: Nav, hero, pricing, all server-rendered pages via `SignupLink`, and the in-article blog CTA (`location: 'blog_post'`) |
| `mkt_cta_clicked` `{ location, label }` | Nav "Get Started" (umbrella) |
| `mkt_demo_requested` `{ location }` | homepage "Book a demo" |
| `mkt_contact_submitted` `{ form_id }` | homepage contact form (no raw PII) |
| `mkt_pricing_viewed` | pricing plans mount |
| `mkt_blog_post_viewed` `{ slug, title, category }` | blog post page mount |
| `mkt_blog_post_read` `{ slug, category }` | blog post scrolled ≥50% after ≥10s (or 30s dwell on unscrollable posts) |
| `mkt_app_store_clicked` / `mkt_play_store_clicked` `{ product }` | Apple / Google badges |
| `mkt_desktop_download_clicked` `{ platform }` | Windows / Mac badges |
| `mkt_faq_expanded` `{ question }` | homepage FAQ accordion (open only) |

`mkt_video_played` is catalogued for future use.

## Adding a tracked CTA to a Server Component

Most pages here are Server Components and cannot pass `onClick`. Use
`components/TrackedCTA.tsx`:

```tsx
<SignupLink href={`${APP_URL}/signup`} location="features" className="…">
  Start free
</SignupLink>
```

Add any new `location` value to the `CtaLocation` union in `events.ts` — it is a
closed union, so `npx tsc --noEmit` will fail until you do. That is intentional:
it stops untyped location strings from drifting into the funnel.
