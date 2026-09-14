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

/**
 * Real pharmacy owners, in their own words.
 *
 * Empty on purpose, and the section does not render while it is
 * (`components/sections/Testimonials.tsx` returns null). There is
 * deliberately no sample array here to delete later — placeholder
 * social proof that reads as real is the one thing the brief rules
 * out outright (§7), and the reliable way to keep it out of
 * production is for it never to exist in the file.
 *
 * To turn the section on, add entries below. What each one needs:
 *
 * - `quote`     their words, lightly trimmed at most. Do not smooth a
 *               pharmacist's phrasing into marketing English — the
 *               unpolished ones are the ones that get believed.
 * - `name`      the owner, named. We do not run anonymous quotes.
 * - `pharmacy`  the shop's real name.
 * - `city`      this buyer trusts a peer two districts over more than
 *               a national logo wall, so the city is doing real work.
 * - `photo`     optional — drop the file in /public/testimonials and
 *               give its width and height. No photo is fine: the card
 *               falls back to a monogram. Never a stock headshot.
 * - `since`     optional, e.g. "Running SyrupDesk since March 2026".
 *
 * Before adding one, get written permission — a WhatsApp message
 * saying "yes, you can use this on your website with my shop's name"
 * is enough, but it has to exist and it has to be kept.
 */
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

export type PlatformProfile = {
  platform: string;
  /** Logo file in /public/badges. */
  src: string;
  /** Tailwind height class — logos ship at different letterform sizes. */
  heightClass: string;
  /** SyrupDesk's profile on that platform. Paste it once the listing is live. */
  href?: string;
  /** Only ever the platform's own figure, copied from the profile. */
  rating?: number;
  reviewCount?: number;
};

/**
 * "Featured on" — ported from the MolarPlus site, same five platforms,
 * same logo files.
 *
 * TODO: create the SyrupDesk listings and paste each profile URL into
 * `href`. One free Gartner Digital Markets vendor listing covers
 * Capterra, GetApp and Software Advice together; G2 and Product Hunt
 * are separate and also free. Stars and review counts render only when
 * `rating` / `reviewCount` are set — never type those by hand.
 */
export const PLATFORM_PROFILES: ReadonlyArray<PlatformProfile> = [
  { platform: "Capterra", src: "/badges/capterra.png", heightClass: "h-7" },
  { platform: "GetApp", src: "/badges/getapp.png", heightClass: "h-7" },
  { platform: "Software Advice", src: "/badges/software-advice.png", heightClass: "h-5" },
  { platform: "Product Hunt", src: "/badges/product-hunt.png", heightClass: "h-6" },
  // Square icon rather than a wordmark, so it gets more height: matched on
  // letterform height it would read as a dot.
  { platform: "G2", src: "/badges/g2.png", heightClass: "h-9" },
];

/**
 * Pharmacies running on SyrupDesk, for the logo wall.
 *
 * TODO: add customers who have agreed to be shown — name plus a logo
 * file in /public/pharmacies (transparent PNG works best). The wall does
 * not render while this is empty.
 */
export const TRUSTED_PHARMACIES: ReadonlyArray<{ name: string; logo?: string }> = [];

/**
 * Headline pharmacy count for the "Trusted by" section, as supplied by
 * the owner on 2026-09-13. Keep it true: raise it as the number grows and
 * never round it up past what the account list shows.
 */
export const PHARMACY_COUNT = "4,000+";
