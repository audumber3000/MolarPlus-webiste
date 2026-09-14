import type { TestimonialData } from "@/components/ui/Testimonial";

/**
 * SAMPLE CONTENT. Not real customers.
 *
 * These exist only so the testimonial section can be seen filled in on a
 * local dev server. `components/sections/Testimonials.tsx` shows them only
 * when NODE_ENV is not "production" AND the real TESTIMONIALS array in
 * `content/social-proof.ts` is empty, and every card is badged "Sample".
 * `next build` sets NODE_ENV to production, so none of this can reach the
 * live site. Do not import this file anywhere else.
 */
export const SAMPLE_TESTIMONIALS: ReadonlyArray<TestimonialData> = [
  {
    quote:
      "Every month I get a list of what is expiring with the rupee value next to it. Batches now go back to the distributor in time instead of into the bin.",
    name: "Ramesh Kulkarni",
    pharmacy: "Kulkarni Medical",
    city: "Nashik",
    photo: { src: "/testimonials/sample-store-counter.webp", width: 240, height: 240 },
  },
  {
    quote:
      "When the internet goes, billing does not stop. The counter keeps running and the bills sync later. The H1 details get filled while we bill, so the register is never behind.",
    name: "Sunita Deshmukh",
    pharmacy: "Shree Sai Medicals",
    city: "Nagpur",
    photo: { src: "/testimonials/sample-store-shelves.webp", width: 240, height: 240 },
  },
  {
    quote:
      "They imported my old stock list for free. At month end my CA takes the GST summary straight from the bills. Nobody rebuilds anything from paper now.",
    name: "Mohammed Irfan",
    pharmacy: "Irfan Chemists",
    city: "Hyderabad",
    photo: { src: "/testimonials/sample-store-pharmacist.webp", width: 240, height: 240 },
  },
];
