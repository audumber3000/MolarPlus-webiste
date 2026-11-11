import { editionShot, editionShots } from "@/lib/shots";
import { CLINIC_REGISTRATION, DISCLAIMER, DOCTOR_REGISTRATION, GST_HEALTH_CARE, MEDICO_LEGAL, PATIENT_DATA, RULES_CHECKED, consentRule, gstRule, wasteRule } from "./rules";
import type { Showcase } from "./types";

/**
 * Curogrid Ortho's page. Checked against the app repo on 17 October 2026:
 *
 * - The injury visit and the review: curogrid-backend/domains/specialty/
 *   profiles/orthopaedics/case_paper.py (version 2: one body map, right
 *   and left in the regions; core/body.py has 36 regions).
 * - The plaster plan: care_plans.py (four steps, to be checked by a
 *   practising orthopaedic surgeon before launch); its card prints.
 * - No phone screenshots of the ortho edition exist yet.
 *
 * Rules: X-ray equipment needs an AERB licence through eLORA (Atomic
 * Energy (Radiation Protection) Rules, 2004). NPPA's ceiling prices for
 * knee implants (S.O. 2668(E) of 2017) were extended to 15 November 2026
 * or further orders: re-check after that date.
 */
const SHOTS = editionShots("ortho", "Curogrid Ortho", { phone: false });
const BODY_MAP = editionShot(
  "ortho",
  "web",
  "body-map-knee",
  "Curogrid Ortho's injury visit: how it happened, the right knee marked on a front and back body figure, pain 6 out of 10, findings such as swelling and tenderness, pulses, feeling and movement to tick, and the range of movement table",
);
const PLASTER = editionShot(
  "ortho",
  "web",
  "plaster-plan",
  "A fracture patient's file in Curogrid Ortho: the Treatment card with the plaster plan 2 of 4 done, next a review at 3 weeks on 25 Oct 2026, a Print card button, and the diagnosis, distal radius fracture, right",
);

