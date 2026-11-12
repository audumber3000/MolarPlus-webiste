/**
 * Real proof only: clinics that run on Curogrid and what their doctors
 * said. Nothing here is a sample (those are in proof.sample.ts and never
 * reach the built site).
 *
 * The `confirmed` and `consent` fields are required on purpose: an entry
 * cannot be added without a record of who agreed to it, when and how.
 * Logos live in public/customers/<word>/ as transparent PNGs. Do not add a
 * clinic because its logo is in public/clients/: those files were copied
 * from the clinics' own websites and none is a customer.
 *
 * The order inside a speciality matters: the homepage shows the first two.
 */
export type Client = {
  /** A speciality key from lib/specialities, or "general" when it is not one speciality. */
  speciality: string;
  name: string;
  city?: string;
  /** A logo file the clinic itself gave us, under public/. */
  logo?: string;
  confirmed: { date: string; via: string };
};

export type Testimonial = {
  speciality: string;
  quote: string;
  name: string;
  role: string;
  clinic: string;
  city: string;
  photo?: string;
  consent: { date: string; via: string };
};

/** Clinics and logos the owner supplied as current customers. */
const OWNER_11_NOV = { date: "2026-11-11", via: "Owner supplied the logo as a current Curogrid customer" } as const;
const OWNER_LOGO = { date: "2026-11-12", via: "Owner supplied the logo as a current Curogrid customer" } as const;

export const CLIENTS: ReadonlyArray<Client> = [
  {
    speciality: "physiotherapy",
    name: "O3 Physio Clinic",
    logo: "/customers/physio/o3-physio-clinic.png",
    confirmed: OWNER_11_NOV,
  },
  {
    speciality: "physiotherapy",
    name: "Health Plus Physiotherapy Clinic",
    logo: "/customers/physio/health-plus-physiotherapy.png",
    confirmed: OWNER_11_NOV,
  },
  {
    speciality: "physiotherapy",
    name: "Dr. Vigil's Physiotherapy",
    logo: "/customers/physio/dr-vigils-physiotherapy.png",
    confirmed: OWNER_11_NOV,
  },
  {
    speciality: "physiotherapy",
    name: "Arogya Physiotherapy Clinic & Rehab Centre",
    logo: "/customers/physio/arogya-physiotherapy-rehab.png",
    confirmed: OWNER_11_NOV,
  },
  {
    speciality: "physiotherapy",
    name: "Arogya Physio",
    logo: "/customers/physio/arogya-physio.png",
    confirmed: OWNER_11_NOV,
  },
  {
    speciality: "physiotherapy",
    name: "Dr Sahu's Physiotherapy Clinic",
    logo: "/customers/physio/dr-sahus-physiotherapy.png",
    confirmed: OWNER_11_NOV,
  },
  {
    // Moved from MolarPlus to Curogrid on 4 November 2026
    // (curogrid/docs/architecture/05-OPEN-DECISIONS.md).
    speciality: "dermatology",
    name: "Skintonik",
    city: "Bengaluru",
    logo: "/customers/derma/skintonik.png",
    confirmed: OWNER_LOGO,
  },
  {
    speciality: "dermatology",
    name: "Kleoderma Clinic",
    logo: "/customers/derma/kleoderma-clinic.png",
    confirmed: OWNER_LOGO,
  },
  {
    speciality: "dermatology",
    name: "SkinCure Skin and Hair Clinic",
    logo: "/customers/derma/skincure.png",
    confirmed: OWNER_LOGO,
  },
  {
    speciality: "dermatology",
    name: "Renaissance Derma Clinic",
    logo: "/customers/derma/renaissance-derma-clinic.png",
    confirmed: OWNER_LOGO,
  },
  {
    speciality: "dermatology",
    name: "Dr. Sandhya's Skin and Hair Clinic",
    logo: "/customers/derma/dr-sandhyas-skin-hair-clinic.png",
    confirmed: OWNER_LOGO,
  },
  {
    speciality: "dermatology",
    name: "Sparsh Skin, Hair & Laser",
    logo: "/customers/derma/sparsh-skin-hair-laser.png",
    confirmed: OWNER_LOGO,
  },
  {
    speciality: "dermatology",
    name: "DermaConsult",
    logo: "/customers/derma/dermaconsult.png",
    confirmed: OWNER_LOGO,
  },
  {
    speciality: "dermatology",
    name: "Revive Skin, Hair, Laser & Cosmetology Clinic",
    logo: "/customers/derma/revive-skin-hair-clinic.png",
    confirmed: OWNER_LOGO,
  },
  {
    speciality: "general_practice",
    name: "Dr. Chandhere's Clinic",
    logo: "/customers/general/dr-chandheres-clinic.png",
    confirmed: OWNER_LOGO,
  },
  {
    speciality: "general_practice",
    name: "Setu Clinic",
    logo: "/customers/general/setu-clinic.png",
    confirmed: OWNER_LOGO,
  },
  {
    // Pain clinics, filed under general practice as the owner grouped them.
    speciality: "general_practice",
    name: "Pune Pain Clinic",
    logo: "/customers/general/pune-pain-clinic.png",
    confirmed: OWNER_LOGO,
  },
  {
    speciality: "general_practice",
    name: "Praanaa Pain Clinic",
    logo: "/customers/general/praanaa-pain-clinic.png",
    confirmed: OWNER_LOGO,
  },
  {
    speciality: "orthopaedics",
    name: "Shreekunj Clinic",
    logo: "/customers/ortho/shreekunj-clinic.png",
    confirmed: OWNER_LOGO,
  },
  {
    speciality: "ophthalmology",
    name: "S.P. Deshpande Eye Clinic",
    logo: "/customers/eye/sp-deshpande-eye-clinic.png",
    confirmed: OWNER_LOGO,
  },
  {
    speciality: "ophthalmology",
    name: "Deshpande Eye Care Center",
    logo: "/customers/eye/deshpande-eye-care-center.png",
    confirmed: OWNER_LOGO,
  },
];

