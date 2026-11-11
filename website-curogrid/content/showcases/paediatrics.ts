import { editionShot, editionShots } from "@/lib/shots";
import { CLINIC_REGISTRATION, DISCLAIMER, DOCTOR_REGISTRATION, GST_HEALTH_CARE, PATIENT_DATA, RULES_CHECKED, consentRule, gstRule, wasteRule } from "./rules";
import type { Showcase } from "./types";

/**
 * Curogrid Paeds's page. Checked against the app repo on 17 October 2026:
 *
 * - The child's visit and the review: curogrid-backend/domains/specialty/
 *   profiles/paediatrics/case_paper.py. Registration questions:
 *   registration.py. The labels below are the app's own.
 * - Growth charts: curogrid-app/src/specialties/paediatrics/growth/
 *   (WHO LMS tables, birth to two years, 3rd/15th/50th/85th/97th; needs
 *   the date of birth and sex). The phone app has the same tab.
 * - The vaccine plan: profiles/paediatrics/care_plans.py (13 steps, the IAP
 *   schedule). Its file says it is to be checked by a practising
 *   paediatrician before launch: keep the page's wording to what the steps
 *   say. The plan's card prints (core/papers.py `care_plan_body`).
 * - Due this week: core/reminders.py `due`, on the dashboard
 *   (curogrid-app/src/modules/dashboard/Dashboard.tsx). The day-before
 *   WhatsApp message is `care_plan_reminder`, off until the clinic turns it
 *   on (notification_admin.py), and it needs its Meta template approved.
 * - "Baby under 2" priority token: queue/services/tokens.py.
 *
 * Rules: POCSO s.19 and s.21; the IMS Act, 1992; AEFI reporting to the
 * District Immunization Officer within 24 hours (MoHFW AEFI guidelines).
 */
const SHOTS = editionShots("paeds", "Curogrid Paeds", { phone: true });
const GROWTH = editionShot(
  "paeds",
  "web",
  "growth-chart",
  "Curogrid Paeds's growth chart for a 10 month old boy: weight 9.3 kg at the 47th centile and length 74.5 cm at the 53rd, drawn on the WHO centile bands, with head circumference below",
);
const GROWTH_PHONE = editionShot("paeds", "phone", "growth-chart", "A child's WHO growth chart in the Curogrid Paeds phone app");
const VACCINES = editionShot(
  "paeds",
  "web",
  "vaccines-plan",
  "A child's file in Curogrid Paeds: the Growth card with vaccines 7 of 13 done, the next one at 12 months on 20 Nov 2026 (Hep A 1), a Print card button, and the weight rising from 4.9 to 9.3 kg",
);

