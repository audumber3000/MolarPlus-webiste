import { editionShot, editionShots } from "@/lib/shots";
import { CLINIC_REGISTRATION, DISCLAIMER, DOCTOR_REGISTRATION, GST_HEALTH_CARE, PATIENT_DATA, PRESCRIPTION_DRUGS, RULES_CHECKED, consentRule, gstRule, wasteRule } from "./rules";
import type { Showcase } from "./types";

/**
 * Curogrid ENT's page. Checked against the app repo on 17 October 2026:
 *
 * - The ENT visit and review: curogrid-backend/domains/specialty/profiles/
 *   ent/case_paper.py (side grids for each ear). The hearing test paper:
 *   papers.py, printed by core/papers.py with the doctor's Reg. No.
 * - The Hearing tab: curogrid-app/src/specialties/ent/hearing/ (Audiogram:
 *   right O red, left X blue, WHO bands; thresholds.ts: WHO 2021 grades by
 *   the 4-frequency average). The phone app has the same tab.
 *
 * Rules: RCI Act 1992 (audiologists and speech therapists on the Central
 * Rehabilitation Register); RPwD Act 2016 (disability certificates come
 * from the medical authority the state notifies, through UDID).
 */
const SHOTS = editionShots("ent", "Curogrid ENT", { phone: ["home", "today"] });
const AUDIOGRAM = editionShot(
  "ent",
  "web",
  "audiogram",
  "Curogrid ENT's Hearing tab: an audiogram with the right ear in red circles falling to 60 dB at 8 kHz and the left ear in blue crosses near 10 to 35 dB, over WHO grade bands, with the right ear at 40 dB, moderate, 11 dB worse than a year ago, and the left at 19 dB, normal",
);
const AUDIOGRAM_PHONE = editionShot("ent", "phone", "audiogram", "The Hearing tab in the Curogrid ENT phone app: the audiogram with the right ear in red circles and the left in blue crosses, over the WHO grade bands, and the last two tests to switch between");

