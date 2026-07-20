/**
 * Site-wide constants. Nothing else should hardcode a URL, phone
 * number or brand string.
 */

export const SITE = {
  name: "SyrupDesk",
  /** Parent company. SyrupDesk is a Clino Health product, the same
   *  house as MolarPlus — carried in metadata, JSON-LD and the
   *  nav/footer lockup. */
  parent: "Clino Health",
  /** TODO: confirm production domain before launch. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://syrupdesk.com",
  tagline: "Pharmacy management software for Indian medical stores",
  description:
    "SyrupDesk is cloud pharmacy management software for retail pharmacies in India — billing, inventory and expiry, purchases, customers and GST in one system. By Clino Health.",
  locale: "en_IN",
  /** Shared Clino Health support line — the same team answers
   *  SyrupDesk and MolarPlus. */
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "919594078777",
  phone: process.env.NEXT_PUBLIC_SUPPORT_PHONE ?? "+918766742410",
  /** Displayed form of the above. */
  phoneDisplay: "+91 87667 42410",
  /** TODO (blocks launch): create support@syrupdesk.com and forward it
   *  to the Clino Health support inbox. Until that alias exists this
   *  address does not receive mail. Do not ship the page without it. */
  email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@syrupdesk.com",
  /** Clino Health HQ. */
  address: {
    street: "Sky Loft, opposite Golf Course, Shastrinagar, Yerawada",
    city: "Pune",
    state: "Maharashtra",
    postalCode: "411006",
    country: "IN",
  },
  /** TODO: point at the real app once the product ships. */
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.syrupdesk.com",
} as const;

/** Single-line address for display. */
export const ADDRESS_LINE = `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.postalCode}`;

export const SIGNUP_URL = `${SITE.appUrl}/signup`;
export const LOGIN_URL = `${SITE.appUrl}/login`;

/** Pre-filled WhatsApp deep link. WhatsApp is the expected sales
 *  channel for this market, so it is a first-class CTA. */
export function whatsappLink(message = "Hi, I run a pharmacy and want to know more about SyrupDesk.") {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
