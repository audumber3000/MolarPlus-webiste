# SyrupDesk — Marketing Site Build Brief

## 0. Context

SyrupDesk is a cloud pharmacy billing and management SaaS for retail pharmacies and
medical stores in India. This brief covers the **public marketing website only** —
the product application UI is a separate later phase.

The category leader is LocalWell (localwell.in). We are a direct competitor. Do **not**
imitate their visual language: they use Material Pink (`#e91e63`) on white with Rubik
type and warm cream section backgrounds. If our page could be mistaken for theirs, we
have failed — we would inherit their positioning and be read as the cheaper clone.

**Buyer profile.** Independent pharmacy owner or proprietor, typically 35–60, in a
tier-2/tier-3 Indian city. Often first-generation software buyer. Frequently browsing on
a mid-range Android phone over patchy 4G. Cares about: GST compliance, not losing money
to expiry, and not needing training to use the thing. Skeptical of enterprise software
that "looks complicated."

Design consequences of that profile, which are non-negotiable:
- Legible type. No small text as a style choice.
- Fast on slow connections. Weight budget matters more than animation polish.
- Plain language. No SaaS abstraction ("leverage synergies", "empower your workflow").
- Mobile is the primary design target, not an adaptation of desktop.

---

## 1. Brand direction

**Positioning adjective set:** trustworthy, plain-spoken, precise, calm.
**Not:** playful, disruptive, energetic, premium.

We are the software equivalent of a well-organised pharmacy counter — everything
labelled, nothing hidden, no upsell theatre.

Green is deliberate: the green cross is the pharmacy signage convention across India,
so the palette reads as *category-native* rather than as an arbitrary brand choice.

---

## 2. Color tokens

Primary brand color is `#005500` (deep green). **Do not use it as the CTA fill.** It sits
at 17% lightness and reads as an anchor/authority color; used on every interactive
element it makes the page feel heavy and inert. Split the roles as below.

Define these as CSS custom properties in a single tokens file. Nothing in the codebase
may hardcode a hex value.

### Green ramp

| Token | Hex | Role |
|---|---|---|
| `--green-900` | `#003300` | pressed / active states |
| `--green-800` | `#004400` | hover on dark brand surfaces |
| `--green-700` | `#005500` | **brand anchor** — logo, headings, dark sections, footer |
| `--green-600` | `#006B00` | primary button hover |
| `--green-500` | `#008000` | **primary CTA fill** |
| `--green-400` | `#2E9E2E` | links and icons on dark backgrounds |
| `--green-300` | `#66BF66` | decorative, illustration accents |
| `--green-200` | `#A3D9A3` | borders, dividers, disabled CTA |
| `--green-100` | `#D6EFD6` | hover on tinted surfaces |
| `--green-50`  | `#F0F7F0` | tinted section backgrounds |

### Neutrals (cool-leaning, to sit correctly beside green)

| Token | Hex | Role |
|---|---|---|
| `--ink-900` | `#111611` | headings |
| `--ink-700` | `#2F362F` | body text |
| `--ink-500` | `#5C665C` | secondary text |
| `--ink-400` | `#8A928A` | muted / captions |
| `--ink-200` | `#DCE1DC` | borders, hairlines |
| `--ink-100` | `#EFF2EF` | subtle fills |
| `--surface`  | `#FFFFFF` | default background |
| `--surface-alt` | `#F7F9F7` | alternating section background |

Do **not** use warm cream (`#f6efe8`-family) backgrounds. Cream goes muddy against
green — that combination is why it works for LocalWell's pink and won't for us.

### Semantic

| Token | Hex | Role |
|---|---|---|
| `--success` | `#0F7B4F` | confirmations |
| `--warning` | `#B26A00` | expiry alerts (a real product concept — use it in UI mockups) |
| `--danger`  | `#B3261E` | errors, destructive |
| `--info`    | `#1B5E8A` | neutral notices |

### Contrast requirements (verified, do not regress)

- `#005500` on `#FFFFFF` → **9.1:1**. Safe for body text at any size.
- White on `#008000` → **5.1:1**. Passes AA for normal text; correct for filled buttons.
- White on `#006B00` → **6.8:1**. Hover state stays compliant.
- `--ink-400` is for non-essential text only; never use it for anything a user must read.

