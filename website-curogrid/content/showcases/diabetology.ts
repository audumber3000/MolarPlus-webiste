import { editionShot, editionShots } from "@/lib/shots";
import { CLINIC_REGISTRATION, DISCLAIMER, DOCTOR_REGISTRATION, GST_HEALTH_CARE, PATIENT_DATA, PRESCRIPTION_DRUGS, RULES_CHECKED, consentRule, gstRule, wasteRule } from "./rules";
import type { Showcase } from "./types";

/**
 * Curogrid Diabetes's page. Checked against the app repo on 17 October 2026:
 *
 * - The first visit and the review: curogrid-backend/domains/specialty/
 *   profiles/diabetology/case_paper.py. Registration: registration.py.
 * - The Sugar control tab: curogrid-app/src/specialties/diabetology/
 *   control/ (A1C_TARGET 7; the yearly checks from the case paper's
 *   "Checked this year"). The phone app has the same tab.
 * - A year of diabetes care: care_plans.py (five steps, to be checked by a
 *   practising diabetologist before launch). The insulin chart: papers.py.
 *
 * Rules: telemedicine (reviews by phone), dietitians under the NCAHP Act
 * 2021 (nutrition science), insulin needles and lancets as sharps.
 */
const SHOTS = editionShots("diabetes", "Curogrid Diabetes", { phone: ["home", "today"] });
const CONTROL = editionShot(
  "diabetes",
  "web",
  "sugar-control",
  "Curogrid Diabetes's Sugar control tab: HbA1c falling from 9.3 to 6.9% between October 2025 and October 2026 against the target band, at target on 11 Oct 2026; the yearly checks with eyes, feet and lipids done and kidneys and ECG due; home sugar readings and the night dose of glargine",
);
const CONTROL_PHONE = editionShot("diabetes", "phone", "sugar-control", "The Sugar control tab in the Curogrid Diabetes phone app: HbA1c 6.9%, at target, down from a highest of 9.4% over a year, and the yearly checks with eyes and feet done and kidneys due");

