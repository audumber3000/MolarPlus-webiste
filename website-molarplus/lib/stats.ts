/**
 * First-party numbers about MolarPlus, in one place.
 *
 * These were previously written out separately in the homepage and the About
 * page, which meant a number could be updated in one and quietly left stale in
 * the other — two pages disagreeing about how many clinics use the product is
 * worse than either number alone.
 *
 * Unlike lib/social-proof.ts (third-party proof: review platforms, awards),
 * these are our own claims about ourselves, so keeping them honest is a matter
 * of updating them when they change rather than waiting on an outside source.
 */
export type Stat = {
  value: string;
  /** Short form, for the trust strip beside the clinic logos. */
  label: string;
  /** Fuller phrasing, for pages with room to breathe. */
  longLabel?: string;
};

export const COMPANY_STATS: ReadonlyArray<Stat> = [
  { value: '500+', label: 'Clinics running on MolarPlus' },
  { value: '35,000+', label: 'Patients managed' },
  {
    value: '82+',
    label: 'Cities served',
    longLabel: 'Cities, from metros to small towns',
  },
];
