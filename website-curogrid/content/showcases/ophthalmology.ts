import { editionShot, editionShots } from "@/lib/shots";
import { CLINIC_REGISTRATION, DISCLAIMER, DOCTOR_REGISTRATION, GST_HEALTH_CARE, PATIENT_DATA, PRESCRIPTION_DRUGS, RULES_CHECKED, consentRule, gstRule, wasteRule } from "./rules";
import type { Showcase } from "./types";

/**
 * Curogrid Eye's page. Checked against the app repo on 17 October 2026:
 *
 * - The eye visit and the review: curogrid-backend/domains/specialty/
 *   profiles/ophthalmology/case_paper.py (side grids, right and left).
 * - The Eyes tab: curogrid-app/src/specialties/ophthalmology/eyes/
 *   (IOP_RANGE 10 to 21; every visit newest first). Phone has it too.
 * - After cataract surgery: care_plans.py (three steps, to be checked by
 *   a practising ophthalmologist before launch). The glasses prescription:
 *   papers.py.
 * - No phone screenshots of the eye edition exist yet.
 *
 * Rules: optometry is one of the professions under the NCAHP Act 2021;
 * eye banks and corneal retrieval come under the Transplantation of
 * Human Organs and Tissues Act 1994.
 */
const SHOTS = editionShots("eye", "Curogrid Eye", { phone: false });
const EYES = editionShot(
  "eye",
  "web",
  "eye-readings",
  "Curogrid Eye's Eyes tab: the right eye with vision 6/18, 6/6 with glasses, a pressure of 24 mmHg flagged as above the usual 10 to 21, and glasses −1.25 / −0.50 × 90, add +1.50; the left eye at 6/12 and 17 mmHg; and a table of both visits' readings",
);

