/**
 * Review-platform listings shown on the site.
 *
 * Ported from website-molarplus/lib/social-proof.ts, including its rules,
 * because the two sites make claims about the same company and must not
 * contradict each other. The logo files in /public/badges are the same
 * official assets that site uses.
 *
 * Two rules carried over verbatim, and they are the point of this file:
 *
 *  1. `rating` and `reviewCount` are the PLATFORM'S data about us, not
 *     ours. They are never written by hand. An invented average is a
 *     false statement about a third party, and for software that holds
 *     patient records it is the exact claim that fails at procurement.
 *     No rating simply means no stars render, which is honest.
 *
 *  2. `href` stays undefined until the listing actually exists. These
 *     platforms' terms require a logo to link back to the profile it
 *     represents, so a logo with nowhere to point is a logo we should
 *     not yet be showing.
 *
 * SourceForge is deliberately absent. The old static site listed it, but
 * there is no SourceForge asset in the MolarPlus badge set and no listing
 * behind it — so there was nothing to port, only a name to drop.
 */
export type PlatformProfile = {
  /** Display name, doubles as the wordmark text if `src` is missing. */
  platform: string;
  /** Official logo from the platform's vendor portal, in /public/badges. */
  src?: string;
  /** Brand colour for the wordmark fallback. */
  color: string;
  /** Per-logo height. These marks arrive at wildly different proportions —
   *  Capterra is a 4:1 wordmark, G2 a 1:1 circular icon — so a shared
   *  height would make the wide ones tower over the rest. Each is tuned so
   *  the letterforms land at the same optical size. */
  heightClass?: string;
  /** Our profile page. See rule 2 above. */
  href?: string;
  /** Real average once real reviews exist. See rule 1 above. */
  rating?: number;
  /** Real review count backing `rating`. Same rule. */
  reviewCount?: number;
};

export const PLATFORM_PROFILES: ReadonlyArray<PlatformProfile> = [
  { platform: 'Capterra', color: '#FF9D28', src: '/badges/capterra.png', heightClass: 'h-7' },
  { platform: 'GetApp', color: '#20C5D4', src: '/badges/getapp.png', heightClass: 'h-7' },
  {
    platform: 'Software Advice',
    color: '#F26C21',
    src: '/badges/software-advice.png',
    heightClass: 'h-5',
  },
  { platform: 'Product Hunt', color: '#DA552F', src: '/badges/product-hunt.png', heightClass: 'h-6' },
  {
    // Square icon rather than a wordmark, so it gets more height than the
    // others: matched on letterform height it would read as a tiny dot.
    platform: 'G2',
    color: '#FF492C',
    src: '/badges/g2.png',
    heightClass: 'h-9',
  },
];
