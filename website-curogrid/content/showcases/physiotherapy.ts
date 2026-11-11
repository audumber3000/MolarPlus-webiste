import { editionShot, editionShots } from "@/lib/shots";
import { CLINIC_REGISTRATION, DISCLAIMER, PATIENT_DATA, RULES_CHECKED } from "./rules";
import type { Showcase } from "./types";

/**
 * Curogrid Physio's page: everything beyond the shared fields in
 * lib/specialities.ts.
 *
 * ## Where every product fact comes from
 *
 * Checked against the app repo (`~/Developer/curogrid`) on 17 October 2026:
 *
 * - The assessment and the session note: curogrid-backend/domains/
 *   specialty/profiles/physiotherapy/case_paper.py (`first`, `follow_up`).
 *   The labels below are the app's own.
 * - Body map regions, right and left as the patient's own:
 *   domains/specialty/core/body.py
 * - The exercise library, 31 exercises in ten groups:
 *   profiles/physiotherapy/exercise_library.py. The ready doses:
 *   curogrid-app/src/specialties/core/casePaper/LibraryField.tsx (`DOSES`).
 *   The phone picks exercises too (curogrid-phone-app/.../LibraryField.tsx).
 * - The home exercise sheet: profiles/physiotherapy/papers.py, printed by
 *   core/papers.py on the clinic's letterhead with the clinician's name
 *   and "Reg. No."; the print button is on the visit in
 *   curogrid-app/src/modules/patients/components/VisitCard.tsx. There is
 *   no WhatsApp send for it, and nothing prints it from the phone.
 * - Registration questions: profiles/physiotherapy/registration.py;
 *   "Referred by" is on PatientForm.tsx.
 * - Home visits: "Home visit" is a starter service (template.py). The
 *   phone app writes the visit with the case paper (modules/visit/
 *   components/CasePaperBlock.tsx), takes payment (modules/bills/
 *   TakePayment.tsx) and calls or WhatsApps the patient from the file.
 *   The backend has a `home` encounter class (encounter/models.py) that
 *   no screen sets yet, so never write that a visit is marked as a home
 *   visit other than by its service.
 * - "Name as it prints": curogrid-app/src/modules/staff/components/
 *   doctor/PrintFields.tsx. It offers "Dr." by default and can be changed.
 * - GST: a rate is optional on each service (settings/PriceList.tsx) and
 *   GSTIN is optional (settings/ClinicDetails.tsx).
 *
 * ## The rules section
 *
 * Read from public sources on 17 October 2026, not legal advice, and it
 * says so on the page. The ones that move fastest: NCAHP registration
 * (regulations in the Gazette on 15 September 2026, state councils still
 * starting) and the "Dr." prefix (DGHS letter of 9 September 2025,
 * withdrawn on 10 September; Kerala High Court interim order of
 * 4 November 2025). Re-check both before changing the date.
 */
const SHOTS = editionShots("physio", "Curogrid Physio", { phone: true });
const ASSESSMENT = editionShot(
  "physio",
  "web",
  "body-map-assessment",
  "Curogrid Physio's first-visit assessment: pain marked 7 on a 0 to 10 scale, the right knee and lower back picked on a front and back body figure, how the pain feels, what makes it worse, a red flags checklist and the range of movement table",
);
const EXERCISES = editionShot(
  "physio",
  "web",
  "home-exercises-by-picture",
  "Curogrid Physio's home exercises picker: photographs of exercises such as standing march, step-up, cat-cow and shoulder pendulum, grouped into balance, breathing, mobility, posture, strength and stretches, with two picked",
);
const PHONE_FILE = editionShot(
  "physio",
  "phone",
  "patient-overview",
  "A physiotherapy patient's file in the Curogrid Physio phone app: Call and WhatsApp buttons, last and next visit, what is still to pay, and the Sessions card with the diagnosis, mechanical low back pain",
);
const PHONES = SHOTS.phone!;

