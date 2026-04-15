# MolarPlus Website — Style Guide

> Single source of truth for all design decisions. Every new component or page must follow this guide.

---

## 1. Brand Colors

These are defined in `lib/seo.ts` as the `colors` object. Always import from there — never hardcode hex values inline.

```ts
import { colors } from '@/lib/seo';

colors.primary   // #2a276e  — Main CTA buttons, active states, accent icons
colors.secondary // #4a4694  — Hover states, secondary buttons
colors.dark      // #1a1548  — Footer background, dark sections
colors.light     // #f8f9fa  — Light section backgrounds
colors.accent    // #6366f1  — Badges, highlights (use sparingly)
```

### Extended Palette (Tailwind classes — approved for use)

| Role | Class | Notes |
|---|---|---|
| Page background | `bg-white` | Default |
| Alternate section bg | `bg-slate-50` / `bg-gray-50` | Every other section |
| Hero gradient | `bg-gradient-to-br from-blue-50/50 via-white to-white` | Hero sections only |
| Dark section | `bg-[#1a1548]` | Footer, final CTA sections |
| Text primary | `text-[#1a1c4b]` | All headings |
| Text body | `text-gray-600` | Body paragraphs |
| Text muted | `text-gray-400` / `text-blue-100/60` | Secondary text, captions |
| Border default | `border-gray-100` | Cards, dividers |
| Border hover | `border-blue-100` | Card hover state |

### Brand Green (Clino Health sub-brand)
- `#73a942` — "Clino" part of logo
- `#245501` — "Health" part of logo
- **Do not use these for general UI.** Only for the sub-brand label under the logo.

---

## 2. Typography

**Font:** Inter (loaded via `next/font/google` in `app/layout.tsx`) — do not add other fonts.

### Scale

| Element | Class |
|---|---|
| H1 (page hero) | `text-5xl md:text-6xl font-bold text-gray-900` |
| H1 (homepage hero) | `text-4xl md:text-5xl font-extrabold text-[#1a1c4b] leading-[1.1]` |
| H2 (section heading) | `text-4xl md:text-5xl font-extrabold text-[#1a1c4b]` |
| H3 (card/feature title) | `text-2xl font-bold text-[#1a1c4b]` |
| H3 (small card) | `text-xl font-bold text-[#1a1c4b]` |
| Body large | `text-xl text-gray-600 leading-relaxed` |
| Body default | `text-lg text-gray-600` |
| Body small | `text-sm text-gray-600` |
| Caption / label | `text-xs font-bold uppercase tracking-wider text-gray-500` |
| Badge text | `text-sm font-bold text-blue-900 uppercase tracking-wider` |

**Rules:**
- Headings always use `text-[#1a1c4b]` (not `text-gray-900`) — keeps brand consistency
- `font-extrabold` for homepage section headings, `font-bold` for inner page headings
- Never use `font-black` or weights below `font-medium` for UI text

---

## 3. Spacing & Layout

### Page Container
```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```
Use this on every section. Never deviate from this max-width.

### Section Padding
| Type | Class |
|---|---|
| Standard section | `py-24` |
| Hero/header section | `pt-12 pb-16` |
| Page top (below fixed nav) | `pt-20` (compensates for 80px nav height) |
| Tight section | `py-16` |

### Grid Layouts
| Use case | Class |
|---|---|
| 3-column features | `grid md:grid-cols-2 lg:grid-cols-3 gap-8` |
| 2-column content | `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center` |
| Footer | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12` |
| 3-column stats | `grid grid-cols-1 md:grid-cols-3 gap-8` |

---

## 4. Components

### Buttons

**Primary CTA (dark navy — main action)**
```html
<a class="px-10 py-5 bg-[#2a276e] text-white rounded-2xl font-bold text-lg hover:bg-[#1a184e] transition-all shadow-xl hover:shadow-2xl flex items-center">
  Get Started
</a>
```

**Primary CTA (using colors object — preferred)**
```tsx
<a style={{ backgroundColor: colors.primary }} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-medium text-white transition-colors hover:opacity-90">
  Start Free Trial
</a>
```

**Secondary CTA (ghost/outline)**
```html
<a class="px-10 py-5 bg-white text-gray-900 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-sm">
  Book a Demo
</a>
```

**Outline on dark background**
```html
<a class="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors">
  Contact Sales
</a>
```

**Rules:**
- Primary button: `rounded-2xl` for homepage, `rounded-lg` for inner pages
- Always include transition class
- Never use `rounded-full` for action buttons (reserved for badges)
- Hover state must be defined — no bare hover-less CTAs

### Cards

**Feature card (standard)**
```html
<div class="p-10 rounded-3xl border border-gray-100 hover:border-blue-100 hover:bg-white hover:shadow-2xl transition-all group">
  <!-- Icon wrapper -->
  <div class="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
    <!-- Icon: w-7 h-7 text-blue-600 -->
  </div>
  <h3 class="text-xl font-bold text-[#1a1c4b] mb-3">Title</h3>
  <p class="text-gray-600">Description</p>
</div>
```

**Stat card**
```html
<div class="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
  <div class="text-4xl font-bold mb-2" style="color: #2a276e">70%</div>
  <p class="text-gray-600">Description</p>