Target WCAG 2.1 AA throughout. Every interactive element needs a visible focus ring —
use a 2px `--green-500` outline with 2px offset, never `outline: none`.

---

## 3. Typography

**Do not use Rubik** — it is the competitor's face and its softness undercuts a
compliance-adjacent product.

Choose a grotesque or neo-grotesque with:
- genuine multi-weight support (400 / 500 / 600 / 700)
- tabular figures (critical — this site shows prices, GST rates, and stock counts)
- Devanagari coverage if available, since Hindi localisation is a likely phase 2

Reasonable candidates: Inter, Instrument Sans, Geist, or IBM Plex Sans. Pick one, use it
everywhere, and self-host the subset via `next/font` — no runtime request to Google Fonts.

### Scale

Base is **16px**, not 14px. The competitor runs 14px body text sitewide and it is a real
legibility problem for a 50-year-old pharmacist on a phone. Our larger base is both an
accessibility win and reads as more confident.

| Role | Desktop | Mobile | Weight | Notes |
|---|---|---|---|---|
| Display / hero | 56px | 36px | 700 | tight tracking (-0.02em) |
| H2 section | 40px | 28px | 700 | |
| H3 | 28px | 22px | 600 | |
| H4 / card title | 20px | 18px | 600 | |
| Body large | 18px | 17px | 400 | hero subcopy |
| **Body** | **16px** | **16px** | 400 | line-height 1.6 |
| Small | 14px | 14px | 400 | captions, helper text |
| Micro | 12px | 12px | 500 | legal, labels — sparingly |

Line length: cap body copy at `65ch`. Line-height 1.6 for body, 1.15–1.2 for display.

---

## 4. Space, radius, elevation

**Spacing scale** (4px base, use only these): 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.

**Radius** — exactly three values. The competitor has eight, which is drift, not a system:
- `--radius-sm: 8px` — inputs, tags, small controls
- `--radius-md: 16px` — cards, panels, images
- `--radius-full: 9999px` — pills and avatars only

**Elevation** — soft and low-opacity, but directional so cards sit on the page rather
than glow:
- `--shadow-sm: 0 1px 2px rgba(17,22,17,.06), 0 1px 3px rgba(17,22,17,.04)`
- `--shadow-md: 0 4px 16px rgba(17,22,17,.06)`
- `--shadow-lg: 0 12px 32px rgba(17,22,17,.10)`

Prefer a 1px `--ink-200` border over a shadow for static content cards. Reserve shadow
for genuinely floating things — dropdowns, sticky bars, modals.

**Breakpoints** — four, not two. The competitor handles only 640 and 768, which leaves
tablets showing a squashed desktop layout; tablets are common at pharmacy counters.

```
sm: 640px    md: 768px    lg: 1024px    xl: 1280px
```

Max content width 1200px, gutters 16px mobile / 24px tablet / 32px desktop.

---

## 5. Components

Build these as reusable primitives before assembling pages.

- **Button** — variants: `primary` (fill `--green-500`, white text), `secondary`
  (outline `--green-700`), `ghost`, `link`. Sizes sm/md/lg. Min tap target **44×44px**.
  Loading and disabled states required.
- **Card** — 1px `--ink-200` border, `--radius-md`, 24px padding. Optional hover lift
  (translateY(-2px) + `--shadow-md`) only when the whole card is clickable.
- **Section** — wrapper handling vertical rhythm (96px desktop / 64px mobile) and
  alternating background (`--surface` / `--surface-alt` / `--green-700` for dark bands).
- **Accordion** — for FAQ. Real `<button>` elements, `aria-expanded`, keyboard operable.
- **Pricing table** — must be readable on a 360px-wide screen. Do not use a horizontally
  scrolling table on mobile; stack into cards instead.
- **Testimonial** — photo, name, pharmacy name, city. City matters for this audience.
- **Stat block** — large tabular-figure number with a label.
- **Navbar** — sticky, condenses on scroll. Mobile: full-screen sheet, not a cramped
  dropdown.
- **Footer** — on `--green-700`, white/`--green-200` text.

---

## 6. Page structure

### Home (`/`)

1. **Hero.** One clear headline naming the outcome, not the feature category. Subcopy
   max two lines. Primary CTA "Start free" + secondary "Talk to us on WhatsApp"
   (WhatsApp is the expected sales channel for this market — treat it as a first-class
   CTA, not an afterthought). Include a real product screenshot, not an abstract
   illustration; this buyer wants to see the actual billing screen.
