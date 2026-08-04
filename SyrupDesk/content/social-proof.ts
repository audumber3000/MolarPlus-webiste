import type { TestimonialData } from "@/components/ui/Testimonial";

/**
 * REAL CONTENT ONLY.
 *
 * The brief forbids shipping placeholder statistics or testimonials
 * that read as real. Both arrays below are empty on purpose: the
 * trust bar and the testimonial section do not render at all until
 * someone puts genuine data here. Nothing fake can reach production
 * by accident.
 */

/** TODO: add real numbers once we have them (pharmacy count, cities
 *  covered, Play Store rating). Until then the trust bar is hidden. */
export const TRUST_STATS: ReadonlyArray<{ value: string; label: string }> = [];

/** TODO: add real customers with written permission — quote, name,
 *  pharmacy name, city, and a photo in /public/testimonials. */
export const TESTIMONIALS: ReadonlyArray<TestimonialData> = [];

export type Award = {
  /** Review platform, e.g. "Capterra". */
  platform: string;
  /** The award itself, e.g. "Shortlist" or "Category Leaders". */
  award: string;
  year: number;
  /** Vendor-supplied artwork, dropped in /public/badges. */
  src: string;
  width: number;
  height: number;
  /** Our profile on that platform. These badges carry an attribution
   *  requirement — the image has to link back to the source. */
  href: string;
};

/**
 * Review-platform awards (Capterra Shortlist, G2 Leader, GetApp
 * Category Leaders, Software Advice FrontRunners, TrustRadius…).
 *
 * Empty, and it is not a placeholder waiting to be filled with
 * something approximate: these are *earned*, the artwork is
 * trademarked and issued by the platform, and the terms require the
 * badge to link back to the profile it came from. Drawing a
 * lookalike is a fabricated credential — the same rule the arrays
 * above are under.
 *
 * The route to filling this in: one free Gartner Digital Markets
 * vendor listing covers Capterra + GetApp + Software Advice (shared
 * review pool); G2 and TrustRadius are separate free listings. Badges
 * follow real reviews, on a quarterly cycle.
 */
export const AWARDS: ReadonlyArray<Award> = [];
