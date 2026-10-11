import {
  ANNUAL_SAVING_PERCENT,
  CHECKOUT_METHODS,
  GST_PERCENT,
  OWN_WHATSAPP_ADDON,
  PLANS,
  PLAN_LIMITS,
  REPORTS,
  TRIAL_DAYS,
  TRIAL_PLAN,
  rupees,
} from "./pricing";
import { ALSO_SUPPORTED, SPECIALITIES } from "@/lib/specialities";
import { STORE_NOTE } from "./pages";

/**
 * General questions, for the homepage, /pricing and /faq. Speciality
 * questions live with each speciality in lib/specialities.ts.
 *
 * Every answer opens with the answer. The first sentence is the one a
 * search result or an AI assistant quotes, so it has to stand alone,
 * and it names Curogrid so a quoted answer still says what it is about.
 *
 * Each answer was checked against the app code on 11 October 2026.
 * /faq.md and /llms-full.txt print these same lists.
 */
export type Faq = { q: string; a: string };

const [plus, pro] = PLANS;

/** "₹470.82": a charged amount, to the paisa. */
function rupeesExact(amount: number) {
  return `₹${amount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
const allSpecialities = [...SPECIALITIES.map((s) => s.name.toLowerCase()), ...ALSO_SUPPORTED.map((s) => s.name.toLowerCase())];

export const ABOUT_FAQS: Faq[] = [
  {
    q: "What is Curogrid?",
    a: "Curogrid is clinic management software for clinics in India. It handles tokens and the waiting line, appointments, patient files, prescriptions, tests, billing and stock, and it works in a web browser and on a phone app. It is made by Clino Health in Pune, the company behind MolarPlus.",
  },
  {
    q: "Which specialities does Curogrid support?",
    a: `Curogrid has a ready setup for ${allSpecialities.length} specialities: ${allSpecialities.join(", ")}. You pick yours in clinic setup, and it sets up the services, the medicines offered and the way visits are booked. A clinic with more than one speciality can pick several.`,
  },
  {
    q: "What does “sets itself up for your speciality” mean?",
    a: "When you choose a speciality, Curogrid creates that speciality's departments, a starter list of services with prices, and the consent forms it needs. On the doctor's screen it offers that speciality's medicines, tests and procedures. Everything it creates is yours to rename, reprice or delete.",
  },
  {
    q: "Who in the clinic uses it?",
    a: "Everyone in the clinic uses Curogrid, each with their own login. The receptionist gives tokens and takes payments, the doctor sees the line and writes the visit, and the owner sees the day's collection. You decide what each role is allowed to open.",
  },
  {
    q: "Is Curogrid for hospitals?",
    a: "Not yet. Curogrid today is for clinics and OPD work, and a hospital can run its OPD on it. Admitting a patient, the bed board and the discharge summary are not built. They are being built, with plans for hospitals of 10 to 25 beds to follow, and no date has been set.",
  },
  {
    q: "I run a dental clinic. Should I use Curogrid?",
    a: "No. Use MolarPlus, our software built for dentists, which has tooth charting and dental treatment plans. Curogrid has no dental setup on purpose.",
  },
];

export const PRICING_FAQS: Faq[] = [
  {
    q: "How much does Curogrid cost?",
    a: `Curogrid has two plans for clinics. ${plus.name} is ${rupees(plus.monthly)} a month and ${pro.name} is ${rupees(pro.monthly)} a month, for the whole clinic. Paying for the year costs ${ANNUAL_SAVING_PERCENT}% less: ${rupees(plus.annual)} for ${plus.name} and ${rupees(pro.annual)} for ${pro.name}. GST of ${GST_PERCENT}% is added at checkout.`,
  },
  {
    q: "Is there a free trial?",
    a: `Yes. Every new clinic gets a ${TRIAL_DAYS}-day free trial of the ${TRIAL_PLAN} plan, the higher of Curogrid's two plans, so you see everything before you choose.`,
  },
  {
    q: "What is the difference between Plus and Pro?",
    a: `Plus and Pro differ in their limits. ${plus.name} allows ${PLAN_LIMITS.plus.patientsAMonth.toLocaleString("en-IN")} new patients a month, ${PLAN_LIMITS.plus.staff} staff logins and one branch. ${pro.name} has unlimited patients, ${PLAN_LIMITS.pro.staff} staff logins, up to ${PLAN_LIMITS.pro.branches} branches, WhatsApp from your own number and priority support. Visits, prescriptions, billing and stock are the same on both.`,
  },
  {
    q: "Is the price per doctor?",
    a: `No. Curogrid's price is for the whole clinic, however many doctors work there. The plan sets how many staff logins you have: ${PLAN_LIMITS.plus.staff} on ${plus.name} and ${PLAN_LIMITS.pro.staff} on ${pro.name}.`,
  },
  {
    q: "Is GST included in the price?",
    a: `No. Curogrid's prices are shown before GST. GST of ${GST_PERCENT}% is added at checkout, so ${plus.name} at ${rupees(plus.monthly)} a month comes to ${rupeesExact(plus.monthly * (1 + GST_PERCENT / 100))} and ${pro.name} at ${rupees(pro.monthly)} comes to ${rupeesExact(pro.monthly * (1 + GST_PERCENT / 100))}.`,
  },
  {
    q: "How do I pay for Curogrid?",
    a: `You pay from the Subscription page inside Curogrid, by ${CHECKOUT_METHODS}. The payment is taken on Cashfree's page, and the plan starts the moment it is paid.`,
  },
  {
    q: "Are there any add-ons?",
    a: `One. A clinic on ${plus.name} can add its own WhatsApp number for ${rupees(OWN_WHATSAPP_ADDON.monthly)} a month or ${rupees(OWN_WHATSAPP_ADDON.annual)} a year, so reminders go out from the clinic's number. ${pro.name} includes it.`,
  },
  {
    q: "Does the speciality setup cost extra?",
    a: `No. Every one of Curogrid's ${allSpecialities.length} speciality setups is included in both plans.`,
  },
];