export const PAEDIATRICS_SHOWCASE: Showcase = {
  eyebrow: "For paediatricians and children's clinics",
  tagline: "Growth charts, vaccines and syrups, made for a children's clinic. Parents see how their child is growing.",
  category: "Pediatric clinic management software",
  shots: SHOTS,
  glance: [
    ["Growth", "WHO charts for weight, length and head, birth to two years, with the centile of each"],
    ["Vaccines", "The IAP schedule from the date of birth, 13 steps, with the next one due and a card to print"],
    ["The child's visit", "Who brought them, feeding, milestones, vaccines, head circumference, how they look"],
    ["At registration", "Birth weight, born at term or early, the delivery and feeding"],
    ["Medicines offered first", "29 children's names: syrups, drops, suspensions, sachets and nebuliser solutions"],
    ["In the line", "A “Baby under 2” token goes ahead of the others"],
  ],
  hero: {
    web: GROWTH,
    phone: GROWTH_PHONE,
    caption: "Curogrid Paeds on the computer and on the phone, at Little Steps Child Clinic, a demo clinic with invented patients.",
  },
  spotlights: [
    {
      id: "growth-chart",
      benefits: ["Answer “is my child growing well?” on the screen", "WHO centiles worked out for you", "Weight, length and head charted from your own visits"],
      eyebrow: "Growth",
      title: "The WHO growth chart, drawn from your own visits",
      intro:
        "A parent asks one question at every visit: is my child growing well? Curogrid Paeds answers it on the screen. Each weight, length and head circumference you record is placed on the WHO chart for the child's sex, and the latest is read out with its centile.",
      shot: GROWTH,
      lists: [
        {
          title: "What the Growth chart tab shows",
          parts: [
            { label: "Weight", detail: "By age in months, on the WHO bands from the 3rd to the 97th centile, with the 50th as the middle line." },
            { label: "Length or height", detail: "The same bands, with the child's own measurements joined up." },
            { label: "Head circumference", detail: "Measured under two years, on its own chart." },
            { label: "The centile", detail: "Read out beside each chart: “9.3 kg, 47th centile”, “below the 3rd” or “above the 97th”." },
          ],
        },
      ],
      note: "The charts need the child's date of birth and sex, and say so when either is missing. They run from birth to two years. The phone app shows the same charts.",
    },
    {
      id: "vaccines",
      benefits: ["Every vaccine dated from the date of birth", "Parents can be reminded the day before", "A printed vaccination card for every child"],
      eyebrow: "Vaccines",
      title: "Every vaccine from the date of birth, and the next one never forgotten",
      intro:
        "Start the vaccine plan once and Curogrid lays out the whole schedule from the child's date of birth. The file shows how many steps are done and what is due next; one tap marks today's vaccines given.",
      shot: VACCINES,
      groups: {
        title: "The 13 steps of the plan, on the IAP schedule",
        items: [
          { name: "At birth", items: ["BCG, OPV 0, Hep B 1"] },
          { name: "6 weeks", items: ["DTP 1, IPV 1, Hib 1, Hep B 2, Rotavirus 1, PCV 1"] },
          { name: "10 weeks", items: ["DTP 2, IPV 2, Hib 2, Hep B 3, Rotavirus 2, PCV 2"] },
          { name: "14 weeks", items: ["DTP 3, IPV 3, Hib 3, Hep B 4, Rotavirus 3, PCV 3"] },
          { name: "6 and 7 months", items: ["Influenza 1, then Influenza 2"] },
          { name: "9 months", items: ["MMR 1, Typhoid conjugate"] },
          { name: "12 months", items: ["Hep A 1"] },
          { name: "15 months", items: ["MMR 2, Varicella 1, PCV booster"] },
          { name: "16 to 18 months", items: ["DTP booster 1, IPV booster, Hib booster"] },
          { name: "18 months", items: ["Hep A 2, Varicella 2"] },
          { name: "4 to 6 years", items: ["DTP booster 2, MMR 3"] },
          { name: "10 to 12 years", items: ["Tdap, HPV"] },
        ],
      },
      card: {
        title: "The vaccination card",
        body: "Print the plan as a card on your letterhead: every step with its due date, the day it was given, and a column to sign. Bring it to every visit.",
      },
      note: "The dashboard lists every child whose next step is due this week, the late ones first. Switch on “Care plan reminder” in Notifications and the parent gets a WhatsApp message the day before.",
    },
    {
      id: "child-visit",
      benefits: ["A child's visit in taps, not paragraphs", "Milestones ticked at every visit", "Birth details asked once, kept forever"],
      eyebrow: "The child's visit",
      title: "A visit form for a child, not a small adult",
      intro: "The first visit asks what a paediatrician asks; a review is three quick parts. Weight, height and temperature are in the visit's vitals as usual.",
      lists: [
        {
          title: "The first visit: Child",
          parts: [
            { label: "Brought by", detail: "Mother, father, grandparent or someone else." },
            { label: "Feeding", detail: "Breastfed, formula, mixed feeding, family food, eats poorly, picky eater." },
            { label: "Milestones reached", detail: "Tick what the child does now: social smile, holds head, sits, crawls, stands, walks, says words, runs, speaks sentences." },
            { label: "Vaccines", detail: "Up to date, due now, behind or not known." },
            { label: "Head circumference", detail: "In centimetres, under two years." },
            { label: "Looks", detail: "Active, playful, irritable, drowsy, pale, dehydrated, rash, jaundice." },
            { label: "Findings", detail: "Ready words such as “Chest clear” and “No neck stiffness”." },
          ],
        },
        {
          title: "At registration, asked once",
          parts: [
            { label: "Birth weight", detail: "In kilograms." },
            { label: "Born at", detail: "Full term, early (preterm) or late." },
            { label: "Delivery", detail: "Normal, caesarean or assisted." },
            { label: "Feeding", detail: "Breast milk, formula, both or family food." },
            { label: "Review visit", detail: "Since last visit (better, same, worse, fever gone, eating well), how the child looks, and notes such as “Weight gained”." },
          ],
        },
      ],
    },
  ],
  journey: {
    title: "A child's visit to the clinic, step by step",
    intro: "From the parent's phone call to the vaccine card. Each step is something Curogrid Paeds does today.",
    steps: [
      {
        stage: "Before the visit",
        title: "The booking and the reminder",
        body: "The desk books the visit, and the parent gets a reminder before it on WhatsApp and by email.",
        href: "/features/appointments",
        linkText: "How appointments work",
      },
      {
        stage: "At the desk",
        title: "Registered once, with the birth details",
        body: "The child's name, date of birth and sex, the parent's name and mobile number, and four birth questions: birth weight, born at term or early, the delivery and the feeding.",
      },
      {
        stage: "In the waiting area",
        title: "A baby goes ahead",
        body: "The desk gives a token and marks it “Baby under 2”. It is placed ahead of normal tokens, and the tag shows in the doctor's line.",
        href: "/features/tokens-and-queue",
        linkText: "How tokens work",
      },
      {
        stage: "Before the doctor",
        title: "Weight, length and temperature",
        body: "The sister records the vitals. The weight and length go straight onto the growth chart.",
      },
      {
        stage: "In the doctor's room",
        title: "The growth chart, then the visit",
        body: "The centile is read out, and the visit asks who brought the child, feeding, milestones and vaccines. The diagnosis, such as bronchiolitis or croup, is searched by its everyday name.",
      },
      {
        stage: "Writing the prescription",
        title: "Syrups and drops, and the dose you write",
        body: "The children's forms are offered ahead of adult tablets. You write the dose; “Every 6 hours” and “By mouth with the dropper” are ready to pick. If the child is allergic to a medicine you write, a red warning says so.",
      },
      {
        stage: "Vaccination",
        title: "Tick the step, count the vial",
        body: "Mark today's vaccines given in one tap. The vaccine is kept in Stock with its batch and expiry, and giving it brings the shelf count down; the visit charge goes on the bill.",
      },
      {
        stage: "At the counter",
        title: "Bill, card and the next date",
        body: "The parent pays by UPI, cash or card, takes the printed vaccination card, and the next step's date is already on the child's file.",
        href: "/features/billing",
        linkText: "How billing works",
      },
      {
        stage: "Through the year",
        title: "Due this week",
        body: "The dashboard lists the children whose next vaccine is due, the late ones first, each a tap from their file. With reminders on, the parent is messaged the day before.",
      },
    ],
    shots: [
      { shot: SHOTS.today, caption: "Today: the token line and the appointments still expected." },
      { shot: SHOTS.week, caption: "The week's appointments, one colour for each doctor." },
    ],
  },
  practiceIntro: "The front desk, the money and the team, set up for a children's clinic and shown here with one.",
  rules: {
    title: "The rules a children's clinic in India works under",
    intro: "A short guide to the registrations and rules that apply to a paediatric practice, and what Curogrid does, or does not do, about each.",
    checked: RULES_CHECKED,
    items: [
      DOCTOR_REGISTRATION,
      CLINIC_REGISTRATION,
      {
        title: "A reaction after a vaccine",
        law: "National guidelines on adverse events following immunisation (AEFI)",
        body: "A serious event after a vaccine, one that needs a hospital or leads to disability or death, is reported to the District Immunization Officer within 24 hours on the case reporting form. Minor events go in the monthly report.",
        inCurogrid: "Curogrid does not send AEFI reports. The vaccination visit is on record, and Stock keeps each vaccine's batch number and expiry.",
        source: { label: "AEFI guidelines, MoHFW", href: "https://mohfw.gov.in/sites/default/files/Revised%20AEFI%20Guidelines%20Execute%20Summary_1.pdf" },
      },
      {
        title: "A child at risk",
        law: "Protection of Children from Sexual Offences Act, 2012, sections 19 and 21",
        body: "Anyone who knows or suspects that a child has been sexually abused, a doctor included, must report it to the police or the Special Juvenile Police Unit. Not reporting is an offence, punishable with up to six months in prison, a fine, or both.",
        inCurogrid: "Curogrid does not report to the police. What you saw and did is kept on the visit, with photos and reports in the child's file.",
      },
      {
        title: "Formula, feeding bottles and baby food",
        law: "Infant Milk Substitutes, Feeding Bottles and Infant Foods Act, 1992",
        body: "The Act protects breastfeeding. A clinic may not display posters for infant formula, feeding bottles or infant foods, or pass on company samples and gifts to mothers, and what companies tell health workers is limited to scientific facts.",
        inCurogrid: "Curogrid shows no advertising. “Formula” is only an answer to the feeding question on the child's visit.",
      },
      consentRule("an “Examination and treatment plan” and a “Procedure or operation” consent form", "Curogrid fills in the guardian's name from the child's record."),
      wasteRule(
        "Used vaccine syringes and needles are sharps.",
        "Curogrid does not manage waste. Vaccines are kept in Stock with their batch number and expiry date, and the stock list warns you before one expires.",
      ),
      PATIENT_DATA,
      gstRule(GST_HEALTH_CARE),
    ],
    disclaimer: DISCLAIMER,
  },
  closing: {
    title: "Try Curogrid Paeds in your clinic",
    ready: "the growth charts, the vaccine plan, the children's medicines and your services",
  },
};
