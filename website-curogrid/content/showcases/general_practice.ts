import { editionShot, editionShots } from "@/lib/shots";
import { CLINIC_REGISTRATION, DISCLAIMER, DOCTOR_REGISTRATION, GST_HEALTH_CARE, MEDICO_LEGAL, PATIENT_DATA, PRESCRIPTION_DRUGS, RULES_CHECKED, consentRule, gstRule, wasteRule } from "./rules";
import type { Showcase } from "./types";

/**
 * Curogrid's page for a general practice. Checked against the app repo on
 * 17 October 2026:
 *
 * - The Check-up and the review: curogrid-backend/domains/specialty/
 *   profiles/general_practice/case_paper.py.
 * - The allergy warning: curogrid-app/src/modules/consult/components/visit/
 *   AllergyWarning.tsx. Templates: components/visit/Templates.tsx.
 * - Priority tokens: curogrid-app/src/ui/status.ts `TOKEN_PRIORITY`.
 * - No phone screenshots of the general clinic exist yet.
 *
 * Rules: Telemedicine Practice Guidelines, 2020 (Appendix 5 of the 2002
 * code). The general clinic shows the plain Curogrid logo.
 */
const SHOTS = editionShots("general", "Curogrid", { phone: false });
const PRESCRIPTION = editionShot(
  "general",
  "web",
  "allergy-warning-prescription",
  "A prescription in Curogrid at Family Health Clinic: Penicillin in the patient's allergies, amoxicillin 500 mg written, and a red warning, “Check before giving. Allergic to Penicillin: Amoxicillin 500 mg capsule is a penicillin”, above one-tap tests and scans",
);

