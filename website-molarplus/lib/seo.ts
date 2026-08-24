export const SITE_URL = 'https://www.molarplus.com';
export const SITE_NAME = 'MolarPlus';
export const DEFAULT_DESCRIPTION =
  'MolarPlus is the best dental clinic management software for modern practices. Manage appointments, patient records, billing & analytics. Trusted dental software for clinics worldwide.';
export const DEFAULT_KEYWORDS =
  'dental clinic management software, best dental software, dental practice management, clinic management software, dental EHR, appointment scheduling dental';

/**
 * The card rendered by app/opengraph-image.tsx, as an explicit metadata entry.
 *
 * Next only auto-applies that file to a route when the route does not declare
 * its own `openGraph` object. Most pages here do declare one — so they were
 * silently shipping no og:image at all, and shares of /pricing and /features
 * rendered as a bare link. Any page that sets `openGraph` must therefore name
 * an image; this is the default to reach for.
 */
export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: 'MolarPlus, Software for everyone in dentistry. By Clino Health.',
};

export const colors = {
  primary: '#2a276e',
  secondary: '#4a4694',
  dark: '#1a1548',
  light: '#f8f9fa',
  accent: '#6366f1',
  // Marker yellow, for highlighting a word inside a heading. Warm rather than
  // neon so it reads as a highlighter pen next to the indigo, not as a warning.
  highlight: '#fde68a',
} as const;
