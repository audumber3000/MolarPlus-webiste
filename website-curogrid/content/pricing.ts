/**
 * Plans and prices.
 *
 * This file MIRRORS `curogrid-backend/core/plans.py` in the app repo,
 * which is what a clinic is actually charged from. Change a price there
 * first, then here. A price on this page that differs from the one in
 * the app is found by a customer before it is found by us.
 *
 * Mirrored on 11 October 2026:
 * - Two clinic plans are sold, Plus and Pro. A third, Growth, exists in
 *   the app for clinics already on it but is no longer offered, so it is
 *   not here.
 * - Annual prices are the total billed once a year (20% off twelve
 *   months), not a monthly figure.
 * - Every trial is a Pro trial and lasts `TRIAL_DAYS`.
 * - Hospital plans are shown in the app as coming, not sold: admitting a
 *   patient, the bed board and the discharge summary are not built.
 * - GST of 18% is added at checkout on Indian invoices (`GST_RATE` in
 *   plans.py). The prices here are before GST, as the app shows them.
 * - The one add-on on sale, a clinic's own WhatsApp number, is mirrored
 *   from `curogrid-backend/core/addons.py`.
 * - The report count is NOT taken from the plan list in plans.py, which
 *   says 12. The app's Reports screen lists 10
 *   (`curogrid-app/src/modules/reports/utils/catalogue.ts`), so the site
 *   says 10 and names them. Recount when a report is added.
 */

export const TRIAL_DAYS = 5;
export const TRIAL_PLAN = "Pro";
export const ANNUAL_SAVING_PERCENT = 20;
/** Added at checkout on Indian invoices. Prices on the site are before it. */
export const GST_PERCENT = 18;
/** How the app's checkout takes payment for the subscription itself. */
export const CHECKOUT_METHODS = "UPI, card or net banking";

export type Plan = {
  key: "plus" | "pro";
  name: string;
  tagline: string;
  popular: boolean;
  /** Rupees per month, billed monthly. */
  monthly: number;
  /** Rupees for the whole year, billed once. */
  annual: number;
  features: string[];
};

export const PLANS: Plan[] = [
  {
    key: "plus",
    name: "Plus",
    tagline: "Everything a solo or small clinic needs to run its day",
    popular: true,
    monthly: 399,
    annual: 3830,
    features: [
      "1,000 new patients a month",
      "6 staff logins",
      "1 branch",
      "12 months of report history",
      "150 GB cloud storage",
      "WhatsApp and email reminders from the Curogrid number",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    tagline: "For a busy clinic that does not want limits",
    popular: false,
    monthly: 999,
    annual: 9590,
    features: [
      "Unlimited patients",
      "12 staff logins",
      "Up to 5 branches",
      "Reports with no time limit",
      "200 GB cloud storage",
      "WhatsApp from your own number",
      "Priority support",
      "A dedicated account manager",
    ],
  },
];

/** The two limits other files quote as numbers. Mirrors `limits` in plans.py. */
export const PLAN_LIMITS = {
  plus: { staff: 6, storageGb: 150, branches: 1, patientsAMonth: 1000 },
  pro: { staff: 12, storageGb: 200, branches: 5 },
} as const;

/**
 * The reports on the app's Reports screen, in its order. Mirrors
 * `curogrid-app/src/modules/reports/utils/catalogue.ts`.
 */
export const REPORTS = [
  "Collections",
  "Services and treatments",
  "Doctor-wise",
  "Outstanding dues",
  "GST",
  "Expenses and what was left",
  "Patients",
  "Visits and diagnoses",
  "Appointments and waiting",
  "Stock",
] as const;

/** Nothing clinical sits behind the higher plan. Wording follows the
 *  app's own subscription page, in the site's plainer words. */
export const INCLUDED_IN_EVERY_PLAN = [
  "Visits, prescriptions, tests and scans",
  "Bills, expenses, stock and vendors",
  "Lab order tracking",
  "Consent forms signed on screen",
  "Online booking page for patients",
  "Google Reviews",
  `${REPORTS.length} practice reports, plus staff attendance and an activity log`,
  "Web, Android, iPhone and Windows",
];

/**
 * The one add-on on sale. A Plus clinic can buy it; Pro includes it.
 * It is sold per clinic location. Mirrors `core/addons.py`.
 */
export const OWN_WHATSAPP_ADDON = { name: "Your own WhatsApp number", monthly: 289, annual: 2774 } as const;

/**
 * Plus and Pro side by side. One list feeds the table on /pricing,
 * /pricing.md and /llms-full.txt. The limits mirror `limits` in plans.py.
 */
export const PLAN_COMPARISON: ReadonlyArray<{ label: string; plus: string; pro: string }> = [
  { label: "Price each month, before GST", plus: rupees(PLANS[0].monthly), pro: rupees(PLANS[1].monthly) },
  { label: "Price for the year, before GST", plus: rupees(PLANS[0].annual), pro: rupees(PLANS[1].annual) },
  { label: "New patients a month", plus: "1,000", pro: "Unlimited" },
  { label: "Appointments", plus: "Unlimited", pro: "Unlimited" },
  { label: "Staff logins", plus: String(PLAN_LIMITS.plus.staff), pro: String(PLAN_LIMITS.pro.staff) },
  { label: "Branches", plus: String(PLAN_LIMITS.plus.branches), pro: `Up to ${PLAN_LIMITS.pro.branches}` },
  { label: "Report history", plus: "12 months", pro: "No limit" },
  { label: "Cloud storage", plus: `${PLAN_LIMITS.plus.storageGb} GB`, pro: `${PLAN_LIMITS.pro.storageGb} GB` },
  { label: "WhatsApp reminders are sent from", plus: "The Curogrid number", pro: "Your clinic's own number" },
  {
    label: "Your own WhatsApp number",
    plus: `Add-on, ${rupees(OWN_WHATSAPP_ADDON.monthly)} a month`,
    pro: "Included",
  },
  { label: "Priority support", plus: "No", pro: "Yes" },
  { label: "Dedicated account manager", plus: "No", pro: "Yes" },
  { label: "Speciality setups", plus: "All included", pro: "All included" },
];

export type HospitalPlan = { name: string; tagline: string; monthly: number; features: string[] };

/** Planned, not sold. Shown on /hospitals so a hospital knows what is
 *  coming and what it will cost. */
export const HOSPITAL_PLANS: HospitalPlan[] = [
  {
    name: "Hospital Plus",
    tagline: "For a hospital of up to 15 beds",
    monthly: 1499,
    features: [
      "Up to 15 beds",
      "2 wards and 1 ICU",
      "1 reception desk",
      "25 staff logins",
      "Unlimited patients",
      "24 months of report history",
      "300 GB cloud storage",
    ],
  },
  {
    name: "Hospital Pro",
    tagline: "For a hospital of up to 25 beds",
    monthly: 2499,
    features: [
      "Up to 25 beds",
      "Unlimited wards and ICUs",
      "3 reception desks",
      "60 staff logins",
      "Unlimited patients",
      "Reports with no time limit",
      "500 GB cloud storage",
      "Priority support",
      "A dedicated account manager",
    ],
  },
];

/** "₹1,499" in the Indian grouping. */
export function rupees(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}
