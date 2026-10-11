import { SITE } from "@/lib/site";
import { OG_CONTENT_TYPE, OG_SIZE, shareImage } from "@/lib/og";

/**
 * The site's default share image. Pages without one of their own point
 * at this through `buildMetadata` in lib/seo.ts; the speciality, feature
 * and blog pages draw their own from the same template (lib/og.tsx).
 */
export const alt = `${SITE.name}: clinic management software for Indian clinics, set up for your speciality.`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return shareImage({
    title: "Clinic management software that already knows your speciality",
    line: "Tokens, appointments, patient files, prescriptions and bills for Indian clinics.",
  });
}