export const PRODUCT_FAQS: Faq[] = [
  {
    q: "Does Curogrid work on a phone?",
    a: `Yes. Curogrid has a phone app for Android and iPhone as well as the web version. The doctor can see the line, call the next patient and write the visit from the phone, and the desk can give tokens, raise bills and take payments.${STORE_NOTE}`,
  },
  {
    q: "Do I need to install anything on the clinic computer?",
    a: "No. Curogrid runs in a web browser, so there is nothing to install on the clinic computer. You sign in and it is ready.",
  },
  {
    q: "Can I move my existing patients into Curogrid?",
    a: "Yes. Curogrid imports a patient list from an Excel or CSV file, such as the export from your old software. You match the columns, check the result and press Import, and an import can be undone. For a paper register or anything else, ask us on WhatsApp.",
  },
  {
    q: "Can I get my data out?",
    a: "Yes. In Curogrid the patient list, the bill list and the payments list each have an Export button. The Data backup page in Settings downloads the whole clinic as one ZIP file.",
  },
  {
    q: "Does Curogrid send reminders to patients?",
    a: `Yes. Curogrid sends reminders by WhatsApp and email. On ${plus.name} they go from the Curogrid number, and on ${pro.name} from your clinic's own WhatsApp number. SMS is not available yet.`,
  },
  {
    q: "Which reports does Curogrid have?",
    a: `Curogrid has ${REPORTS.length} reports: ${REPORTS.join(", ")}. ${plus.name} keeps 12 months of report history and ${pro.name} has no time limit.`,
  },
  {
    q: "Does Curogrid suggest doses or diagnoses?",
    a: "No. Curogrid does not work out a dose or choose a diagnosis. It offers medicine names as you type, and once you have written a medicine it remembers how your clinic usually gives it. Diagnoses are picked by the doctor from an ICD-10 list. It does flag a medicine that matches an allergy recorded for the patient.",
  },
];

export const HOME_FAQS: Faq[] = [ABOUT_FAQS[0], ABOUT_FAQS[1], PRICING_FAQS[0], PRICING_FAQS[1], PRODUCT_FAQS[0], ABOUT_FAQS[4]];

/** The groups on /faq, in order. /faq.md and /llms-full.txt print the same. */
export const FAQ_GROUPS: ReadonlyArray<{ title: string; items: ReadonlyArray<Faq> }> = [
  { title: "About Curogrid", items: ABOUT_FAQS },
  { title: "Price and trial", items: PRICING_FAQS },
  { title: "Using it", items: PRODUCT_FAQS },
];