2. **Trust bar.** Pharmacy count, cities covered, Play Store rating. Keep honest — use
   real numbers or omit the bar entirely until we have them. Placeholder metrics must be
   obviously marked `TODO` in the code, never shipped as if real.
3. **Problem framing.** Three to four pains in the owner's own words: expired stock
   written off, GST filing panic, no idea which customers stopped coming.
4. **Core features.** Six blocks, each with a screenshot: billing and invoicing;
   inventory with expiry alerts; the verified medicine database; purchase-bill import;
   refill reminders and customer insight; GST reports.
5. **Differentiator section.** One capability we do materially better, given full-width
   dark (`--green-700`) treatment. Leave the specific claim as a marked TODO — do not
   invent a competitive claim.
6. **Pricing preview.** Tiers with a link to the full pricing page.
7. **Testimonials.** Three, with photo, pharmacy name, and city.
8. **FAQ.** Six to eight items. Must cover: does it work offline, is it GST compliant,
   can I import my existing stock data, what happens to my data if I stop paying.
9. **Final CTA band.**

### Other pages
`/features`, `/pricing`, `/about`, `/contact`, `/privacy`, `/terms`.
Pricing and Contact are the highest-intent pages — build them to the same finish level
as Home, not as afterthoughts.

---

## 7. Copy rules

- Second person, active voice. "See what's expiring this month," not "Expiry
  visibility is provided."
- Indian English conventions. ₹ with no space. Lakh/crore where natural.
- Name the real jobs: GST R1, expiry write-off, purchase bill entry, refill reminder.
- No fabricated statistics, customer names, testimonials, or awards. Where real content
  is not yet available, write an obvious placeholder marked `TODO:` — never invent
  plausible-looking social proof.
- Avoid: "revolutionise", "seamless", "empower", "cutting-edge", "one-stop solution".

---

## 8. Technical

- **Next.js (App Router) + TypeScript.**
- **Styling:** Tailwind with the tokens above wired into `tailwind.config.ts`, or CSS
  Modules with a `tokens.css`. Either is fine — the requirement is that colors, spacing,
  radius, and shadows exist in exactly one place. No hardcoded hex anywhere in component
  files. This is the single most important structural rule in this brief.
- **Images:** `next/image`, WebP/AVIF, explicit width and height on everything to
  prevent layout shift. Compress aggressively — assume a slow connection.
- **Fonts:** `next/font` with a subset, `display: swap`.
- **Motion:** subtle only — 150–250ms ease-out on hover and reveal. Must respect
  `prefers-reduced-motion`. No parallax, no scroll-jacking, no autoplaying carousels.
- **SEO:** per-page metadata, OpenGraph images, `SoftwareApplication` and `FAQPage`
  JSON-LD, sitemap, robots.txt.
- **Analytics:** leave a single provider-agnostic event helper stubbed. Do not add a
  third-party script without being asked.

### Performance budget
- Lighthouse mobile ≥ 90 on all four categories
- LCP < 2.5s on simulated 4G
- CLS < 0.1
- Total JS < 150KB gzipped on the home route

---

## 9. Accessibility

- WCAG 2.1 AA minimum.
- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1` per page, no
  heading-level skips.
- Visible focus ring on every interactive element.
- All images have meaningful `alt`; decorative images `alt=""`.
- Full keyboard operability, including the mobile nav sheet and the FAQ accordion.
- Test at 200% zoom — the layout must not break.

---

## 10. Deliverables

1. `tokens.css` (or `tailwind.config.ts`) with the complete token set from §2–§4.
2. Component primitives from §5, each with its states.
3. Home page fully built and responsive at 360 / 768 / 1024 / 1440.
4. Remaining pages from §6.
5. A short `DESIGN.md` documenting the tokens and when to use each.

Build mobile-first. Get 360px right before touching desktop.

---

## 11. Explicit anti-requirements

Do not:
- Use `#005500` as the primary button fill (see §2).
- Use Rubik, Material Pink, or cream/peach section backgrounds.
- Set body text below 16px.
- Hardcode a hex value in a component file.
- Ship placeholder statistics, testimonials, or logos that read as real.
- Add a carousel, parallax, or animated counter.
- Use `outline: none` without an equivalent visible focus style.
