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
