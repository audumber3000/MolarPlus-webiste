/**
 * The specialities Curogrid has a landing page for. THE single source
 * of truth: the header menu, the homepage grid, `/specialities`, every
 * `/[speciality]` page, the footer, the sitemap and `llms.txt` all read
 * from this file. Adding a speciality is one entry here.
 *
 * ## Where every fact comes from
 *
 * Nothing below is marketing invention. Each list is copied from the
 * app repo (`~/Developer/curogrid`), as it stood on 11 October 2026:
 *
 * - `services`, `departments`, `consents`
 *     curogrid-backend/domains/onboarding/templates/catalogue.py
 *     (the app writes "Dressing — simple"; the site writes "Dressing,
 *     simple", because the site uses no dashes)
 * - `medicines`, `tests`, `scans`, `procedures`, `doseWords`,
 *   `durationWords`
 *     curogrid-backend/domains/onboarding/templates/packs.py
 *     (general practice has no pack: it uses `STARTER` in
 *     domains/encounter/routes/desk.py and `COMMON` in
 *     domains/orders/routes/orders.py)
 * - `course`
 *     curogrid-app/src/modules/appointments/utils/visitPlans.ts
 * - `fileCard`
 *     curogrid-app/src/modules/patients/utils/overview.ts and
 *     components/record/overview/TreatmentCard.tsx
 * - `diagnoses`
 *     curogrid-backend/domains/terminology/data/icd10_opd_starter.csv
 *     (365 rows). Names are the list's own, with two changes for
 *     reading: a trailing ", unspecified" is dropped and the everyday
 *     word in [brackets] is shown in (brackets).
 *
 * ## What the prose rests on
 *
 * `overview`, `points`, `day`, `notDone` and `faqs` are written by hand,
 * so each claim was checked against a file. The ones that matter most:
 *
 * - The speciality is picked in clinic setup, not at sign-up. Nothing
 *   is applied by default (catalogue.py; setup/Setup.tsx,
 *   setup/Specialty.tsx).
 * - Tests and scans are one tap ON THE VISIT SCREEN
 *   (consult/components/visit/TestPicker.tsx shows lab and radiology
 *   only). Procedures are one tap IN A NEW ORDER
 *   (orders/components/NewOrderDrawer.tsx). Never write "one-tap
 *   procedures on the visit".
 * - Directions are choices in the How often and How to take lists and
 *   durations are suggestions in the For box
 *   (consult/components/visit/MedicineRows.tsx). They are picked, so
 *   say "ready to pick", never "one tap".
 * - A speciality's names come first and the general lists follow
 *   (desk.py `medicines`, orders.py `orders_meta`). Physiotherapy adds
 *   no medicine names; the visit form still has its medicines part.
 * - The visit form is the same for every speciality: `PROFILES` is
 *   empty in domains/encounter/services/encounters.py. So there is no
 *   LMP or EDD field, no audiogram, no body chart, no laser settings.
 * - Priority tokens go ahead of normal ones (queue/models.py
 *   `PRIORITY_ORDER`, queue/services/tokens.py).
 * - The patient's Readings tab draws plain lines with no percentile
 *   curves (patients/components/record/GrowthTab.tsx).
 * - Consent is signed with a finger by the patient, a parent or
 *   guardian, or a relative (patients/components/consents/
 *   GetConsentDialog.tsx, patients/utils/consent.ts).
 * - Files are JPG, PNG, WebP or PDF, 15 MB each (patients/utils/files.ts).
 * - A medicine comes off the shelf count when it is given at the
 *   medicine counter, and that puts it on the patient's bill
 *   (inventory/components/requests/GiveDialog.tsx). A line typed onto
 *   a bill by hand does not touch stock (billing/components/AddLines.tsx).
 * - Plans, logins and storage: curogrid-backend/core/plans.py.
 * - No device or machine connections are offered
 *   (settings/utils/integrations.ts).
 *
 * When the app changes one of those, change it here. A page that
 * promises a procedure the app no longer offers is a broken promise to
 * a doctor on their first day.
 *
 * ## Prices
 *
 * The service prices are the app's starter prices: indicative cash
 * rates for a small Indian city practice. The clinic changes every one.
 * Pages must say so wherever a price is shown.
 *
 * ## URLs
 *
 * `slug` is the page's address at the site root and is costly to change
 * once indexed. American spellings ("pediatric", "gynecology") are in
 * the slugs because that is how they are typed into a search box in
 * India far more often; the page copy uses the Indian spelling as well.
 */

export type Service = { name: string; price: number; minutes: number };

export type Course = {
  /** The switch's own words in the booking drawer. */
  title: string;
  /** What one booking in the course is called: "Session 3 of 6". */
  noun: string;
  count: number;
  everyDays: number;
  minutes?: number;
};

/** One step of the clinic's day. `href` must be a page on this site. */
export type DayStep = { where: string; title: string; body: string; href?: string; linkText?: string };

export type Speciality = {
  slug: string;
  /** The app's template key. */
  key: string;
  /** The name on the app's own speciality picker. */
  appLabel: string;
  /** Short name for menus and cards. */
  name: string;
  /** "skin and hair clinic": used mid-sentence. */
  clinic: string;
  /** Who runs it: "dermatologist". */
  doctor: string;
  /** Who the page is for, with the other spellings and everyday names. */
  madeFor: string;
  /** The words this doctor types into a search box: "pediatric clinic software". Used in the price question. */
  searchTerm: string;
  /** Slug of the blog post written for this speciality, when there is one. */
  guide?: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** The 40 to 60 word plain answer under the headline. */
  lead: string;
  /** One line for the homepage grid and the index. */
  card: string;
  /** What the page is about, in the words this doctor searches with. */
  overview: { title: string; body: ReadonlyArray<string> };
  /** Three things that are true of this speciality and no other. */
  points: ReadonlyArray<{ title: string; body: string }>;
  departments: ReadonlyArray<string>;
  services: ReadonlyArray<Service>;
  medicines: ReadonlyArray<string>;
  tests: ReadonlyArray<string>;
  scans: ReadonlyArray<string>;
  procedures: ReadonlyArray<string>;
  /** How a dose is written in this speciality: choices in the How often and How to take lists. */
  doseWords: ReadonlyArray<string>;
  /** Lengths of treatment this speciality adds to the For box. */
  durationWords: ReadonlyArray<string>;
  course: Course;
  fileCard: { title: string; body: string };
  consents: ReadonlyArray<string>;
  /** Diagnoses this doctor writes most, from the shared ICD-10 starter list. */
  diagnoses: ReadonlyArray<string>;
  /** What that part of the list covers, in a sentence or two. */
  diagnosisNote: string;
  /** One working day, step by step, from behaviour checked in the app. */
  day: ReadonlyArray<DayStep>;
  /** What a doctor of this speciality might assume and Curogrid does not do. */
  notDone: ReadonlyArray<{ title: string; body: string }>;
  faqs: ReadonlyArray<{ q: string; a: string }>;
};

const GENERAL_COURSE: Course = { title: "Book several visits", noun: "visit", count: 3, everyDays: 7 };

/** The number of rows in icd10_opd_starter.csv. Every clinic searches the same list. */
export const DIAGNOSIS_COUNT = 365;