export const DIABETOLOGY_SHOWCASE: Showcase = {
  eyebrow: "For diabetologists and diabetes and thyroid clinics",
  tagline: "See at a glance whether sugars are under control, and never miss a yearly check.",
  category: "Diabetes clinic management software",
  shots: SHOTS,
  glance: [
    ["Sugar control", "HbA1c over time against the usual 7% target, home sugars, insulin, low sugar episodes"],
    ["Yearly checks", "Eyes, feet, kidneys (ACR), lipids and ECG, each done or due"],
    ["The visit", "Condition and years known, home sugar and insulin tables, a foot check, diet and activity"],
    ["A year of care", "HbA1c every 3 months and the yearly checks, laid out from the start"],
    ["Prints", "The insulin chart, on your letterhead"],
    ["Booking", "“Book reviews”: 4 reviews, 3 months apart"],
  ],
  hero: {
    web: CONTROL,
    phone: CONTROL_PHONE,
    caption: "Curogrid Diabetes at Sugar Care Diabetes Centre, a demo clinic with invented patients.",
  },
  spotlights: [
    {
      id: "sugar-control",
      benefits: ["See in one glance whether sugars are under control", "Show patients their HbA1c coming down", "Never miss a yearly eye, foot or kidney check"],
      eyebrow: "Sugar control",
      title: "A year of diabetes on one screen",
      intro:
        "A diabetes review asks the same questions every three months. Curogrid Diabetes answers them on one tab: where the HbA1c is going, what the home sugars and insulin are now, and which yearly checks are still due.",
      shot: CONTROL,
      lists: [
        {
          title: "What the Sugar control tab shows",
          parts: [
            { label: "HbA1c", detail: "Every result over time, against the usual target of 7%, with the latest read out: “6.9%, at target, 11 Oct 2026”." },
            { label: "Yearly checks", detail: "Eyes, feet, kidneys (ACR), lipids and ECG, each with the day it was last done in the past year, or “Due”." },
            { label: "Home sugar readings", detail: "The latest visit's table: fasting and after food, day by day." },
            { label: "Insulin now", detail: "Each insulin with its units by time of day." },
            { label: "Low sugar episodes", detail: "None, mild or needed help, from the latest visit." },
          ],
        },
      ],
      note: "The HbA1c comes from the tests you order and their results. The phone app shows the same tab.",
    },
    {
      id: "diabetes-visit",
      benefits: ["Home sugars and insulin in two quick tables", "The foot check done at every first visit", "Each review takes a minute, not ten"],
      eyebrow: "On the doctor's screen",
      title: "The sugar story on the first visit, a quick review after",
      intro: "The first visit records the whole picture once; each review records what changed. Weight and blood pressure are in the visit's vitals.",
      lists: [
        {
          title: "The first visit: Sugar and hormones",
          parts: [
            { label: "Condition", detail: "Type 2, type 1, prediabetes, diabetes in pregnancy, or thyroid only." },
            { label: "Known for", detail: "In years." },
            { label: "On insulin", detail: "Yes or no." },
            { label: "Home sugar readings", detail: "A table by day: fasting, after food, bedtime." },
            { label: "Low sugar episodes", detail: "None, mild, needed help." },
            { label: "Insulin", detail: "A table of each insulin by morning, afternoon and night." },
            { label: "Foot check, normal", detail: "Feeling and pulses in each foot, and no ulcer." },
            { label: "Checked this year", detail: "Eyes, feet, kidneys (ACR), lipids, ECG." },
            { label: "Diet and activity", detail: "Ready words such as “Walks 30 minutes a day” and “Rice reduced”." },
          ],
        },
        {
          title: "Each review, and at registration",
          parts: [
            { label: "Review", detail: "Home sugars, low sugar episodes, insulin, and notes such as “Dose changed” or “HbA1c due”." },
            { label: "At registration", detail: "Diabetes type, the year it was found, whether on insulin, and the thyroid." },
          ],
        },
      ],
    },
    {
      id: "year-of-care",
      benefits: ["HbA1c every three months, without counting dates", "The yearly checks due, listed on your dashboard", "A printed insulin chart the patient follows at home"],
      eyebrow: "A year of care",
      title: "HbA1c every three months, and the yearly checks on time",
      intro:
        "Start the year of diabetes care and Curogrid dates every step. The patient's file shows what is next, and the dashboard lists who is due this week.",
      groups: {
        title: "The five steps of the plan",
        items: [
          { name: "First checks", items: ["HbA1c, kidney (urine ACR, creatinine), eye, foot"] },
          { name: "3 months", items: ["HbA1c"] },
          { name: "6 months", items: ["HbA1c, kidney"] },
          { name: "9 months", items: ["HbA1c"] },
          { name: "1 year", items: ["HbA1c, kidney, eye, foot"] },
        ],
      },
      card: {
        title: "The insulin chart",
        body: "Print the insulin chart from the visit on your letterhead: each insulin and its units for each time of day, signed with your name and registration number.",
        quote: "Take the units written for each time. Bring this chart and your sugar readings to every visit.",
      },
    },
  ],
  journey: {
    title: "A diabetes patient's year through the clinic, step by step",
    intro: "From the first visit to the yearly checks. Each step is something Curogrid Diabetes does today.",
    steps: [
      {
        stage: "At the desk",
        title: "Registered with the diabetes history",
        body: "Name, age and mobile number, then the diabetes type, the year it was found, whether on insulin, and the thyroid.",
      },
      {
        stage: "Before the doctor",
        title: "Weight, blood pressure and a quick sugar",
        body: "The sister records the vitals; a random sugar by glucometer is one tap to order.",
      },
      {
        stage: "The first visit",
        title: "The whole picture",
        body: "Home sugars, insulin, lows, the foot check, which yearly checks were done, diet and activity. HbA1c, urine ACR, lipids and TSH are one tap each.",
      },
      {
        stage: "Writing the prescription",
        title: "Tablets and insulin",
        body: "The diabetes and thyroid medicines are offered first, with “15 minutes before food” and “Under the skin (injection)” ready to pick. A red warning shows if the patient is allergic to what you write.",
      },
      {
        stage: "Before the patient leaves",
        title: "The insulin chart and the next reviews",
        body: "Print the insulin chart. Turn on “Book reviews” and Curogrid books four reviews three months apart, each labelled “Review 2 of 4”.",
        href: "/features/appointments",
        linkText: "How appointments work",
      },
      {
        stage: "When the results come back",
        title: "HbA1c on the chart",
        body: "Each HbA1c result is drawn on the Sugar control tab against the target, beside the ones before it.",
        href: "/features/patient-records",
        linkText: "What is in a patient's file",
      },
      {
        stage: "Through the year",
        title: "The checks, done or due",
        body: "The yearly checks show as done or due, and the dashboard lists the patients whose next step of the year of care is due this week.",
      },
    ],
    shots: [
      { shot: SHOTS.today, caption: "Today: the token line and the appointments still expected." },
      { shot: SHOTS.week, caption: "The week's reviews, one colour for each doctor." },
    ],
  },
  practiceIntro: "The front desk, the money and the team, set up for a diabetes clinic and shown here with one.",
  rules: {
    title: "The rules a diabetes clinic in India works under",
    intro: "A short guide to the registrations and rules that apply to a diabetes and endocrine practice, and what Curogrid does, or does not do, about each.",
    checked: RULES_CHECKED,
    items: [
      DOCTOR_REGISTRATION,
      CLINIC_REGISTRATION,
      {
        title: "Reviews on the phone or video",
        law: "Telemedicine Practice Guidelines, 2020",
        body: "A registered doctor may review a patient remotely, under the same standards as in person, with the name, qualification and registration number on the prescription. Some medicines may not be prescribed remotely at all.",
        inCurogrid: "A review is recorded and billed like any visit, and the prescription prints with your registration number. The call itself happens outside Curogrid.",
      },
      {
        title: "Your dietitian and diabetes educator",
        law: "National Commission for Allied and Healthcare Professions Act, 2021",
        body: "Nutrition science is one of the professions the Act recognises, and its registration regulations were published in September 2026: a dietitian may practise only after registering. State councils are still starting.",
        inCurogrid: "Diet and Lifestyle is its own department, and the dietitian has their own sign-in and role.",
      },
      PRESCRIPTION_DRUGS,
      consentRule("an “Examination and treatment plan” and a “Procedure or operation” consent form"),
      wasteRule(
        "Insulin pen needles, lancets and the dressings from a diabetic foot are bio-medical waste.",
        "Curogrid does not manage waste. Each foot dressing is a service on the bill, so what was done and when is on record.",
      ),
      PATIENT_DATA,
      gstRule(GST_HEALTH_CARE),
    ],
    disclaimer: DISCLAIMER,
  },
  closing: {
    title: "Try Curogrid Diabetes in your clinic",
    ready: "the Sugar control tab, the year of care, the insulin chart and your services",
  },
};
