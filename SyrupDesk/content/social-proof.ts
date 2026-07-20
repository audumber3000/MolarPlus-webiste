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