export const ENT_SHOWCASE: Showcase = {
  eyebrow: "For ENT specialists and ear, nose and throat clinics",
  tagline: "Enter the hearing test and see the audiogram, each ear graded and compared with the last test.",
  category: "ENT clinic management software",
  shots: SHOTS,
  glance: [
    ["Hearing", "The audiogram drawn from the visit, each ear's average and WHO grade, the change since the last test"],
    ["The ENT examination", "Both ears side by side (canal, drum, Rinne), Weber, nose, tonsil grade, neck"],
    ["The hearing grid", "Air conduction for each ear, 250 to 8000 Hz, and tympanometry type"],
    ["Prints", "The hearing test, on your letterhead"],
    ["Ready to order", "Ear wash and suction, nasal endoscopy, laryngoscopy, audiometry, tympanometry, X-ray and CT PNS"],
    ["On the prescription", "“In the right ear”, “In the left ear”, “In each nostril”, “Gargle”, “Steam inhalation”"],
  ],
  hero: {
    web: AUDIOGRAM,
    phone: AUDIOGRAM_PHONE,
    caption: "Curogrid ENT at Clear Ears ENT Clinic, a demo clinic with invented patients.",
  },
  spotlights: [
    {
      id: "hearing",
      benefits: ["The audiogram drawn the moment you enter the test", "Each ear graded, and compared with the last test", "A printed hearing test for the patient to keep"],
      eyebrow: "Hearing",
      title: "The audiogram, drawn from your own visit",
      intro:
        "Type the thresholds from the audiometer into the visit, ear by ear, and Curogrid ENT draws the audiogram the way an audiologist draws it. Each ear is graded, and compared with the test before.",
      shot: AUDIOGRAM,
      lists: [
        {
          title: "What the Hearing tab shows",
          parts: [
            { label: "The audiogram", detail: "Frequency across the top from 250 Hz to 8 kHz, louder further down, the right ear as red circles and the left as blue crosses." },
            { label: "The grade bands", detail: "Normal, mild, moderate, moderately severe, severe, profound and complete, behind the lines." },
            { label: "Each ear's average", detail: "Of 500, 1000, 2000 and 4000 Hz, with its WHO grade from the World Report on Hearing (2021)." },
            { label: "The change", detail: "Since the test before it: “11 dB worse than 16 Oct 2025” or “Same as”." },
            { label: "Every test", detail: "Pick any earlier date from the list and its audiogram is drawn." },
          ],
        },
      ],
      card: {
        title: "The hearing test, printed",
        body: "Print the hearing test from the visit on your letterhead: each ear's thresholds and the tympanometry type, signed with your name, qualification and registration number.",
      },
      note: "The phone app shows the same Hearing tab.",
    },
    {
      id: "ent-visit",
      benefits: ["Both ears side by side, as you examine them", "Rinne, Weber and tonsil grade in a tap", "Drops prescribed for the right ear, every time"],
      eyebrow: "On the doctor's screen",
      title: "An ENT examination with both ears side by side",
      intro: "The first visit is the examination an ENT surgeon writes, with right and left in two columns. A review is three short parts.",
      lists: [
        {
          title: "The first visit: Ear, nose and throat",
          parts: [
            { label: "Problem", detail: "Ear pain, discharge, hearing loss, ringing, giddiness, blocked nose, sneezing, nose bleed, sore throat, snoring, voice change." },
            { label: "Ears", detail: "Right and left side by side: the ear canal, the ear drum and Rinne." },
            { label: "Weber", detail: "Central, to the right or to the left." },
            { label: "Nose", detail: "Normal, DNS to right or left, turbinates enlarged, polyp, discharge." },
            { label: "Tonsils", detail: "Not seen, or grade 1 to 4." },
            { label: "Neck", detail: "“No nodes felt” or “Nodes felt”." },
            { label: "Hearing test (dB)", detail: "Air conduction for each ear at 250, 500, 1000, 2000, 4000 and 8000 Hz." },
            { label: "Tympanometry", detail: "The type for each ear." },
          ],
        },
        {
          title: "Each review",
          parts: [
            { label: "Since last time", detail: "Better, same, worse, discharge stopped, hearing better, still blocked." },
            { label: "Ears", detail: "The ear drum, right and left." },
            { label: "Notes", detail: "Ready words such as “Keep ears dry” and “Steam inhalation advised”." },
          ],
        },
      ],
    },
  ],
  journey: {
    title: "An ENT patient's way through the clinic, step by step",
    intro: "From the token to the printed hearing test. Each step is something Curogrid ENT does today.",
    steps: [
      {
        stage: "Before the visit",
        title: "The booking and the reminder",
        body: "The desk books the visit, and the patient gets a reminder before it on WhatsApp and by email. Walk-ins get a token.",
        href: "/features/tokens-and-queue",
        linkText: "How tokens work",
      },
      {
        stage: "In the doctor's room",
        title: "The ENT examination",
        body: "Both ears side by side, Rinne and Weber, the nose, the tonsil grade and the neck. The diagnosis, such as CSOM, DNS or allergic rhinitis, is searched by name.",
      },
      {
        stage: "In Audiology",
        title: "The hearing test",
        body: "The audiologist runs pure tone audiometry and tympanometry and types the thresholds into the visit. The audiogram is drawn and each ear graded.",
      },
      {
        stage: "Back with the doctor",
        title: "The result, and the change",
        body: "The Hearing tab shows each ear's grade and how it moved since the last test. Explain it to the patient on the screen.",
      },
      {
        stage: "Writing the prescription",
        title: "Drops with a side",
        body: "Ear drops “In the right ear”, a spray “In each nostril”, a gargle. If the patient is allergic to a medicine you write, a red warning says so.",
      },
      {
        stage: "At the procedure chair",
        title: "Consent, then the procedure",
        body: "Before an ear wash or a nasal packing the patient reads “Procedure or operation” on the screen and signs with a finger. The procedure is one tap in a new order and is billed from the price list.",
        href: "/features/billing",
        linkText: "How billing works",
      },
      {
        stage: "At the counter",
        title: "The bill and the hearing test",
        body: "The patient pays by UPI, cash or card and takes the printed hearing test.",
      },
    ],
    shots: [
      { shot: SHOTS.today, caption: "Today: the token line and the appointments still expected." },
      { shot: SHOTS.week, caption: "The week's appointments, one colour for each doctor." },
    ],
  },
  practiceIntro: "The front desk, the money and the team, set up for an ENT clinic and shown here with one.",
  rules: {
    title: "The rules an ENT clinic in India works under",
    intro: "A short guide to the registrations and rules that apply to an ENT practice, and what Curogrid does, or does not do, about each.",
    checked: RULES_CHECKED,
    items: [
      DOCTOR_REGISTRATION,
      CLINIC_REGISTRATION,
      {
        title: "Your audiologist and speech therapist",
        law: "Rehabilitation Council of India Act, 1992",
        body: "Audiologists and speech therapists must be on the Central Rehabilitation Register to practise and to charge for it. Check each one's CRR number when you hire them.",
        inCurogrid: "Each person on your team has their own sign-in and role, and Audiology is a department of its own.",
        source: { label: "Rehabilitation Council of India", href: "https://rehabcouncil.nic.in/" },
      },
      {
        title: "A hearing disability certificate",
        law: "Rights of Persons with Disabilities Act, 2016",
        body: "A disability certificate for hearing loss is issued by the medical authority your state notifies, through the UDID portal, not by a private clinic. Your audiogram can go with the patient to the board.",
        inCurogrid: "Curogrid does not issue disability certificates. The hearing test prints with each ear's thresholds, for the patient to take.",
      },
      PRESCRIPTION_DRUGS,
      consentRule("three consent forms: “Examination and treatment plan”, “Procedure or operation” and “Local anaesthetic”"),
      wasteRule(
        "Used suction tips, swabs, nasal packs and needles are bio-medical waste.",
        "Curogrid does not manage waste. Each procedure is ordered and billed, so what was done and when is on record.",
      ),
      PATIENT_DATA,
      gstRule(GST_HEALTH_CARE),
    ],
    disclaimer: DISCLAIMER,
  },
  closing: {
    title: "Try Curogrid ENT in your clinic",
    ready: "the hearing test, the audiogram, the ENT examination and your services",
  },
};
