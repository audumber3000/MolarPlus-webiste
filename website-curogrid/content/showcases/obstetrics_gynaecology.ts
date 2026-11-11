import { editionShot, editionShots } from "@/lib/shots";
import { CLINIC_REGISTRATION, DISCLAIMER, DOCTOR_REGISTRATION, GST_HEALTH_CARE, PATIENT_DATA, RULES_CHECKED, consentRule, gstRule, wasteRule } from "./rules";
import type { Showcase } from "./types";

/**
 * Curogrid Gynae's page. Checked against the app repo on 17 October 2026:
 *
 * - First-visit history and the antenatal check: curogrid-backend/domains/
 *   specialty/profiles/obstetrics_gynaecology/case_paper.py. Registration
 *   (LMP, G P L A, husband or partner): registration.py.
 * - The Pregnancy tab: curogrid-app/src/specialties/obstetrics_gynaecology/
 *   pregnancy/ (PregnancyTab, StageCard, stages.ts: a picture every four
 *   weeks with typical size; never the baby's sex). The phone has it too.
 * - The pregnancy plan: care_plans.py, 11 steps from the LMP. Its file says
 *   it is to be checked by a practising obstetrician before launch.
 * - The PCPNDT task: template.py `extra_tasks`. "Pregnant" priority token:
 *   curogrid-app/src/ui/status.ts.
 *
 * Rules: PCPNDT Act 1994 and Rules 1996 (Form F, records two years); MTP
 * (Amendment) Act 2021 (20 and 24 weeks); ART (Regulation) Act 2021 (Level 1
 * clinics for IUI, the National Registry); POCSO s.19.
 */
const SHOTS = editionShots("gynae", "Curogrid Gynae", { phone: true });
const PREGNANCY = editionShot(
  "gynae",
  "web",
  "pregnancy-week-by-week",
  "A pregnant patient's Pregnancy tab in Curogrid Gynae: 28 weeks 1 day, trimester 3, due 7 Jan 2027 from an LMP of 2 Apr 2026, G P L A 2 1 1 0 on a 40 week bar, and the baby's stage at 28 weeks, about 37 cm and 1 kg, with a row of stages from 4 to 40 weeks",
);
const PREGNANCY_PHONE = editionShot("gynae", "phone", "pregnancy", "A pregnancy's weeks, due date and the baby's stage in the Curogrid Gynae phone app");