export const GENERAL_PRACTICE_SHOWCASE: Showcase = {
  eyebrow: "For general physicians and family doctors",
  tagline: "Run a busy walk-in OPD without the chaos: tokens, quick prescriptions, allergy checks and bills in one place.",
  category: "Clinic and OPD software for general physicians",
  shots: SHOTS,
  glance: [
    ["The line", "A token for every walk-in, priority for emergency, 60 plus, pregnancy, disability and babies"],
    ["The check-up", "Since when, known conditions, how the patient looks, and a tick for each normal system"],
    ["Allergies", "Kept on the patient, shown in red on every visit, and checked against what you prescribe"],
    ["Prescriptions", "37 everyday medicine names as you type, and your own saved templates"],
    ["Ready to order", "22 tests and 9 scans one tap on the visit, from CBC and HbA1c to X-ray chest and USG abdomen"],
    ["The file", "Opens on the last five blood pressure readings, with the weight beside them"],
  ],
  hero: {
    web: PRESCRIPTION,
    caption: "Curogrid at Family Health Clinic, a demo clinic with invented patients.",
  },
  spotlights: [
    {
      id: "prescription",
      benefits: ["Never miss a patient's allergy again", "A whole prescription in one tap, from your templates", "Printed or sent on WhatsApp before the patient stands up"],
      eyebrow: "The prescription",
      title: "A prescription that checks the patient's allergies for you",
      intro:
        "A family doctor sees sixty patients a day and cannot remember every allergy. Curogrid does. Allergies are kept on the patient, shown in red on every visit, and a medicine that matches one is flagged before the prescription is printed.",
      shot: PRESCRIPTION,
      lists: [
        {
          title: "On the visit screen",
          parts: [
            { label: "Diagnosis", detail: "Searched by name or ICD-10 code, such as fever, otitis or J06, with your own words beside it." },
            { label: "Allergies", detail: "Typed once, kept on the patient, shown in red on every visit." },
            { label: "Medicines", detail: "The name as you type, the dose, how often (1-0-1), for how long, and how to take (after food)." },
            { label: "Templates", detail: "Put a saved prescription on the visit in a tap, or keep today's under a name." },
            { label: "Tests to order", detail: "One tap each: CBC, sugar, HbA1c, lipid profile, LFT, KFT, thyroid, dengue, malaria, Widal, vitamin D and B12, and more." },
            { label: "Scans", detail: "X-ray chest, USG abdomen, ECG, 2D echo, CT brain, MRI spine and more." },
            { label: "Advice and come back", detail: "Written once, printed on the prescription, sent on WhatsApp if you like." },
          ],
        },
      ],
      card: {
        title: "A reminder, not a block",
        body: "The red line says “Check before giving”. It never stops you prescribing: the decision is the doctor's, and so is the dose.",
      },
    },
    {
      id: "check-up",
      benefits: ["A full check-up in a few taps", "Known conditions in front of you at every visit", "Your notes read the same, patient after patient"],
      eyebrow: "The check-up",
      title: "A complete check-up in a few taps",
      intro: "The first visit has a short examination made for a busy OPD. A review is two parts.",
      lists: [
        {
          title: "The first visit: Check-up",
          parts: [
            { label: "Since", detail: "Today, 2 to 3 days, a week, weeks or months." },
            { label: "Known conditions", detail: "High BP, diabetes, thyroid, asthma or COPD, heart disease, or none." },
            { label: "Looks", detail: "Well, febrile, pale, dehydrated, jaundiced, breathless." },
            { label: "Normal on examination", detail: "A tick for the chest, heart, abdomen, nervous system, throat and ears." },
            { label: "Findings", detail: "Ready words such as “Throat congested” and “Crepitations at bases”." },
          ],
        },
        {
          title: "Each review",
          parts: [
            { label: "Since last visit", detail: "Better, same, worse, fever gone, still coughing." },
            { label: "Notes", detail: "Ready words such as “BP controlled” and “Sugar controlled”." },
          ],
        },
      ],
    },
  ],
  journey: {
    title: "A day in a family doctor's clinic, step by step",
    intro: "From the first token to the evening's takings. Each step is something Curogrid does today.",
    steps: [
      {
        stage: "At the desk",
        title: "A token for every walk-in",
        body: "The receptionist registers a new patient in seconds, or finds an old one by name, mobile or ID, and gives a token. An emergency, a patient over 60, a pregnant woman, a patient with a disability or a baby under 2 goes ahead.",
        href: "/features/tokens-and-queue",
        linkText: "How tokens work",
      },
      {
        stage: "Before the doctor",
        title: "Vitals by the sister",
        body: "Blood pressure, pulse, temperature, SpO2 and weight go on the visit before the patient goes in.",
      },
      {
        stage: "In the doctor's room",
        title: "Call next, then the check-up",
        body: "Call the next token from the computer or the phone. The file opens on the last five blood pressure readings; the check-up is a few taps.",
      },
      {
        stage: "Writing the prescription",
        title: "Names as you type, allergies checked",
        body: "The everyday names are offered as you type, or a saved template goes on in a tap. A red warning shows if the patient is allergic to what you write.",
      },
      {
        stage: "Before the patient leaves",
        title: "Printed or on WhatsApp",
        body: "The prescription is printed on your letterhead with your registration number, or sent to the patient on WhatsApp. Tests and scans are ordered when the visit is finished.",
      },
      {
        stage: "At the counter",
        title: "Paid by UPI, cash or card",
        body: "The consultation and any injection or dressing are on one bill. Medicines given from the clinic's shelf come off the stock count and go on the same bill.",
        href: "/features/billing",
        linkText: "How billing works",
      },
      {
        stage: "At night",
        title: "The day's takings",
        body: "The dashboard shows what was collected by UPI, cash and card, how many patients were seen, and what is still owed.",
      },
    ],
    shots: [
      { shot: SHOTS.today, caption: "Today: the token line and the appointments still expected." },
      { shot: SHOTS.week, caption: "The week's appointments, one colour for each doctor." },
    ],
  },
  practiceIntro: "The front desk, the money and the team, set up for a family doctor's clinic and shown here with one.",
  rules: {
    title: "The rules a general practice in India works under",
    intro: "A short guide to the registrations and rules that apply to a family doctor's clinic, and what Curogrid does, or does not do, about each.",
    checked: RULES_CHECKED,
    items: [
      DOCTOR_REGISTRATION,
      CLINIC_REGISTRATION,
      {
        title: "Consulting on the phone or video",
        law: "Telemedicine Practice Guidelines, 2020",
        body: "Only a registered doctor may consult remotely, under the same standards as in person. Your name, qualification and registration number go on the prescription, and some medicines, such as those under the narcotics law, may not be prescribed remotely at all.",
        inCurogrid:
          "“Teleconsultation” is a starter service, so the remote visit is recorded and billed, and the prescription prints with your registration number. The call itself happens outside Curogrid.",
      },
      MEDICO_LEGAL,
      PRESCRIPTION_DRUGS,
      consentRule("three consent forms: “Examination and treatment plan”, “Procedure or operation” and “Local anaesthetic”"),
      wasteRule(
        "Needles from injections, IV sets, dressings and suture material are bio-medical waste.",
        "Curogrid does not manage waste. Each injection, infusion and dressing is a service on the bill, so what was done and when is on record.",
      ),
      PATIENT_DATA,
      gstRule(GST_HEALTH_CARE),
    ],
    disclaimer: DISCLAIMER,
  },
  closing: {
    title: "Try Curogrid in your clinic",
    ready: "the token line, the check-up, the allergy warning and your services",
  },
};