</div>
```

**Rules:**
- Cards use `rounded-3xl` for feature cards, `rounded-xl` for stat/info cards
- Icon containers: `rounded-2xl` (large cards) or `rounded-xl` (small cards)
- Always use `group` + `group-hover:scale-110` on icon containers for hover delight
- Padding: `p-10` for feature cards, `p-8` for stat cards

### Badges / Pills
```html
<div class="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
  <span class="text-xl">🦷</span>
  <span class="text-sm font-bold text-blue-900 uppercase tracking-wider">label text</span>
</div>
```

### Section Headers (centered)
```html
<div class="text-center mb-16 space-y-4">
  <h2 class="text-4xl md:text-5xl font-extrabold text-[#1a1c4b]">Section Title</h2>
  <p class="text-xl text-gray-600 max-w-3xl mx-auto">Supporting description text</p>
</div>
```

---

## 5. Icons

**Library:** `lucide-react` only. Do not introduce other icon sets.

| Context | Size |
|---|---|
| Feature card icon (inside colored container) | `w-8 h-8` (large card) / `w-7 h-7` (small card) |
| Inline text icon | `w-5 h-5` |
| Nav icon | `w-5 h-5` |
| Hero/large decorative | `w-12 h-12` |
| CTA arrow | `w-5 h-5` (use `ArrowRight` or `ChevronRight`) |

**Color rules:**
- Inside blue bg containers: `text-blue-600`
- On dark/primary bg: `text-white`
- Body icons (checkmarks, etc.): use `style={{ color: colors.primary }}`

---

## 6. Section Alternation

Sections should alternate backgrounds to create visual rhythm:

```
Section 1: bg-white
Section 2: bg-slate-50 (or bg-gray-50)
Section 3: bg-white
Section 4: bg-slate-50
...
Final CTA: bg-[#1a1548] (dark)
```

**Never put two `bg-white` sections back-to-back without a visible divider or significant spacing.**

---

## 7. Navigation

- Fixed top nav, `h-20` (80px), `bg-white/98 backdrop-blur-md`
- All inner pages must start with `pt-20` on the outermost container
- Nav links: `text-gray-700 hover:text-blue-600 font-medium`
- Active/hover color: `text-blue-600`

---

## 8. Footer

- Background: `bg-[#1a1548]` (main), `bg-[#120e3a]` (copyright bar)
- Text: `text-white` headings, `text-blue-100/60` links, `text-blue-100/30` copyright
- Social icons: `w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20`
- Logo in footer: always use `brightness-0 invert` filter to make it white

---

## 9. Images & Media

- Logo file: `/molarplus-logo-transparent.svg`
- In nav: `h-11 w-auto`
- In footer: `h-14 w-auto brightness-0 invert`
- Hero mockup: `/mockup-hero.png`
- Mobile screens: `/mobileScreens/*.png`
- Always provide `alt` text on every image
- Use `drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]` for hero device mockups

---

## 10. Responsive Breakpoints

| Breakpoint | Usage |
|---|---|
| Default (mobile) | Single column, stacked layout |
| `sm:` (640px) | Flex row for button groups |
| `md:` (768px) | 2-col grids, show desktop nav |
| `lg:` (1024px) | 3-col grids, full layout |

**Mobile-first always.** Write base styles for mobile, then override with `md:` / `lg:`.

---

## 11. Animations & Transitions

- Hover transitions: `transition-all` or `transition-colors` (always specify)
- Duration: default (150ms) unless explicitly needed — don't add `duration-300` unless purposeful
- Hover lift: `hover:-translate-y-0.5 active:translate-y-0` (buttons only)
- Scale hover: `hover:scale-105` (images, badges), `group-hover:scale-110` (icon containers)
- Never use `animate-*` classes except `animate-pulse` for status indicators

---

## 12. Page Structure Template

Every new page should follow this structure:

```tsx
export default function PageName() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* 1. JSON-LD structured data */}
      
      {/* 2. Hero / Header */}
      <section className="pt-12 pb-16 bg-gradient-to-br from-blue-50 to-white">
        ...
      </section>

      {/* 3. Main content sections (alternating bg) */}
      <section className="py-24 bg-white">...</section>
      <section className="py-24 bg-slate-50">...</section>

      {/* 4. Final CTA */}
      <section className="py-16 text-white" style={{ backgroundColor: colors.primary }}>
        ...
      </section>
    </div>
  );
}
```

---

## 13. SEO Conventions

- Every page exports `metadata` with `title`, `description`, `keywords`, `alternates.canonical`, `openGraph`
- Title format: `"Page Title - MolarPlus | Dental Clinic Management Software"` or use layout template `%s | MolarPlus`
- Every page should have a relevant JSON-LD block (Product, WebPage, FAQPage, etc.)
- Import `SITE_URL`, `SITE_NAME`, `DEFAULT_DESCRIPTION` from `@/lib/seo`

---

## 14. Do's and Don'ts

| Do | Don't |
|---|---|
| Import `colors` from `@/lib/seo` | Hardcode `#2a276e` or other brand hex values |
| Use `text-[#1a1c4b]` for headings | Use `text-gray-900` for headings |
| Alternate section backgrounds | Stack two `bg-white` sections |
| Use `lucide-react` icons only | Mix icon libraries |
| `rounded-3xl` for feature cards | Use `rounded-full` for cards |
| `Inter` font (already loaded) | Add new Google Fonts |
| `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` wrapper | Skip the container or use different max-width |
| Write mobile-first styles | Style desktop first and override for mobile |
