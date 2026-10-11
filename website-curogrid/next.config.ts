import type { NextConfig } from "next";

/**
 * Sent with every response. None of these changes what a visitor sees.
 *
 * - HSTS: the browser uses HTTPS for this host for two years. It is not
 *   extended to subdomains from here, because app.curogrid.com is a
 *   separate deployment and should make that promise itself.
 * - nosniff: a file is only ever treated as the type we say it is.
 * - Framing: no other site can put these pages inside a frame, so a
 *   form here cannot be dressed up as someone else's. If a tool needs to
 *   show the site in a frame (a heatmap viewer, for one), add its origin
 *   to `frame-ancestors` and drop X-Frame-Options, which cannot list one.
 * - Referrer: other sites learn the visitor came from curogrid.com, not
 *   which page.
 * - Permissions: the site never asks for the camera, microphone or
 *   location, so no script on it may.
 *
 * There is no full Content-Security-Policy. Next and the structured
 * data both use inline scripts, so a script policy needs a nonce on
 * every request, which would stop the pages being prebuilt.
 */
const SECURITY_HEADERS = [
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

// The same value as SITE.url in lib/site.ts. Repeated here so the
// config file does not depend on application code. Keep the two in step.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://curogrid.com";

const nextConfig: NextConfig = {
  // Do not announce the framework in a response header.
  poweredByHeader: false,
  images: {
    // The screenshots are 2880px PNGs. AVIF first: a UI screenshot is
    // flat colour and text, which AVIF compresses far better than WebP.
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      { source: "/:path*", headers: SECURITY_HEADERS },
      {
        // /pricing.md is the price list again, as Markdown for AI
        // assistants. This tells a search engine that /pricing is the
        // page to show, so the two do not compete.
        source: "/pricing.md",
        headers: [{ key: "Link", value: `<${SITE_URL}/pricing>; rel="canonical"` }],
      },
    ];
  },
};

export default nextConfig;
