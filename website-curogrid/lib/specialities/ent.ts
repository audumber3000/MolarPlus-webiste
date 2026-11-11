import type { Speciality } from "./types";
import { GENERAL_COURSE } from "./types";

/**
 * Curogrid ENT. Re-checked against the app repo on 17 October 2026:
 * profiles/ent/ (template, pack, case_paper with each ear side by side and
 * the hearing grid, papers: the hearing test) and curogrid-app/src/
 * specialties/ent/hearing/ (the Hearing tab: audiogram, each ear's
 * 4-frequency average and WHO 2021 grade, the change since the last test).
 */

export const ENT: Speciality = {
  slug: "ent-clinic-management-software",
  key: "ent",
  appLabel: "ENT",
  name: "ENT",
  clinic: "ENT clinic",
  doctor: "ENT specialist",
  madeFor: "ENT specialists, ENT surgeons (otolaryngologists) and ear, nose and throat clinics",
  searchTerm: "ENT clinic software",
  guide: "ent-clinic-opd-audiometry-procedures-workflow",
  metaTitle: "ENT Clinic Software in India: Curogrid ENT",
  metaDescription:
    "Curogrid ENT, software for ENT specialists in India: the audiogram drawn from each visit with each ear's WHO grade, both ears side by side, Rinne and Weber, tonsil grade, the hearing test printed. From ₹420 a month.",
  h1: "Curogrid ENT: software for ear, nose and throat clinics",
  lead: "Curogrid ENT is clinic software for ENT specialists in India. The hearing test is entered on the visit, ear by ear, and drawn as an audiogram, with each ear's average, its WHO grade and the change since the last test. The ENT examination has both ears side by side, Rinne and Weber, the nose and tonsil grade. The hearing test prints for the patient.",
  card: "The audiogram drawn from the visit, each ear's WHO grade, both ears side by side.",
  overview: {
    title: "Software for an ear, nose and throat clinic in India",
    body: [
      "An ENT clinic is an OPD with a procedure chair and, often, an audiology room. Curogrid ENT gives each its place: consultations in the ENT department, hearing tests in Audiology, and ear syringing, endoscopy and nasal packing on the price list. As ENT software it also runs the token line, the appointment book and the billing desk.",
      "The ENT visit records each ear side by side: the ear canal, the ear drum and Rinne, with Weber, the nose, the tonsil grade and the neck. The hearing test is entered in decibels from 250 Hz to 8000 Hz for each ear, with tympanometry. The patient's Hearing tab draws it as an audiogram, the right ear in red circles and the left in blue crosses, over the WHO grade bands.",
    ],
  },
  points: [
    {
      title: "The audiogram, drawn from your visit",
      body: "Enter the thresholds on the visit and the Hearing tab draws the audiogram as an audiologist would: frequency across the top, louder further down, right ear O, left ear X. Pick any earlier test from the list to compare.",
    },
    {
      title: "Each ear's grade, and how it changed",
      body: "Each ear gets its average of 500, 1000, 2000 and 4000 Hz and its grade from the WHO World Report on Hearing (2021): “Right ear 40 dB, moderate, 11 dB worse than 16 Oct 2025”.",
    },
    {
      title: "Right ear, left ear, each nostril",
      body: "The examination has both ears side by side, and the prescription knows the side: “In the right ear”, “In the left ear”, “In each nostril”, “Gargle” and “Steam inhalation” are ready to pick.",
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
      title: "It does not connect to the audiometer",
      body: "The thresholds are typed in from the audiometer, ear by ear. Curogrid does not read them from the machine. The hearing test is drawn from what you enter.",
    },
    {
      title: "Air conduction only",
      body: "The hearing grid is air conduction, 250 to 8000 Hz. Bone conduction, masking and speech audiometry are written in the notes, or the audiometer's own report is added to the file.",
    },
    {
      title: "It does not connect to an endoscope or camera",
      body: "Curogrid does not capture pictures or video from a scope. You add the saved pictures to the patient's Files. Videos are not accepted: files are photographs and PDFs only.",
    },
    {
      title: "It does not admit patients for surgery",
      body: "Admission, beds and the discharge summary are not built. Curogrid is for the clinic, the procedure chair and the OPD.",
    },
  ],
  faqs: [
    {
      q: "Does Curogrid ENT draw an audiogram?",
      a: "Yes. Enter the air conduction thresholds for each ear on the visit, from 250 Hz to 8000 Hz. The patient's Hearing tab draws them as an audiogram, right ear as red circles and left ear as blue crosses, over the WHO grade bands from normal to complete. Any earlier test can be picked from the list.",
    },
    {
      q: "Does it grade hearing loss?",
      a: "Yes. Each ear gets its average of 500, 1000, 2000 and 4000 Hz and its grade from the WHO World Report on Hearing (2021), with the change since the test before it, such as “11 dB worse than 16 Oct 2025”.",
    },
    {
      q: "Can I print the hearing test for the patient?",
      a: "Yes. The hearing test prints from the visit on your letterhead: the thresholds for each ear and the tympanometry type, with your name and registration number.",
    },
    {
      q: "What does the ENT examination record?",
      a: "Each ear side by side (ear canal, ear drum, Rinne), Weber, the nose (DNS to either side, enlarged turbinates, polyp, discharge), tonsils graded 1 to 4, the neck nodes, and the hearing test and tympanometry for each ear. A review records progress and the ear drums.",
    },
    {
      q: "Does Curogrid have ENT procedures built in?",
      a: "Yes. ENT adds eight procedures that are one tap in a new order: ear wash, ear suction cleaning, nasal endoscopy, laryngoscopy, pure tone audiometry, tympanometry, foreign body removal and nasal packing.",
    },
    {
      q: "Is Curogrid ENT endoscopy reporting software?",
      a: "No. Curogrid does not connect to the endoscope, capture pictures or video from it, or generate an endoscopy report. Nasal endoscopy and laryngoscopy are ordered and billed in Curogrid, and the findings are written in the visit.",
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
      q: "Does it manage ENT surgery or admissions?",
      a: "No. Curogrid is for the clinic and the OPD. Admitting a patient, beds and the discharge summary are not built. A procedure done in the clinic is ordered, consented and billed.",
    },
    {
      q: "Is there a phone app for an ENT clinic?",
      a: "Yes, for Android and iPhone. The doctor sees the line, writes the visit and opens a patient's Hearing tab on the phone, with the same ear and nose directions on the prescription. It also runs in a web browser and as a Windows app.",
    },
  ],
};