export const OBSTETRICS_GYNAECOLOGY_SHOWCASE: Showcase = {
  eyebrow: "For gynaecologists, obstetricians and women's clinics",
  tagline: "Every pregnancy dated from one LMP, every scan on time, and the baby shown week by week.",
  category: "Gynecology clinic management software",
  shots: SHOTS,
  glance: [
    ["The pregnancy", "Weeks and days, the due date, the trimester and G P L A, from the LMP asked once"],
    ["The baby", "This week's stage with its typical size, and every stage from 4 to 40 weeks to tap through"],
    ["Antenatal plan", "11 steps from the LMP to 40 weeks: visits, the scans' windows, OGTT, Td"],
    ["Each antenatal check", "Weeks, fundal height, the baby's heart rate and lie, swelling, urine, what was given"],
    ["Ready to order", "Antenatal profile, OGTT, double and quadruple marker, dating, NT, anomaly and growth scans"],
    ["In the line", "A “Pregnant” token goes ahead of the others"],
    ["PCPNDT", "A registration task on your setup checklist. The baby's sex is never recorded."],
  ],
  hero: {
    web: PREGNANCY,
    phone: PREGNANCY_PHONE,
    caption: "Curogrid Gynae on the computer and on the phone, at Janani Women's Clinic, a demo clinic with invented patients.",
  },
  spotlights: [
    {
      id: "pregnancy",
      benefits: ["Weeks and due date worked out, every visit", "Show the mother her baby's stage on the screen", "Every visit's BP and weight against the week"],
      eyebrow: "The pregnancy",
      title: "The weeks, the due date and the baby, from one date",
      intro:
        "The last period is asked once, at the desk. From then on every pregnant patient's file opens a Pregnancy tab that works out where she is today, and shows the baby's stage in a picture you can turn to her while you explain.",
      shot: PREGNANCY,
      lists: [
        {
          title: "What the Pregnancy tab shows",
          parts: [
            { label: "Pregnancy", detail: "Weeks and days today, such as “28 weeks 1 day”, and the trimester." },
            { label: "Due date", detail: "Worked out from the LMP, with the LMP beside it." },
            { label: "G P L A", detail: "Pregnancies, deliveries, living children and miscarriages, as asked at registration." },
            { label: "The 40 week bar", detail: "Today's place in the pregnancy, with the 14 and 28 week marks." },
            { label: "The baby now", detail: "This week's stage with its typical size and one plain line, and the mother at this trimester." },
            { label: "Every visit", detail: "Each visit's blood pressure and weight, with the week it was taken in." },
          ],
        },
      ],
      note: "Sizes are averages, head to bottom up to 16 weeks and head to heel after; the tab says every baby is different. The pictures never show the baby's sex. The phone app shows the same tab.",
    },
    {
      id: "antenatal-plan",
      benefits: ["No missed NT, anomaly or OGTT window", "The whole pregnancy dated from one LMP", "Patients due this week, listed for your desk"],
      eyebrow: "Antenatal care",
      title: "The visits and scans of a pregnancy, laid out to 40 weeks",
      intro:
        "Start the pregnancy plan and Curogrid dates every step from the LMP. The patient's file shows what is done and what is next, and one tap marks today's step done.",
      groups: {
        title: "The 11 steps of the pregnancy plan",
        items: [
          { name: "8 weeks", items: ["First visit, dating scan, blood tests"] },
          { name: "12 weeks", items: ["NT scan (11 to 14 weeks), Td 1"] },
          { name: "16 weeks", items: ["Visit, Td 2"] },
          { name: "20 weeks", items: ["Anomaly scan (18 to 22 weeks)"] },
          { name: "24 weeks", items: ["Visit, sugar test (OGTT, 24 to 28 weeks)"] },
          { name: "28 weeks", items: ["Visit, Hb"] },
          { name: "32 weeks", items: ["Growth scan"] },
          { name: "34 and 36 weeks", items: ["Visits; at 36, plan the delivery"] },
          { name: "38 weeks", items: ["Visit"] },
          { name: "40 weeks", items: ["The due date"] },
        ],
      },
      card: {
        title: "The pregnancy card",
        body: "Print the plan as a card on your letterhead: every step with its due date, the day it was done, and a column to sign. She brings it to every visit.",
      },
      note: "The dashboard lists every patient whose next step is due this week, the late ones first. Switch on “Care plan reminder” in Notifications and she gets a WhatsApp message the day before.",
    },
    {
      id: "visit-forms",
      benefits: ["A gynae history in taps, not paragraphs", "Each antenatal check in under a minute", "Fundal height and the baby's heart rate, visit by visit"],
      eyebrow: "On the doctor's screen",
      title: "A history on the first visit, an antenatal check after",
      intro: "Two short forms made for a gynaecologist, most of it a tap. The complaint, diagnosis and prescription are on the visit as usual.",
      lists: [
        {
          title: "The first visit: History",
          parts: [
            { label: "Here for", detail: "Pregnancy, a gynae problem, infertility, contraception or after delivery." },
            { label: "Last period", detail: "The first day, or “Not sure”." },
            { label: "Pregnancies (G P L A)", detail: "Ready words such as “G2 P1 L1 A0”." },
            { label: "Periods", detail: "Regular, irregular, heavy, painful, scanty, stopped." },
            { label: "Contraception", detail: "None, condom, pill, Copper-T, injection, sterilisation." },
            { label: "Risks", detail: "High BP, diabetes or GDM, anaemia, Rh negative, previous caesarean, twins, thyroid." },
            { label: "P/A, P/S, P/V", detail: "Ready words such as “P/S healthy cervix” and “P/V uterus normal size”." },
          ],
        },
        {
          title: "Each pregnancy visit: Antenatal check",
          parts: [
            { label: "Weeks of pregnancy", detail: "In weeks." },
            { label: "Fundal height", detail: "In centimetres." },
            { label: "Baby's heart rate", detail: "Per minute." },
            { label: "Baby lies", detail: "Head down, breech, transverse, or not known yet." },
            { label: "Swelling", detail: "None, feet or generalised." },
            { label: "Urine", detail: "Albumin and sugar, nil or present." },
            { label: "Given", detail: "Iron and folic acid, calcium, Td injection." },
            { label: "Notes", detail: "Ready words such as “Baby moving well” and “Danger signs explained”." },
          ],
        },
      ],
    },
  ],
  journey: {
    title: "A pregnancy through the clinic, step by step",
    intro: "From the first visit to the due date. Each step is something Curogrid Gynae does today.",
    steps: [
      {
        stage: "At the desk",
        title: "Registered once, with the LMP",
        body: "Her name, age and mobile number, then the last period, the G P L A and her husband's or partner's name. The LMP dates everything that follows.",
      },
      {
        stage: "In the waiting area",
        title: "A pregnant patient goes ahead",
        body: "The desk gives a token and marks it “Pregnant”. Priority tokens are placed ahead of normal ones, and the tag shows in the doctor's line.",
        href: "/features/tokens-and-queue",
        linkText: "How tokens work",
      },
      {
        stage: "Before the doctor",
        title: "Weight and blood pressure",
        body: "The sister records them in the vitals. The Pregnancy tab lists them against the week, visit after visit.",
      },
      {
        stage: "The first visit",
        title: "The history and the plan",
        body: "Fill the history, start the pregnancy plan from the LMP, and order the dating scan and antenatal profile in one tap each. If she is allergic to a medicine you write, a red warning says so.",
      },
      {
        stage: "Booking ahead",
        title: "The next visits booked together",
        body: "Turn on “Book antenatal visits” and Curogrid books four visits four weeks apart, at the same time of day, each labelled “Visit 2 of 4”. A date that clashes or falls on leave is skipped and listed.",
        href: "/features/appointments",
        linkText: "How appointments work",
      },
      {
        stage: "Each antenatal visit",
        title: "The antenatal check",
        body: "Weeks, fundal height, the baby's heart rate and lie, swelling, urine and what was given. Tick the plan's step as done today.",
      },
      {
        stage: "When a report comes back",
        title: "Scans and tests in the file",
        body: "The result is typed against the order and the report is added as a PDF or a photo. The next visit shows what is still not back.",
        href: "/features/patient-records",
        linkText: "What is in a patient's file",
      },
      {
        stage: "For a procedure",
        title: "Consent, then the bill",
        body: "Before an IUCD insertion she reads “Procedure or operation” on the screen and signs with a finger. The service is billed from the price list, a starter ₹1,500 until you change it.",
        href: "/features/billing",
        linkText: "How billing works",
      },
      {
        stage: "Through the pregnancy",
        title: "Due this week",
        body: "The dashboard lists the patients whose next step is due, the late ones first. With reminders on, she is messaged the day before the anomaly scan or the OGTT.",
      },
    ],
    shots: [
      { shot: SHOTS.today, caption: "Today: the token line and the appointments still expected." },
      { shot: SHOTS.week, caption: "The week's appointments, one colour for each doctor." },
    ],
  },
  practiceIntro: "The front desk, the money and the team, set up for a women's clinic and shown here with one.",
  rules: {
    title: "The rules a gynaecology clinic in India works under",
    intro: "A short guide to the registrations and rules that apply to an obstetrics and gynaecology practice, and what Curogrid does, or does not do, about each.",
    checked: RULES_CHECKED,
    items: [
      DOCTOR_REGISTRATION,
      CLINIC_REGISTRATION,
      {
        title: "Ultrasound in pregnancy",
        law: "Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act, 1994, and Rules, 1996",
        body: "Every clinic with an ultrasound machine must be registered and show its certificate. Each pregnant woman scanned needs a Form F, signed by the doctor who did the scan, and the records, images included, are kept for at least two years. The baby's sex is never told, by word, sign or any other way.",
        inCurogrid:
          "A PCPNDT registration task sits on your setup checklist. Curogrid never records the baby's sex and its pictures never show it. It does not make or keep Form F.",
      },
      {
        title: "Medical termination of pregnancy",
        law: "Medical Termination of Pregnancy Act, 1971, as amended in 2021",
        body: "Termination is done only at an approved place by a doctor trained for it. Up to 20 weeks one doctor's opinion is enough; from 20 to 24 weeks two are needed, for the categories of women the Rules set. The woman's name and details are kept confidential.",
        inCurogrid: "Curogrid has no MTP register. A record is opened only by the staff whose role allows it, and nobody shares a login.",
      },
      {
        title: "IUI and fertility treatment",
        law: "Assisted Reproductive Technology (Regulation) Act, 2021",
        body: "A clinic that does IUI is a Level 1 ART clinic and must register on the National Registry; IVF and other advanced work is Level 2. Registration lasts five years.",
        inCurogrid: "Follicular study, AMH and a hormone profile are ready to order. Curogrid has no ART register or cycle record.",
      },
      {
        title: "A pregnant girl under 18",
        law: "Protection of Children from Sexual Offences Act, 2012, section 19",
        body: "The pregnancy of a girl under 18 must be reported to the police or the Special Juvenile Police Unit. Not reporting is an offence. When she seeks a termination, the Supreme Court has said the doctor need not give her name in that report.",
        inCurogrid: "Curogrid does not report to the police. Her age is on her file, and the visit records what was seen and done.",
      },
      consentRule("four consent forms: “Examination and treatment plan”, “Procedure or operation”, “Sedation or general anaesthesia” and “Admission”"),
      wasteRule(
        "Used needles, swabs and the waste from a procedure such as an IUCD insertion are bio-medical waste.",
        "Curogrid does not manage waste. Each procedure is ordered and billed, so what was done and when is on record.",
      ),
      PATIENT_DATA,
      gstRule(GST_HEALTH_CARE),
    ],
    disclaimer: DISCLAIMER,
  },
  closing: {
    title: "Try Curogrid Gynae in your clinic",
    ready: "the Pregnancy tab, the antenatal plan, the scans and tests and your services",
  },
};
