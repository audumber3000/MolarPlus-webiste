/**
 * Site-wide constants. Nothing else should hardcode a URL, phone
 * number or brand string.
 *
 * Several values here are still to be confirmed before the site goes
 * live. Each is marked TODO (blocks launch). `README.md` lists them.
 */

export const SITE = {
  name: "Curogrid",
  /** Parent company. Curogrid is a Clino Health product, the same
   *  house as MolarPlus and SyrupDesk. */
  parent: "Clino Health",
  parentUrl: "https://clinohealth.com",
  /** Sister product for dental clinics. Curogrid has no dental
   *  template on purpose, so dentists are sent here. */
  dentalUrl: "https://www.molarplus.com",
  /** TODO (blocks launch): confirm the production domain. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://curogrid.com",
  tagline: "Clinic management software for Indian clinics",
  description:
    "Curogrid is clinic management software for Indian clinics: tokens and the waiting line, appointments, patient files, prescriptions, billing and stock, on the web and on the phone. It sets itself up for your speciality.",
  locale: "en_IN",
  /** TODO (blocks launch): these are the shared Clino Health support
   *  numbers, used as a stand-in. Confirm them, or set Curogrid's own. */
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "919594078777",
  phone: process.env.NEXT_PUBLIC_SUPPORT_PHONE || "+918766742410",
  phoneDisplay: "+91 87667 42410",
  /** TODO (blocks launch): create this mailbox. Until it exists the
   *  address does not receive mail. */
  email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@curogrid.com",
  /** Clino Health HQ. TODO (blocks launch): confirm this is the
   *  address to publish for Curogrid. */
  address: {
    street: "Sky Loft, opposite Golf Course, Shastrinagar, Yerawada",
    city: "Pune",
    state: "Maharashtra",
    postalCode: "411006",
    country: "IN",
  },
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.curogrid.com",
} as const;

/**
 * Public profile URLs. The same list feeds the footer, the contact page
 * and the `sameAs` array in the Organization JSON-LD, which is how a
 * search engine ties the accounts to Curogrid. A wrong URL there is a
 * broken claim, so the list is empty until real profiles exist.
 *
 * TODO: add each profile's public URL once the account is created.
 */
export type SocialName = "LinkedIn" | "Instagram" | "Facebook" | "YouTube";
export const SOCIAL: ReadonlyArray<{ name: SocialName; handle: string; href: string }> = [];

/**
 * When the product facts on the site (services, prices, lists, plans)
 * were last checked against the app. Shown on the speciality and
 * pricing pages. Change it only when you have actually re-checked.
 */
export const FACTS_CHECKED = { iso: "2026-10-11", text: "11 October 2026" } as const;

export const ADDRESS_LINE = `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.postalCode}`;

/**
 * Store links for the download badges.
 *
 * `null` means not listed yet. The badge still renders, but is not a
 * link, so launch day is a URL paste here and nothing else.
 */
export const APP_LINKS: {
  playStore: string | null;
  appStore: string | null;
  windows: string | null;
} = {
  playStore: null,
  appStore: null,
  windows: null,
};

export const SIGNUP_URL = `${SITE.appUrl}/signup`;
export const LOGIN_URL = `${SITE.appUrl}/login`;

/** Pre-filled WhatsApp deep link. WhatsApp is how a clinic expects to
 *  reach a vendor, so it is a first-class button. */
export function whatsappLink(message = "Hi, I run a clinic and want to know more about Curogrid.") {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Header links, after the Specialities menu. */
export const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/mobile-app", label: "Mobile app" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
] as const;
