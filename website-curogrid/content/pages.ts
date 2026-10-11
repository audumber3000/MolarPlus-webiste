import { SHOTS, type Shot } from "@/lib/shots";
import { APP_LINKS, SITE } from "@/lib/site";
import { ALSO_SUPPORTED, SPECIALITIES } from "@/lib/specialities";
import { HOSPITAL_PLANS, PLANS, TRIAL_DAYS, TRIAL_PLAN, rupees } from "./pricing";

/**
 * The words of the pages that are not driven by another data file:
 * the homepage facts, /mobile-app, /hospitals and /about.
 *
 * They live here, and not inside each page file, so that
 * `/llms-full.txt` prints the same sentences the page shows. Edit a
 * sentence here and both change; there is no second copy to forget.
 *
 * Every product fact was checked against the app code
 * (`~/Developer/curogrid`) on 11 October 2026. The source is named
 * beside each list. Do not add a capability from memory.
 */

export const SPECIALITY_COUNT = SPECIALITIES.length + ALSO_SUPPORTED.length;

/**
 * Added to any answer that says there is a phone app, for as long as
 * neither store link is set in `APP_LINKS`. It goes away by itself the
 * day a link is pasted there, so the site never says "download it"
 * before a doctor can.
 */
export const STORE_NOTE =
  APP_LINKS.playStore || APP_LINKS.appStore ? "" : " The apps are being listed on Google Play and the App Store, and are not in the stores yet.";

/** The one-paragraph answer to "what is Curogrid?". 40 to 60 words, and
 *  it stands alone when quoted. */
export const DEFINITION =
  "Curogrid is clinic management software for clinics in India. It runs the clinic's day on one system: tokens and the waiting line, appointments, patient files, prescriptions, tests, bills and stock. It works in a web browser and on a phone app, and it sets itself up for the clinic's speciality.";

/** The homepage's table of plain facts. */
export const KEY_FACTS: ReadonlyArray<{ term: string; detail: string }> = [
  { term: "What it is", detail: "Clinic management software" },
  { term: "Made for", detail: "Clinics in India, from one doctor to several branches" },
  { term: "Made by", detail: `${SITE.parent}, Pune, the company behind MolarPlus` },
  { term: "Runs on", detail: "Web browser, Android, iPhone and Windows" },
  { term: "Specialities", detail: `${SPECIALITY_COUNT}, each with its own setup` },
  { term: "Price", detail: `${rupees(PLANS[0].monthly)} or ${rupees(PLANS[1].monthly)} a month for the whole clinic, before GST` },
  { term: "Free trial", detail: `${TRIAL_DAYS} days of the ${TRIAL_PLAN} plan` },
  { term: "Not built", detail: "Hospital admissions, beds and discharge summaries. Dental charting" },
];

/* ── /mobile-app ───────────────────────────────────────────────────────── */

export const MOBILE_SCREENS: ReadonlyArray<{ shot: Shot; title: string; body: string }> = [
  {
    shot: SHOTS.phoneHome,
    title: "Home",
    body: "Waiting now, taken today, seen today and still to collect. Below them, money taken over the last 14 days and anything that needs you, such as a bill unpaid for over 30 days.",
  },
  {
    shot: SHOTS.phoneLine,
    title: "My line",
    body: "The doctor's own line: each token with its wait, who has been called and who is in the room. One button at the bottom calls the next patient.",
  },
  {
    shot: SHOTS.phoneFile,
    title: "A patient's file",
    body: "The same file as on the computer, so the doctor reads the last visit and the allergies before the patient sits down.",
  },
  {
    shot: SHOTS.phoneBills,
    title: "Bills",
    body: "What has been billed and what is still to pay, wherever you are.",
  },
];

/**
 * What each person does on the phone. Each row is a screen in
 * `curogrid-phone-app/src/app/` (give-token, new-patient, book, visit,
 * new-bill, take-payment, new-expense) or a tab in
 * `src/modules/shell/tabs.ts`.
 */
