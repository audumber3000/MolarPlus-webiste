import { SHOTS, type Shot } from "@/lib/shots";
import { ALSO_SUPPORTED, SPECIALITIES } from "@/lib/specialities";
import { OWN_WHATSAPP_ADDON, PLANS, PLAN_LIMITS, REPORTS, TRIAL_DAYS, TRIAL_PLAN, rupees } from "./pricing";

const SPECIALITY_COUNT = SPECIALITIES.length + ALSO_SUPPORTED.length;

/**
 * What the product does, in the site's words.
 *
 * `FEATURE_PAGES` each get a page at /features/[slug]. A feature earns
 * a page only when there is a clean screenshot of it; the rest are
 * `MORE_FEATURES`, listed on /features without a page of their own.
 *
 * Everything described here is visible in the screenshots in
 * `public/screenshots/` or in the app's own plan list. Do not add a
 * capability from memory; open the app and look.
 *
 * Written to be quoted. `lead` is a 40 to 60 word answer that stands
 * alone, `question` is the heading a doctor would type into a search
 * box, and `facts` are the numbers and names, each one read off the app
 * code on 11 October 2026 (the file is named beside each list).
 * /features.md and /llms-full.txt are built from this file too.
 */
export type FeaturePage = {
  slug: string;
  /** Menu and card name. */
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  /** The heading above `points`, as a question. */
  question: string;
  /** Short facts with names and numbers, shown as a table. */
  facts: ReadonlyArray<{ term: string; detail: string }>;
  /** One line for cards. */
  card: string;
  shot: Shot;
  phone?: Shot;
  /** The blog guide on the same subject. Must be a real post slug. */
  guide: { href: string; label: string };
  points: ReadonlyArray<{ title: string; body: string }>;
  faqs: ReadonlyArray<{ q: string; a: string }>;
};