export const ORTHOPAEDICS_SHOWCASE: Showcase = {
  eyebrow: "For orthopaedic surgeons and bone and joint clinics",
  tagline: "Mark the injury on a body map and never miss a plaster check.",
  category: "Orthopedic clinic management software",
  shots: SHOTS,
  glance: [
    ["The injury visit", "How it happened, a front and back body map, pain 0 to 10, findings, nerves and pulses, range of movement, X-ray, plan"],
    ["The plaster plan", "The next day, 1 week, 3 weeks and 6 weeks, laid out from the day the cast went on"],
    ["Each review", "Pain, the plaster (intact, loose, removed), progress and the X-ray"],
    ["Booking", "“Book follow-ups (plaster check, review)”: 3 follow-ups a week apart"],
    ["Departments", "Orthopaedics, Plaster Room and Physiotherapy"],
    ["Ready to order", "X-rays of the knee, shoulder, wrist, ankle, hip and spine, MRI knee, DEXA"],
  ],
  hero: {
    web: BODY_MAP,
    caption: "Curogrid Ortho at Strong Bones Ortho Clinic, a demo clinic with invented patients.",
  },
  spotlights: [
    {
      id: "injury",
      benefits: ["The injury marked on a body map, right or left", "Pulses, feeling and movement ticked at every first visit", "The X-ray ordered in one tap"],
      eyebrow: "The first visit",
      title: "The injury, marked where it is",
      intro:
        "The first visit asks what an orthopaedic surgeon asks, most of it a tap. Where it hurts is marked on a front and back body figure, with right and left as the patient's own.",
      shot: BODY_MAP,
      lists: [
        {
          title: "The first visit: Injury and joint",
          parts: [
            { label: "How it happened", detail: "Fall, road accident, sports, lifting, or no injury, came on slowly." },
            { label: "Where", detail: "A front and back body figure: tap the right knee, the left wrist or any of 36 areas." },
            { label: "Pain", detail: "0, none, to 10, the worst." },
            { label: "Findings", detail: "Swelling, tenderness, deformity, bruising, wound, limp, less movement." },
            { label: "Checked and normal", detail: "Pulses, feeling, finger or toe movement, capillary refill." },
            { label: "Range of movement", detail: "A table of joint, movement, side and degrees." },
            { label: "X-ray", detail: "Ready words such as “No fracture”, “Undisplaced fracture” and “Degenerative changes”." },
            { label: "Plan", detail: "Plaster cast, slab, splint or brace, sling, injection, physiotherapy, surgery advised." },
          ],
        },
      ],
    },
    {
      id: "plaster",
      benefits: ["Every plaster check dated from the day it went on", "No patient forgets to come back for the X-ray", "A plaster card the patient brings to every check"],
      eyebrow: "The plaster",
      title: "A plaster's checks, from the day it goes on to the day it comes off",
      intro:
        "Start the plaster plan on the day the cast goes on and Curogrid dates every check. The patient's file shows how many are done and the next one; one tap marks today's check done.",
      shot: PLASTER,
      groups: {
        title: "The four checks of the plan",
        items: [
          { name: "Next day", items: ["Check swelling, fingers or toes"] },
          { name: "1 week", items: ["X-ray check"] },
          { name: "3 weeks", items: ["Review"] },
          { name: "6 weeks", items: ["Plaster off, X-ray"] },
        ],
      },
      lists: [
        {
          title: "Each review",
          parts: [
            { label: "Pain", detail: "The same 0 to 10 scale." },
            { label: "Plaster", detail: "Intact, loose, damaged, removed today, or no plaster." },
            { label: "Since last time", detail: "Swelling less, moving better, still painful, stiff, walking without support." },
            { label: "X-ray", detail: "Fracture uniting, healed, no change." },
            { label: "Notes", detail: "Ready words such as “Weight bearing allowed” and “Continue the sling”." },
          ],
        },
      ],
      card: {
        title: "The plaster card",
        body: "Print the plan as a card on your letterhead: every check with its due date, the day it was done, and a column to sign. The patient brings it to every check.",
      },
      note: "The dashboard lists every patient whose next check is due this week, the late ones first. Switch on “Care plan reminder” in Notifications and the patient gets a WhatsApp message the day before.",
    },
  ],
  journey: {
    title: "A fracture patient's way through the clinic, step by step",
    intro: "From the injury to the plaster coming off. Each step is something Curogrid Ortho does today.",
    steps: [
      {
        stage: "At the desk",
        title: "A token, ahead if it is an emergency",
        body: "The desk gives a token, and an emergency or a patient over 60 can go ahead of the line.",
        href: "/features/tokens-and-queue",
        linkText: "How tokens work",
      },
      {
        stage: "The first visit",
        title: "The injury on the body map",
        body: "How it happened, where, the pain, the findings and the nerves and pulses checked. The X-ray is one tap, and the diagnosis, such as a distal radius fracture, is searched by name.",
      },
      {
        stage: "In the plaster room",
        title: "Consent, the cast, the bill",
        body: "The patient signs “Procedure or operation” on the screen. The cast is billed from the price list, a starter ₹2,500 below the knee, and the plaster plan starts today.",
        href: "/features/billing",
        linkText: "How billing works",
      },
      {
        stage: "Writing the prescription",
        title: "Pain relief, calcium and a sling",
        body: "The orthopaedic medicines are offered first, and a sling, a knee cap or a lumbar belt is written on the prescription and given from stock at the counter. A red warning shows if the patient is allergic to what you write.",
      },
      {
        stage: "Booking ahead",
        title: "The follow-ups booked together",
        body: "Turn on “Book follow-ups (plaster check, review)” and Curogrid books three follow-ups a week apart, each labelled “Follow-up 2 of 3”.",
        href: "/features/appointments",
        linkText: "How appointments work",
      },
      {
        stage: "At each check",
        title: "The review",
        body: "Pain, the plaster, progress and the X-ray. Tick the plan's step as done today.",
      },
      {
        stage: "After the plaster",
        title: "Physiotherapy in the same clinic",
        body: "Book the physiotherapy sessions, or the 10 session package, in the Physiotherapy department.",
      },
    ],
    shots: [
      { shot: SHOTS.today, caption: "Today: the token line and the appointments still expected." },
      { shot: SHOTS.week, caption: "The week's appointments, one colour for each doctor." },
    ],
  },
  practiceIntro: "The front desk, the money and the team, set up for an orthopaedic clinic and shown here with one.",
  rules: {
    title: "The rules an orthopaedic clinic in India works under",
    intro: "A short guide to the registrations and rules that apply to an orthopaedic practice, and what Curogrid does, or does not do, about each.",
    checked: RULES_CHECKED,
    items: [
      DOCTOR_REGISTRATION,
      CLINIC_REGISTRATION,
      {
        title: "Your X-ray machine",
        law: "Atomic Energy (Radiation Protection) Rules, 2004",
        body: "Every medical X-ray machine, a portable unit or a C-arm included, needs a licence from the Atomic Energy Regulatory Board. Register the clinic on eLORA, declare each machine, and apply for its licence before you use it.",
        inCurogrid: "Curogrid does not hold AERB licences. X-rays are ordered in one tap and their results are kept on the patient's file.",
        source: { label: "AERB eLORA guidelines", href: "https://aerb.gov.in/images/PDF/DiagnosticRadiology/e-LORA-Diagnostic-Radiology-Guidelines.pdf" },
      },
      {
        title: "The price of a knee implant",
        law: "Drugs (Prices Control) Order, 2013, and NPPA's ceiling prices",
        body: "Orthopaedic knee implants have a ceiling price set by the National Pharmaceutical Pricing Authority since 2017, last extended to 15 November 2026 or further orders. The implant's price on the bill may not be above the ceiling.",
        inCurogrid: "Curogrid does not check implant prices. An implant is a line on the bill at the price you enter.",
      },
      MEDICO_LEGAL,
      {
        title: "Your physiotherapist",
        law: "National Commission for Allied and Healthcare Professions Act, 2021",
        body: "Physiotherapy is a recognised profession, and its registration regulations were published in September 2026: a physiotherapist may practise only after registering.",
        inCurogrid: "Physiotherapy is its own department, and each physiotherapist has their own sign-in and role.",
      },
      consentRule("four consent forms: “Examination and treatment plan”, “Procedure or operation”, “Local anaesthetic” and “Sedation or general anaesthesia”"),
      wasteRule(
        "Needles from joint injections, used plaster with blood or body fluid on it, and dressings are bio-medical waste.",
        "Curogrid does not manage waste. Each cast and injection is billed, so what was done and when is on record.",
      ),
      PATIENT_DATA,
      gstRule(GST_HEALTH_CARE),
    ],
    disclaimer: DISCLAIMER,
  },
  closing: {
    title: "Try Curogrid Ortho in your clinic",
    ready: "the injury visit, the body map, the plaster plan and your services",
  },
};
