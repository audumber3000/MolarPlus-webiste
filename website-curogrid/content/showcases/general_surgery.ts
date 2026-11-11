import { editionShot, editionShots } from "@/lib/shots";
import { CLINIC_REGISTRATION, DISCLAIMER, DOCTOR_REGISTRATION, GST_HEALTH_CARE, MEDICO_LEGAL, PATIENT_DATA, PRESCRIPTION_DRUGS, RULES_CHECKED, consentRule, gstRule, wasteRule } from "./rules";
import type { Showcase } from "./types";

/**
 * Curogrid Surgery's page. Checked against the app repo on 17 October 2026:
 *
 * - The surgical visit and the dressing: curogrid-backend/domains/
 *   specialty/profiles/general_surgery/case_paper.py.
 * - After the operation: care_plans.py (four steps, to be checked by a
 *   practising surgeon before launch); its card prints.
 *
 * Rules: bio-medical waste (anatomical waste in yellow, sharps in white),
 * consent for surgery and anaesthesia, medico-legal cases.
 */
const SHOTS = editionShots("surgery", "Curogrid Surgery", { phone: ["home", "today", "bills"] });
const AFTER = editionShot(
  "surgery",
  "web",
  "after-surgery-plan",
  "A patient's file in Curogrid Surgery after a right inguinal hernia repair: the After the procedure card with the plan 2 of 4 done, next on day 10, 19 Oct 2026, stitches out, a Print card button, and the diagnosis, post-operative, healing well",
);
const AFTER_PHONE = editionShot("surgery", "phone", "after-surgery-plan", "A patient's file in the Curogrid Surgery phone app after an operation: the After the operation plan 2 of 4 done, next day 10, stitches out, with a Day 10 done today button");

