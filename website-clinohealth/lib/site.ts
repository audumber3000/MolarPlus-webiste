/**
 * Site-wide facts. Nothing else may hardcode a URL, an address or a
 * phone number — the footer, the contact page, the legal pages and the
 * Organization JSON-LD all read from here, and a number that disagrees
 * with itself across those four is worse than no number at all.
 */
export const SITE = {
  name: 'Clino Health',
  url: 'https://clinohealth.com',
  tagline: 'Healthcare software for Indian practices',
  description:
    'Clino Health builds practice management software for Indian healthcare — MolarPlus for dental clinics and labs, SyrupDesk for retail pharmacies, with a hospital management system and imaging software in development.',
  locale: 'en_IN',
  founded: '2020',
} as const;

export const CONTACT = {
  email: 'hello@clinohealth.app',
  support: 'support@clinohealth.app',
  privacy: 'privacy@clinohealth.app',
  security: 'security@clinohealth.app',
  phone: '+918766742410',
  phoneDisplay: '+91 87667 42410',
  whatsapp: '919594078777',
  hours: 'Monday – Saturday, 9:00 AM – 6:00 PM IST',
  address: {
    street: 'Sky Loft, opposite Golf Course, Shastrinagar, Yerawada',
    city: 'Pune',
    state: 'Maharashtra',
    postalCode: '411006',
    country: 'IN',
    countryName: 'India',
  },
} as const;

/** Build a wa.me deep link with a prefilled first message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

/**
 * Operating figures quoted on the homepage hero and the about page.
 *
 * Review-platform proof does NOT live here — see lib/social-proof.ts.
 * The old static site printed "1,000+ Reviews" and five stars next to
 * three platform names; a star rating is the platform's data about us
 * rather than ours to assert, so it is not restated as a constant.
 */
export const PROOF = {
  clinics: '250+',
  patients: '50,000+',
} as const;
