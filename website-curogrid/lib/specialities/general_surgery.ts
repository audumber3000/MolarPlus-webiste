import type { Speciality } from "./types";

/**
 * Curogrid Surgery. Every list is copied from the app repo as it stood on
 * 17 October 2026: curogrid-backend/domains/specialty/profiles/
 * general_surgery/ (template, pack, case_paper, care_plans: after the
 * operation) and curogrid-app/src/specialties/general_surgery/ (record
 * title "After the procedure", the visit plan "Book dressings").
 */
export const GENERAL_SURGERY: Speciality = {
  slug: "surgical-clinic-management-software",
  key: "general_surgery",
  appLabel: "General surgery",
  name: "General surgery",
  clinic: "surgical clinic",
  doctor: "general surgeon",
  madeFor: "General surgeons, surgical clinics and day-care surgery centres",
  searchTerm: "surgical clinic software",
  metaTitle: "Surgical Clinic Software in India: Curogrid Surgery",
  metaDescription:
    "Curogrid Surgery, software for general surgeons in India: the lump, hernia or wound recorded on the first visit, a before-surgery checklist, dressings and stitches out laid out from the day of surgery. From ₹420 a month.",
  h1: "Curogrid Surgery: software for surgical clinics",
  lead: "Curogrid Surgery is clinic software for general surgeons and surgical clinics in India. The first visit records the lump, hernia, piles or wound, with a before-surgery checklist. After the operation, the dressings, the stitches out and the review are laid out from the day of surgery, and each dressing visit records the wound and the stitches.",
  card: "The surgical OPD, a before-surgery checklist, dressings and stitches out laid out.",
  overview: {
    title: "Software for a general surgeon's clinic in India",
    body: [
      "A surgical clinic is an OPD, a dressing room and a day-care theatre. Curogrid Surgery sets up all three as departments, with an abscess drainage, a lipoma excision, a hernia repair and haemorrhoid banding on the price list beside the dressings and suture removal. It also runs the token line, the appointment book and the billing desk.",
      "The surgical visit records the problem and where it is, a table for each lump with its size, how it feels and whether it moves, the findings such as a cough impulse, the per rectal examination, a before-surgery checklist and the plan. After surgery the plan lays out the dressings and the stitches from the day of the operation, and each dressing visit records the day, the wound and the stitches.",
    ],
  },
  points: [
    {
      title: "After the operation, laid out",
      body: "Start the plan on the day of surgery and Curogrid lays out four steps: the first dressing on day 2, a wound check on day 5, the stitches out on day 10 and a review at a month. The file shows “2 of 4 done” and “Next: Day 10, stitches out”.",
    },
    {
      title: "A checklist before surgery",
      body: "Fitness done, tests done, consent signed, fasting explained: four ticks on the first visit, so nothing is missed on the morning of the operation. The pre-operative profile is one tap to order.",
    },
    {
      title: "Every dressing, recorded",
      body: "Each dressing visit records the days after surgery, the wound (clean and healing, red, discharge or gaping) and the stitches (in, removed today or partly removed). Book the dressings together with “Book dressings”.",
    },
  ],
  departments: ["General Surgery", "Day Care Theatre", "Dressing Room"],
  services: [
    { name: "New consultation", price: 600, minutes: 20 },
    { name: "Follow-up consultation", price: 350, minutes: 15 },
    { name: "Pre-operative assessment", price: 800, minutes: 30 },
    { name: "Abscess incision and drainage", price: 3500, minutes: 30 },
    { name: "Lipoma or sebaceous cyst excision", price: 6000, minutes: 45 },
    { name: "Ingrown toenail removal", price: 3000, minutes: 30 },
    { name: "Hernia repair, open", price: 32000, minutes: 60 },
    { name: "Haemorrhoid banding", price: 8000, minutes: 30 },
    { name: "Post-operative dressing", price: 400, minutes: 20 },
    { name: "Suture removal", price: 250, minutes: 10 },
  ],
  medicines: [
    "Cefuroxime 500 mg tablet", "Amoxicillin + Clavulanate 625 mg tablet", "Metronidazole 400 mg tablet",
    "Aceclofenac + Paracetamol tablet", "Diclofenac 50 mg tablet", "Pantoprazole 40 mg tablet",
    "Trypsin + Chymotrypsin tablet", "Lactulose syrup", "Ispaghula husk", "Lignocaine 2% jelly", "Diltiazem 2% gel",
    "Povidone-iodine ointment", "Mupirocin ointment", "Silver sulfadiazine cream", "Tamsulosin 0.4 mg capsule",
    "Hyoscine 10 mg tablet", "Dicyclomine 20 mg tablet", "Ursodeoxycholic acid 300 mg tablet", "Multivitamin tablet",
  ],
  tests: [
    "Pre-operative profile (CBC, sugar, creatinine, HIV, HBsAg)", "Blood group", "PT/INR", "Pus culture",
    "Biopsy (histopathology)", "FNAC",
  ],
  scans: ["USG abdomen", "USG breast", "USG scrotum", "CT abdomen", "X-ray abdomen erect"],
  procedures: ["Dressing", "Suture removal", "Incision and drainage", "Excision under local", "Suturing", "Proctoscopy", "Catheterisation"],
  doseWords: ["Apply inside before passing stool", "Sitz bath after"],
  durationWords: [],
  course: { title: "Book dressings", noun: "dressing", count: 5, everyDays: 2 },
  fileCard: {
    title: "After the procedure",
    body: "It shows the after-surgery plan as a row of dots, such as “2 of 4 done”, with the next step and its date, such as “Day 10, stitches out”, and the diagnosis.",
  },
  consents: [
    "Examination and treatment plan", "Procedure or operation", "Local anaesthetic",
    "Sedation or general anaesthesia", "Admission",
  ],
  diagnoses: [
    "Unilateral or unspecified inguinal hernia, without obstruction or gangrene",
    "Umbilical hernia without obstruction or gangrene",
    "Other and unspecified ventral hernia without obstruction or gangrene", "Haemorrhoids (piles)",
    "Anal fissure", "Anal fistula", "Anal abscess", "Calculus of gallbladder without cholecystitis (gallstones)",
    "Acute appendicitis, other and unspecified", "Cutaneous abscess, furuncle and carbuncle", "Cellulitis",
    "Benign lipomatous neoplasm (lipoma)", "Epidermal cyst", "Trichilemmal cyst", "Ingrowing nail",
    "Varicose veins of lower extremities without ulcer or inflammation", "Hydrocele", "Unspecified lump in breast",
    "Other and unspecified abdominal pain", "Open wound of unspecified body region",
    "Infection following a procedure, not elsewhere classified (wound infection)",
  ],
  diagnosisNote:
    "For a surgical clinic the list covers the hernias, piles, fissure, fistula and anal abscess, gallstones and appendicitis, abscesses and cellulitis, lipomas and cysts, an ingrown nail, varicose veins, a hydrocele, a breast lump, wounds and a wound infection.",
  day: [],
  notDone: [
    {
      title: "It does not run the theatre or admit patients",
      body: "A hernia repair or a day-care procedure is a service you book, consent and bill. A theatre list, the anaesthesia record, the operation note, beds and the discharge summary are not built.",
    },
    {
      title: "No wound photos at set angles",
      body: "Wound photos go in the patient's Files as JPG, PNG or WebP, up to 15 MB each. There is no side-by-side wound view and no drawing on a photo.",
    },
    {
      title: "It does not handle insurance claims",
      body: "Curogrid does not file cashless or reimbursement claims with insurers or PM-JAY. The bill and its payments are on record for the claim you file.",
    },
    {
      title: "The after-surgery plan is one plan",
      body: "The four steps run from the day of surgery to a month. A different schedule is booked with “Book dressings”, and the plan can be stopped with a reason.",
    },
    {
      title: "It does not tell the police",
      body: "An assault, a stab wound or a burn is a medico-legal case. Curogrid keeps the visit's record but does not keep an MLC register or inform the police.",
    },
  ],
  faqs: [
    {
      q: "Does Curogrid Surgery track dressings and stitches after an operation?",
      a: "Yes. Start the after-surgery plan on the day of the operation and Curogrid lays out four steps: day 2 (first dressing), day 5 (wound check), day 10 (stitches out) and one month (review). The patient's file shows what is done and what is next, and you can print the card.",
    },
    {
      q: "What does a dressing visit record?",
      a: "The days after surgery, the wound (clean and healing, red, discharge or gaping), the stitches (in, removed today, partly removed or none) and notes such as “Dressing changed” and “Keep dry”.",
    },
    {
      q: "Is there a checklist before surgery?",
      a: "Yes. The first visit has four ticks: fitness done, tests done, consent signed and fasting explained. The pre-operative profile, blood group and PT/INR are each one tap to order.",
    },
    {
      q: "Can I record a lump properly?",
      a: "Yes. The first visit has a table with one line per lump: where it is, its size in centimetres, how it feels and whether it moves. Findings such as reducible, cough impulse, tender or fluctuant are a tap.",
    },
    {
      q: "Can I book a patient's dressings together?",
      a: "Yes. Turn on “Book dressings” in the booking drawer. Curogrid books five dressings two days apart unless you change it, each labelled “Dressing 2 of 5”.",
    },
    {
      q: "Can I bill a hernia repair or a day-care procedure?",
      a: "Yes. A hernia repair, haemorrhoid banding, lipoma or cyst excision, abscess drainage and ingrown toenail removal are starter services with starter prices you change. Post-operative dressing and suture removal are there too.",
    },
    {
      q: "Can it admit patients?",
      a: "Not yet. Curogrid is for the clinic, the dressing room and the day-care procedure. Beds, admissions, the operation note and the discharge summary are not built.",
    },
    {
      q: "Is there a phone app for a surgeon?",
      a: "Yes, for Android and iPhone. The surgeon sees the line, writes the visit and opens a patient's file with the after-surgery plan on the phone. Curogrid also runs in a web browser and as a Windows app.",
    },
  ],
};
