import type { Speciality } from "./types";
import { GENERAL_COURSE } from "./types";

/**
 * Curogrid for general practice. Re-checked against the app repo on
 * 17 October 2026: profiles/general_practice/ (template, the Check-up
 * case paper; no pack, so the general lists), the allergy warning
 * (curogrid-app/src/modules/consult/components/visit/AllergyWarning.tsx:
 * a reminder to check, not a stop) and prescription templates
 * (components/visit/Templates.tsx). A general clinic shows the plain
 * Curogrid logo, in the app and on this page.
 */
export const GENERAL_PRACTICE: Speciality = {
  slug: "general-physician-clinic-management-software",
  key: "general_practice",
  appLabel: "General practice",
  name: "General practice",
  clinic: "general practice clinic",
  doctor: "general physician",
  madeFor: "General physicians, general practitioners, family doctors and GP clinics",
  searchTerm: "OPD software for a general physician",
  guide: "managing-heavy-walk-in-opd-family-doctor",
  metaTitle: "Clinic & OPD Software for General Physicians",
  metaDescription:
    "Curogrid for general physicians and family doctors in India: tokens for walk-ins, a check-up in a few taps, a red warning before a medicine the patient is allergic to, prescription templates, bills. From ₹420 a month.",
  h1: "Curogrid for general physicians and family doctors",
  lead: "Curogrid is clinic software for general physicians and family doctors in India. Every walk-in gets a token, the check-up is a few taps, and a red warning appears before you prescribe a medicine the patient is allergic to. Prescriptions you write often are kept as templates, and the bill is paid by UPI, cash or card.",
  card: "A busy OPD: tokens, a quick check-up, an allergy warning, prescription templates.",
  overview: {
    title: "Software for a general physician's clinic in India",
    body: [
      "A general practice or family medicine clinic in India runs mostly on walk-ins, short visits and payment at the desk. Curogrid is OPD software for that kind of day, the software for a doctor's clinic where most patients walk in. The desk gives each patient a token, the doctor writes the visit on one screen, the prescription is printed or sent on WhatsApp, and the bill is paid by UPI, cash or card.",
      "It also does the work of an EMR for a general practitioner. The first visit has a short check-up: since when, known conditions, how the patient looks, and a tick for each system that is normal. Allergies are kept on the patient and shown in red on every visit, and a medicine that clashes with one is flagged before you finish. General practice uses Curogrid's general lists: 37 medicine names, 22 tests, 9 scans and 6 procedures that an OPD orders often.",
    ],
  },
  points: [
    {
      title: "Built for a line that does not stop",
      body: "Most of a family doctor's patients walk in. Each one gets a token at the desk. The doctor sees who is next, how long each person has waited and who has stepped out, and calls the next patient from the computer or the phone.",
    },
    {
      title: "A warning before a medicine the patient is allergic to",
      body: "Allergies are kept on the patient and shown in red on every visit. Write a medicine that matches one and a red line says so: “Check before giving. Allergic to Penicillin: Amoxicillin 500 mg capsule is a penicillin.”",
    },
    {
      title: "The everyday prescriptions, in a tap",
      body: "Start typing and Curogrid offers the names a general physician writes daily, from paracetamol and pantoprazole to metformin and telmisartan. Keep a prescription you write often as a template, such as “Viral fever, adult”, and put it on the next visit in one tap.",
    },
  ],
  departments: ["General Medicine", "Minor Procedures"],
  services: [
    { name: "New consultation", price: 400, minutes: 15 },
    { name: "Follow-up consultation", price: 250, minutes: 10 },
    { name: "Teleconsultation", price: 300, minutes: 10 },
    { name: "Injection administration", price: 150, minutes: 10 },
    { name: "Intravenous infusion", price: 600, minutes: 45 },
    { name: "Dressing, simple", price: 200, minutes: 15 },
    { name: "Dressing, large", price: 400, minutes: 25 },
    { name: "Suturing, minor wound", price: 900, minutes: 30 },
    { name: "Suture removal", price: 200, minutes: 10 },
    { name: "Nebulisation", price: 250, minutes: 20 },
    { name: "ECG", price: 300, minutes: 15 },
    { name: "Blood pressure and vitals check", price: 100, minutes: 5 },
    { name: "Blood sugar, random", price: 100, minutes: 5 },
    { name: "Urine routine", price: 150, minutes: 5 },
    { name: "Medical fitness certificate", price: 500, minutes: 15 },
    { name: "Health check-up, basic package", price: 1500, minutes: 45 },
  ],
  medicines: [
    "Paracetamol 500 mg tablet", "Paracetamol 650 mg tablet", "Paracetamol 250 mg/5 ml syrup",
    "Ibuprofen 400 mg tablet", "Amoxicillin 500 mg capsule", "Amoxicillin + Clavulanate 625 mg tablet",
    "Azithromycin 500 mg tablet", "Azithromycin 200 mg/5 ml syrup", "Cefixime 200 mg tablet",
    "Cetirizine 10 mg tablet", "Levocetirizine 5 mg tablet", "Pantoprazole 40 mg tablet",
    "Omeprazole 20 mg capsule", "Ondansetron 4 mg tablet", "Domperidone 10 mg tablet", "ORS sachet",
    "Zinc 20 mg tablet", "Metformin 500 mg tablet", "Amlodipine 5 mg tablet", "Telmisartan 40 mg tablet",
    "Atorvastatin 10 mg tablet", "Salbutamol inhaler", "Montelukast 10 mg tablet", "Diclofenac gel",
    "Vitamin D3 60,000 IU sachet", "Iron + Folic acid tablet", "Calcium + Vitamin D3 tablet",
    "B-complex tablet", "Chlorpheniramine syrup", "Ambroxol syrup", "Dextromethorphan syrup",
    "Clotrimazole cream", "Mupirocin ointment", "Albendazole 400 mg tablet", "Metronidazole 400 mg tablet",
    "Ciprofloxacin eye drops", "Normal saline nasal drops",
  ],
  tests: [
    "CBC (complete blood count)", "Blood sugar fasting", "Blood sugar PP", "Blood sugar random", "HbA1c",
    "Lipid profile", "LFT (liver function)", "KFT (kidney function)", "Thyroid profile (T3, T4, TSH)", "TSH",
    "Urine routine", "Stool routine", "CRP", "ESR", "Dengue NS1", "Dengue IgM/IgG", "Malaria antigen",
    "Widal", "Vitamin D", "Vitamin B12", "Serum creatinine", "Hb (haemoglobin)",
  ],
  scans: [
    "X-ray chest PA", "USG abdomen", "USG pelvis", "X-ray knee", "X-ray spine (LS)", "ECG", "2D Echo",
    "CT brain", "MRI spine",
  ],
  procedures: ["Dressing", "Nebulisation", "Injection", "Suture removal", "Ear wash", "ECG"],
  doseWords: [],
  durationWords: [],
  course: GENERAL_COURSE,
  fileCard: {
    title: "Health",
    body: "It draws the last five blood pressure readings as a small chart, with the lower reading and the weight beside them.",
  },
  consents: ["Examination and treatment plan", "Procedure or operation", "Local anaesthetic"],
  diagnoses: [
    "Essential (primary) hypertension", "Type 2 diabetes mellitus without complications", "Hypothyroidism",
    "Acute upper respiratory infection", "Fever", "Dengue fever (classical dengue)", "Typhoid fever", "Asthma",
    "Gastritis", "Gastro-oesophageal reflux disease without oesophagitis (GERD, acid reflux)",
    "Urinary tract infection, site not specified", "Iron deficiency anaemia", "Vitamin D deficiency",
    "Hyperlipidaemia (high cholesterol)", "Low back pain", "Migraine",
  ],
  diagnosisNote:
    "For a family doctor the list covers fevers and infections seen in India such as dengue, typhoid, malaria and chikungunya, the long-term conditions of an adult OPD, and common chest, stomach and urinary complaints.",
  day: [
    {
      where: "At the desk",
      title: "A token for each walk-in",
      body: "The receptionist picks the patient, or types a name and mobile number for someone new, and gives a token. Emergency tokens go first. Senior citizen (60+), pregnant, disability and baby under 2 tokens go ahead of normal ones.",
      href: "/features/tokens-and-queue",
      linkText: "How tokens and the waiting line work",
    },
    {
      where: "Before the doctor",
      title: "Vitals, written once",
      body: "The sister or compounder writes weight, temperature, pulse, blood pressure and SpO2 before the patient goes in. The doctor finds them already filled in when the visit opens.",
    },
    {
      where: "In the doctor's room",
      title: "Call next, with the last visit beside you",
      body: "The doctor presses Call next on the computer or on the phone. Beside today's visit are the last visit, with a button to repeat its medicines, and the tests from the last three months, with any result outside the normal range in red.",
    },
    {
      where: "Writing the visit",
      title: "Medicines, tests and the day to come back",
      body: "Medicine names are offered as you type. CBC, HbA1c, a lipid profile, a chest X-ray or an ECG are one tap each and are ordered when the visit is finished. The patient is asked back in 3 days, 5 days, 1 week, 2 weeks, 1 month or on a day you pick.",
    },
    {
      where: "After the visit",
      title: "Prescription and bill",
      body: "The prescription is printed or sent to the patient on WhatsApp. The desk makes the bill from the price list and takes UPI, cash or card.",
      href: "/features/billing",
      linkText: "How billing works",
    },
    {
      where: "At the medicine counter",
      title: "Medicines from your own shelf",
      body: "If the clinic keeps stock and sends prescriptions to the counter, what the doctor wrote appears there. Giving a medicine takes it off the shelf count and puts it on the patient's bill.",
    },
  ],
  notDone: [
    {
      title: "It does not suggest a dose or a diagnosis",
      body: "Curogrid offers medicine names and a diagnosis list to search. The dose, the diagnosis and the decision are the doctor's.",
    },
    {
      title: "It has no video call",
      body: "Teleconsultation is a starter service you can bill at your own fee. The call itself happens on your phone, outside Curogrid.",
    },
    {
      title: "It does not connect to an ECG or lab machine",
      body: "A result is typed against the order, and the report is added to the patient's file as a photo or a PDF.",
    },
    {
      title: "It does not print certificates",
      body: "Medical fitness certificate is a service on the price list, so it can be billed. The certificate itself is written on your own letterhead.",
    },
    {
      title: "It does not admit patients",
      body: "Beds, admissions and the discharge summary are not built. Curogrid is for the clinic and the OPD.",
    },
  ],
  faqs: [
    {
      q: "Does Curogrid warn me about a patient's allergies?",
      a: "Yes. Allergies are typed once and kept on the patient, shown in red on every visit. If a medicine you write matches one, such as amoxicillin for a patient allergic to penicillin, a red warning appears on the prescription. It is a reminder to check, not a block: the decision is yours.",
    },
    {
      q: "Can I save prescriptions I write often?",
      a: "Yes. “Keep these” saves today's medicines under a name, and “Templates” puts a saved one on the visit in a tap. You can still change any line before you finish.",
    },
    {
      q: "Is Curogrid suitable for a single-doctor clinic?",
      a: "Yes. The Plus plan at ₹420 a month is made for a solo or small clinic. It includes 6 staff logins, so the doctor, the compounder and the receptionist each sign in as themselves.",
    },
    {
      q: "My patients do not book. They walk in. Does it still work?",
      a: "Yes. The Today screen is built around walk-ins. The desk gives a token, and the line shows who is next and how long each person has waited. Appointments and walk-ins sit in the same line.",
    },
    {
      q: "Can I write a prescription quickly during a busy OPD?",
      a: "Medicine names are offered as you type, tests and scans are one tap, and the last visit's medicines can be repeated with one button. You can also keep a set of medicines you write together under a name and put it on the next patient's visit.",
    },
    {
      q: "Does it record blood pressure and sugar for long-term patients?",
      a: "Yes. Vitals are saved at each visit. The patient's file draws the last five blood pressure readings, and a Readings tab draws blood pressure, weight, pulse and SpO2 over every visit. Test results such as HbA1c are kept under Tests and scans.",
    },
    {
      q: "Is Curogrid an EMR for general physicians?",
      a: "It does that work. Each visit records vitals, complaint, examination, diagnosis, medicines, tests and advice. The diagnosis is searched by name or ICD-10 code from a list of 365 common OPD diagnoses, or written in your own words. Appointments, tokens and billing are in the same software.",
    },
    {
      q: "Can I use it on my phone?",
      a: "Yes. Curogrid has a phone app for Android and iPhone. The doctor sees the line, presses Call next, writes the visit and opens a patient's file from the phone. It also runs in a web browser and as a Windows app.",
    },
    {
      q: "Does Curogrid suggest medicines or doses?",
      a: "It offers medicine names only. It never suggests a dose. After your clinic has written a medicine a few times, it offers that medicine back with the dose and directions your clinic wrote most often.",
    },
    {
      q: "Does it do video teleconsultation?",
      a: "No. Teleconsultation is one of the 16 starter services, at a starter price of ₹300, so the visit can be recorded and billed. Curogrid has no built-in video call.",
    },
    {
      q: "Can I bring my old patient list into Curogrid?",
      a: "Yes. Upload the Excel or CSV file from your old software. You check every row before anything is saved, and the import can be undone.",
    },
    {
      q: "Can I change the services and prices it starts with?",
      a: "Yes. The 16 starter services and their prices are only a starting point. You rename them, delete the ones you do not offer and set your own fees.",
    },
  ],
};