export const FEATURE_PAGES: ReadonlyArray<FeaturePage> = [
  {
    slug: "tokens-and-queue",
    name: "Tokens and the waiting line",
    metaTitle: "Token and Queue Management Software for Clinics",
    metaDescription:
      "Give every walk-in a token in seconds. See who is next, who is with the doctor and how long each patient has waited, at the desk and on the doctor's phone.",
    h1: "Token and queue management for clinics",
    lead: "Curogrid gives every patient who walks into a clinic a token and keeps the waiting line on one screen, called Today. It shows who is next, who has been called, who is with the doctor and how long each patient has waited. The doctor sees the same line on the phone and calls the next patient from there.",
    question: "How does the token line work in Curogrid?",
    // curogrid-app/src/ui/status.ts and modules/today/utils/today.ts
    facts: [
      { term: "Where it is", detail: "The Today screen on the web, and Today and My line in the phone app" },
      { term: "A token can be", detail: "Waiting, Called, With doctor, Stepped out, Done, Didn't come or Cancelled" },
      { term: "Wait colours", detail: "Orange after 30 minutes, red after 60 minutes" },
      { term: "Priority tags", detail: "Emergency, Senior citizen (60+), Pregnant, Disability and Baby under 2" },
      { term: "Appointment needed", detail: "No. A token does not need a booking" },
    ],
    card: "A token for every walk-in, and a line the whole clinic can see.",
    shot: SHOTS.today,
    phone: SHOTS.phoneLine,
    guide: { href: "/blog/token-system-for-clinic-opd-queue", label: "How to run a token system in a walk-in clinic" },
    points: [
      {
        title: "Three boxes that answer “who is next?”",
        body: "Next up, Called and With doctor sit across the top. One button calls the next token, one marks that the patient came in, and one marks the visit done.",
      },
      {
        title: "Wait times that change colour",
        body: "Every row shows how long that patient has waited. A wait of more than 30 minutes turns orange and a wait of more than an hour turns red, so nobody is forgotten at the back of a full room. The top of the screen shows the average wait for the day.",
      },
      {
        title: "Babies and senior citizens are marked",
        body: "A token can carry one of five tags: Emergency, Senior citizen (60+), Pregnant, Disability or Baby under 2. The tag shows beside the name at the desk and in the doctor's line.",
      },
      {
        title: "Stepped out is not lost",
        body: "A patient who has gone for tea or to the chemist moves to Stepped out and keeps their token. One tap brings them back into the line.",
      },
      {
        title: "Walk-ins and appointments together",
        body: "The day's appointments are listed beside the line, with who is late. When a booked patient arrives, one button puts them in the line with everyone else.",
      },
    ],
    faqs: [
      {
        q: "Can the doctor call the next patient from the phone?",
        a: "Yes. The phone app's My line screen shows the tokens in order with each wait time, and a Call next button at the bottom.",
      },
      {
        q: "Does it work for a clinic that takes only walk-ins?",
        a: "Yes. Tokens do not need an appointment. The desk gives a token to whoever walks in, and that is the whole line.",
      },
      {
        q: "Can a patient be seen out of turn?",
        a: "Yes. Any waiting token has its own Call button, so the doctor or the desk can call someone ahead of the order when it is needed.",
      },
    ],
  },
  {
    slug: "appointments",
    name: "Appointments",
    metaTitle: "Appointment Scheduling Software for Clinics",
    metaDescription:
      "An appointment book with a column for each doctor, day, week and month views, and whole courses of visits booked in one go. Part of Curogrid clinic software.",
    h1: "Appointment scheduling for clinics",
    lead: "Curogrid's appointment book is the clinic's shared calendar. It gives each doctor a column and a colour, in day, week or month view. A course of visits, such as six physiotherapy sessions or four antenatal check-ups, is booked in one go, and each booking shows its place in the course.",
    question: "How do you book appointments in Curogrid?",
    // curogrid-app/src/modules/appointments/utils/visitPlans.ts and ui/status.ts
    facts: [
      { term: "Views", detail: "Day, week and month, for all doctors or one" },
      { term: "A booking can be", detail: "Booked, Confirmed, Arrived, Seen, Didn't come or Cancelled" },
      { term: "Physiotherapy course", detail: "6 sessions, 2 days apart, 45 minutes each" },
      { term: "Skin treatment course", detail: "4 sessions, 4 weeks apart, 30 minutes each" },
      { term: "Antenatal visits", detail: "4 visits, 4 weeks apart" },
      { term: "General practice", detail: "3 visits, a week apart" },
      { term: "Changing a course", detail: "The number of visits and the days between them are set when booking" },
    ],
    card: "A column for each doctor, and a whole course booked at once.",
    shot: SHOTS.appointments,
    phone: SHOTS.phoneAppointments,
    guide: { href: "/blog/physiotherapy-patients-dropping-out-of-sessions", label: "How to keep patients from dropping out of a course of sessions" },
    points: [
      {
        title: "A column and a colour for each doctor",
        body: "In day view every doctor has a column, with the number booked at the top. Each doctor's bookings are a different colour, so a shared calendar still reads at a glance.",
      },
      {
        title: "Day, week and month",
        body: "Switch between the three views, or show one doctor alone. A line across the day marks the time now.",
      },
      {
        title: "A course of visits in one booking",
        body: "Turn on the course switch and Curogrid books several visits together, at the same time of day, a set number of days apart. Each one is labelled, for example “Session 3 of 6”.",
      },
      {
        title: "The wording follows the speciality",
        body: "A physiotherapy clinic books a course of therapy sessions, a skin clinic books laser and peel sessions, a gynaecologist books antenatal visits, a surgeon books dressings. The usual number and gap are filled in for each.",
      },
      {
        title: "Booked patients join the same line",
        body: "On the day, expected appointments are listed on the Today screen. When the patient arrives, one button gives them their place in the line.",
      },
    ],
    faqs: [
      {
        q: "Can I book several visits for one patient at once?",
        a: "Yes. Turn on the course switch in the booking drawer, choose how many visits and how many days apart, and Curogrid books them all at the same time of day.",
      },
      {
        q: "Can each doctor have their own calendar?",
        a: "Yes. Every doctor has a column and a colour in the appointment book, and you can filter the book to one doctor.",
      },
      {
        q: "Can patients book online?",
        a: "Yes. An online booking page for patients is included in every plan.",
      },
    ],
  },
  {
    slug: "patient-records",
    name: "Patient files",
    metaTitle: "Patient Record Software for Clinics (EMR)",
    metaDescription:
      "One file for each patient: allergies up top, then visits, prescriptions, tests and scans, bills, readings, files and consents. For Indian clinics.",
    h1: "Patient records for clinics: one file for each patient",
    lead: "In Curogrid every patient has one file, the clinic's electronic medical record for that person. Allergies, long-term conditions and current medicines are at the top. Below them are the visits, prescriptions, tests and scans, appointments, bills, readings, files and consent forms, each on its own tab.",
    question: "What does a patient's file hold in Curogrid?",
    // curogrid-app/src/modules/patients/PatientRecord.tsx and components/record/SummaryStrip.tsx
    facts: [
      { term: "Tabs", detail: "Overview, Visits, Prescriptions, Tests and scans, Appointments, Bills, Readings, Files and Consents" },
      { term: "Always on top", detail: "Allergic to, Conditions and Takes" },
      { term: "Under the name", detail: "Last visit, Next visit and Still to pay" },
      { term: "Diagnoses", detail: "Picked from an ICD-10 list by name or by code" },
      { term: "File storage", detail: `${PLAN_LIMITS.plus.storageGb} GB on Plus, ${PLAN_LIMITS.pro.storageGb} GB on Pro` },
    ],
    card: "Allergies up top, then every visit, prescription, test and bill.",
    shot: SHOTS.file,
    phone: SHOTS.phoneFile,
    guide: { href: "/blog/growth-and-vaccination-records-pediatric-clinic", label: "How to record growth and vaccination visits" },
    points: [
      {
        title: "Allergies cannot be missed",
        body: "“Allergic to”, “Conditions” and “Takes” sit in a marked panel above everything else in the file. It is the first thing on the screen every time the file opens.",
      },
      {
        title: "Last visit, next visit, still to pay",
        body: "Three boxes under the patient's name answer the three questions asked at the desk: when did they last come, when are they due, and do they owe anything.",
      },
      {
        title: "A first card that follows your speciality",
        body: "A family doctor sees blood pressure over the last five visits. A paediatrician sees the child's weight. A diabetes clinic sees HbA1c. A physiotherapist sees the course of sessions.",
      },
      {
        title: "Nine tabs, one patient",
        body: "Overview, Visits, Prescriptions, Tests and scans, Appointments, Bills, Readings, Files and Consents. Nothing about the patient lives in a second place.",
      },
      {
        title: "Act from the file",
        body: "Give a token, book a visit or start a bill from the top of the file. The patient's number can be copied, or opened in WhatsApp, in one tap.",
      },
    ],
    faqs: [
      {
        q: "Does every patient get an ID number?",
        a: "Yes. Each patient gets a number in your clinic's own series, shown beside their name and on their bills. You can search by it, by name or by mobile number.",
      },
      {
        q: "Can I keep reports and photographs in the file?",
        a: `Yes. The Files tab holds documents and photographs. Storage is ${PLAN_LIMITS.plus.storageGb} GB on the Plus plan and ${PLAN_LIMITS.pro.storageGb} GB on Pro.`,
      },
      {
        q: "Are diagnoses coded?",
        a: "Yes. Diagnoses are searched from an ICD-10 list by name or by code, with the everyday word shown where it differs, for example “Chloasma [melasma]”.",
      },
      {
        q: "Does Curogrid warn about a patient's allergy?",
        a: "Yes. When a medicine on the prescription matches something the patient is recorded as allergic to, the doctor's screen shows a red line that says “Check before giving”. It is a reminder to check, and it does not block the prescription.",
      },
    ],
  },
  {
    slug: "billing",
    name: "Billing",
    metaTitle: "Clinic Billing Software with UPI, Cash and Card",
    metaDescription:
      "Bills, part payments and a day close for clinics. Curogrid shows what was taken today by UPI, cash and card, and exactly who still owes you.",
    h1: "Clinic billing that shows who still owes you",
    lead: "Curogrid's billing screen is where a clinic raises bills and takes payment. It shows four numbers for the day: what is still to collect, what was taken (split by UPI, cash and card), what was billed, and bills started but not saved. Below them is every bill, with a Take payment button on each one that is not fully paid.",
    question: "How does billing work in Curogrid?",
    // curogrid-app/src/modules/billing/Billing.tsx, components/list/MoneyStrip.tsx and ui/status.ts
    facts: [
      { term: "Numbers on top", detail: "To collect, Taken today, Billed today and Not saved" },
      { term: "Lists", detail: "Bills, Payments, Who owes and Day close" },
      { term: "A bill can be", detail: "Not saved, Unpaid, Part paid, Paid or Cancelled" },
      { term: "Ways to pay", detail: "UPI, cash and card, each counted apart" },
      { term: "Getting it out", detail: "Print, and Export on the bills, payments and who owes lists" },
    ],
    card: "Today's money by UPI, cash and card, and a list of who owes.",
    shot: SHOTS.billing,
    phone: SHOTS.phoneBills,
    guide: { href: "/blog/laser-peel-session-packages-skin-clinic", label: "How to track session packages and what has been paid" },
    points: [
      {
        title: "UPI, cash and card, counted apart",
        body: "Taken today is split by how it was paid, so the cash in the drawer and the money in the bank can each be checked against the screen.",
      },
      {
        title: "Part payments are normal",
        body: "A bill can be Unpaid, Part paid or Paid. Take payment records what came in today, and the rest stays against the patient's name.",
      },
      {
        title: "Who owes",
        body: "One tab lists every patient with money outstanding. The dashboard also flags a bill that has been unpaid for over 30 days.",
      },
      {
        title: "Day close",
        body: "At the end of the day, close it: one place to check what was billed and what was collected before the drawer is counted.",
      },
      {
        title: "Services priced once",
        body: "Your services and fees are set up once, starting from your speciality's list. A bill is then a few taps, and every bill has its own number in your series.",
      },
    ],
    faqs: [
      {
        q: "Can I take part payment on a bill?",
        a: "Yes. A bill can be part paid. Curogrid keeps what is still to pay against the patient and lists it under Who owes.",
      },
      {
        q: "Does it record how the patient paid?",
        a: "Yes. Each payment is recorded as UPI, cash or card, and the day's total is shown split the same way.",
      },
      {
        q: "Can I print or export my bills?",
        a: "Yes. The billing screen has Print and Export buttons, and filters to narrow the list first.",
      },
      {
        q: "Is there a GST report?",
        a: "Yes. Reports has a GST report that shows tax by rate with the HSN and SAC summary, for the dates you choose.",
      },
    ],
  },
];