export const SPECIALITIES: ReadonlyArray<Speciality> = [
  {
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
      "Clinic software for general physicians and family doctors in India: tokens for walk-ins, blood pressure over visits, prescriptions, bills. From ₹399 a month.",
    h1: "Clinic management software for general physicians and family doctors",
    lead: "Curogrid is clinic management software for general physicians and family doctors in India. It gives every walk-in a token, keeps each patient's visits, prescriptions, tests and bills in one file, and takes payment by UPI, cash or card. Pick General practice in clinic setup and it adds 16 OPD services and offers 37 common OPD medicine names as you type.",
    card: "A busy OPD: tokens, quick prescriptions, blood pressure over time.",
    overview: {
      title: "Software for a general physician's clinic in India",
      body: [
        "A general practice or family medicine clinic in India runs mostly on walk-ins, short visits and payment at the desk. Curogrid is OPD software for that kind of day, the software for a doctor's clinic where most patients walk in. The desk gives each patient a token, the doctor writes the visit on one screen, the prescription is printed or sent on WhatsApp, and the bill is paid by UPI, cash or card.",
        "It also does the work of an EMR for a general practitioner. Each visit keeps the vitals, complaint, examination, diagnosis, medicines, tests and advice, and the patient's file holds every visit, prescription, test result and bill. General practice has no medicine list of its own. It uses Curogrid's general lists: 37 medicine names, 22 tests, 9 scans and 6 procedures that an OPD orders often.",
      ],
    },
    points: [
      {
        title: "Built for a line that does not stop",
        body: "Most of a family doctor's patients walk in. Each one gets a token at the desk. The doctor sees who is next, how long each person has waited and who has stepped out, and calls the next patient from the computer or the phone.",
      },
      {
        title: "Blood pressure, visit after visit",
        body: "The patient's file opens on a Health card that draws the last five blood pressure readings, with the lower number and the weight beside them. A reading that is creeping up is visible before you ask.",
      },
      {
        title: "The everyday medicines, as you type",
        body: "Start typing and Curogrid offers the names a general physician writes daily, from paracetamol and pantoprazole to metformin and telmisartan. The dose is yours to write. Once you have written a medicine a few times, Curogrid offers it back the way your clinic usually gives it.",
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
        q: "Is Curogrid suitable for a single-doctor clinic?",
        a: "Yes. The Plus plan at ₹399 a month is made for a solo or small clinic. It includes 6 staff logins, so the doctor, the compounder and the receptionist each sign in as themselves.",
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
  },

  {
    slug: "pediatric-clinic-management-software",
    key: "paediatrics",
    appLabel: "Paediatrics",
    name: "Paediatrics",
    clinic: "paediatric clinic",
    doctor: "paediatrician",
    madeFor: "Paediatricians (pediatricians), child specialists and children's clinics",
    searchTerm: "pediatric clinic software",
    guide: "growth-and-vaccination-records-pediatric-clinic",
    metaTitle: "Pediatric Clinic Management Software in India",
    metaDescription:
      "Clinic software for paediatricians in India: a child's weight drawn visit by visit, syrups and drops offered first, vaccination visits. From ₹399 a month.",
    h1: "Clinic management software for paediatric clinics",
    lead: "Curogrid is clinic management software for paediatricians and child specialists in India. Pick Paediatrics in clinic setup and it adds an Immunisation department, ten children's OPD services and 29 children's medicine names, mostly syrups and drops, offered as you type. Each child's file opens on a Growth card that draws the last five weights, with the latest height beside them.",
    card: "Growth tracked visit by visit, syrups and drops, vaccination visits.",
    overview: {
      title: "Software for a paediatric clinic or child specialist in India",
      body: [
        "A children's clinic needs a weight at every visit, medicines written as syrups and drops, a parent who signs for the child, and vaccination visits that are billed. Curogrid's Paediatrics setup is built around those four things. Paediatric and pediatric are the same word in two spellings, and this is the same product under both.",
        "As a pediatric EMR and pediatric OPD software it records each visit's vitals, complaint, examination, diagnosis, medicines, tests and advice, and keeps them in the child's file with every bill. It draws the child's own weight and height over time. It does not plot percentile curves, hold the vaccination schedule or work out a dose from the weight.",
      ],
    },
    points: [
      {
        title: "Growth is the first thing you see",
        body: "A child's file opens on a Growth card: the last five weights as a small chart, with the latest height beside it. You see whether the child is gaining before you read a single note.",
      },
      {
        title: "Syrups and drops come first",
        body: "The names offered first are the ones a paediatrician writes: paracetamol 120 mg/5 ml syrup, zinc syrup, vitamin D3 drops, salbutamol nebuliser solution. “Every 6 hours” and “By mouth with the dropper” are ready to pick beside the dose you type.",
      },
      {
        title: "Babies go ahead in the line",
        body: "The desk marks a token “Baby under 2”. Priority tokens are placed ahead of normal ones, and the tag shows beside the child's name in the doctor's line.",
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
      body: "It draws the last five weights as a small chart, with the latest height beside them.",
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
        where: "Before the doctor",
        title: "Weight and height first",
        body: "The sister writes the child's weight, height and temperature before the doctor sees them. “Weight and height check” is also a starter service at ₹100, for a clinic that charges for it.",
      },
      {
        where: "In the doctor's room",
        title: "The Growth card, then the visit",
        body: "The child's file opens on Growth: the last five weights as a small chart, with the latest height. On the visit screen, under the weight box, is the last weight and the day it was taken.",
        href: "/features/patient-records",
        linkText: "What is in a patient's file",
      },
      {
        where: "Writing the visit",
        title: "Syrups, drops and the dose you write",
        body: "Type the first letters and the children's forms are offered ahead of the adult tablets. You type the dose. “Every 6 hours”, “Every 8 hours”, “By mouth with the dropper” and “In the nose” are in the lists beside it.",
      },
      {
        where: "A vaccination visit",
        title: "The visit is billed, the vial is counted",
        body: "“Vaccination” is ready as a procedure in a new order, and “Immunisation, visit charge” is on the price list at a starter ₹200. The vaccine is kept in Stock with its batch number and expiry date.",
      },
      {
        where: "Before a procedure",
        title: "A parent signs on the screen",
        body: "The parent or guardian reads the consent form on the screen and signs with a finger. If the guardian's name is on the child's record, it is filled in as the person signing.",
      },
    ],
    notDone: [
      {
        title: "It does not draw growth percentile charts",
        body: "Curogrid draws the child's own weight and height as lines over time and works out BMI when both are recorded. It does not plot WHO or IAP percentile curves and does not work out a z-score.",
      },
      {
        title: "It has no vaccination schedule",
        body: "Curogrid does not hold the immunisation schedule, work out which vaccine is due or print a vaccination card. You record what was given and ask the child back on the day you choose.",
      },
      {
        title: "It does not work out a dose",
        body: "The weight is recorded and shown on the visit. The dose is typed by the doctor. Curogrid has no dose calculator.",
      },
      {
        title: "It does not print the school certificate",
        body: "School health certificate is a service on the price list, so it can be billed. The certificate itself is written on your own letterhead.",
      },
      {
        title: "It does not admit children",
        body: "Beds, admissions, a NICU record and the discharge summary are not built. Curogrid is for the clinic and the OPD.",
      },
    ],
    faqs: [
      {
        q: "Does Curogrid track a child's growth?",
        a: "Yes. Weight and height are saved at each visit. The child's file opens on a Growth card that draws the last five weights and shows the latest height. A Readings tab draws weight and height as lines over every visit, with a table you can save as a spreadsheet.",
      },
      {
        q: "Does it have WHO or IAP growth charts with percentiles?",
        a: "No. Curogrid draws the child's own weight and height over time as plain lines. It does not plot percentile curves or work out a z-score, so a percentile still has to be read from your own chart.",
      },
      {
        q: "How are vaccines handled?",
        a: "The visit is billed as a service, “Immunisation, visit charge”, at a starter price of ₹200. The vaccine itself is kept in Stock, because it comes in batches and expires, so each vial has a batch number and an expiry date and the stock list warns you before it runs out or expires.",
      },
      {
        q: "Does it have a vaccination schedule or send vaccine due reminders?",
        a: "No. Curogrid does not hold the immunisation schedule and does not work out which vaccine is due. You record the vaccination visit, then ask the child back on a day you pick or book the next visit yourself.",
      },
      {
        q: "Are the medicines it suggests meant for children?",
        a: "Yes. Choosing Paediatrics adds 29 children's medicine names: syrups, drops, suspensions, sachets and nebuliser solutions. They are offered ahead of the general list. Curogrid offers the name only. The dose is always the doctor's to write.",
      },
      {
        q: "Does it calculate a child's dose from the weight?",
        a: "No. The weight is recorded at the visit and shown beside the prescription. Curogrid has no dose calculator and never suggests a dose.",
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
        q: "Is Curogrid an EMR for paediatricians?",
        a: "It does that work for an OPD. Each visit records vitals, complaint, examination, diagnosis, medicines, tests and advice. The diagnosis search includes croup, bronchiolitis, febrile convulsions, neonatal jaundice and hand, foot and mouth disease by their everyday names.",
      },
      {
        q: "Can I issue a school health certificate from it?",
        a: "You can bill it. School health certificate is one of the ten starter services, at a starter price of ₹300, which you can change. Curogrid does not print the certificate itself.",
      },
    ],
  },

  {
    slug: "gynecology-clinic-management-software",
    key: "obstetrics_gynaecology",
    appLabel: "Obstetrics and gynaecology",
    name: "Gynaecology",
    clinic: "gynaecology clinic",
    doctor: "gynaecologist",
    madeFor: "Gynaecologists (gynecologists), obstetricians, obgyn and women's health clinics",
    searchTerm: "gynecology clinic software",
    guide: "antenatal-visit-schedule-clinic-management",
    metaTitle: "Gynecology Clinic Management Software",
    metaDescription:
      "Clinic software for gynaecologists and obstetricians in India: antenatal visits booked together, scans and antenatal tests in one tap. From ₹399 a month.",
    h1: "Clinic management software for gynaecology and obstetrics clinics",
    lead: "Curogrid is clinic management software for gynaecologists and obstetricians in India. Pick Obstetrics and gynaecology in clinic setup and it adds Obstetrics, Gynaecology and Ultrasound departments, 13 starter services, and antenatal tests and scans that are one tap on the visit. A pregnancy's check-ups are booked together, each shown as “Visit 2 of 4”.",
    card: "Antenatal visits booked as a course, scans and tests in one tap.",
    overview: {
      title: "Software for a gynaecology and obstetrics clinic in India",
      body: [
        "Curogrid's Obstetrics and gynaecology setup is for the gynaecologist's OPD and the women's health clinic: antenatal check-ups, gynaecology consultations, scans, and procedures such as a Pap smear or an IUCD insertion. Whether you search for gynae clinic software, gynecology software or obgyn software, it is this one product, and it covers the token line, appointments, prescriptions and billing in one place.",
        "As an EMR for a gynaecologist (gynecologist) it records each visit's vitals, complaint, examination, diagnosis, medicines, tests and advice, and keeps scan and test results in the patient's file. It has no separate obstetric form: there is no field for the LMP, the expected date of delivery or the weeks of pregnancy, so those are written in the visit notes. Maternity admissions are not built.",
      ],
    },
    points: [
      {
        title: "Antenatal visits, booked together",
        body: "Turn on “Book antenatal visits” while booking and Curogrid books the check-ups in one go, four visits four weeks apart unless you change it. Each one carries its place in the course: “Visit 2 of 4”.",
      },
      {
        title: "The scans and tests of a pregnancy, one tap each",
        body: "Dating scan, NT scan, anomaly scan and growth scan with Doppler are one tap on the visit screen. So are the antenatal profile, OGTT, double marker and quadruple marker. The results come back to the patient's file.",
      },
      {
        title: "A PCPNDT task on your setup list",
        body: "A clinic that picks Obstetrics and gynaecology gets a PCPNDT registration task on its setup checklist, marked as needed, so the registration is not forgotten. Curogrid does not file Form F for you.",
      },
    ],
    departments: ["Obstetrics", "Gynaecology", "Ultrasound"],
    services: [
      { name: "New consultation", price: 600, minutes: 20 },
      { name: "Follow-up consultation", price: 350, minutes: 15 },
      { name: "Antenatal visit", price: 500, minutes: 20 },
      { name: "Antenatal package, full term", price: 12000, minutes: 20 },
      { name: "Obstetric ultrasound", price: 1200, minutes: 30 },
      { name: "Anomaly scan", price: 2500, minutes: 45 },
      { name: "Growth scan", price: 1200, minutes: 30 },
      { name: "Pelvic ultrasound", price: 1000, minutes: 25 },
      { name: "Pap smear", price: 800, minutes: 15 },
      { name: "IUCD insertion", price: 1500, minutes: 30 },
      { name: "IUCD removal", price: 800, minutes: 20 },
      { name: "Normal delivery", price: 25000, minutes: 20 },
      { name: "Caesarean section", price: 55000, minutes: 20 },
    ],
    medicines: [
      "Folic acid 5 mg tablet", "Iron + Folic acid tablet", "Calcium + Vitamin D3 tablet",
      "Doxylamine + Pyridoxine tablet", "Progesterone 200 mg capsule", "Dydrogesterone 10 mg tablet",
      "Tranexamic acid 500 mg tablet", "Mefenamic acid 500 mg tablet", "Norethisterone 5 mg tablet",
      "Medroxyprogesterone 10 mg tablet", "Combined oral contraceptive pill", "Levonorgestrel 1.5 mg tablet",
      "Clotrimazole 100 mg vaginal pessary", "Metronidazole 400 mg tablet", "Fluconazole 150 mg tablet",
      "Nitrofurantoin 100 mg capsule", "Letrozole 2.5 mg tablet", "Clomiphene 50 mg tablet",
      "Metformin 500 mg tablet", "Labetalol 100 mg tablet", "Nifedipine 10 mg tablet",
      "Methyldopa 250 mg tablet", "Aspirin 75 mg tablet", "Cabergoline 0.5 mg tablet", "Anti-D injection",
      "Protein powder",
    ],
    tests: [
      "Antenatal profile (Hb, blood group, HIV, HBsAg, VDRL)", "Urine pregnancy test", "Beta hCG",
      "OGTT (75 g)", "Urine culture", "Pap smear", "Double marker", "Quadruple marker",
      "Hormone profile (LH, FSH, prolactin)", "AMH",
    ],
    scans: [
      "USG obstetric (dating)", "NT scan", "Anomaly scan", "Growth scan with Doppler", "Follicular study",
    ],
    procedures: ["IUCD insertion", "IUCD removal", "Pap smear", "NST (non-stress test)"],
    doseWords: ["In the vagina at bedtime"],
    durationWords: [],
    course: { title: "Book antenatal visits", noun: "visit", count: 4, everyDays: 28 },
    fileCard: {
      title: "Visits and care",
      body: "It shows the antenatal visits booked and done, such as “2 of 4 done”, and when the next one is. Under that are the last five blood pressure readings, with the weight beside them.",
    },
    consents: [
      "Examination and treatment plan", "Procedure or operation", "Sedation or general anaesthesia", "Admission",
    ],
    diagnoses: [
      "Pregnancy confirmed", "Supervision of normal first pregnancy", "Supervision of high-risk pregnancy",
      "Diabetes mellitus arising in pregnancy",
      "Gestational (pregnancy-induced) hypertension without significant proteinuria", "Pre-eclampsia",
      "Anaemia complicating pregnancy, childbirth and the puerperium", "Mild hyperemesis gravidarum",
      "Threatened abortion", "Routine postpartum follow-up", "Polycystic ovarian syndrome (PCOS)",
      "Leiomyoma of uterus (fibroid)", "Endometriosis", "Dysmenorrhoea",
      "Excessive and frequent menstruation with irregular cycle", "Candidiasis of vulva and vagina",
      "Female pelvic inflammatory disease (PID)", "Menopausal and female climacteric states",
      "Female infertility", "General counselling and advice on contraception",
    ],
    diagnosisNote:
      "For obstetrics the list covers normal and high-risk pregnancy, diabetes and high blood pressure in pregnancy, pre-eclampsia, anaemia and postpartum follow-up. For gynaecology it covers PCOS, fibroids, endometriosis, period problems, vaginal infections, menopause, infertility and contraception advice.",
    day: [
      {
        where: "At the first antenatal visit",
        title: "Book the check-ups together",
        body: "In the booking drawer, turn on “Book antenatal visits”. Curogrid books four visits, four weeks apart, at the same time of day. Change the number or the gap before you save. A date that clashes or falls on the doctor's leave is skipped and listed.",
        href: "/features/appointments",
        linkText: "How appointments work",
      },
      {
        where: "At the desk",
        title: "A pregnant patient goes ahead",
        body: "The receptionist gives a token and marks it “Pregnant”. Priority tokens are placed ahead of normal ones, and the tag shows beside the name in the doctor's line.",
      },
      {
        where: "Before the doctor",
        title: "Weight and blood pressure",
        body: "The sister writes the weight and blood pressure before the patient goes in. The file's Visits and care card then draws the last five blood pressure readings, with the weight beside them.",
      },
      {
        where: "Writing the visit",
        title: "Antenatal tests and scans, one tap each",
        body: "The antenatal profile, OGTT (75 g), double marker and quadruple marker are one tap. So are the dating scan, NT scan, anomaly scan and growth scan with Doppler. They are ordered when the visit is finished.",
      },
      {
        where: "When a report comes back",
        title: "Results in the file",
        body: "The result is typed against the order and the report is added as a PDF or a photo. On the next visit the doctor sees the tests from the last three months, with what is still not back.",
        href: "/features/patient-records",
        linkText: "What is in a patient's file",
      },
      {
        where: "For a procedure",
        title: "Consent, then the bill",
        body: "Before an IUCD insertion the patient reads “Procedure or operation” on the screen and signs with a finger. The desk bills the service from the price list, where it starts at ₹1,500 until you change it.",
      },
    ],
    notDone: [
      {
        title: "It does not file Form F",
        body: "Curogrid puts a PCPNDT registration task on the setup checklist. It does not generate, keep or submit Form F, and it is not a PCPNDT register.",
      },
      {
        title: "It has no LMP or due date calculator",
        body: "There is no field for the last menstrual period, the expected date of delivery or the weeks of pregnancy. Write them in the visit notes.",
      },
      {
        title: "It does not connect to the ultrasound machine",
        body: "A scan is ordered and billed in Curogrid. The report is typed as the result or added to the patient's file as a PDF or a photo.",
      },
      {
        title: "It does not admit patients",
        body: "Normal delivery and Caesarean section are services you can bill. Admission, beds, a labour record and the discharge summary are not built.",
      },
    ],
    faqs: [
      {
        q: "Can I book all of a patient's antenatal visits at once?",
        a: "Yes. In the booking drawer, turn on “Book antenatal visits”. Curogrid books the visits together, four visits four weeks apart unless you change it, and labels each one, for example “Visit 2 of 4”.",
      },
      {
        q: "Does Curogrid handle PCPNDT paperwork?",
        a: "Only a reminder. A clinic that chooses Obstetrics and gynaecology gets a PCPNDT registration task on its setup checklist, so the registration is not missed. Curogrid does not generate or submit Form F and is not a PCPNDT register.",
      },
      {
        q: "Does it calculate the expected date of delivery from the LMP?",
        a: "No. Curogrid has no field for the LMP, the EDD or the weeks of pregnancy and does not calculate them. The visit form is the same for every speciality, so these are written in the complaint or examination notes.",
      },
      {
        q: "Can it manage a maternity home with admitted patients?",
        a: "Not yet. Curogrid today is for the clinic and OPD: appointments, visits, scans, prescriptions and bills. Admitting a patient, beds and the discharge summary are not built. You can bill a delivery as a service.",
      },
      {
        q: "Can I order scans and see the reports in the patient's file?",
        a: "Yes. Dating, NT, anomaly and growth scans and a follicular study are one tap on the visit. The order and its result sit under Tests and scans in the patient's file, and the report can be added under Files as a PDF or a photo.",
      },
      {
        q: "Can I bill an antenatal package or a delivery?",
        a: "Yes. “Antenatal package, full term”, “Normal delivery” and “Caesarean section” are starter services, at starter prices of ₹12,000, ₹25,000 and ₹55,000. They are only a starting point. Set your own fee for each.",
      },
      {
        q: "Does it suit an infertility or IVF clinic?",
        a: "Partly. Follicular study, AMH and a hormone profile are ready to order, and letrozole and clomiphene are in the medicine names. Curogrid has no IVF cycle chart or embryology record.",
      },
      {
        q: "Who can see a patient's record?",
        a: "Only the staff you allow. Each person has their own login and a role, and you decide what each role can open. A receptionist who may not read clinical notes does not see the visits. The record is not visible to other clinics.",
      },
      {
        q: "Is Curogrid an EMR for gynaecologists?",
        a: "It does that work for an OPD. Each visit records vitals, complaint, examination, diagnosis, medicines, tests and advice. The diagnosis search includes PCOS, fibroid, PID, pre-eclampsia and diabetes arising in pregnancy. There is no separate obstetric or partograph form.",
      },
      {
        q: "Is there a phone app for the doctor?",
        a: "Yes, for Android and iPhone. The doctor sees the line, calls the next patient, writes the visit and opens a patient's file, where the Visits and care card shows the antenatal visits done and the next one booked.",
      },
    ],
  },

  {
    slug: "dermatology-clinic-management-software",
    key: "dermatology",
    appLabel: "Dermatology",
    name: "Skin and hair",
    clinic: "skin and hair clinic",
    doctor: "dermatologist",
    madeFor: "Dermatologists, skin specialists, and skin, hair and aesthetic clinics",
    searchTerm: "skin clinic software",
    guide: "laser-peel-session-packages-skin-clinic",
    metaTitle: "Dermatology & Skin Clinic Management Software",
    metaDescription:
      "Skin clinic software for dermatologists in India: laser and peel sessions booked as a course, 42 skin medicines, photo consent. From ₹399 a month.",
    h1: "Clinic management software for skin and hair clinics",
    lead: "Curogrid is clinic management software for dermatologists and skin and hair clinics in India. Pick Dermatology in clinic setup and it adds a Procedure Room department, ten starter services from dermoscopy to chemical peels, and 42 skin and hair medicine names offered as you type. Laser, peel and PRP sessions are booked as a course, each shown as “Session 2 of 4”.",
    card: "Laser and peel sessions as a course, skin medicines, photo consent.",
    overview: {
      title: "Software for a dermatology, skin and hair clinic in India",
      body: [
        "A skin doctor's clinic is part consultation and part procedure room, and so is an aesthetic or cosmetic clinic run by a dermatologist. Curogrid's Dermatology setup covers both: consultations with topical and oral prescriptions, and courses of chemical peel, laser and PRP sessions that are booked together. As skin clinic management software it also runs the token line, the appointment book and the billing desk.",
        "As an EMR for a dermatologist it records each visit's complaint, examination, diagnosis, medicines, tests and advice, and keeps clinical photographs in the patient's file with a signed consent. Only the weight box is shown on a skin visit at first, with the other vitals behind “All vitals”. There is no body map and no side-by-side photograph view.",
      ],
    },
    points: [
      {
        title: "A course of sessions, booked once",
        body: "Turn on “Book treatment sessions (laser, peels)” and the whole course is booked together: four sessions four weeks apart, 30 minutes each, unless you change it. Every booking shows its place, such as “Session 2 of 4”.",
      },
      {
        title: "Directions the way a dermatologist writes them",
        body: "“Thin layer on affected area”, “On the scalp”, “Wash off after 5 minutes”, “Alternate nights” and “Twice a week” are ready to pick, so a prescription for a topical reads the way you would say it. “6 weeks”, “2 months” and “3 months” are offered for how long.",
      },
      {
        title: "Consent for photographs is part of the setup",
        body: "Before-and-after photographs are how a skin clinic shows progress, and a clinical photograph is personal data. So the Clinical photographs consent form is included from the first day, signed on screen.",
      },
    ],
    departments: ["Dermatology", "Procedure Room"],
    services: [
      { name: "New consultation", price: 700, minutes: 15 },
      { name: "Follow-up consultation", price: 400, minutes: 10 },
      { name: "Dermoscopy", price: 800, minutes: 15 },
      { name: "Skin biopsy", price: 2500, minutes: 30 },
      { name: "Cryotherapy, per lesion", price: 800, minutes: 15 },
      { name: "Electrocautery, per lesion", price: 1000, minutes: 20 },
      { name: "Chemical peel", price: 2500, minutes: 45 },
      { name: "Intralesional injection", price: 1200, minutes: 15 },
      { name: "Wart removal", price: 1500, minutes: 30 },
      { name: "Patch test", price: 3000, minutes: 30 },
    ],
    medicines: [
      "Isotretinoin 10 mg capsule", "Isotretinoin 20 mg capsule", "Doxycycline 100 mg capsule",
      "Adapalene 0.1% gel", "Adapalene + Benzoyl peroxide gel", "Benzoyl peroxide 2.5% gel",
      "Clindamycin 1% gel", "Tretinoin 0.025% cream", "Azelaic acid 20% cream", "Itraconazole 100 mg capsule",
      "Itraconazole 200 mg capsule", "Terbinafine 250 mg tablet", "Fluconazole 150 mg tablet",
      "Luliconazole 1% cream", "Terbinafine 1% cream", "Ketoconazole 2% cream", "Ketoconazole 2% shampoo",
      "Sertaconazole 2% cream", "Clobetasol 0.05% cream", "Mometasone 0.1% cream", "Hydrocortisone 1% cream",
      "Tacrolimus 0.1% ointment", "Tacrolimus 0.03% ointment", "Fusidic acid 2% cream", "Permethrin 5% cream",
      "Ivermectin 12 mg tablet", "Hydroxyzine 25 mg tablet", "Fexofenadine 180 mg tablet",
      "Bilastine 20 mg tablet", "Acyclovir 800 mg tablet", "Valacyclovir 500 mg tablet",
      "Minoxidil 5% solution", "Minoxidil 2% solution", "Finasteride 1 mg tablet", "Biotin 10 mg tablet",
      "Hydroquinone 2% cream", "Salicylic acid 6% ointment", "Coal tar + Salicylic acid shampoo",
      "Urea 10% cream", "Calamine lotion", "Sunscreen SPF 50", "Moisturising cream",
    ],
    tests: [
      "KOH scraping (fungus)", "Skin biopsy (histopathology)", "Patch test", "Serum ferritin",
      "Hormone profile (LH, FSH, testosterone, prolactin)", "Urine pregnancy test",
    ],
    scans: [],
    procedures: [
      "Chemical peel", "Laser session", "PRP session", "Electrocautery", "Cryotherapy",
      "Intralesional injection", "Wart removal", "Comedone extraction",
    ],
    doseWords: [
      "Once at night", "Twice a day", "Alternate nights", "Twice a week", "Thin layer on affected area",
      "On the face", "On the scalp", "Wash off after 5 minutes", "After bath",
    ],
    durationWords: ["6 weeks", "2 months", "3 months"],
    course: { title: "Book treatment sessions (laser, peels)", noun: "session", count: 4, everyDays: 28, minutes: 30 },
    fileCard: {
      title: "Treatment",
      body: "It shows the course of sessions: how many are done, such as “2 of 4 done”, and when the next one is booked. A missed session that was never rebooked is flagged.",
    },
    consents: [
      "Examination and treatment plan", "Procedure or operation", "Local anaesthetic", "Clinical photographs",
    ],
    diagnoses: [
      "Acne vulgaris", "Chloasma (melasma)", "Postinflammatory hyperpigmentation",
      "Scar conditions and fibrosis of skin (acne scars)", "Hypertrophic scar (keloid)", "Rosacea",
      "Androgenic alopecia (pattern hair loss)", "Alopecia areata", "Telogen effluvium (hair fall)",
      "Seborrhoeic dermatitis (dandruff)", "Tinea corporis", "Tinea cruris", "Pityriasis versicolor", "Scabies",
      "Atopic dermatitis", "Psoriasis", "Vitiligo", "Urticaria", "Lichen planus", "Viral warts",
    ],
    diagnosisNote:
      "For a skin and hair clinic the list covers acne and its scars, melasma and other pigmentation, hair fall and pattern hair loss, the fungal infections, eczema, psoriasis, vitiligo, urticaria and warts. Many carry the everyday word, so typing “melasma” finds chloasma.",
    day: [
      {
        where: "At the first consultation",
        title: "Weight first, the rest when you need it",
        body: "A skin visit shows the weight box only, because some medicines are dosed by weight. The other vitals are behind “All vitals”. The visit records the complaint, examination, diagnosis, medicines, tests and advice.",
      },
      {
        where: "Writing the prescription",
        title: "Topicals in your own words",
        body: "Type a name and the skin and hair medicines are offered first. Pick “Thin layer on affected area”, “On the scalp” or “Alternate nights”, and “6 weeks” or “3 months” for how long. A KOH scraping, a skin biopsy or a patch test is one tap.",
      },
      {
        where: "Planning a course",
        title: "Book the sessions together",
        body: "In the booking drawer, turn on “Book treatment sessions (laser, peels)”. Curogrid books four sessions, four weeks apart, 30 minutes each, at the same time of day. Change the number or the gap before you save.",
        href: "/features/appointments",
        linkText: "How appointments work",
      },
      {
        where: "Before a procedure",
        title: "Two consents, signed with a finger",
        body: "The patient reads “Procedure or operation” and “Clinical photographs” on the screen and signs each with a finger. The wording that was read, the name and the signature are kept in the file under Consents.",
      },
      {
        where: "In the procedure room",
        title: "Photographs in the file",
        body: "Photographs are added to the patient's Files from the phone or the computer, several at once. Each can be a JPG, PNG or WebP up to 15 MB, and opens large with the next and previous a tap away.",
        href: "/features/patient-records",
        linkText: "What is in a patient's file",
      },
      {
        where: "At the desk",
        title: "The session and the products on one bill",
        body: "The peel is billed from the price list. A sunscreen or moisturiser the doctor wrote is given from the shelf at the medicine counter, which takes it off the stock count and puts it on the same patient's bill.",
        href: "/features/billing",
        linkText: "How billing works",
      },
    ],
    notDone: [
      {
        title: "It has no side-by-side before and after view",
        body: "Photographs are kept in the patient's Files and open one at a time. Curogrid does not place two photographs next to each other, mark up a picture or draw on a body map.",
      },
      {
        title: "Laser and PRP have no starter price",
        body: "“Laser session” and “PRP session” are ready to order as procedures, but they are not among the ten starter services. Add them to your price list with your own fee before you bill them.",
      },
      {
        title: "It has no boxes for laser settings",
        body: "There is no separate field for fluence, spot size or number of passes. Write the settings in the visit notes.",
      },
      {
        title: "It does not count a package down",
        body: "A package can be a service on your price list and billed. The count of sessions comes from the course booking, such as “2 of 4 done”, and is not tied to what was paid.",
      },
    ],
    faqs: [
      {
        q: "Can I book a full course of laser or peel sessions in one go?",
        a: "Yes. Turn on “Book treatment sessions (laser, peels)” while booking. Curogrid books the course together, four sessions four weeks apart and 30 minutes each by default, and labels each one, for example “Session 2 of 4”.",
      },
      {
        q: "Does it suit a hair clinic as well as a skin clinic?",
        a: "Yes. The same Dermatology setup covers both. A PRP session is ready to order as a procedure, minoxidil, finasteride and biotin are in the medicine names, and pattern hair loss, alopecia areata and telogen effluvium are in the diagnosis search.",
      },
      {
        q: "Can patients sign a consent form for photographs?",
        a: "Yes. The Clinical photographs consent form is part of the Dermatology setup, along with consent for procedures and local anaesthetic. Forms are read on the screen, signed with a finger and kept in the patient's file under Consents.",
      },
      {
        q: "Can I keep before and after photographs in the patient's record?",
        a: "Yes. The patient's file has a Files section for photographs and PDFs, up to 15 MB each. Storage is 150 GB on the Plus plan and 200 GB on Pro. Curogrid does not show two photographs side by side.",
      },
      {
        q: "Can I bill for products as well as procedures?",
        a: "Yes. Procedures are billed as services from the price list. A product the doctor writes on the prescription, such as a sunscreen, is given from stock at the medicine counter, which lowers the shelf count and adds it to the patient's bill. An item can also be typed onto a bill by hand, and that does not change the stock count.",
      },
      {
        q: "Is laser or PRP on the starter price list?",
        a: "No. “Laser session” and “PRP session” are ready to order as procedures and to book as a course, but the ten starter services stop at chemical peel, cryotherapy, electrocautery and the like. You add laser and PRP to the price list with your own fees.",
      },
      {
        q: "Can I use it for an aesthetic or cosmetic clinic?",
        a: "Yes, for the appointment book, courses of sessions, consent, photographs and billing. Chemical peel, laser session and PRP session are in the procedure names. Curogrid has no fields for laser settings and no membership or package balance.",
      },
      {
        q: "Is Curogrid an EMR for dermatologists?",
        a: "It does that work for an OPD. Each visit records complaint, examination, diagnosis, medicines, tests and advice, and the diagnosis search includes acne vulgaris, melasma, tinea, psoriasis, vitiligo and urticaria. Photographs and signed consents sit in the same file.",
      },
      {
        q: "Does it offer the directions used for creams and lotions?",
        a: "Yes. “Thin layer on affected area”, “On the face”, “On the scalp”, “Wash off after 5 minutes” and “After bath” are in the How to take list, and “Once at night”, “Alternate nights” and “Twice a week” are in the How often list.",
      },
      {
        q: "Can I add photographs from my phone?",
        a: "Yes. Curogrid has a phone app for Android and iPhone, and the web app opens in a phone's browser. A photograph taken on the phone is added to the patient's Files and is kept under the clinic's storage.",
      },
    ],
  },

  {
    slug: "ent-clinic-management-software",
    key: "ent",
    appLabel: "ENT",
    name: "ENT",
    clinic: "ENT clinic",
    doctor: "ENT specialist",
    madeFor: "ENT specialists, ENT surgeons (otolaryngologists) and ear, nose and throat clinics",
    searchTerm: "ENT clinic software",
    guide: "ent-clinic-opd-audiometry-procedures-workflow",
    metaTitle: "ENT Clinic Management Software in India",
    metaDescription:
      "Clinic software for ENT specialists in India: audiometry and endoscopy as ready services, right and left ear directions, 20 ENT medicines. From ₹399 a month.",
    h1: "Clinic management software for ENT clinics",
    lead: "Curogrid is clinic management software for ENT specialists in India. Pick ENT in clinic setup and it adds an Audiology department, ten starter services from ear syringing to nasal endoscopy and pure tone audiometry, and 20 ENT medicine names offered as you type. Directions such as “In the right ear” and “In each nostril” are ready to pick on every prescription.",
    card: "Audiometry and endoscopy as services, ear and nose directions ready to pick.",
    overview: {
      title: "Software for an ear, nose and throat clinic in India",
      body: [
        "An ENT clinic is an OPD with a procedure chair and, often, an audiology room. Curogrid's ENT setup gives each its place: consultations in the ENT department, hearing tests in Audiology, and ear syringing, endoscopy and nasal packing on the price list. As ENT software it also runs the token line, the appointment book and the billing desk.",
        "As an ENT EMR for an ENT surgeon or otolaryngologist it records each visit's vitals, complaint, examination, diagnosis, medicines, tests and advice. The examination is written in your own words. There is no audiogram plot and no link to an endoscope, so an audiometry report or an endoscopy picture is added to the patient's file as a PDF or a photo.",
      ],
    },
    points: [
      {
        title: "Right ear, left ear, each nostril",
        body: "An ENT prescription depends on the side. “In the right ear”, “In the left ear”, “In each nostril”, “Gargle” and “Steam inhalation” are ready to pick in the How to take list, so drops are written with a side.",
      },
      {
        title: "Audiology is its own department",
        body: "Pure tone audiometry and tympanometry are set up under an Audiology department, apart from the ENT OPD, so hearing tests have their own place in the clinic and a starter price each.",
      },
      {
        title: "OPD procedures, ready to order and bill",
        body: "Ear wash, ear suction cleaning, nasal endoscopy, laryngoscopy, foreign body removal and nasal packing are one tap in a new order. Ear syringing, nasal endoscopy, laryngoscopy and nasal packing also have a starter price you can change.",
      },
    ],
    departments: ["ENT", "Audiology"],
    services: [
      { name: "New consultation", price: 600, minutes: 20 },
      { name: "Follow-up consultation", price: 350, minutes: 15 },
      { name: "Ear syringing", price: 700, minutes: 20 },
      { name: "Nasal endoscopy", price: 1500, minutes: 20 },
      { name: "Laryngoscopy", price: 1800, minutes: 25 },
      { name: "Pure tone audiometry", price: 800, minutes: 30 },
      { name: "Tympanometry", price: 800, minutes: 20 },
      { name: "Foreign body removal, ear or nose", price: 1500, minutes: 25 },
      { name: "Nasal packing for epistaxis", price: 2000, minutes: 30 },
      { name: "Antral wash", price: 2500, minutes: 30 },
    ],
    medicines: [
      "Amoxicillin + Clavulanate 625 mg tablet", "Cefuroxime 500 mg tablet",
      "Levocetirizine + Montelukast tablet", "Fexofenadine 120 mg tablet", "Fluticasone nasal spray",
      "Mometasone nasal spray", "Xylometazoline 0.1% nasal drops", "Saline nasal spray",
      "Ciprofloxacin ear drops", "Ofloxacin ear drops", "Clotrimazole ear drops", "Wax-softening ear drops",
      "Betahistine 16 mg tablet", "Cinnarizine 25 mg tablet", "Chlorhexidine mouthwash",
      "Povidone-iodine gargle", "Benzydamine mouthwash", "Pantoprazole + Domperidone capsule",
      "Prednisolone 10 mg tablet", "Steam inhalation capsule",
    ],
    tests: ["Throat swab culture", "Ear swab culture", "Absolute eosinophil count", "Serum IgE"],
    scans: ["X-ray PNS (sinuses)", "X-ray neck lateral", "CT PNS", "CT temporal bone", "USG neck"],
    procedures: [
      "Ear wash (syringing)", "Ear suction cleaning", "Nasal endoscopy", "Laryngoscopy",
      "Pure tone audiometry", "Tympanometry", "Foreign body removal", "Nasal packing",
    ],
    doseWords: ["In each nostril", "In the right ear", "In the left ear", "Gargle", "Steam inhalation"],
    durationWords: [],
    course: GENERAL_COURSE,
    fileCard: {
      title: "Treatment",
      body: "It shows the last five blood pressure readings when blood pressure has been taken, and then the diagnosis and medicines from the latest visit.",
    },
    consents: ["Examination and treatment plan", "Procedure or operation", "Local anaesthetic"],
    diagnoses: [
      "Other chronic suppurative otitis media (CSOM)", "Chronic mucoid otitis media (glue ear)", "Otitis externa",
      "Impacted cerumen", "Perforation of tympanic membrane", "Sensorineural hearing loss, bilateral (nerve deafness)",
      "Tinnitus (ringing in the ear)", "Benign paroxysmal vertigo", "Ménière disease", "Allergic rhinitis",
      "Chronic sinusitis", "Deviated nasal septum (DNS)", "Nasal polyp", "Epistaxis (nose bleed)",
      "Acute tonsillitis", "Chronic tonsillitis", "Hypertrophy of adenoids", "Nodules of vocal cords",
      "Dysphonia (hoarse voice)", "Foreign body in ear",
    ],
    diagnosisNote:
      "For ENT the list covers the ear (CSOM, glue ear, wax, a perforated drum, hearing loss, tinnitus and vertigo), the nose and sinuses (allergic rhinitis, sinusitis, DNS, polyps and nose bleeds) and the throat (tonsils, adenoids, vocal cord nodules and a hoarse voice).",
    day: [
      {
        where: "At the desk",
        title: "A token, and the right room",
        body: "Walk-ins get a token and booked patients are already expected. A hearing test is booked under Audiology and a consultation under ENT, so the two do not share one column of the day.",
        href: "/features/tokens-and-queue",
        linkText: "How tokens and the waiting line work",
      },
      {
        where: "Writing the visit",
        title: "Drops with a side",
        body: "Type a name and the ENT medicines are offered first: ear drops, nasal sprays, gargles and tablets for vertigo. Pick “In the right ear”, “In the left ear” or “In each nostril” from the How to take list. You type the dose.",
      },
      {
        where: "Ordering",
        title: "Swabs and sinus scans, one tap each",
        body: "A throat swab or ear swab culture, an absolute eosinophil count, an X-ray PNS, a CT PNS or a CT temporal bone is one tap on the visit. Each is ordered when the visit is finished.",
      },
      {
        where: "At the procedure chair",
        title: "Endoscopy and ear cleaning",
        body: "Nasal endoscopy, laryngoscopy, ear suction cleaning and foreign body removal are one tap in a new order. For a procedure the patient reads “Procedure or operation” or “Local anaesthetic” on the screen and signs with a finger.",
      },
      {
        where: "In the audiology room",
        title: "The hearing test and its report",
        body: "Pure tone audiometry and tympanometry are ordered, done and billed at a starter ₹800 each. The printed or saved audiogram is added to the patient's Files as a PDF or a photo.",
        href: "/features/patient-records",
        linkText: "What is in a patient's file",
      },
      {
        where: "At the desk again",
        title: "One bill for the visit",
        body: "The consultation, the endoscopy and the hearing test go on one bill from the price list, paid by UPI, cash or card. What is still to pay stays against the patient's name.",
        href: "/features/billing",
        linkText: "How billing works",
      },
    ],
    notDone: [
      {
        title: "It does not draw an audiogram",
        body: "Curogrid has no boxes for hearing thresholds and does not plot them. The audiometer's own report is added to the patient's file as a PDF or a photo.",
      },
      {
        title: "It does not connect to an endoscope or camera",
        body: "Curogrid does not capture pictures or video from a scope. You add the saved pictures to the patient's Files. Videos are not accepted: files are photographs and PDFs only.",
      },
      {
        title: "It has no separate ENT examination form",
        body: "There are no set boxes for otoscopy, tuning fork tests or a throat examination. The examination is written in your own words.",
      },
      {
        title: "It does not admit patients for surgery",
        body: "Admission, beds and the discharge summary are not built. Curogrid is for the clinic, the procedure chair and the OPD.",
      },
    ],
    faqs: [
      {
        q: "Does Curogrid have ENT procedures built in?",
        a: "Yes. Choosing ENT adds eight procedures that are one tap in a new order: ear wash, ear suction cleaning, nasal endoscopy, laryngoscopy, pure tone audiometry, tympanometry, foreign body removal and nasal packing.",
      },
      {
        q: "Can I record which ear the drops are for?",
        a: "Yes. “In the right ear”, “In the left ear” and “In each nostril” are choices in the How to take list on the prescription, along with “Gargle” and “Steam inhalation”.",
      },
      {
        q: "Does it draw an audiogram?",
        a: "No. Pure tone audiometry and tympanometry can be ordered and billed, and you can add the report to the patient's file. Curogrid does not record hearing thresholds or plot the audiogram itself.",
      },
      {
        q: "Is Curogrid ENT endoscopy reporting software?",
        a: "No. Curogrid does not connect to the endoscope, capture pictures or video from it, or generate an endoscopy report. Nasal endoscopy and laryngoscopy are ordered and billed in Curogrid, and the findings are written in the visit.",
      },
      {
        q: "Can I attach endoscopy pictures to a patient's record?",
        a: "Yes. Saved pictures and a report made elsewhere go in the Files section of the patient's file, as JPG, PNG or WebP photographs or PDFs up to 15 MB each. Video files are not accepted.",
      },
      {
        q: "Can an audiologist use it alongside the doctor?",
        a: "Yes. Audiology is set up as its own department, and each person has their own login. The Plus plan includes 6 staff logins and Pro includes 12.",
      },
      {
        q: "Which ENT scans and tests are ready to order?",
        a: "Five scans: X-ray PNS, X-ray neck lateral, CT PNS, CT temporal bone and USG neck. Four tests: throat swab culture, ear swab culture, absolute eosinophil count and serum IgE. Each is one tap on the visit, and any other test can be typed.",
      },
      {
        q: "Is Curogrid an EMR for ENT specialists?",
        a: "It does that work for an OPD. Each visit records vitals, complaint, examination, diagnosis, medicines, tests and advice. The diagnosis search includes CSOM, glue ear, DNS, allergic rhinitis, vertigo and tinnitus by the names an ENT surgeon uses.",
      },
      {
        q: "Does it manage ENT surgery or admissions?",
        a: "No. Curogrid is for the clinic and the OPD. Admitting a patient, beds and the discharge summary are not built. A procedure done in the clinic is ordered, consented and billed.",
      },
      {
        q: "Is there a phone app for an ENT clinic?",
        a: "Yes, for Android and iPhone. The doctor sees the line, calls the next patient and writes the visit, with the same ear and nose directions in the How to take list. It also runs in a web browser and as a Windows app.",
      },
    ],
  },

  {
    slug: "physiotherapy-clinic-management-software",
    key: "physiotherapy",
    appLabel: "Physiotherapy and rehabilitation",
    name: "Physiotherapy",
    clinic: "physiotherapy clinic",
    doctor: "physiotherapist",
    madeFor: "Physiotherapists, physical therapists and rehabilitation clinics",
    searchTerm: "physiotherapy clinic software",
    guide: "physiotherapy-patients-dropping-out-of-sessions",
    metaTitle: "Physiotherapy Clinic Management Software in India",
    metaDescription:
      "Clinic software for physiotherapists in India: book a whole course of sessions at once, see “Session 3 of 6” on every visit, bill packages. From ₹399 a month.",
    h1: "Clinic management software for physiotherapy clinics",
    lead: "Curogrid is clinic management software for physiotherapists and rehabilitation clinics in India. Pick Physiotherapy and rehabilitation in clinic setup and it adds ten starter services, including a 10 session package and home visits, and eleven therapies such as IFT, TENS and traction that are ready to order. A course of sessions is booked at once, each shown as “Session 3 of 6”.",
    card: "A whole course of sessions booked at once, packages and home visits.",
    overview: {
      title: "Software for a physiotherapy and rehabilitation clinic in India",
      body: [
        "A physiotherapy clinic lives on repeat sessions. The patient comes six or ten times, at the same hour, and the questions are always which session this is and whether the last one was missed. Curogrid's Physiotherapy and rehabilitation setup answers both, and as physiotherapy clinic billing software it bills a single session, a package or a home visit.",
        "Each session is recorded as a visit, with the complaint, examination, diagnosis and advice in your own words, and the patient's file opens on the sessions done and the next one booked. The setup adds no medicine names. It has no exercise video library, no assessment template, no body chart and no pain scale: findings and the home programme are written as notes.",
      ],
    },
    points: [
      {
        title: "The whole course in one booking",
        body: "Turn on “Book a course of therapy sessions” and Curogrid books them all together: six sessions, two days apart, 45 minutes each, at the same time of day, unless you change it. Each booking shows “Session 3 of 6”.",
      },
      {
        title: "The file opens on the sessions",
        body: "A physiotherapy patient's file leads with a Sessions card in place of a blood pressure chart: how many sessions are done out of the course and when the next one is booked. A missed session that was never rebooked is flagged.",
      },
      {
        title: "Therapies in place of a medicine list",
        body: "Physiotherapy adds no medicine names of its own. It adds eleven therapies, from exercise therapy and manual therapy to shortwave diathermy, taping and dry needling, that are one tap in a new order, and five X-ray and MRI scans that are one tap on the visit.",
      },
    ],
    departments: ["Physiotherapy", "Rehabilitation"],
    services: [
      { name: "Initial assessment", price: 800, minutes: 45 },
      { name: "Follow-up session", price: 500, minutes: 45 },
      { name: "Manual therapy session", price: 700, minutes: 45 },
      { name: "Electrotherapy session", price: 400, minutes: 30 },
      { name: "Ultrasound therapy", price: 400, minutes: 20 },
      { name: "Traction", price: 500, minutes: 30 },
      { name: "Gait training", price: 700, minutes: 45 },
      { name: "Post-operative rehabilitation session", price: 800, minutes: 45 },
      { name: "10 session package", price: 4500, minutes: 45 },
      { name: "Home visit", price: 1200, minutes: 60 },
    ],
    medicines: [],
    tests: [],
    scans: ["X-ray knee", "X-ray spine (LS)", "X-ray cervical spine", "MRI spine", "MRI knee"],
    procedures: [
      "Exercise therapy", "Manual therapy", "Ultrasound therapy", "IFT", "TENS", "Traction",
      "Shortwave diathermy", "Wax bath", "Gait training", "Taping", "Dry needling",
    ],
    doseWords: [],
    durationWords: [],
    course: { title: "Book a course of therapy sessions", noun: "session", count: 6, everyDays: 2, minutes: 45 },
    fileCard: {
      title: "Sessions",
      body: "It shows how many sessions of the course are done, such as “3 of 6 done”, and when the next one is booked. A missed session that was never rebooked is flagged.",
    },
    consents: ["Examination and treatment plan"],
    diagnoses: [
      "Low back pain", "Sciatica", "Lumbago with sciatica", "Cervicalgia", "Spondylosis",
      "Other specified intervertebral disc displacement (slipped disc)", "Adhesive capsulitis of shoulder",
      "Rotator cuff syndrome", "Gonarthrosis", "Lateral epicondylitis", "Plantar fascial fibromatosis",
      "Carpal tunnel syndrome", "Sprain and strain of ankle", "Stiffness of joint, not elsewhere classified (stiff joint)",
      "Presence of orthopaedic joint implants (joint replacement)", "Bell's palsy (facial palsy)", "Hemiplegia",
      "Sequelae of stroke, not specified as haemorrhage or infarction", "Cerebral palsy", "Other physical therapy",
    ],
    diagnosisNote:
      "For physiotherapy the list covers the back and neck (low back pain, sciatica, cervicalgia, a slipped disc), the shoulder, knee, elbow and foot, sprains and stiff joints, a joint replacement, and the neurological cases of a rehabilitation clinic such as stroke, hemiplegia, facial palsy and cerebral palsy.",
    day: [
      {
        where: "At the first visit",
        title: "The assessment",
        body: "“Initial assessment” is a starter service of 45 minutes at ₹800. The physiotherapist writes the complaint, the examination and the diagnosis, such as low back pain or sciatica, and can order an X-ray or MRI in one tap.",
      },
      {
        where: "At the desk",
        title: "Book the whole course",
        body: "In the booking drawer, turn on “Book a course of therapy sessions”. Curogrid books six sessions, two days apart, 45 minutes each, at the same time of day. Change the number, up to 30, or the gap before you save. A date that clashes or falls on leave is skipped and listed.",
        href: "/features/appointments",
        linkText: "How appointments work",
      },
      {
        where: "Each day",
        title: "Every booking knows its number",
        body: "The appointment book shows each booking with its place in the course, such as “Session 3 of 6”, so the desk does not count by hand.",
      },
      {
        where: "At the session",
        title: "The therapy given",
        body: "IFT, TENS, ultrasound therapy, traction, exercise therapy and the other therapies are one tap in a new order under Procedure. The session's findings and the advice are written on the visit.",
      },
      {
        where: "In the patient's file",
        title: "Done, booked or missed",
        body: "The Sessions card shows “3 of 6 done” and the day the next session is booked. If a session was missed and nothing is booked after it, the card says so. The phone app shows the same card.",
        href: "/features/patient-records",
        linkText: "What is in a patient's file",
      },
      {
        where: "At the desk again",
        title: "A session or a package on the bill",
        body: "A session is billed at its starter ₹500, or the “10 session package” at ₹4,500, until you set your own prices. A “Home visit” is 60 minutes at a starter ₹1,200.",
        href: "/features/billing",
        linkText: "How billing works",
      },
    ],
    notDone: [
      {
        title: "It has no exercise library",
        body: "Curogrid has no exercise videos, pictures or home exercise sheets to send a patient. The home programme is written in the advice.",
      },
      {
        title: "It does not count a package down",
        body: "The 10 session package is a price on the bill. Curogrid does not take one session off a paid package each time. The count of sessions comes from the course booking, such as “3 of 6 done”.",
      },
      {
        title: "It has no assessment template, body chart or pain scale",
        body: "There are no set boxes for a pain score, range of movement or muscle power, and no body diagram to mark. Findings are written in the examination.",
      },
      {
        title: "The medicines part is still on the visit",
        body: "The visit form is the same for every speciality, so it has a medicines part. Physiotherapy adds no medicine names to it, and you can leave it empty.",
      },
    ],
    faqs: [
      {
        q: "Can I book all of a patient's physiotherapy sessions at once?",
        a: "Yes. Turn on “Book a course of therapy sessions” in the booking drawer. Curogrid books six sessions two days apart, 45 minutes each, at the same time of day. You can change the number and the gap before you save.",
      },
      {
        q: "Can I sell a package of sessions?",
        a: "Yes. A “10 session package” is one of the starter services, at a starter price of ₹4,500. You can change the price, or add your own packages, and bill it like any other service. Curogrid does not count sessions down against a paid package.",
      },
      {
        q: "How do I know which session a patient is on?",
        a: "Every booking in a course carries its place, such as “Session 3 of 6”, and the patient's file opens on a Sessions card that shows how many are done, such as “3 of 6 done”, and when the next one is booked.",
      },
      {
        q: "What happens when a patient misses a session?",
        a: "The Sessions card in the patient's file says which session was missed and that it was not rebooked, so the course is not quietly left unfinished. The desk then books the missed session again.",
      },
      {
        q: "Can I record home visits?",
        a: "Yes. “Home visit” is a starter service, set at 60 minutes and a starter price of ₹1,200. It is booked and billed the same way as a session in the clinic.",
      },
      {
        q: "Does it include an exercise library or exercise videos for patients?",
        a: "No. Curogrid records the therapy given at each session and the advice you write. It does not have a built-in library of exercise videos or home exercise sheets.",
      },
      {
        q: "Which therapies are ready to order?",
        a: "Eleven: exercise therapy, manual therapy, ultrasound therapy, IFT, TENS, traction, shortwave diathermy, wax bath, gait training, taping and dry needling. Each is one tap in a new order, and any other therapy can be typed.",
      },
      {
        q: "Does it have physiotherapy assessment templates, a pain scale or a body chart?",
        a: "No. The visit form is the same for every speciality: complaint, examination, diagnosis and advice. A pain score, range of movement and muscle power are written in the examination in your own words.",
      },
      {
        q: "Is Curogrid suitable for a solo physiotherapist?",
        a: "Yes. The Plus plan at ₹399 a month, before GST, is for the whole clinic and includes 6 staff logins. Pro is ₹999 a month. Every clinic starts with 5 days of Pro, free.",
      },
      {
        q: "Is there a phone app for a physiotherapy clinic?",
        a: "Yes, for Android and iPhone. A patient's file on the phone shows the same Sessions card, with the sessions done and the next one booked. Curogrid also runs in a web browser and as a Windows app.",
      },
    ],
  },
];

/**
 * Specialities the app has a template for but the site has no page for
 * yet. Named on the homepage and `/specialities` as supported, without a
 * link. To give one a page, move it into `SPECIALITIES` with its content.
 */
export const ALSO_SUPPORTED = [
  { name: "Eye (ophthalmology)", note: "Eye OPD, refraction, cataract surgery" },
  { name: "Orthopaedics", note: "Fractures, joint pain, sports injuries" },
  { name: "General surgery", note: "Surgical OPD, day-care procedures, dressings" },
  { name: "Diabetes and endocrinology", note: "Diabetes, thyroid and metabolic care" },
] as const;

export function getSpeciality(slug: string) {
  return SPECIALITIES.find((speciality) => speciality.slug === slug);
}

/** "every 2 days", "every week", "every 4 weeks". */
export function gapWords(days: number) {
  if (days % 7 === 0) {
    const weeks = days / 7;
    return weeks === 1 ? "a week apart" : `${weeks} weeks apart`;
  }
  return days === 1 ? "a day apart" : `${days} days apart`;
}

/** "a paediatric clinic", "an ENT clinic". Vowel sound, so "ENT" takes "an". */
export function withArticle(phrase: string) {
  return `${/^([aeiou]|ENT\b)/i.test(phrase) ? "an" : "a"} ${phrase}`;
}

/** "6 sessions, 2 days apart, 45 minutes each". */
export function courseWords(course: Course) {
  return `${course.count} ${course.noun}s, ${gapWords(course.everyDays)}${course.minutes ? `, ${course.minutes} minutes each` : ""}`;
}