export const PHYSIOTHERAPY_SHOWCASE: Showcase = {
  eyebrow: "For physiotherapy and rehabilitation clinics",
  tagline: "Assess with a body map, give home exercises by picture, and keep patients coming back for every session.",
  category: "Physiotherapy clinic management software",
  shots: SHOTS,
  procedureLabel: "Therapies",
  glance: [
    ["First visit", "A physiotherapy assessment: pain score, body map, red flags, range of movement, muscle strength, special tests, goals and plan"],
    ["Each session", "Pain today, what was given with minutes and setting, home exercises and the response"],
    ["Home exercises", "31, picked by picture, each with a dose, printed as the patient's sheet"],
    ["Booking a course", "“Book a course of therapy sessions”: 6 sessions, 2 days apart, 45 minutes each, each shown as “Session 3 of 6”"],
    ["Therapies ready to order", "11, from IFT and TENS to taping and dry needling"],
    ["Starter services", "10, from ₹400 to ₹4,500, with a 10 session package and home visits. You change every price."],
    ["Home visits", "Booked, written and paid for on the phone app"],
  ],
  hero: {
    web: ASSESSMENT,
    phone: PHONE_FILE,
    caption: "Curogrid Physio on the computer and on the phone, at Move Well Physiotherapy, a demo clinic with invented patients.",
  },

  spotlights: [
    {
      id: "assessment",
      benefits: ["A full physio assessment in taps, not paragraphs", "Pain and the problem area marked on a body map", "Red flags asked every time, so you refer in time"],
      eyebrow: "The first visit",
      title: "An assessment made for physiotherapy, not a doctor's prescription pad",
      intro:
        "Most clinic software gives a physiotherapist a doctor's visit form: complaint, diagnosis, medicines. Curogrid Physio opens the first visit on a physiotherapy assessment, with the boxes you would otherwise draw on paper. Most of it is a tap, not typing.",
      shot: ASSESSMENT,
      lists: [
        {
          title: "The first visit: Assessment",
          parts: [
            { label: "Pain (VAS)", detail: "One tap from 0, none, to 10, the worst." },
            {
              label: "Where",
              detail: "A front and a back body figure. Tap the right knee, the lower back or any of 36 areas; right and left are the patient's own.",
            },
            { label: "How it feels", detail: "Sharp, dull ache, burning, spreads down, stiffness, night pain, pins and needles." },
            { label: "Worse with", detail: "Sitting, standing, walking, bending, lifting, stairs, mornings, nights." },
            {
              label: "Red flags present",
              detail:
                "Fever or weight loss, bladder or bowel change, night pain that doesn't ease, recent fall or injury, numbness spreading. Tick any that are there.",
            },
            { label: "Range of movement", detail: "A table of joint, movement and side, with active and passive degrees." },
            { label: "Muscle strength", detail: "Muscle and side, graded 0 to 5." },
            { label: "Special tests", detail: "Written, with ready words such as “SLR positive at 40°”, “Neer's positive” and “McMurray's positive”." },
            { label: "Goals", detail: "The patient's own: walk without pain, climb stairs, back to work, sleep without pain, lift the arm overhead." },
            { label: "Plan", detail: "IFT, TENS, ultrasound, hot pack, cold pack, traction, manual therapy, taping, exercises." },
            { label: "Home exercises", detail: "Picked by picture, each with its dose." },
          ],
        },
        {
          title: "Every session after it: Session",
          parts: [
            { label: "Pain today (VAS)", detail: "The same 0 to 10 scale, so each session's score sits beside the first." },
            { label: "Given today", detail: "A table of modality, minutes and setting: IFT for 15 minutes, ultrasound at 1 MHz." },
            { label: "Home exercises", detail: "Kept, changed or progressed, by picture." },
            { label: "Response", detail: "Pain less, same, pain more, moving better, stiff after." },
            { label: "Notes", detail: "Ready words such as “Home exercises explained” and “Continue the same plan”." },
          ],
        },
      ],
      note: "The complaint, examination, diagnosis and advice are on the visit as well, and the diagnosis is searched by name or ICD-10 code. The assessment and the session note work the same on the phone app.",
    },
    {
      id: "home-exercises",
      benefits: ["Patients follow exercises they can see", "A printed home sheet in seconds", "Patients who do their exercises get better and come back"],
      eyebrow: "Home exercises",
      title: "Home exercises the patient can follow, because they are pictures",
      intro:
        "A home programme written as “SLR 3 × 10, bridging 2 × 15” is forgotten by the time the patient reaches the bus stop. In Curogrid Physio you pick each exercise by its photograph, give it a dose, and hand the patient a printed sheet that shows what to do.",
      shot: EXERCISES,
      groups: {
        title: "31 exercises in 10 groups",
        items: [
          {
            name: "Mobility",
            items: [
              "Ankle pumps",
              "Assisted shoulder flexion",
              "Cat-cow",
              "Shoulder pendulum",
              "Single knee-to-chest stretch",
              "Supine trunk rotation",
              "Wall slides",
            ],
          },
          {
            name: "Strength: hip and knee",
            items: ["Mini squat", "Seated knee extension", "Side-lying hip abduction", "Sit to stand", "Standing hip abduction", "Straight leg raise"],
          },
          {
            name: "Stretches",
            items: ["Doorway chest stretch", "Seated hamstring stretch", "Standing calf stretch", "Standing quadriceps stretch", "Supine hamstring stretch"],
          },
          { name: "Strength: core and back", items: ["Bird dog", "Glute bridge", "Pelvic tilt"] },
          { name: "Strength: arm and shoulder", items: ["Resistance-band row", "Wall push-up", "Wrist extension"] },
          { name: "Balance", items: ["Supported sidestepping", "Supported standing three-way kick"] },
          { name: "Walking and daily tasks", items: ["Standing march", "Step-up"] },
          { name: "Strength: ankle and foot", items: ["Standing heel raise"] },
          { name: "Posture", items: ["Chin tuck"] },
          { name: "Breathing", items: ["Diaphragmatic breathing"] },
        ],
      },
      chips: {
        title: "A dose for each, in one tap",
        after: "Or write your own, such as “5 × 10, hold 5 s”.",
        items: ["3 × 10", "2 × 15", "Hold 20 s × 3", "10 times", "Twice a day", "Once a day"],
      },
      card: {
        title: "The home exercise programme",
        body: "Print it from the visit and it comes out on your clinic's letterhead: each exercise with its picture, its name, the dose you gave and a line on how to do it, signed with your name, qualification and registration number.",
        quote: "Do each exercise as shown, slowly and without pain. Stop and tell us if anything hurts or feels wrong.",
      },
    },
  ],

  journey: {
    title: "A patient's way through a physiotherapy clinic, step by step",
    intro: "From the first phone call to the last session. Each step is something Curogrid Physio does today; nothing here is planned or coming.",
    steps: [
      {
        stage: "Before the first visit",
        title: "The booking and the reminder",
        body: "The desk books an “Initial assessment”, a starter service of 45 minutes at ₹800, in the physiotherapist's diary. The patient gets a reminder before the appointment on WhatsApp and by email.",
        href: "/features/appointments",
        linkText: "How appointments work",
      },
      {
        stage: "At the desk",
        title: "Registration asks what a physiotherapist needs to know",
        body: "Name, age and mobile number, then two questions only a physiotherapy clinic asks: the patient's work (desk job, driver, labourer, homemaker) and the problem area (neck, shoulder, elbow or wrist, upper back, lower back, hip, knee, ankle or foot, after surgery, after a stroke). The orthopaedic surgeon or friend who sent them goes in “Referred by”.",
      },
      {
        stage: "In the waiting area",
        title: "A token, and the line in order",
        body: "Walk-ins get a token. The physiotherapist sees who is next and how long each person has waited, and calls the next patient from the computer or the phone.",
        href: "/features/tokens-and-queue",
        linkText: "How tokens work",
      },
      {
        stage: "The first visit",
        title: "The assessment",
        body: "Pain from 0 to 10, the painful area tapped on the body map, how it feels and what makes it worse, range of movement, muscle grades and special tests. The diagnosis, such as mechanical low back pain or adhesive capsulitis, is searched by name or ICD-10 code, and an X-ray or MRI is one tap.",
      },
      {
        stage: "Safety first",
        title: "Red flags are asked every time",
        body: "Five red flags sit on the assessment as a checklist: fever or weight loss, bladder or bowel change, night pain that doesn't ease, a recent fall or injury, numbness spreading. Ticking one keeps the answer in the file, so the reason for a referral is written down.",
      },
      {
        stage: "Before the patient leaves",
        title: "Goals, a plan and the whole course booked",
        body: "Write the goal in the patient's words, such as “climb stairs” or “back to work”, pick the plan, and book the course in one go: six sessions, two days apart, 45 minutes each, at the same time of day, unless you change it. A date that clashes or falls on leave is skipped and listed.",
      },
      {
        stage: "Same day",
        title: "Home exercises in the patient's hand",
        body: "Pick the home exercises by picture, give each a dose, and print the sheet. The patient's family sees what to do, not a list of abbreviations.",
      },
      {
        stage: "Every session",
        title: "Session 3 of 6",
        body: "Each booking shows its place in the course. The session note records pain today, each modality given with its minutes and setting, the home exercises, and whether the pain is less, the same or more.",
      },
      {
        stage: "When a patient drops out",
        title: "A missed session is not quietly lost",
        body: "The patient's file opens on a Sessions card: “3 of 6 done” and the date of the next session. A session that was missed and never rebooked is flagged, so the desk can call the patient back.",
        href: "/blog/physiotherapy-patients-dropping-out-of-sessions",
        linkText: "Why patients drop out of a course, and what to do",
      },
      {
        stage: "At the counter",
        title: "Billed by session, by package or by visit",
        body: "Bill one session, a “10 session package” at a starter ₹4,500, or a home visit. Take payment by UPI, cash or card, send the bill on WhatsApp, and see who still owes.",
        href: "/features/billing",
        linkText: "How billing works",
      },
      {
        stage: "Over the weeks",
        title: "Progress you can read back",
        body: "Every session's pain score, treatment and response is kept on that visit, in date order in the patient's file, beside the goals set at the assessment.",
      },
    ],
    shots: [
      { shot: SHOTS.week, caption: "The week's sessions, one colour for each physiotherapist." },
      { shot: SHOTS.today, caption: "Today: the token line, who is with the physiotherapist, and the sessions still expected." },
    ],
  },

  band: {
    id: "home-visits",
    eyebrow: "Home physiotherapy",
    title: "Home visits, from the same app",
    intro:
      "A patient after a knee replacement, an elderly patient after a stroke, a patient who cannot climb to a first-floor clinic: home physiotherapy is a large part of many practices. In Curogrid Physio a home visit is booked, written and billed in the same app as a clinic session, and the physiotherapist does it all from the phone.",
    steps: [
      {
        title: "Book it like any session",
        body: "“Home visit” is a starter service of 60 minutes at a starter ₹1,200. The desk books it in the physiotherapist's diary, so the time away from the clinic is blocked like any other booking.",
      },
      {
        title: "The day's visits on the physiotherapist's phone",
        body: "The phone app shows the day's appointments for each physiotherapist. The patient's file has their address, and the Call and WhatsApp buttons reach the family before you leave.",
      },
      {
        title: "Write the session at the bedside",
        body: "Open the patient's file on the phone and write the visit with the same assessment or session note: the pain score, the body map, what was given, the home exercises by picture and the response.",
      },
      {
        title: "Collect the payment there",
        body: "Make the bill on the phone and take the payment by UPI, cash or card. The clinic's billing and the owner's dashboard show it at once, so nobody waits for the therapist to come back with a paper receipt.",
      },
    ],
    phones: [PHONES.appointments!, PHONE_FILE, PHONES.bills!],
    limits:
      "What a home visit does not have: Curogrid does not plan the route, track the physiotherapist's location or add travel time, and the home exercise sheet prints from the computer, not the phone. A travel charge is a line you add to the bill.",
  },

  practiceIntro: "The front desk, the money and the team, set up for a physiotherapy clinic and shown here with one.",

  rules: {
    title: "The rules a physiotherapy clinic in India works under",
    intro: "A short guide to the registrations and rules that apply to a physiotherapy practice, and what Curogrid does, or does not do, about each.",
    checked: RULES_CHECKED,
    items: [
      {
        title: "Register as a physiotherapist",
        law: "National Commission for Allied and Healthcare Professions Act, 2021",
        body: "Physiotherapy is one of the professions the Act recognises. The Commission's registration regulations were published in the Gazette in September 2026: a person may practise a recognised allied and healthcare profession only after registering, and registration lasts five years, renewed after continuing professional development. State councils are still starting, so ask your State Allied and Healthcare Council, or your state's existing physiotherapy council, what applies to you today.",
        inCurogrid:
          "Each physiotherapist's qualification and registration number are kept on their staff profile and print under their name on the papers Curogrid makes, such as the home exercise sheet.",
        source: { label: "National Commission for Allied and Healthcare Professions", href: "https://ncahp.abdm.gov.in/" },
      },
      CLINIC_REGISTRATION,
      {
        title: "The “Dr.” before your name",
        law: "Indian Medical Degrees Act, 1916, and a case before the Kerala High Court",
        body: "This is not settled. The Directorate General of Health Services wrote on 9 September 2025 that physiotherapists may not use the prefix, and withdrew the letter the next day for further examination. On 4 November 2025 the Kerala High Court, in an interim order, barred physiotherapists without a recognised medical qualification from using it. The matter is still before the courts. Check the position before you print it.",
        inCurogrid:
          "The name on your papers is yours to write. In Staff, “Name as it prints” can read “Priya Rao, PT”, with your qualification on the line below.",
      },
      PATIENT_DATA,
      {
        title: "Consent before treatment",
        law: "Informed consent",
        body: "Explain the assessment, the plan and its risks before you start, especially for dry needling, manipulation and electrotherapy, and keep the patient's agreement. For a child, a parent or guardian agrees.",
        inCurogrid:
          "Curogrid Physio adds an “Examination and treatment plan” consent form. The patient, a parent or guardian, or a relative signs it with a finger on the screen, and it is kept in the patient's file.",
      },
      {
        title: "Needles from dry needling",
        law: "Bio-Medical Waste Management Rules, 2016",
        body: "Used needles are sharps. Separate them where they are used, into a puncture-proof white translucent container, hand them to your area's common bio-medical waste facility, and train the staff who handle them.",
        inCurogrid:
          "Curogrid does not manage waste. Dry needling is one of the eleven therapies ready to order, so each session that used needles is on record.",
        source: { label: "Bio-medical waste rules, CPCB", href: "https://cpcb.nic.in/rules-3/" },
      },
      {
        title: "GST on sessions",
        law: "CGST exemption notification 12/2017, entry 74",
        body: "Health care services by a clinical establishment, an authorised medical practitioner or para-medics are exempt from GST. Whether your sessions qualify depends on who gives them and what they are: advance rulings have refused it for wellness and some rehabilitation services. Ask your chartered accountant.",
        inCurogrid:
          "A GST rate is set on a service only if you give it one, and the clinic's GSTIN is needed only if you are registered. A clinic that is not billing GST simply leaves both empty.",
      },
    ],
    disclaimer: DISCLAIMER,
  },

  closing: {
    title: "Try Curogrid Physio in your clinic",
    ready: "the assessment, the exercise library, the course booking and your services",
  },
};