export const GENERAL_SURGERY_SHOWCASE: Showcase = {
  eyebrow: "For general surgeons and surgical clinics",
  tagline: "From the first visit to stitches out, every surgical patient followed up on time.",
  category: "Surgical clinic management software",
  shots: SHOTS,
  glance: [
    ["The first visit", "The problem and where, a table for each lump, findings, per rectal, a before-surgery checklist, the plan"],
    ["After the operation", "First dressing on day 2, wound check day 5, stitches out day 10, review at a month"],
    ["Each dressing", "Days after surgery, the wound and the stitches"],
    ["Booking", "“Book dressings”: 5 dressings, 2 days apart"],
    ["Departments", "General Surgery, Day Care Theatre and Dressing Room"],
    ["Ready to order", "Pre-operative profile, blood group, PT/INR, biopsy, FNAC, USG abdomen, CT abdomen"],
  ],
  hero: {
    web: AFTER,
    phone: AFTER_PHONE,
    caption: "Curogrid Surgery at Shree Surgical Clinic, a demo clinic with invented patients.",
  },
  spotlights: [
    {
      id: "after-surgery",
      benefits: ["Dressings and stitches out dated from the operation", "No patient forgotten after surgery", "Every wound's healing recorded, dressing by dressing"],
      eyebrow: "After the operation",
      title: "Dressings and stitches out, laid out from the day of surgery",
      intro:
        "Start the plan on the day of the operation and Curogrid dates every step. The patient's file shows what is done and what is next, and one tap marks today's step done.",
      shot: AFTER,
      groups: {
        title: "The four steps of the plan",
        items: [
          { name: "Day 2", items: ["First dressing"] },
          { name: "Day 5", items: ["Wound check"] },
          { name: "Day 10", items: ["Stitches out"] },
          { name: "1 month", items: ["Review"] },
        ],
      },
      lists: [
        {
          title: "Each dressing: Dressing or after surgery",
          parts: [
            { label: "Days after surgery", detail: "In days." },
            { label: "Wound", detail: "Clean and healing, red, discharge, gaping." },
            { label: "Stitches", detail: "In, removed today, partly removed, none." },
            { label: "Notes", detail: "Ready words such as “Dressing changed”, “Keep dry” and “Walk every day”." },
          ],
        },
      ],
      card: {
        title: "The after-surgery card",
        body: "Print the plan as a card on your letterhead: every step with its due date, the day it was done, and a column to sign.",
      },
      note: "The dashboard lists every patient whose next step is due this week, the late ones first. Switch on “Care plan reminder” in Notifications and the patient gets a WhatsApp message the day before.",
    },
    {
      id: "surgical-visit",
      benefits: ["Lumps, hernias and piles recorded in taps", "A before-surgery checklist, so nothing is missed", "Consent signed on the screen, before the operation"],
      eyebrow: "The first visit",
      title: "A surgical OPD visit, and a checklist before surgery",
      intro: "The first visit records what a surgeon examines, most of it a tap, and ends with the checks before an operation.",
      lists: [
        {
          title: "The first visit: Surgical",
          parts: [
            { label: "Problem", detail: "Lump, hernia, piles or fissure, abscess, wound, gallstone pain, appendix pain, ingrown nail, varicose veins." },
            { label: "Where", detail: "Head and neck, breast, abdomen, groin, back, arm, leg, anal region." },
            { label: "Lump", detail: "A table, one line per lump: where, size in cm, how it feels, whether it moves." },
            { label: "Findings", detail: "Reducible, cough impulse, tender, fluctuant, discharge, red skin over it." },
            { label: "Per rectal", detail: "Ready words such as “PR normal”, “Fissure seen”, “Internal piles”." },
            { label: "Before surgery", detail: "Fitness done, tests done, consent signed, fasting explained." },
            { label: "Plan", detail: "Medicines, a day-care procedure, surgery, dressing, or refer." },
          ],
        },
      ],
    },
  ],
  journey: {
    title: "A surgical patient's way through the clinic, step by step",
    intro: "From the first visit to the review a month after the operation. Each step is something Curogrid Surgery does today.",
    steps: [
      {
        stage: "The first visit",
        title: "The examination and the plan",
        body: "The problem, where it is, the lump's size, the findings and the per rectal examination. The diagnosis, such as an inguinal hernia or a lipoma, is searched by name.",
      },
      {
        stage: "Before surgery",
        title: "Tests, fitness and the checklist",
        body: "The pre-operative profile, blood group and PT/INR are one tap each. Tick fitness done, tests done, consent signed and fasting explained.",
      },
      {
        stage: "Consent",
        title: "Signed on the screen",
        body: "The patient reads “Procedure or operation” and the anaesthesia consent on the screen and signs each with a finger.",
      },
      {
        stage: "The day of surgery",
        title: "The bill and the plan",
        body: "The procedure is billed from the price list, such as an open hernia repair at a starter ₹32,000, and the after-surgery plan starts from today.",
        href: "/features/billing",
        linkText: "How billing works",
      },
      {
        stage: "Booking ahead",
        title: "The dressings booked together",
        body: "Turn on “Book dressings” and Curogrid books five dressings two days apart, each labelled “Dressing 2 of 5”.",
        href: "/features/appointments",
        linkText: "How appointments work",
      },
      {
        stage: "In the dressing room",
        title: "Every dressing recorded",
        body: "The days after surgery, the wound and the stitches. Tick the plan's step as done today, and bill the dressing or the suture removal.",
      },
      {
        stage: "A month later",
        title: "The review",
        body: "The last step of the plan. The whole course, from the first visit to the review, is in the patient's file.",
      },
    ],
    shots: [
      { shot: SHOTS.today, caption: "Today: the token line and the appointments still expected." },
      { shot: SHOTS.week, caption: "The week's appointments, one colour for each doctor." },
    ],
  },
  practiceIntro: "The front desk, the money and the team, set up for a surgical clinic and shown here with one.",
  rules: {
    title: "The rules a surgical clinic in India works under",
    intro: "A short guide to the registrations and rules that apply to a general surgeon's practice, and what Curogrid does, or does not do, about each.",
    checked: RULES_CHECKED,
    items: [
      DOCTOR_REGISTRATION,
      CLINIC_REGISTRATION,
      consentRule(
        "five consent forms: “Examination and treatment plan”, “Procedure or operation”, “Local anaesthetic”, “Sedation or general anaesthesia” and “Admission”",
        "For an operation, take a separate written consent for the anaesthesia, and name the operation and its side.",
      ),
      MEDICO_LEGAL,
      wasteRule(
        "Tissue removed at surgery is anatomical waste for the yellow bag, and blades, needles and sutures are sharps.",
        "Curogrid does not manage waste. A biopsy is ordered from the visit, so what was sent, and its result, are on record.",
      ),
      PRESCRIPTION_DRUGS,
      PATIENT_DATA,
      gstRule(GST_HEALTH_CARE),
    ],
    disclaimer: DISCLAIMER,
  },
  closing: {
    title: "Try Curogrid Surgery in your clinic",
    ready: "the surgical visit, the after-surgery plan, the dressings and your services",
  },
};
