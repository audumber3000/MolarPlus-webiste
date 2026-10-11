import type { Post } from "@/lib/blog";
import { PLANS, TRIAL_DAYS, rupees } from "@/content/pricing";
import { SPECIALITIES, gapWords, type Speciality } from "@/lib/specialities";

/**
 * One practical guide for each speciality page. Each is written for a
 * doctor who may never buy Curogrid: the advice comes first, and what
 * the product does is a short section at the end.
 *
 * Every Curogrid fact below (a count, a price, a default, a switch's
 * name) is read from `lib/specialities.ts` or `content/pricing.ts`, so a
 * post cannot drift from the speciality page it supports. What the
 * product does NOT do was checked against the app repo on 11 October
 * 2026: the visit screen has seven vitals and no head circumference
 * (`onboarding/templates/packs.py::VITALS`); there is no vaccination
 * schedule, no due-date calculator and no link between a billed package
 * and a booked course.
 *
 * No post states a clinical schedule, a dose or a third-party number.
 * None cites an outside source, because none could be opened and read
 * on the day of writing; where a law is named it is in general terms
 * with the advice to check the current rule.
 */

function speciality(key: string): Speciality {
  const found = SPECIALITIES.find((s) => s.key === key);
  if (!found) throw new Error(`content/blog: no speciality "${key}" in lib/specialities.ts`);
  return found;
}

/** A starter service's price, so a renamed or removed service fails the build. */
function price(s: Speciality, name: string) {
  const found = s.services.find((service) => service.name === name);
  if (!found) throw new Error(`content/blog: ${s.key} has no starter service "${name}"`);
  return rupees(found.price);
}

const [PLUS, PRO] = PLANS;

/** "6", read from the plan's own feature list. */
function staffLogins(features: ReadonlyArray<string>) {
  const line = features.find((feature) => feature.endsWith(" staff logins"));
  if (!line) throw new Error("content/blog: the plan no longer lists its staff logins");
  return line.replace(" staff logins", "");
}
const PLUS_LOGINS = `${PLUS.name} includes ${staffLogins(PLUS.features)} staff logins`;
const PLAN_LINE = `Curogrid costs ${rupees(PLUS.monthly)} a month on ${PLUS.name} or ${rupees(PRO.monthly)} on ${PRO.name}, for the whole clinic, with a ${TRIAL_DAYS}-day free trial of ${PRO.name}.`;

const GP = speciality("general_practice");
const PAEDS = speciality("paediatrics");
const GYNAE = speciality("obstetrics_gynaecology");
const SKIN = speciality("dermatology");
const ENT = speciality("ent");
const PHYSIO = speciality("physiotherapy");

