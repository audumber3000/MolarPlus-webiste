import type { Speciality } from "./types";
import { GENERAL_COURSE } from "./types";

/**
 * Curogrid Paeds. Re-checked against the app repo on 17 October 2026:
 * profiles/paediatrics/ (template, pack, case_paper, care_plans,
 * registration) and curogrid-app/src/specialties/paediatrics/ (the WHO
 * growth charts, birth to two years, and the Growth record card).
 */
export const PAEDIATRICS: Speciality = {
  slug: "pediatric-clinic-management-software",
  key: "paediatrics",
  appLabel: "Paediatrics",
  name: "Paediatrics",
  clinic: "paediatric clinic",
  doctor: "paediatrician",
  madeFor: "Paediatricians (pediatricians), child specialists and children's clinics",
  searchTerm: "pediatric clinic software",
  guide: "growth-and-vaccination-records-pediatric-clinic",
  metaTitle: "Pediatric Clinic Software in India: Curogrid Paeds",
  metaDescription:
    "Curogrid Paeds, software for paediatricians in India: WHO growth charts with centiles, the IAP vaccine schedule from the date of birth, syrups and drops first, milestones. From ₹420 a month.",
  h1: "Curogrid Paeds: software for children's clinics",
  lead: "Curogrid Paeds is clinic software for paediatricians and child specialists in India. A child's weight, length and head are drawn on WHO growth charts with their centile. The vaccines are laid out from the date of birth on the IAP schedule, with the next one due shown on the file. Syrups and drops are offered first, and milestones are a tick.",
  card: "WHO growth charts, the vaccine schedule from birth, syrups and drops first.",
  overview: {
    title: "Software for a paediatric clinic or child specialist in India",
    body: [
      "A children's clinic needs a weight at every visit read against a growth chart, the next vaccines on the right day, medicines written as syrups and drops, and a parent who signs for the child. Curogrid Paeds is built around those things. Paediatric and pediatric are the same word in two spellings, and this is the same product under both.",
      "The child's visit asks who brought them, how they feed, which milestones they have reached and whether the vaccines are up to date. The file draws weight, length and head circumference on the WHO charts from birth to two years, with the centile of the latest one. The vaccine schedule runs from the date of birth to 10 years, and the clinic's dashboard lists which children are due this week.",
    ],
  },
  points: [
    {
      title: "WHO growth charts, with the centile",
      body: "Weight, length and head circumference from each visit are drawn on the WHO charts for the child's sex, birth to two years, inside the 3rd to 97th centile bands. The latest one is read out for you: “9.3 kg, 47th centile”.",
    },
    {
      title: "Every vaccine from the date of birth",
      body: "Start the vaccine plan and Curogrid lays out 13 visits on the IAP schedule from the date of birth, from BCG at birth to Tdap and HPV at 10 to 12 years. The file shows “7 of 13 done” and the next one due, and the dashboard lists the children due this week.",
    },
    {
      title: "Syrups and drops come first",
      body: "The names offered first are the ones a paediatrician writes: paracetamol 120 mg/5 ml syrup, zinc syrup, vitamin D3 drops, salbutamol nebuliser solution. “Every 6 hours” and “By mouth with the dropper” are ready to pick beside the dose you type.",
    },
  ],
  departments: ["Paediatrics", "Immunisation"],
  services: [
    { name: "New consultation", price: 500, minutes: 20 },
    { name: "Follow-up consultation", price: 300, minutes: 15 },
    { name: "Newborn check", price: 700, minutes: 30 },
    { name: "Growth and development assessment", price: 600, minutes: 30 },
    { name: "Immunisation, visit charge", price: 200, minutes: 15 },
    { name: "Nebulisation", price: 250, minutes: 20 },
    { name: "Nutrition counselling", price: 500, minutes: 30 },
    { name: "Developmental screening", price: 800, minutes: 45 },
    { name: "School health certificate", price: 300, minutes: 10 },
    { name: "Weight and height check", price: 100, minutes: 5 },
  ],
  medicines: [
    "Paracetamol 120 mg/5 ml syrup", "Paracetamol drops 100 mg/ml", "Ibuprofen 100 mg/5 ml syrup",
    "Amoxicillin 250 mg/5 ml syrup", "Amoxicillin + Clavulanate 228.5 mg/5 ml syrup",
    "Cefixime 50 mg/5 ml syrup", "Cefpodoxime 50 mg/5 ml syrup", "Azithromycin 100 mg/5 ml syrup",
    "Cetirizine 5 mg/5 ml syrup", "Levocetirizine 2.5 mg/5 ml syrup", "Ondansetron 2 mg/5 ml syrup",
    "Domperidone 1 mg/ml suspension", "Zinc 20 mg/5 ml syrup", "ORS sachet", "Probiotic sachet",
    "Salbutamol 2 mg/5 ml syrup", "Salbutamol nebuliser solution", "Budesonide nebuliser suspension",
    "Montelukast 4 mg chewable tablet", "Prednisolone 5 mg/5 ml syrup",
    "Albendazole 200 mg/5 ml suspension", "Lactulose syrup", "Simethicone drops", "Saline nasal drops",
    "Vitamin D3 400 IU drops", "Multivitamin drops", "Iron drops", "Calcium syrup", "Calamine lotion",
  ],
  tests: ["CBC with peripheral smear", "Urine culture", "Serum bilirubin", "Blood culture", "Mantoux test"],
  scans: [],
  procedures: ["Vaccination", "Nebulisation", "Growth check"],
  doseWords: ["Every 6 hours", "Every 8 hours", "Twice a day", "By mouth with the dropper", "In the nose"],
  durationWords: [],
  course: GENERAL_COURSE,
  fileCard: {
    title: "Growth",
    body: "It shows the vaccine plan as a row of dots, such as “7 of 13 done”, with the next vaccine due and its date, and the child's weights over the visits with the latest height.",
  },
  consents: ["Examination and treatment plan", "Procedure or operation"],
  diagnoses: [
    "Acute upper respiratory infection", "Acute bronchiolitis", "Acute obstructive laryngitis (croup)",
    "Rotaviral enteritis", "Otitis media", "Acute tonsillitis", "Febrile convulsions", "Neonatal jaundice",
    "Enteroviral vesicular stomatitis with exanthem (hand, foot and mouth disease)",
    "Varicella without complication", "Measles without complication", "Mumps without complication",
    "Diaper (napkin) dermatitis", "Rickets, active",
    "Other lack of expected normal physiological development (poor weight gain)",
    "Developmental disorder of speech and language (speech delay)", "Nonorganic enuresis (bedwetting)",
    "Routine child health examination",
    "Need for immunization against unspecified combinations of infectious diseases",
  ],
  diagnosisNote:
    "For a child specialist the list covers the chest and ear infections of early childhood, the fevers with a rash, newborn jaundice, poor weight gain and rickets, speech delay and bedwetting, and codes for a routine child health check and a vaccination visit.",
  day: [
    {
      where: "At the desk",
      title: "A baby goes ahead in the line",
      body: "The receptionist gives a token and marks it “Baby under 2”. The token is placed ahead of normal ones, and the tag shows beside the child's name in the doctor's line.",
      href: "/features/tokens-and-queue",
      linkText: "How tokens and the waiting line work",
    },
    {
      where: "In the doctor's room",
      title: "The growth chart and the visit",
      body: "Weight, length and head go on the WHO chart with their centile. The visit asks who brought the child, feeding, milestones and vaccines.",
    },
    {
      where: "A vaccination visit",
      title: "Tick the vaccines, count the vial",
      body: "Tick the step as done today. The vaccine itself comes out of Stock with its batch number and expiry date, and the visit charge goes on the bill.",
    },
  ],
  notDone: [
    {
      title: "Growth charts stop at two years",
      body: "The WHO charts are drawn from birth to two years. After that the child's weight and height are kept and drawn as their own lines over time, without the centile bands.",
    },
    {
      title: "It does not work out a dose",
      body: "The weight is recorded and shown on the visit. The dose is typed by the doctor. Curogrid has no dose calculator and never suggests one.",
    },
    {
      title: "The vaccine schedule is one schedule",
      body: "The plan follows the IAP schedule in its own steps. A government UIP schedule, or your own changes to the steps, are not offered yet. You tick what was given and can stop a plan with a reason.",
    },
    {
      title: "It does not print the school certificate",
      body: "School health certificate is a service on the price list, so it can be billed. The certificate itself is written on your own letterhead.",
    },
    {
      title: "It does not admit children",
      body: "Beds, admissions, a NICU record and the discharge summary are not built. Curogrid is for the clinic and the OPD.",
    },
    {
      title: "It does not report to the government",
      body: "Curogrid does not send vaccination or AEFI reports to the health department or the U-WIN portal. Those are filed as you file them today.",
    },
  ],
  faqs: [
    {
      q: "Does Curogrid Paeds have WHO growth charts with centiles?",
      a: "Yes. Weight, length or height and head circumference from each visit are drawn on the WHO charts for the child's sex, from birth to two years, with the 3rd, 15th, 50th, 85th and 97th centile lines. The latest measurement is read out with its centile, such as “74.5 cm, 53rd centile”. It needs the child's date of birth and sex.",
    },
    {
      q: "Does it have a vaccination schedule?",
      a: "Yes. Start the vaccine plan and Curogrid lays out the IAP schedule from the date of birth in 13 steps, from BCG, OPV and Hep B at birth to Tdap and HPV at 10 to 12 years. Tick each step when it is given. The child's file shows how many are done and the next one due, and you can print the vaccination card.",
    },
    {
      q: "Can it remind parents when a vaccine is due?",
      a: "Yes, once you switch it on. Curogrid can send the parent a WhatsApp message the day before the next step falls due. It is off until the clinic turns on “Care plan reminder” in Notifications, because each message costs the clinic. The dashboard also lists every child whose next vaccine is due this week, the late ones first.",
    },
    {
      q: "How are vaccines handled in stock and billing?",
      a: "The visit is billed as a service, “Immunisation, visit charge”, at a starter price of ₹200. The vaccine itself is kept in Stock, because it comes in batches and expires, so each vial has a batch number and an expiry date and the stock list warns you before it runs out or expires.",
    },
    {
      q: "Are the medicines it suggests meant for children?",
      a: "Yes. Paediatrics adds 29 children's medicine names: syrups, drops, suspensions, sachets and nebuliser solutions. They are offered ahead of the general list. Curogrid offers the name only. The dose is always the doctor's to write.",
    },
    {
      q: "Does it calculate a child's dose from the weight?",
      a: "No. The weight is recorded at the visit and shown beside the prescription. Curogrid has no dose calculator and never suggests a dose.",
    },
    {
      q: "Does it record milestones?",
      a: "Yes. The child's first visit has a milestones checklist, from social smile and holding the head to walking and speaking sentences, and a box for head circumference under two years. The review visit records whether the child is better, eating well or still coughing.",
    },
    {
      q: "Can the receptionist give priority to a small baby?",
      a: "Yes. A token can be marked “Baby under 2” at the desk. It is placed ahead of normal tokens, and the tag shows beside the name in the doctor's line.",
    },
    {
      q: "Who signs a consent form for a child?",
      a: "The parent or guardian. The form is read on the screen and signed with a finger, and the person signing is recorded as the patient, a parent or guardian, or a relative. The signed form is kept in the child's file under Consents.",
    },
    {
      q: "Is there a phone app for a children's clinic?",
      a: "Yes, for Android and iPhone. The doctor sees the line, writes the visit and opens a child's growth chart on the phone. Curogrid also runs in a web browser and as a Windows app.",
    },
  ],
};
