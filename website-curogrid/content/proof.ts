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

export const CLIENTS: ReadonlyArray<Client> = [
  {
    // Moved from MolarPlus to Curogrid on 4 November 2026
    // (curogrid/docs/architecture/05-OPEN-DECISIONS.md).
    // TODO: add the city, and confirm "dermatology" is the setup it uses.
    speciality: "dermatology",
    name: "Skintonik",
    confirmed: { date: "2026-11-11", via: "Owner confirmed the clinic agreed to be named" },
  },
];

export const TESTIMONIALS: ReadonlyArray<Testimonial> = [];

/** Clients for one speciality page, or every client for "all". */
export function clientsFor(speciality: string) {
  return speciality === "all" ? CLIENTS : CLIENTS.filter((c) => c.speciality === speciality);
}

export function testimonialsFor(speciality: string) {
  return speciality === "all" ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.speciality === speciality);
}