/** On /features without a page of their own. */
export const MORE_FEATURES: ReadonlyArray<{ name: string; body: string }> = [
  {
    name: "Visits and prescriptions",
    body: "Medicine names are offered as you type, from your speciality's list. Save a set of medicines you write together and reuse it. A medicine that matches the patient's recorded allergy is flagged in red.",
  },
  {
    name: "Tests and scans",
    body: "Order a test or a scan in one tap on the visit, or a procedure from a new order, and follow it step by step: Ordered, Sample taken, At the lab, Result in, Checked, Given to patient.",
  },
  {
    name: "Stock",
    body: "Keep count of what the clinic holds, including items that come in batches and expire, such as vaccines.",
  },
  {
    name: "Expenses and vendors",
    body: "Record what the clinic spends and which vendor it was paid to, next to what it earns.",
  },
  {
    name: "Reports",
    body: `${REPORTS.length} reports: ${REPORTS.join(", ")}. Staff attendance and an activity log of who did what are kept as well.`,
  },
  {
    name: "Staff and roles",
    body: "Each person signs in as themselves. You decide what a doctor or a receptionist is allowed to open.",
  },
  {
    name: "Reminders",
    body: `Reminders to patients go out by WhatsApp and email. On the Pro plan they go from your clinic's own WhatsApp number; on Plus that is an add-on at ${rupees(OWN_WHATSAPP_ADDON.monthly)} a month. SMS is not available yet.`,
  },
  {
    name: "Consent forms",
    body: "Starter consent forms for examination, procedures, anaesthesia and photographs, signed on screen and kept in the patient's file.",
  },
  {
    name: "Online booking and Google Reviews",
    body: "A booking page your patients can use, and Google Reviews connected to the clinic.",
  },
];

