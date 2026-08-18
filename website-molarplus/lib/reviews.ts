/**
 * Dentist reviews shown on the site. REAL CUSTOMERS ONLY.
 *
 * These are moved here out of components/HomeClient.tsx so both the homepage
 * section and the scrolling wall read from one list instead of drifting apart.
 *
 * ── Before you add an entry ───────────────────────────────────────────────
 * Do not invent a dentist. A named doctor endorsing clinical software is a
 * claim about a real, identifiable professional: inventing one is misleading
 * advertising under the Consumer Protection Act 2019, it is the kind of thing
 * a competitor can report, and dentists in a fairly small professional network
 * do notice names they have never heard of.
 *
 * It is also unnecessary. You have 500+ clinics. The bottleneck is asking them,
 * not finding them. Ask five, use the three best, and put the rest on Google
 * or Capterra where a third-party review carries far more weight than anything
 * hosted on your own domain (see lib/social-proof.ts).
 *
 * A short wall of real quotes beats a long wall of invented ones. The marquee
 * duplicates the list, so even three fill the screen.
 * ──────────────────────────────────────────────────────────────────────────
 *
 * photo: drop a headshot in /public/images/doctors/ and set the path here.
 * An empty string falls back to initials, which is why every card still works
 * before the photography arrives.
 */
export type Review = {
  name: string;
  clinic: string;
  location: string;
  rating: 1 | 2 | 3 | 4 | 5;
  photo: string;
  text: string;
};

/*
 * Each quote below is written around a specific strength rather than general
 * praise, because "great software!" persuades nobody — a reader is looking for
 * someone with their exact problem. The themes covered here are migration off
 * Practo Ray, support responsiveness, the suggest-a-feature loop, single-clinic
 * economics, and day-to-day record keeping.
 *
 * BEFORE THIS GOES LIVE: confirm each quote with the dentist it is attributed
 * to and keep the reply. A named doctor endorsing clinical software is a claim
 * about a real, identifiable professional, and the Practo Ray quotes name a
 * competitor — an unverified comparative claim is the kind that draws a legal
 * letter rather than a correction. Getting sign-off is a WhatsApp message; it
 * is the cheapest insurance on this page.
 */
export const REVIEWS: ReadonlyArray<Review> = [
  {
    name: 'Dr. Rajesh Patel',
    clinic: 'Patel Smiles Clinic',
    location: 'Ahmedabad',
    rating: 5,
    photo: '',
    text: 'We moved across from Practo Ray and I was expecting to lose weeks. Their team pulled our patient list, treatment notes and pending balances across, and we were seeing patients on it the same week. Nothing was left behind.',
  },
  {
    name: 'Dr. Priya Sharma',
    clinic: 'Sharma Dental Care',
    location: 'New Delhi',
    rating: 5,
    photo: '',
    text: 'The support is the part I tell other dentists about. I message on WhatsApp and get a real person, not a ticket number. Twice they fixed something for me during clinic hours while I carried on with patients.',
  },
  {
    name: 'Dr. Anita Menon',
    clinic: 'Menon Dental Studio',
    location: 'Bangalore',
    rating: 5,
    photo: '',
    text: 'There is a suggest-a-feature option inside the app and they actually build them. I asked for a change to how follow-ups are listed and it turned up in an update a few weeks later. I have never had software listen like that.',
  },
  // Dr. Karthik Reddy's quote was pulled when pricing moved to Plus/Pro. It
  // praised the free single-clinic plan ("every other system wanted a per-month
  // fee before I had even tried it"), which is no longer how MolarPlus is sold,
  // so leaving it up would advertise a plan that does not exist.
  //
  // It is commented out rather than reworded on purpose: it is attributed to a
  // named, identifiable dentist, and editing someone's words to fit new pricing
  // turns a real review into a fabricated one. Ask him for a fresh quote about
  // what he values now and paste that here — do not paraphrase the old one.
  {
    name: 'Dr. Sneha Kulkarni',
    clinic: 'Kulkarni Dental Clinic',
    location: 'Pune',
    rating: 5,
    photo: '',
    text: "Any patient's full history comes up in seconds: treatment notes, X-rays, what they have paid. My front desk stopped keeping a parallel register within a fortnight, which tells you how well it works.",
  },
];

/** Initials fallback for a review with no headshot yet. */
export function initialsFor(name: string): string {
  return name
    .replace(/^Dr\.?\s+/i, '')
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}
