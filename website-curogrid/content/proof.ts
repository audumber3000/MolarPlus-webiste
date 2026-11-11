/**
 * Real proof only: clinics that run on Curogrid and what their doctors
 * said. Nothing here is a sample (those are in proof.sample.ts and never
 * reach the built site).
 *
 * The `confirmed` and `consent` fields are required on purpose: an entry
 * cannot be added without a record of who agreed to it, when and how.
 * Do not add a clinic because its logo is in public/clients/: those files
 * were copied from the clinics' own websites and none is a customer.
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
    confirmed: { date: "2026-11-11", via: "Owner confirmed the clinic agreed to be named" },
  },
];

export const TESTIMONIALS: ReadonlyArray<Testimonial> = [];

/**
 * The headline numbers, as the owner gave them on 11 November 2026 from
 * the live product. Update them from the app's own counts; never round
 * up beyond what the app shows. The third is a fact of the product until
 * a third usage number is supplied.
 */
export const STATS: ReadonlyArray<{ value: string; label: string }> = [
  { value: "800+", label: "clinics run their day on Curogrid" },
  { value: "40,000+", label: "patients managed" },
  { value: "10", label: "specialities, set up on day one" },
];
export const STATS_AS_OF = "November 2026";

/** Clients for one speciality page, or every client for "all". */
export function clientsFor(speciality: string) {
  return speciality === "all" ? CLIENTS : CLIENTS.filter((c) => c.speciality === speciality);
}

export function testimonialsFor(speciality: string) {
  return speciality === "all" ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.speciality === speciality);
}