export const OPHTHALMOLOGY_SHOWCASE: Showcase = {
  eyebrow: "For ophthalmologists and eye clinics",
  tagline: "Both eyes on one screen, high pressure flagged, glasses prescriptions printed in a tap.",
  category: "Eye clinic management software",
  shots: SHOTS,
  glance: [
    ["The eye visit", "Right and left side by side: vision, glasses, eye pressure, front of the eye, retina"],
    ["The Eyes tab", "Each eye's latest vision, pressure and glasses, with a pressure above 21 flagged"],
    ["Prints", "The glasses prescription, on your letterhead"],
    ["After cataract surgery", "Day 1, 1 week and 4 weeks, laid out from the day of surgery"],
    ["Medicines offered first", "24 eye drops and ointments, with “In the right eye”, “In both eyes”, “Every 2 hours”"],
    ["Ready to order", "OCT, visual field, fundus photo, A-scan, B-scan, corneal topography"],
  ],
  hero: {
    web: EYES,
    caption: "Curogrid Eye at Drishti Eye Care, a demo clinic with invented patients.",
  },
  spotlights: [
    {
      id: "eyes",
      benefits: ["Both eyes on one screen", "A high eye pressure you cannot miss", "Every visit's vision and pressure, newest first"],
      eyebrow: "Each eye",
      title: "Both eyes on one screen, and a high pressure you cannot miss",
      intro:
        "An eye patient's file opens an Eyes tab with a card for each eye: its latest vision, its pressure and its glasses. Below is every visit's readings for both eyes, newest first.",
      shot: EYES,
      lists: [
        {
          title: "What the Eyes tab shows",
          parts: [
            { label: "Vision", detail: "Unaided and with glasses, with the date it was taken: “6/18, 6/6 with glasses”." },
            { label: "Pressure", detail: "In mmHg, flagged when it is above the usual 10 to 21: “24 mmHg, above the usual 10 to 21”." },
            { label: "Glasses", detail: "The latest power: “−1.25 / −0.50 × 90, add +1.50”." },
            { label: "Every visit", detail: "Vision and pressure for the right and left eye, visit by visit." },
          ],
        },
      ],
      note: "The phone app shows the same Eyes tab.",
    },
    {
      id: "eye-visit",
      benefits: ["The examination laid out right eye, left eye", "Refraction and pressure entered by your optometrist", "Quick reviews after surgery"],
      eyebrow: "On the doctor's screen",
      title: "An eye examination in two columns, right and left",
      intro: "The first visit is laid out the way an ophthalmologist writes it, each eye in its own column. A review, or a check after surgery, is the short form.",
      lists: [
        {
          title: "The first visit: Eyes",
          parts: [
            { label: "Problem", detail: "Blurred far or near, red eye, watering, itching, pain, floaters, glare, injury." },
            { label: "Vision", detail: "Unaided, with glasses, pinhole and near, for each eye." },
            { label: "Glasses", detail: "Sphere, cylinder, axis and add, for each eye." },
            { label: "Eye pressure", detail: "IOP in mmHg, for each eye." },
            { label: "Front of the eye", detail: "Lids, conjunctiva, cornea, anterior chamber, pupil and lens, for each eye." },
            { label: "Retina", detail: "Disc, macula and vessels, for each eye." },
            { label: "Plan", detail: "Glasses, drops, cataract surgery advised, YAG laser, review." },
          ],
        },
        {
          title: "A review, or after surgery",
          parts: [
            { label: "After surgery", detail: "Day 1, day 7, day 30, or not after surgery." },
            { label: "Vision", detail: "Unaided and pinhole, for each eye." },
            { label: "Eye pressure", detail: "IOP for each eye." },
            { label: "Front of the eye", detail: "Ready words such as “Quiet eye” and “Cornea clear”." },
            { label: "Notes", detail: "Ready words such as “Drops explained” and “Wear the shield at night”." },
          ],
        },
      ],
    },
    {
      id: "after-cataract",
      benefits: ["Day 1, week 1 and week 4 checks, never missed", "The glasses prescription printed at the last check", "Patients due for a check, listed for your desk"],
      eyebrow: "Cataract surgery",
      title: "The checks after cataract surgery, and the glasses at the end",
      intro:
        "Start the after-cataract plan on the day of surgery and Curogrid dates each check. The patient's file shows the next one, and the dashboard lists who is due this week.",
      groups: {
        title: "The three checks of the plan",
        items: [
          { name: "Day 1", items: ["Eye check, start drops"] },
          { name: "1 week", items: ["Check, taper drops"] },
          { name: "4 weeks", items: ["Final check, glasses prescription"] },
        ],
      },
      card: {
        title: "The glasses prescription",
        body: "Print it from the visit on your letterhead: sphere, cylinder, axis and add for each eye, with the vision, signed with your name and registration number.",
        quote: "Wear as advised. Have your eyes checked again in a year, or sooner if your sight changes.",
      },
    },
  ],
  journey: {
    title: "An eye patient's way through the clinic, step by step",
    intro: "From the token to the glasses prescription. Each step is something Curogrid Eye does today.",
    steps: [
      {
        stage: "At the desk",
        title: "A token, or the booked time",
        body: "Walk-ins get a token; booked patients get a reminder before the visit on WhatsApp and by email. A patient over 60 can be given a priority token.",
        href: "/features/tokens-and-queue",
        linkText: "How tokens work",
      },
      {
        stage: "With the optometrist",
        title: "Vision and refraction first",
        body: "The optometrist records vision, the refraction and the eye pressure for each eye on the visit, before the doctor sees the patient.",
      },
      {
        stage: "With the doctor",
        title: "The examination, eye by eye",
        body: "The front of the eye and the retina in two columns, the plan, and the diagnosis, such as senile cataract or primary open-angle glaucoma, searched by name.",
      },
      {
        stage: "Drops",
        title: "Drops with an eye and a time",
        body: "The eye drops are offered first. “In the right eye” and “Every 2 hours” are ready to pick. If the patient is allergic to a medicine you write, a red warning says so.",
      },
      {
        stage: "Glasses",
        title: "The prescription, printed",
        body: "Print the glasses prescription for the optical shop of the patient's choice.",
      },
      {
        stage: "Cataract surgery",
        title: "Consent, the bill and the plan",
        body: "The patient signs “Procedure or operation” and “Local anaesthetic” on the screen. The surgery is billed from the price list, and the after-cataract plan starts from the day of surgery.",
        href: "/features/billing",
        linkText: "How billing works",
      },
      {
        stage: "After surgery",
        title: "Day 1, a week, a month",
        body: "Each check is a short review with vision and pressure for each eye. At four weeks, the new glasses.",
      },
    ],
    shots: [
      { shot: SHOTS.today, caption: "Today: the token line and the appointments still expected." },
      { shot: SHOTS.week, caption: "The week's appointments, one colour for each doctor." },
    ],
  },
  practiceIntro: "The front desk, the money and the team, set up for an eye clinic and shown here with one.",
  rules: {
    title: "The rules an eye clinic in India works under",
    intro: "A short guide to the registrations and rules that apply to an eye practice, and what Curogrid does, or does not do, about each.",
    checked: RULES_CHECKED,
    items: [
      DOCTOR_REGISTRATION,
      CLINIC_REGISTRATION,
      {
        title: "Your optometrist",
        law: "National Commission for Allied and Healthcare Professions Act, 2021",
        body: "Optometry is one of the professions the Act recognises, and its registration regulations were published in September 2026: an optometrist may practise only after registering. State councils are still starting, so check what applies in your state.",
        inCurogrid: "Optometry is its own department, and the optometrist has their own sign-in and role.",
      },
      {
        title: "Eye donation",
        law: "Transplantation of Human Organs and Tissues Act, 1994",
        body: "Corneas are removed only by a doctor, after death is certified, with the consent of the next of kin, and only for a registered eye bank. Buying or selling them is a crime. A family can be pointed to the nearest eye bank through 1919.",
        inCurogrid: "Curogrid does not run an eye bank or keep a donor register.",
      },
      PRESCRIPTION_DRUGS,
      consentRule("five consent forms: “Examination and treatment plan”, “Procedure or operation”, “Local anaesthetic”, “Sedation or general anaesthesia” and “Admission”"),
      wasteRule(
        "Blades, needles and the drapes and swabs from surgery are bio-medical waste.",
        "Curogrid does not manage waste. Each procedure is ordered and billed, so what was done and when is on record.",
      ),
      PATIENT_DATA,
      gstRule(GST_HEALTH_CARE),
    ],
    disclaimer: DISCLAIMER,
  },
  closing: {
    title: "Try Curogrid Eye in your clinic",
    ready: "the eye visit, the Eyes tab, the glasses prescription and your services",
  },
};