export function getFeaturePage(slug: string) {
  return FEATURE_PAGES.find((feature) => feature.slug === slug);
}

/**
 * What to ask of any clinic software, with Curogrid's own answer.
 *
 * Deliberately names no other product: nobody has researched how
 * Curogrid compares with each one, and a claim about someone else's
 * software is a claim we cannot check. The questions are the ones that
 * decide whether software survives its first month in a small clinic,
 * and the answers include the ones that are "no".
 */
export const BUYING_QUESTIONS: ReadonlyArray<{ ask: string; why: string; curogrid: string }> = [
  {
    ask: "Is the price per clinic or per doctor?",
    why: "A per-doctor price grows each time a doctor joins.",
    curogrid: `Per clinic. ${PLANS.map((plan) => `${plan.name} is ${rupees(plan.monthly)} a month`).join(" and ")}, before GST.`,
  },
  {
    ask: "Does it arrive set up for my speciality?",
    why: "A blank system means typing in every service, price and medicine before the first patient.",
    curogrid: `Yes, for ${SPECIALITY_COUNT} specialities. Services, starter prices, medicines, tests, procedures and consent forms are created when you pick your speciality in clinic setup.`,
  },
  {
    ask: "Can it run a walk-in line without appointments?",
    why: "A clinic that sees walk-ins cannot use software that needs a booking first.",
    curogrid: "Yes. A token does not need a booking, and booked patients join the same line when they arrive.",
  },
  {
    ask: "Can the whole staff use it?",
    why: "If the receptionist and the compounder find it hard, it is not used.",
    curogrid: `Yes. Each person has a login and sees what their role allows. Plus has ${PLAN_LIMITS.plus.staff} logins and Pro has ${PLAN_LIMITS.pro.staff}.`,
  },
  {
    ask: "Does it work on a phone?",
    why: "The doctor is in the consulting room and the owner is often away from the clinic.",
    curogrid: "Yes. There is a phone app for Android and iPhone that shows the line, the files and the bills.",
  },
  {
    ask: "Does it record how each bill was paid?",
    why: "Cash in the drawer and money in the bank are checked separately at the end of the day.",
    curogrid: "Yes. Each payment is recorded as UPI, cash or card, and the day's total is split the same way.",
  },
  {
    ask: "Can I bring my old patient list in?",
    why: "Nobody wants to type years of patients in again.",
    curogrid: "Yes, from an Excel or CSV file. You check the result before pressing Import, and an import can be undone.",
  },
  {
    ask: "Can I take my data out?",
    why: "The records belong to the clinic, whatever software it uses next.",
    curogrid: "Yes. Patients, bills and payments export as files, and a backup of the whole clinic downloads as one ZIP.",
  },
  {
    ask: "Can I try it before paying?",
    why: "A demo shows the software. Only a trial shows it in your own clinic.",
    curogrid: `Yes. Every new clinic gets ${TRIAL_DAYS} days of the ${TRIAL_PLAN} plan free.`,
  },
  {
    ask: "Does it handle admitted patients and beds?",
    why: "A hospital needs admissions, a bed board and discharge summaries.",
    curogrid: "No. Curogrid is for clinics and OPD work. The inpatient side is not built yet.",
  },
  {
    ask: "Does it have dental charting?",
    why: "A dentist needs a tooth chart and dental treatment plans.",
    curogrid: "No. Curogrid has no dental setup. Dentists should use MolarPlus, from the same company.",
  },
];
