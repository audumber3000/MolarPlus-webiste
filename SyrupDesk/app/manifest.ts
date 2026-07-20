import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Web app manifest. Drives the Android "add to home screen" icon and
 * the address-bar theming — relevant here because this buyer is on a
 * mid-range Android phone far more often than a desktop.
 *
 * `purpose: "maskable"` is declared on the 512 only. Android crops
 * maskable icons to whatever shape the launcher uses, so the artwork
 * needs its subject inside the centre 80%; the 192 is left as "any"
 * so a launcher that does not crop still gets an uncropped icon.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — ${SITE.tagline}`,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    // green-700, matching the themeColor in app/layout.tsx.
    theme_color: "#005500",
    lang: "en-IN",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
