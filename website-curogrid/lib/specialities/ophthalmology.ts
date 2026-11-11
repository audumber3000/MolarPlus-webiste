import type { Speciality } from "./types";
import { GENERAL_COURSE } from "./types";

/**
 * Curogrid Eye. Every list is copied from the app repo as it stood on
 * 17 October 2026: curogrid-backend/domains/specialty/profiles/
 * ophthalmology/ (template, pack, case_paper, care_plans, papers) and
 * curogrid-app/src/specialties/ophthalmology/eyes/ (the Eyes tab; usual
 * eye pressure 10 to 21 mmHg). No visit plan of its own, so the general
 * "Book several visits".
 */
export const OPHTHALMOLOGY: Speciality = {
  slug: "eye-clinic-management-software",
  key: "ophthalmology",
  appLabel: "Ophthalmology",
  name: "Eye",
  clinic: "eye clinic",
  doctor: "ophthalmologist",
  madeFor: "Ophthalmologists, eye surgeons and eye clinics with an optometrist",
  searchTerm: "eye clinic software",
  metaTitle: "Eye Clinic Software in India: Curogrid Eye",
  metaDescription:
    "Curogrid Eye, software for ophthalmologists and eye clinics in India: vision, glasses and eye pressure for each eye side by side, high pressure flagged, the glasses prescription printed, checks after cataract surgery. From ₹420 a month.",
  h1: "Curogrid Eye: software for eye clinics",
  lead: "Curogrid Eye is clinic software for ophthalmologists and eye clinics in India. The eye visit records each eye side by side: vision, the glasses power, eye pressure, the front of the eye and the retina. The patient's Eyes tab shows each eye's latest readings and flags a pressure above 21. The glasses prescription prints from the visit, and the checks after cataract surgery are laid out from the day of surgery.",
  card: "Each eye side by side, high pressure flagged, the glasses prescription printed.",
  overview: {
    title: "Software for an eye clinic in India",
    body: [
      "An eye clinic is a consultation room, a refraction room and, often, a theatre. Curogrid Eye gives each its place: Ophthalmology, Optometry and an Eye Theatre department, eye tests such as refraction, a pressure check and a dilated fundus examination on the price list, and cataract surgery and a YAG laser capsulotomy ready to bill. It also runs the token line, the appointment book and the billing desk.",
      "The eye visit is laid out in two columns, right eye and left: vision unaided, with glasses, with a pinhole and near; the sphere, cylinder, axis and add; the eye pressure; the lids, conjunctiva, cornea, anterior chamber, pupil and lens; and the disc, macula and vessels. The patient's Eyes tab keeps every visit's readings, newest first.",
    ],
  },
  points: [
    {
      title: "Each eye, side by side",
      body: "Vision, glasses, eye pressure, the front of the eye and the retina are recorded in two columns, right and left, the way an eye doctor writes them. A review after surgery records vision and pressure again in the same columns.",
    },
    {
      title: "A high pressure, flagged",
      body: "The Eyes tab shows each eye's latest vision, pressure and glasses. A pressure above the usual 10 to 21 mmHg is flagged, “24 mmHg, above the usual 10 to 21”, on the eye's card and in the table of visits.",
    },
    {
      title: "The glasses prescription, printed",
      body: "Print the glasses prescription from the visit on your letterhead: the power and the vision for each eye, with a line at the foot: “Have your eyes checked again in a year, or sooner if your sight changes.”",
    },
  ],
  departments: ["Ophthalmology", "Optometry", "Eye Theatre"],
  services: [
    { name: "New consultation", price: 500, minutes: 20 },
    { name: "Follow-up consultation", price: 300, minutes: 15 },
    { name: "Refraction and prescription", price: 400, minutes: 20 },
    { name: "Intraocular pressure check", price: 300, minutes: 10 },
    { name: "Fundus examination", price: 600, minutes: 20 },
    { name: "Slit lamp examination", price: 500, minutes: 15 },
    { name: "Dilated retinal examination", price: 900, minutes: 40 },
    { name: "Cataract surgery, phacoemulsification", price: 28000, minutes: 45 },
    { name: "YAG laser capsulotomy", price: 6000, minutes: 20 },
    { name: "Foreign body removal, cornea", price: 1200, minutes: 20 },
    { name: "Syringing and probing", price: 1000, minutes: 20 },
  ],
  medicines: [
    "Moxifloxacin 0.5% eye drops", "Tobramycin 0.3% eye drops", "Ciprofloxacin eye drops",
    "Carboxymethylcellulose 0.5% eye drops", "Lubricating eye gel", "Olopatadine 0.1% eye drops",
    "Sodium cromoglycate 2% eye drops", "Prednisolone acetate 1% eye drops", "Loteprednol 0.5% eye drops",
    "Fluorometholone 0.1% eye drops", "Nepafenac 0.1% eye drops", "Ketorolac 0.5% eye drops",
    "Timolol 0.5% eye drops", "Brimonidine 0.2% eye drops", "Dorzolamide 2% eye drops",
    "Latanoprost 0.005% eye drops", "Atropine 1% eye drops", "Cyclopentolate 1% eye drops",
    "Homatropine 2% eye drops", "Tropicamide + Phenylephrine eye drops", "Chloramphenicol eye ointment",
    "Acyclovir 3% eye ointment", "Natamycin 5% eye drops", "Acetazolamide 250 mg tablet",
  ],
  tests: [],
  scans: ["OCT (macula)", "Visual field (perimetry)", "Fundus photo", "A-scan biometry", "B-scan", "Corneal topography"],
  procedures: [
    "Refraction", "Eye pressure check", "Dilated fundus examination", "Syringing", "Foreign body removal",
    "Chalazion incision", "YAG laser",
  ],
  doseWords: [
    "Every hour", "Every 2 hours", "4 times a day", "6 times a day", "Once at night",
    "In the right eye", "In the left eye", "In both eyes",
  ],
  durationWords: ["6 weeks"],
  course: GENERAL_COURSE,
  fileCard: {
    title: "Treatment",
    body: "It shows the after-cataract plan when one is running, with the next check due, and the diagnosis and drops the patient is on now. The Eyes tab beside it holds every reading.",
  },
  consents: [
    "Examination and treatment plan", "Procedure or operation", "Local anaesthetic",
    "Sedation or general anaesthesia", "Admission",
  ],
  diagnoses: [
    "Senile cataract", "Cataract", "After-cataract (PCO)", "Primary open-angle glaucoma",
    "Primary angle-closure glaucoma", "Myopia", "Hypermetropia (long sight)", "Astigmatism", "Presbyopia",
    "Mucopurulent conjunctivitis", "Acute atopic conjunctivitis", "Other disorders of lacrimal gland (dry eye)",
    "Pterygium", "Chalazion", "Hordeolum and other deep inflammation of eyelid", "Corneal ulcer", "Keratoconus",
    "Iridocyclitis (uveitis)", "Degeneration of macula and posterior pole (macular degeneration, AMD)",
    "Retinal detachment with retinal break",
    "Type 2 diabetes mellitus with ophthalmic complications (diabetic retinopathy)",
    "Strabismus (squint)", "Amblyopia ex anopsia (lazy eye)", "Other vitreous opacities (floaters)",
  ],
  diagnosisNote:
    "For an eye clinic the list covers cataract and after-cataract, the glaucomas, the refractive errors, conjunctivitis and dry eye, lid and corneal conditions, uveitis, the retina (macular degeneration, detachment, diabetic retinopathy), squint and lazy eye.",
  day: [],
  notDone: [
    {
      title: "It does not connect to eye machines",
      body: "The autorefractor, the tonometer, the OCT and the perimeter are not read by Curogrid. Readings are typed into the visit, and a scan's report is added to the patient's file as a PDF or a photo.",
    },
    {
      title: "No eye drawing",
      body: "There is no diagram of the eye or the fundus to draw on. Findings are written in each eye's column, and a fundus photo is added as a file.",
    },
    {
      title: "It does not run the theatre or admit patients",
      body: "Cataract surgery is a service you book and bill, with its consents. A theatre list, the operation note, beds and the discharge summary are not built.",
    },
    {
      title: "No optical shop",
      body: "The glasses prescription prints, but frames, lenses and spectacle orders are not in Curogrid. An optical counter's sale can be typed onto a bill by hand.",
    },
    {
      title: "It does not work out an IOL power",
      body: "A-scan biometry is ready to order, and its report goes in the file. Curogrid does not calculate the lens power.",
    },
  ],
  faqs: [
    {
      q: "Does Curogrid Eye record each eye separately?",
      a: "Yes. The eye visit has two columns, right and left: vision unaided, with glasses, with a pinhole and near; sphere, cylinder, axis and add; eye pressure; lids, conjunctiva, cornea, anterior chamber, pupil and lens; and disc, macula and vessels.",
    },
    {
      q: "Does it flag a high eye pressure?",
      a: "Yes. The patient's Eyes tab shows each eye's latest pressure and flags one above the usual 10 to 21 mmHg, on the eye's card and in the table of every visit's readings.",
    },
    {
      q: "Can I print a glasses prescription?",
      a: "Yes. The glasses prescription prints from the visit on your letterhead: sphere, cylinder, axis and add for each eye, with the vision, your name and your registration number.",
    },
    {
      q: "Does it track the checks after cataract surgery?",
      a: "Yes. Start the after-cataract plan from the day of surgery and Curogrid lays out three checks: day 1 (eye check, start drops), 1 week (taper drops) and 4 weeks (final check and the glasses prescription). The review form records which day after surgery it is.",
    },
    {
      q: "Can my optometrist use it?",
      a: "Yes. Optometry is set up as its own department, and each person has their own login. The optometrist can enter vision and refraction on the visit before the doctor sees the patient.",
    },
    {
      q: "Can I bill cataract surgery and a YAG laser?",
      a: "Yes. “Cataract surgery, phacoemulsification” and “YAG laser capsulotomy” are starter services, at starter prices of ₹28,000 and ₹6,000. Change them to your own fees.",
    },
    {
      q: "Which eye drops are offered as I type?",
      a: "24 eye medicines, from moxifloxacin and tobramycin to timolol, brimonidine, latanoprost, atropine and the tropicamide and phenylephrine drops for dilation. “In the right eye”, “In the left eye”, “In both eyes” and “Every 2 hours” are ready to pick.",
    },
    {
      q: "Is there a phone app for an eye clinic?",
      a: "Yes, for Android and iPhone. The doctor sees the line, writes the visit and opens a patient's Eyes tab on the phone. Curogrid also runs in a web browser and as a Windows app.",
    },
  ],
};