export const MOBILE_TASKS: ReadonlyArray<{ who: string; does: string }> = [
  { who: "The desk", does: "Gives a token, adds a new patient, books an appointment, raises a bill and takes payment" },
  { who: "The doctor", does: "Sees My line, calls the next patient, opens the file and writes the visit: vitals, complaint, diagnosis, medicines, advice and when to come back" },
  { who: "The owner", does: "Sees waiting now, taken today and still to collect, the last 14 days of takings, and records an expense" },
  { who: "Whoever keeps the medicines", does: "Sees the medicines doctors have prescribed that are still to be handed over, and the stock" },
];

export const MOBILE_FAQS: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: "Is the Curogrid phone app a separate product?",
    a: "No. The phone app is the same clinic and the same data as the web version of Curogrid, with no extra charge. A token given at the desk appears in the doctor's line on the phone.",
  },
  {
    q: "Which phones does it work on?",
    a: `The Curogrid phone app is made for Android phones and iPhones.${STORE_NOTE} Curogrid also runs in a web browser on any computer or tablet.`,
  },
  {
    q: "Can the doctor write a prescription on the phone?",
    a: "Yes. The doctor can write the whole visit on the phone: vitals, what the patient came with, examination, diagnosis, medicines, advice and when to come back.",
  },
  {
    q: "Can I see full reports on the phone?",
    a: "The phone shows today's numbers and the last 14 days of takings. For trends, GST and totals over any dates, open Reports on a computer or tablet.",
  },
  {
    q: "Does each staff member need their own login on the phone?",
    a: "Yes. Everyone signs in as themselves, and the app shows only the screens their role allows.",
  },
];

/* ── /hospitals ────────────────────────────────────────────────────────── */

/**
 * What a hospital can and cannot do in Curogrid today. `built: false`
 * rows are the inpatient side, which does not exist in the app. This
 * list must never read as if it does.
 */
export const HOSPITAL_STATUS: ReadonlyArray<{ work: string; built: boolean }> = [
  { work: "OPD: tokens, appointments, visits and prescriptions", built: true },
  { work: "Several specialities and departments in one place", built: true },
  { work: "Billing, with UPI, cash and card", built: true },
  { work: "Tests and scans ordered and tracked", built: true },
  { work: "Stock, expenses and vendors", built: true },
  { work: "Roles, so each person sees only their part", built: true },
  { work: "Admitting a patient", built: false },
  { work: "The bed board, by ward and ICU", built: false },
  { work: "The discharge summary", built: false },
  { work: "Reception desks for a larger front office", built: false },
];

const [hospitalPlus, hospitalPro] = HOSPITAL_PLANS;

export const HOSPITAL_FAQS: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: "Can Curogrid admit patients and manage beds?",
    a: "No. Curogrid cannot admit a patient, show a bed board or write a discharge summary today. Those parts are being built and no date has been set.",
  },
  {
    q: "What can a hospital use Curogrid for today?",
    a: "A hospital can run its OPD on Curogrid today: tokens and the waiting line, appointments, visits and prescriptions, tests and scans, billing by UPI, cash and card, stock and expenses, across several specialities and departments.",
  },
  {
    q: "What will Curogrid cost for a hospital?",
    a: `The planned prices are ${rupees(hospitalPlus.monthly)} a month for a hospital of up to 15 beds and ${rupees(hospitalPro.monthly)} a month for up to 25 beds. These plans are not on sale yet, and the prices may change before they are.`,
  },
  {
    q: "When will the inpatient side be ready?",
    a: "No date has been set. Leave your number on this page or message us on WhatsApp and we will tell you when admissions, the bed board and the discharge summary are ready.",
  },
];

/* ── /about ────────────────────────────────────────────────────────────── */

export const BELIEFS: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "A clinic should not have to configure its software",
    body: "A paediatrician who opens a new system and finds a price list of adult procedures learns that it was not made for them. So Curogrid asks the speciality first, and arrives with the right services, medicines and words.",
  },
  {
    title: "The whole staff uses it, so it uses plain words",
    body: "The doctor, the compounder and the sister all work in it. The screens say “waiting line”, “token” and “still to pay”, the words the clinic already uses.",
  },
  {
    title: "A starting point, never a cage",
    body: "Everything the setup creates belongs to the clinic from that moment. Rename a service, delete four and reprice the rest. We never reach back in and change it.",
  },
  {
    title: "The dose is the doctor's",
    body: "Curogrid offers the name of a medicine as you type. It does not suggest a dose and it does not make clinical decisions. Over time it remembers how you write each medicine.",
  },
];