export const TESTIMONIALS: ReadonlyArray<Testimonial> = [];

/**
 * The headline numbers, as the owner gave them on 11 November 2026 from
 * the live product. Update them from the app's own counts; never round
 * up beyond what the app shows.
 */
export const STATS: ReadonlyArray<{ value: string; label: string }> = [
  { value: "800+", label: "clinics run their day on Curogrid" },
  { value: "40,000+", label: "patients managed" },
  { value: "75,000+", label: "appointments booked" },
];
export const STATS_AS_OF = "November 2026";

/**
 * Review sites where Curogrid has a listing, as the owner confirmed on
 * 12 November 2026 (Capterra was also found through search; the sites
 * block automated visits, so the others could not be opened from here).
 * Shown as logos only, with no link: the owner does not want visitors
 * sent off the site. Each logo is the platform's own artwork, in
 * public/badges/, never redrawn. Remove a row if a listing is taken down.
 */
export const LISTINGS: ReadonlyArray<{ name: string; logo: string; width: number; height: number }> = [
  { name: "Capterra", logo: "/badges/capterra.png", width: 443, height: 108 },
  { name: "Software Advice", logo: "/badges/software-advice.png", width: 1067, height: 138 },
  { name: "G2", logo: "/badges/g2.png", width: 568, height: 568 },
  { name: "Product Hunt", logo: "/badges/product-hunt.png", width: 3094, height: 568 },
  { name: "Trustpilot", logo: "/badges/trustpilot.svg", width: 1133, height: 278 },
];

/** Clients for one speciality page, or every client for "all". */
export function clientsFor(speciality: string) {
  return speciality === "all" ? CLIENTS : CLIENTS.filter((c) => c.speciality === speciality);
}

export function testimonialsFor(speciality: string) {
  return speciality === "all" ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.speciality === speciality);
}