export const SPECIALITY_POSTS: ReadonlyArray<Post> = [
  {
    slug: "physiotherapy-patients-dropping-out-of-sessions",
    title: "How to keep physiotherapy patients from dropping out half way through a course",
    metaTitle: "Stop Physiotherapy Patients Dropping Out",
    description:
      "Five clinic habits that keep physiotherapy patients to the end of a course: book it all at once, fix the slot and follow up a missed session the same day.",
    published: "2026-10-11",
    related: [
      { href: `/${PHYSIO.slug}`, label: "Curogrid for physiotherapy clinics" },
      { href: "/features/appointments", label: "Booking a course of visits in Curogrid" },
      { href: "/pricing", label: "Curogrid pricing" },
    ],
    body: [
      { type: "p", text: "A physiotherapy clinic keeps patients to the end of a course with five habits: book every session on the first day, give the patient the same time and the same therapist, show them where they are in the course, follow up a missed session on the day it is missed, and agree the money before session one. None of these needs new equipment." },
      { type: "p", text: "A course is planned for a reason, and a patient who stops at session three has paid for part of a result. The clinic also loses the booked slots. Much of what causes it is in the clinic's hands." },
      { type: "h2", text: "Why physiotherapy patients stop coming" },
      { type: "p", text: "The reasons patients give are ordinary ones, and each has a matching fix at the desk." },
      { type: "table", caption: "Reasons physiotherapy patients stop coming, and what the clinic can do about each", head: ["Reason", "What the clinic can do"], rows: [
        ["The pain eased", "Say at the assessment what the later sessions are for, and write it on the plan the patient takes home."],
        ["The next session was never booked", "Book the whole course on the first day."],
        ["The time stopped suiting them", "Offer one fixed slot for the course, and move the remaining sessions together when it has to change."],
        ["One session was missed and nobody called", "Call or message the same day and rebook before the week is out."],
        ["The cost was not clear", "Agree the fee and how it will be paid before the first session."],
      ] },
      { type: "h2", text: "Book the whole course on the first day" },
      { type: "p", text: "Book every session before the patient leaves the assessment. A patient who has six dates in hand has agreed to six sessions. A patient who is told “come again on Thursday” has agreed to one, and has to decide again each time. Give the dates on paper or by message, so the family can see them too." },
      { type: "h2", text: "Keep the same time and the same therapist" },
      { type: "p", text: "Give the course one time of day and, where your staffing allows, one therapist. A fixed slot becomes part of the patient's week, and a therapist who saw the last session does not need the history repeated. If the slot must change, move all the remaining sessions in one go so the patient has one new time to remember." },
      { type: "h2", text: "Show the patient where they are in the course" },
      { type: "p", text: "Tell the patient their place at every visit: “this is session three of six”. A patient who can see the end of the course has a reason to reach it. Use the same count in the patient's file, so that anyone at the desk can answer “how many are left?” without calling the therapist out of a session." },
      { type: "h2", text: "Follow up a missed session the same day" },
      { type: "p", text: "Give a missed session a fixed routine, so that it is followed up every time and by the same steps." },
      { type: "ol", items: [
        "Mark the session as missed when the slot has passed. Do not leave it sitting in the diary as if it were still to come.",
        "Call or message the patient the same day. Ask only when they can come next.",
        "Rebook the missed session, and move the later ones if the gap between sessions matters to the plan.",
        "Write one line in the file on why it was missed. A patient who has missed twice for the same reason needs a different slot.",
        "Once a week, list every patient with a missed session that was never rebooked, and call them.",
      ] },
      { type: "h2", text: "Agree the money before the first session" },
      { type: "p", text: "Decide with the patient whether they pay for each session or for a package, and write down what was agreed. If you sell a package, state how many sessions it covers, how long it stays valid, and what happens to sessions that are not used. If the patient pays in parts, record each part on the day it is paid. A patient who is unsure what they owe may find it easier to stay away than to ask." },
      { type: "h2", text: "What to count each month" },
      { type: "p", text: "Count three things each month: courses started, courses finished, and missed sessions that were never rebooked. We have no sourced benchmark to offer for a normal completion rate, so compare your own months with each other. A rise in sessions that were never rebooked tells you the follow-up routine has slipped." },
      { type: "h2", text: "How Curogrid does it" },
      { type: "p", text: `In Curogrid, a physiotherapy clinic turns on “${PHYSIO.course.title}” while booking. The course is booked in one step: ${PHYSIO.course.count} sessions, ${gapWords(PHYSIO.course.everyDays)}, ${PHYSIO.course.minutes} minutes each, at the same time of day, unless you change the number or the gap. Each booking shows its place, such as “Session 3 of ${PHYSIO.course.count}”. The patient's file opens on a Sessions card that shows how many are done and when the next one is booked, and flags a missed session that was never rebooked. Reminders for booked sessions go out by WhatsApp and email.` },
      { type: "p", text: `A “10 session package” is one of the starter services, at ${price(PHYSIO, "10 session package")}, and you can change the price or add your own packages. The package is a bill and the course is a set of bookings: Curogrid does not deduct sessions from a paid package for you, so book the course to the same length as the package. It has no library of exercise videos. ${PLAN_LINE}` },
    ],
  },

  {
    slug: "antenatal-visit-schedule-clinic-management",
    title: "How to manage antenatal visit schedules in a gynaecology clinic",
    metaTitle: "How to Manage Antenatal Visit Schedules",
    description:
      "A practical way to run antenatal visits in a clinic: book the visits ahead, track each scan and test to its result, and keep a weekly list of who has missed.",
    published: "2026-10-11",
    related: [
      { href: `/${GYNAE.slug}`, label: "Curogrid for gynaecology clinics" },
      { href: "/features/appointments", label: "Booking a course of visits in Curogrid" },
      { href: "/hospitals", label: "What Curogrid does not do for admitted patients" },
      { href: "/book-demo", label: "Book a demo" },
    ],
    body: [
      { type: "p", text: "Manage antenatal visits as one course for each pregnancy. Book the coming visits before the patient leaves, follow every scan and test from the order to the result, keep a weekly list of who has missed a visit, and agree the fee at the start. The clinical schedule is the doctor's. The clinic's job is to make sure nothing on it is lost." },
      { type: "p", text: "This guide is about running the clinic. It does not say which visit, scan or test is due at which week. Follow the schedule you practise by." },
      { type: "h2", text: "Treat each pregnancy as one course of visits" },
      { type: "p", text: "Keep the antenatal visits of one pregnancy together, numbered, and apart from the patient's other visits. Then the file answers the two questions asked at every check-up: which visit is this, and was the last one attended. A diary that holds each visit as a separate, unrelated appointment cannot answer either without someone turning back the pages." },
      { type: "h2", text: "Book the next visits before she leaves" },
      { type: "p", text: "Book ahead at the desk, on the day of the visit, while the patient and her family are in front of you. Book as far ahead as your schedule is fixed. If the gap between visits changes later in the pregnancy, book the first part now and the next part when the doctor sets it. Keep the same weekday and time where you can, because the person who comes with her has to plan for it too." },
      { type: "h2", text: "Follow every scan and test to its result" },
      { type: "p", text: "A scan or test has four states, and the clinic should know which one each is in:" },
      { type: "ol", items: [
        "Ordered: the doctor has asked for it, and the date it is wanted by is written down.",
        "Done: the patient has had it, at your clinic or outside.",
        "Result back: the report is in the patient's file.",
        "Seen: the doctor has read it and noted what follows.",
      ] },
      { type: "p", text: "The gap that causes trouble is between the first and the third: an order was written and no report ever came back. Check the open orders before each antenatal clinic day, and ask for the missing reports when you remind the patient of her visit." },
      { type: "h2", text: "Keep a weekly list of who has missed a visit" },
      { type: "p", text: "Once a week, list every antenatal patient whose visit date has passed without her coming, and call each one. Give the list to one named person at the desk. Record the outcome of each call in the file: rebooked, delivered elsewhere, moved away, or not reachable. A missed visit with no note beside it looks the same next week, and gets missed again." },
      { type: "h2", text: "Put the antenatal package in writing" },
      { type: "p", text: "If you charge one fee for the pregnancy, write down what it covers and give the patient a copy. State these points:" },
      { type: "ul", items: [
        "Which visits are included, and whether extra visits are charged.",
        "Which scans and tests are included, and which are billed apart.",
        "Whether the delivery is part of the package or a separate bill.",
        "How the fee is paid: at once or in parts, and when each part is due.",
        "What is refunded if the patient moves to another doctor.",
      ] },
      { type: "p", text: "Record each part payment on the day it is made, so the desk can tell her what is still to pay without asking the doctor." },
      { type: "h2", text: "If your clinic does ultrasound" },
      { type: "p", text: "A clinic that does obstetric ultrasound in India has registration and record-keeping duties under the PCPNDT Act and its rules. They are separate from your clinical record, and the forms and the periods for keeping them are set by law. We do not summarise them here. Check the current rules with the authority that registered your clinic or with your legal adviser, and name one person in the clinic who is responsible for the paperwork every day." },
      { type: "h2", text: "Give pregnant patients their place in the line" },
      { type: "p", text: "Decide a rule for the waiting room and tell the desk. A woman late in pregnancy should not sit for an hour behind routine follow-ups. Mark her token at the desk so the doctor sees it in the line and decides the order." },
      { type: "h2", text: "How Curogrid does it" },
      { type: "p", text: `In Curogrid, a gynaecology clinic turns on “${GYNAE.course.title}” while booking. The visits are booked together, ${GYNAE.course.count} visits ${gapWords(GYNAE.course.everyDays)} unless you change the number or the gap, and each is labelled, for example “Visit 2 of ${GYNAE.course.count}”. The patient's file opens on a Visits and care card that shows the antenatal visits booked and done. ${GYNAE.scans.length} scans and ${GYNAE.tests.length} tests are one-tap orders, and each order and its result sit under Tests and scans in the file. A token can be marked “Pregnant”. An “Antenatal package, full term” is a starter service at ${price(GYNAE, "Antenatal package, full term")}, a price you change to your own, and a bill can be paid in parts.` },
      { type: "p", text: `Curogrid does not work out the due date or the weeks of pregnancy for you. The gap it fills in is only a starting point, and the schedule is yours to set. A clinic that scans gets a PCPNDT registration task on its setup checklist, but Curogrid does not generate or file Form F. It is for the clinic and the OPD: admitted patients, beds and the discharge summary are not built yet. ${PLAN_LINE}` },
    ],
  },

  {
    slug: "laser-peel-session-packages-skin-clinic",
    title: "How to track laser and peel session packages in a skin clinic",
    metaTitle: "Track Laser and Peel Packages in a Skin Clinic",
    description:
      "How a skin clinic keeps laser and peel packages straight: what to write down at the sale, how to count sessions done against sessions paid, and consent.",
    published: "2026-10-11",
    related: [
      { href: `/${SKIN.slug}`, label: "Curogrid for skin and hair clinics" },
      { href: "/features/billing", label: "Part payments and who owes in Curogrid" },
      { href: "/features/appointments", label: "Booking a course of sessions in Curogrid" },
      { href: "/pricing", label: "Curogrid pricing" },
    ],
    body: [
      { type: "p", text: "Track a laser or peel package as two records that must always agree: the sessions, booked and counted as a course, and the money, billed once and paid in full or in parts. Write the terms down at the sale, book every session that day, and check each week that no patient has had more sessions than they have paid for." },
      { type: "p", text: "Packages go wrong in a few predictable places: a session that nobody counted, a balance that nobody asked for, and a patient who returns after eight months expecting the sessions that were left. Each has a fix at the desk." },
      { type: "h2", text: "What to write down when you sell a package" },
      { type: "p", text: "Put the terms on one page and give the patient a copy. A package sold on a spoken promise is remembered differently by each side." },
      { type: "ul", items: [
        "The treatment and the area treated.",
        "The number of sessions in the package.",
        "The planned gap between sessions, as the doctor has set it.",
        "The price, and whether it is paid at once or in parts.",
        "How long the package stays valid.",
        "What happens to a session the patient misses without notice.",
        "Whether unused sessions are refunded or can be moved to another treatment.",
        "That the doctor may change or stop the plan for clinical reasons, and what is charged if that happens.",
      ] },
      { type: "h2", text: "Book every session on the day of the sale" },
      { type: "p", text: "Book the whole course before the patient leaves. Sessions that are weeks apart are easy to lose: with a long gap, neither the patient nor the desk has a reason to think about the next one until it is overdue. A patient who leaves with every date has a plan. Send a reminder before each session, because a date fixed a month ago is easily forgotten." },
      { type: "h2", text: "Count sessions done against sessions paid" },
      { type: "p", text: "For every open package, the desk should be able to say three numbers without searching: sessions in the package, sessions done, and the amount still to pay. Count a session as done only when it has been given, on the day, by the person who gave it. Never count from memory at the end of the week." },
      { type: "table", caption: "What a skin clinic's desk should know about every open session package", head: ["Question", "Where the answer should be"], rows: [
        ["How many sessions were sold?", "On the bill and on the signed terms."],
        ["How many are done?", "In the patient's file, counted from sessions actually given."],
        ["When is the next one?", "In the appointment book, already booked."],
        ["How much is still to pay?", "Against the bill, after each part payment."],
        ["Is the package still valid?", "On the signed terms, as an end date."],
      ] },
      { type: "h2", text: "Take part payments against one bill" },
      { type: "p", text: "Raise one bill for the package and record every payment against it. Do not write a fresh bill each time the patient pays. One bill with part payments shows what is still to pay at a glance. A fresh bill for every payment makes one package look like several small sales. Decide your rule, for example that the balance is cleared before the last session, and print it on the terms." },
      { type: "h2", text: "Photographs and consent" },
      { type: "p", text: "Take written consent before the first photograph and before the first session. Before-and-after photographs are how a skin clinic shows progress, and a photograph of a patient is personal data. Keep the consent for the clinical record separate from any consent to show the photographs to other people or to use them in publicity, and let the patient agree to the first without the second. Check the current data protection rules before you use a patient's photograph outside the file." },
      { type: "h2", text: "When a patient stops in the middle" },
      { type: "ol", items: [
        "Call after the first missed session, and rebook it.",
        "If the patient wants to stop, note the reason in the file and the date.",
        "Apply the refund or transfer rule that was written on the terms.",
        "Close the package, so it no longer appears among the open ones.",
        "Cancel the remaining bookings, so the slots can be given to someone else.",
      ] },
      { type: "h2", text: "A weekly check that takes ten minutes" },
      { type: "ul", items: [
        "Packages where the sessions done are ahead of what has been paid for.",
        "Packages with no next session booked.",
        "Packages that will pass their validity date this month.",
        "Missed sessions that were never rebooked.",
      ] },
      { type: "h2", text: "How Curogrid does it" },
      { type: "p", text: `In Curogrid, a skin clinic turns on “${SKIN.course.title}” while booking. The course is booked together: ${SKIN.course.count} sessions ${gapWords(SKIN.course.everyDays)}, ${SKIN.course.minutes} minutes each, unless you change it, and each booking shows its place, such as “Session 2 of ${SKIN.course.count}”. The patient's file opens on a Treatment card that shows how many sessions are done and when the next one is booked. Chemical peel, Laser session and PRP session are one-tap procedures on the visit. A bill can be part paid, and one tab lists every patient who still owes. The Clinical photographs consent form is part of the setup and is signed on screen, and photographs are kept in the file.` },
      { type: "p", text: `The starter price list has a chemical peel at ${price(SKIN, "Chemical peel")}. It has no laser service and no package, so you add those with your own prices. Curogrid does not deduct sessions from a paid package for you: the bill and the course are separate, so book the course to the length of the package you sold. ${PLAN_LINE}` },
    ],
  },

  {
    slug: "growth-and-vaccination-records-pediatric-clinic",
    title: "How to record growth and vaccination visits in a paediatric clinic",
    metaTitle: "Recording Growth and Vaccination Visits",
    description:
      "What a paediatric clinic should write down at a growth check and at a vaccination visit, who should do it, and how to bill the visit and the vaccine.",
    published: "2026-10-11",
    related: [
      { href: `/${PAEDS.slug}`, label: "Curogrid for paediatric clinics" },
      { href: "/features/patient-records", label: "The patient's file in Curogrid" },
      { href: "/pricing", label: "Curogrid pricing" },
      { href: "/book-demo", label: "Book a demo" },
    ],
    body: [
      { type: "p", text: "Record a child's weight and height at every visit, measured the same way each time, and record each vaccine on the day it is given with its name, batch and date. Keep both in the child's one file. Then any visit, for any reason, can answer the two questions a parent asks most: is the child growing, and what is due next." },
      { type: "p", text: "This guide covers the record and the running of the clinic. It does not reproduce a vaccination schedule or say what a normal measurement is. Use the schedule and the growth charts you practise by." },
      { type: "h2", text: "What to record at a growth check" },
      { type: "p", text: "Record the same few things at every visit, including visits for a fever or a cough. A growth record is only useful as a series, and a series has gaps if measuring is kept for “growth visits” alone." },
      { type: "ul", items: [
        "The date of the visit.",
        "Weight, on the same scale each time, with the same amount of clothing.",
        "Height or length, measured the same way each time.",
        "Any other measurement your practice takes for the child's age.",
        "Who measured, when more than one person does it.",
      ] },
      { type: "h2", text: "Measure before the child reaches the doctor" },
      { type: "p", text: "Make measuring a job for the sister or the compounder, done while the family waits. The doctor then opens the file with today's figures already beside the earlier ones, and the whole consultation goes to the child." },
      { type: "ol", items: [
        "Give the token at the desk.",
        "Call the child to the scale in token order, ahead of their turn with the doctor.",
        "Enter the weight and height in the child's file straight away. Do not write them on a slip to be copied later.",
        "Send the family back to the waiting area until their token is called.",
      ] },
      { type: "h2", text: "What to record at a vaccination visit" },
      { type: "p", text: "Record enough that another doctor, years later, can tell exactly what was given. The parent's card can be lost, so the clinic's record has to stand on its own." },
      { type: "table", caption: "What a paediatric clinic should record for every vaccine it gives", head: ["What to record", "Why it is needed"], rows: [
        ["Vaccine and brand", "Different products exist for the same disease."],
        ["Batch number", "So a child can be traced if a batch is ever recalled."],
        ["Expiry date of the vial", "Shows the vaccine was in date when it was given."],
        ["Date given", "So the doctor can set the next date from it."],
        ["Who gave it", "So a question can be answered later."],
        ["Next visit, as the doctor set it", "So the desk can book it before the family leaves."],
      ] },
      { type: "p", text: "Write the same entry on the parent's card at the same time, so the two records never differ." },
      { type: "h2", text: "Bill the visit and the vaccine separately" },
      { type: "p", text: "Charge the visit as a service and the vaccine as an item from stock, on the same bill. The visit charge is your fee and stays the same. The vaccine has a purchase cost, a batch and an expiry, and its count must fall by one each time one is given. If the two are billed as a single line, the count on the shelf never matches the record." },
      { type: "h2", text: "Keep vaccine stock by batch and expiry" },
      { type: "p", text: "Enter each delivery of vaccine with its batch and expiry, and use the earliest expiry first. Look at what is about to expire at the start of each month, while there is still time to use it or return it. Store every vaccine as its manufacturer directs. Storage is outside the scope of this guide." },
      { type: "h2", text: "Book the next visit before the family leaves" },
      { type: "p", text: "Book the next vaccination or growth visit at the desk, on the day, from the date the doctor has set. Send a reminder before it. A family that leaves with only a date written on the card depends on someone at home reading the card in time." },
      { type: "h2", text: "Keep well children apart from sick ones where you can" },
      { type: "p", text: "If your space or your timings allow, give vaccination and growth visits their own hour or their own corner of the waiting room. A well baby who has come for a vaccine then does not sit beside children who have come with a fever. Where that is not possible, mark the baby's token so the doctor can see it and call the family in sooner." },
      { type: "h2", text: "How Curogrid does it" },
      { type: "p", text: `In Curogrid, weight and height are saved at each visit, and the sister can enter them before the doctor starts. A child's file opens on a Growth card that draws weight over the last five visits as a small chart, with the latest height beside it. Vaccination and Growth check are one-tap procedures on the visit. The visit is billed as “Immunisation, visit charge”, a starter service at ${price(PAEDS, "Immunisation, visit charge")}, and the vaccine is kept as stock with its batch and expiry and added to the same bill. A token can be marked “Baby under 2”. Reminders for booked visits go out by WhatsApp and email.` },
      { type: "p", text: `Curogrid does not plot percentile growth charts, and the visit screen has no separate field for head circumference. It does not hold a vaccination schedule or work out which vaccine is due: the doctor sets the next date and the desk books it. ${PLAN_LINE}` },
    ],
  },

  {
    slug: "ent-clinic-opd-audiometry-procedures-workflow",
    title: "How to run audiometry and procedures alongside the OPD in an ENT clinic",
    metaTitle: "Running Audiometry and Procedures in an ENT OPD",
    description:
      "How an ENT clinic fits hearing tests, endoscopy and ear procedures around a walk-in OPD without stalling the line: slots, rooms, reports and billing.",
    published: "2026-10-11",
    related: [
      { href: `/${ENT.slug}`, label: "Curogrid for ENT clinics" },
      { href: "/features/tokens-and-queue", label: "Tokens and the waiting line in Curogrid" },
      { href: "/features/billing", label: "Billing in Curogrid" },
      { href: "/pricing", label: "Curogrid pricing" },
    ],
    body: [
      { type: "p", text: "An ENT clinic runs three kinds of work in the same hours: consultations, hearing tests in a quiet room, and short procedures. Keep them from blocking each other with four rules: sort each service by how long it takes and who does it, give hearing tests their own slots, keep the patient's token while they are away for a test, and bill the procedure before the patient leaves." },
      { type: "p", text: "The OPD stalls when the doctor leaves the consulting room for a twenty-minute procedure with a full room waiting, or when a patient sent for audiometry comes back to find their turn gone." },
      { type: "h2", text: "Sort your services into three kinds" },
      { type: "p", text: "List everything the clinic does and put each service in one of three groups. The group decides where it happens and when." },
      { type: "table", caption: "Three kinds of work in an ENT clinic and how to schedule each", head: ["Kind of work", "Examples", "How to schedule it"], rows: [
        ["Done in the consultation", "Examination, a prescription, a short ear clean", "In token order, as part of the visit."],
        ["Done by someone else", "Pure tone audiometry, tympanometry", "In its own room and its own slots, while the OPD carries on."],
        ["Needs the doctor and time", "Nasal endoscopy, laryngoscopy, foreign body removal", "In a fixed procedure block, or between a set number of consultations."],
      ] },
      { type: "p", text: "Which group a service belongs in depends on your rooms and your staff. A clinic with an endoscopy set-up beside the consulting chair will sort differently from one with a separate procedure room." },
      { type: "h2", text: "Give hearing tests their own slots" },
      { type: "p", text: "Book audiometry by time, even if the OPD is walk-in. A hearing test needs a quiet room and a fixed length of time, and only one patient can be tested at once. Keep a few slots open in each session for patients the doctor sends across from that day's OPD, and book the rest ahead. If an audiologist visits on certain days, book test patients to those days and say so at the desk." },
      { type: "h2", text: "Keep the token while the patient is away for a test" },
      { type: "p", text: "A patient sent for a test should come back to the doctor without starting at the back of the line. Decide the rule and tell the desk: the patient keeps the same token, is marked as away, and is called next after the patient who is with the doctor when they return. Tell the patient this before they leave the consulting room, so they do not wait at the desk to be given a new number." },
      { type: "h2", text: "Fix a block for longer procedures" },
      { type: "p", text: "Choose when longer procedures happen and keep to it. Two patterns work:" },
      { type: "ul", items: [
        "A procedure block at a set time, such as the end of the morning OPD, with patients asked to wait or return for it.",
        "One procedure after a set number of consultations, so the wait for the room rises in small steps.",
      ] },
      { type: "p", text: "Urgent cases, such as a foreign body or a nosebleed, cannot wait for a block. Tell the waiting room plainly when one comes in. People accept a delay they can see the reason for." },
      { type: "h2", text: "Get the report into the patient's file the same day" },
      { type: "p", text: "File the audiogram, the tympanometry report and any endoscopy pictures on the day they are made. A hearing test is often compared with one from an earlier visit, and the comparison is possible only if both are in the file, dated, under the right patient. Name one person to do this at the end of each session." },
      { type: "h2", text: "Record the side every time" },
      { type: "p", text: "Write right, left or both on every ear and nose entry: on the order, on the procedure note, on the report and on the prescription. Make it a habit of the form, so that an entry without a side looks unfinished to whoever reads it." },
      { type: "h2", text: "Bill the procedure before the patient leaves" },
      { type: "ol", items: [
        "Tell the patient the charge before the procedure or test, and take consent where the procedure needs it.",
        "Add the procedure to the visit when it is done, in the room.",
        "Make one bill at the desk for the consultation and everything added to the visit.",
        "At the end of the day, compare the procedures recorded with the procedures billed.",
      ] },
      { type: "p", text: "The last step is the one that finds the ear clean that was done between two patients and never charged." },
      { type: "h2", text: "How Curogrid does it" },
      { type: "p", text: `Choosing ENT in Curogrid sets up an Audiology department apart from the ENT OPD, and ${ENT.services.length} starter services with a price each, including pure tone audiometry at ${price(ENT, "Pure tone audiometry")} and nasal endoscopy at ${price(ENT, "Nasal endoscopy")}. You change every price. ${ENT.procedures.length} procedures, from ear wash to nasal packing, are added to the visit in one tap. “In the right ear”, “In the left ear” and “In each nostril” are one-tap directions on the prescription. A patient who steps out keeps their token, and one tap brings them back into the line. The audiologist has their own login.` },
      { type: "p", text: `Curogrid does not draw the audiogram: you order the test, bill it, mark it done and attach the report to the patient's file. It does not connect to the endoscope, so you add the saved pictures yourself. ${PLAN_LINE} ${PLUS_LOGINS}.` },
    ],
  },

  {
    slug: "managing-heavy-walk-in-opd-family-doctor",
    title: "How a family doctor can handle a heavy walk-in OPD",
    metaTitle: "How a Family Doctor Can Handle a Heavy OPD",
    description:
      "Practical steps for a general physician with a full waiting room: tokens on arrival, vitals before the doctor, quick prescriptions and a bill at the desk.",
    published: "2026-10-11",
    related: [
      { href: `/${GP.slug}`, label: "Curogrid for general physicians" },
      { href: "/features/tokens-and-queue", label: "Tokens and the waiting line in Curogrid" },
      { href: "/blog/token-system-for-clinic-opd-queue", label: "A token system for your clinic" },
      { href: "/pricing", label: "Curogrid pricing" },
    ],
    body: [
      { type: "p", text: "A family doctor handles a heavy walk-in OPD by taking every task that does not need a doctor out of the consulting room. Give a token on arrival, take vitals before the patient comes in, send injections and dressings to the sister, write common prescriptions from saved sets, and bill at the desk. The doctor's minutes then go to the patient." },
      { type: "p", text: "None of this shortens the time a patient needs with you. It removes the minutes around it: finding the old record, taking the blood pressure, writing the same five medicines out again, and working out the bill." },
      { type: "h2", text: "Where the time goes in a full OPD" },
      { type: "p", text: "Watch one morning and note what the doctor does that someone else could do. The list is usually some of these:" },
      { type: "ul", items: [
        "Asking the patient's name, age and mobile number.",
        "Looking for what was written at the last visit.",
        "Taking weight, temperature and blood pressure.",
        "Giving an injection or changing a dressing.",
        "Writing out a prescription that is the same as the last ten for that complaint.",
        "Telling the patient what to pay.",
      ] },
      { type: "h2", text: "Give a token the moment the patient arrives" },
      { type: "p", text: "Register and give a token at the desk before anything else. A token settles the order, so nobody has to stand near the door to hold their place, and the desk can answer “how many before me?” truthfully. Take the name and mobile number once, at the first visit, and search for the patient after that." },
      { type: "h2", text: "Take vitals before the patient reaches the doctor" },
      { type: "p", text: "Have the sister or the compounder take weight, temperature, pulse and blood pressure while the patient waits, and enter them in the file. The doctor then starts with the figures on the screen, beside those of the last visit. For a patient who comes every month for blood pressure or sugar, the trend is the first thing the doctor needs, and it is ready." },
      { type: "h2", text: "Send short tasks to the sister" },
      { type: "p", text: "Keep injections, dressings, nebulisation and suture removal out of the doctor's line. A patient who has come only for a dressing or the next injection of a course does not need to wait behind twenty consultations. Decide which tasks the sister does on the doctor's standing instruction and which need the doctor to see the patient first, and write the rule down for the desk." },
      { type: "h2", text: "Write common prescriptions once" },
      { type: "p", text: "Save the groups of medicines you write together, and reuse them. A family doctor sees many of the same complaints, and the prescription for each is one you have written many times. Recall the set, then change it for the patient in front of you. Every prescription is still read and decided by the doctor: a saved set saves typing, and nothing else." },
      { type: "h2", text: "Decide who is called out of turn" },
      { type: "p", text: "Agree the rule before the rush and let the doctor make the call. A small baby, a frail elderly patient, a pregnant woman and anyone who looks seriously unwell should be marked at the desk, so that the mark shows in the doctor's line. The receptionist should not have to choose between patients in front of a full room." },
      { type: "h2", text: "Bill at the desk, and close the day" },
      { type: "ol", items: [
        "The doctor adds what was done to the visit: the consultation and any procedure.",
        "The desk makes the bill from the visit and takes payment by UPI, cash or card.",
        "A part payment is recorded as such, with the balance left against the patient's name.",
        "At closing, count the cash drawer against the day's cash total, and check the UPI and card totals against the bank.",
      ] },
      { type: "h2", text: "A routine for the whole morning" },
      { type: "table", caption: "Who does what in a walk-in general practice OPD", head: ["Step", "Who", "What is recorded"], rows: [
        ["Arrival", "Receptionist", "Patient found or registered, token given."],
        ["Before the doctor", "Sister or compounder", "Weight, temperature, pulse, blood pressure."],
        ["Consultation", "Doctor", "Complaint, diagnosis, prescription, tests ordered."],
        ["Short tasks", "Sister", "Injection, dressing or nebulisation added to the visit."],
        ["Leaving", "Receptionist", "Bill, how it was paid, anything still to pay."],
      ] },
      { type: "h2", text: "How Curogrid does it" },
      { type: "p", text: `In Curogrid, the desk gives a token in a few seconds, and the Today screen shows who is next, who has been called, who is with the doctor and how long each patient has waited. A token can be marked “Baby under 2”, “Senior citizen”, “Pregnant” or “Emergency”. The sister can enter vitals before the doctor starts, and the patient's file opens on a Health card that draws the last five blood pressure readings. Choosing General practice brings ${GP.medicines.length} everyday medicines offered as you type and ${GP.services.length} starter services, and you can save a set of medicines you write together and reuse it. Bills record UPI, cash and card apart, with part payments and a day close. The doctor can call the next patient from the phone app.` },
      { type: "p", text: `Curogrid offers the medicine name only. The dose and the decision are always the doctor's. It does not handle admitted patients or beds. ${PLAN_LINE} ${PLUS_LOGINS}, so the doctor, the compounder and the receptionist each sign in as themselves.` },
    ],
  },
];
