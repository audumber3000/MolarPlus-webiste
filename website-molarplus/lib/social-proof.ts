/**
 * Third-party proof. REAL ENTRIES ONLY.
 */

export type Award = {
  /** Review platform, e.g. 'Capterra'. */
  platform: string;
  /** The award itself, e.g. 'Shortlist' or 'Category Leaders'. */
  award: string;
  year: number;
  /** Vendor-supplied artwork, dropped in /public/badges. */
  src: string;
  /** Our profile on that platform. These badges carry an attribution
   *  requirement — the image has to link back to its source. */
  href: string;
};

/**
 * Review-platform awards (Capterra Shortlist, G2 Leader, GetApp
 * Category Leaders, Software Advice FrontRunners, TrustRadius…).
 *
 * Empty on purpose, and not a placeholder to fill with something
 * close enough: these are earned, the artwork is trademarked and
 * issued by the platform, and the terms require the badge to link
 * back to the profile it came from. A lookalike drawn in-house is a
 * fabricated credential.
 *
 * How the list gets filled: one free Gartner Digital Markets vendor
 * listing covers Capterra + GetApp + Software Advice (they share a
 * review pool); G2 and TrustRadius are separate free listings. Badges
 * follow real reviews, awarded on a quarterly cycle.
 */
export const AWARDS: ReadonlyArray<Award> = [];

/**
 * "Featured on" — our listing on each software review platform.
 *
 * This is a weaker, more honest claim than an award badge: it says "you can
 * look us up here", not "we won something". It still has to be TRUE. A logo
 * for a platform we have no listing on is a fabricated credential, and a star
 * rating we did not receive is a false advertisement about a third party.
 *
 * The component renders nothing while this list is empty, so the section
 * appears the moment it is real and never before.
 *
 * ── How to fill this in (about 15 minutes, free) ──────────────────────────
 * 1. Gartner Digital Markets vendor signup covers THREE at once, because they
 *    share a review pool: Capterra, GetApp and Software Advice.
 *      https://www.gartner.com/en/digital-markets/vendor
 * 2. G2 is a separate free listing: https://www.g2.com/products/new
 * 3. Each platform's vendor portal then gives you the official logo/badge
 *    files. Download them from there — that is the licensed source — and drop
 *    them in /public/badges/.
 * 4. Add an entry below. Leave `rating` undefined until real reviews exist;
 *    the card simply shows the logo without stars, which is accurate.
 *
 * Note the platforms' terms require the logo to link back to your profile,
 * which is why `href` is not optional.
 * ──────────────────────────────────────────────────────────────────────────
 */
export type PlatformProfile = {
  /** Display name, doubles as the wordmark text until `src` is supplied. */
  platform: string;
  /**
   * Official logo file from the platform's vendor portal, in /public/badges.
   *
   * Left undefined on purpose right now. These marks are NOT freely
   * downloadable — they are not on Wikimedia Commons, and the real files are
   * handed out through each vendor portal once you have a listing. Until then
   * the component renders a plain typographic wordmark, which is honest and
   * needs no licence. Drop the official file in and set this, and the real logo
   * replaces the wordmark with no other change.
   */
  src?: string;
  /** Brand colour for the wordmark fallback. */
  color: string;
  /** Per-logo Tailwind height, tuned for optical balance. See the note below. */
  heightClass?: string;
  /**
   * Our profile page. Undefined until the listing exists — the wordmark then
   * renders unlinked rather than pointing at a page that says nothing about us.
   * Once set, the link-back also satisfies the platforms' own badge terms.
   */
  href?: string;
  /**
   * Real average once real reviews exist. NEVER fill this in by hand: it is the
   * platform's data about us, not ours, and inventing it is a false statement
   * about a third party. No rating simply means no stars render.
   */
  rating?: number;
  /** Real review count backing `rating`. Same rule. */
  reviewCount?: number;
};

/*
 * Heights are tuned per logo, not shared.
 *
 * These marks arrive at wildly different proportions — Capterra is a 4:1
 * wordmark, Software Advice nearly 8:1, G2 a 1:1 circular icon. A single height
 * class would make the wide ones tower over the rest, so each is set so the
 * LETTERFORMS land at roughly the same optical size. Logos carrying an icon
 * taller than their text (GetApp's diamonds, Product Hunt's circle) get a little
 * more room to compensate.
 *
 * Source files were trimmed to their content bounds so these numbers stay
 * predictable; untrimmed art has invisible padding that breaks the tuning.
 */
export const PLATFORM_PROFILES: ReadonlyArray<PlatformProfile> = [
  {
    platform: 'Capterra',
    color: '#FF9D28',
    src: '/badges/capterra.png',
    heightClass: 'h-7',
  },
  {
    platform: 'GetApp',
    color: '#20C5D4',
    src: '/badges/getapp.png',
    heightClass: 'h-7',
  },
  {
    platform: 'Software Advice',
    color: '#F26C21',
    src: '/badges/software-advice.png',
    heightClass: 'h-5',
  },
  {
    platform: 'Product Hunt',
    color: '#DA552F',
    src: '/badges/product-hunt.png',
    heightClass: 'h-6',
  },
  {
    // Square icon rather than a wordmark, so it gets more height than the
    // others: matched on letterform height it would read as a tiny dot.
    platform: 'G2',
    color: '#FF492C',
    src: '/badges/g2.png',
    heightClass: 'h-9',
  },
];
