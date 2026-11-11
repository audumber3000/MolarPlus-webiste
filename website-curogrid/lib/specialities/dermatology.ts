import type { Speciality } from "./types";

/**
 * Curogrid Derma. Re-checked against the app repo on 17 October 2026:
 * profiles/dermatology/ (template, pack, case_paper, registration,
 * photo_angles) and curogrid-app/src/specialties/core/photos/ (the Photos
 * tab: six standard angles with guide pictures, two dates side by side,
 * nothing taken until the photo consent is signed). There is no body map
 * on a skin visit: "Where" is a list of areas.
 */

export const DERMATOLOGY: Speciality = {
  slug: "dermatology-clinic-management-software",
  key: "dermatology",
  appLabel: "Dermatology",
  name: "Skin and hair",
  clinic: "skin and hair clinic",
  doctor: "dermatologist",
  madeFor: "Dermatologists, skin specialists, and skin, hair and aesthetic clinics",
  searchTerm: "skin clinic software",
  guide: "laser-peel-session-packages-skin-clinic",
  metaTitle: "Dermatology & Skin Clinic Software: Curogrid Derma",
  metaDescription:
    "Curogrid Derma, software for dermatologists and skin and hair clinics in India: before and after photos side by side at standard angles, acne grade, Norwood and Fitzpatrick, laser and peel settings, sessions as a course. From ₹420 a month.",
  h1: "Curogrid Derma: software for skin and hair clinics",
  lead: "Curogrid Derma is clinic software for dermatologists and skin and hair clinics in India. Photos are taken at six standard angles, each with a guide picture, and any two dates are shown side by side. The skin visit has acne grade, Fitzpatrick skin type and the Norwood and Ludwig stages, and each laser, peel or PRP session keeps its settings. Sessions are booked as a course.",
  card: "Before and after photos side by side, acne and hair loss grades, laser and peel settings.",
  overview: {
    title: "Software for a dermatology, skin and hair clinic in India",
    body: [
      "A skin doctor's clinic is part consultation and part procedure room, and so is an aesthetic or cosmetic clinic run by a dermatologist. Curogrid Derma covers both: consultations with topical and oral prescriptions, and courses of chemical peel, laser and PRP sessions that are booked together and recorded with their settings. As skin clinic management software it also runs the token line, the appointment book and the billing desk.",
      "The patient's Photos tab holds six standard angles: the face from the front and each side, the top of the head, the hair parting and a body area. Each shows a guide picture until the first photo is taken, so every photo of an angle is taken the same way, and any two dates of it open side by side. Nothing can be photographed until the patient has signed the Clinical photographs consent.",
    ],
  },
  points: [
    {
      title: "Before and after, side by side",
      body: "Pick an angle and Curogrid shows the first and the latest photo next to each other, with the dates and how many weeks apart they are: “17 Jul 2026, before the first peel” beside “12 Oct 2026, after the 3rd peel”. Pick any other two dates to compare.",
    },
    {
      title: "A skin visit that speaks dermatology",
      body: "The first visit records the concern, where it is, what it looks like (macule, papule, plaque, pustule), itch from 0 to 10, Fitzpatrick skin type, acne grade I to IV, the Norwood or Ludwig stage, what was tried before and the dermoscopy findings.",
    },
    {
      title: "Each session keeps its settings",
      body: "A laser, peel, PRP or microneedling session records what was done, the settings for each area with the passes or minutes, the response since last time and itch. The course is booked together and each booking shows “Session 2 of 4”.",
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
      title: "No body map on a skin visit",
      body: "Where the problem is is picked from a list of areas: face, scalp, neck, chest, back, arms, hands, legs, feet, groin, nails or the whole body. There is no body diagram to mark, and photos cannot be drawn on.",
    },
    {
      title: "Laser and PRP have no starter price",
      body: "“Laser session” and “PRP session” are ready to order as procedures, but they are not among the ten starter services. Add them to your price list with your own fee before you bill them.",
    },
    {
      title: "It does not count a package down",
      body: "A package can be a service on your price list and billed. The count of sessions comes from the course booking, such as “2 of 4 done”, and is not tied to what was paid.",
    },
    {
      title: "Photos stay inside the clinic",
      body: "Photos are served only to signed-in staff. Curogrid does not post them anywhere or make a before and after picture for social media, and it should not: see the rules below on using patients' photos.",
    },
    {
      title: "The angles are set",
      body: "The six angles are Curogrid's own. A 45 degree view of the face and the hairline from the front are not in the list yet; use “Body area” for anything else.",
    },
  ],
  faqs: [
    {
      q: "Can I compare before and after photos side by side?",
      a: "Yes. The patient's Photos tab has six standard angles: face from the front, the left and the right side, the top of the head, the hair parting and a body area. Pick an angle and the first and latest photos open side by side, with their dates and how far apart they are. You can pick any two dates.",
    },
    {
      q: "How does it keep every photo taken the same way?",
      a: "Each angle shows a guide picture, female or male to match the patient, with a line such as “Straight on, eyes level, hair back, even light”. Before a photo is kept it is shown next to its guide, with the date and a short note.",
    },
    {
      q: "Does a patient have to agree before photos are taken?",
      a: "Yes. Nothing can be photographed until the patient has signed the Clinical photographs consent, which is part of the setup along with consent for procedures and local anaesthetic. Forms are read on the screen, signed with a finger and kept in the patient's file.",
    },
    {
      q: "Can I record laser and peel settings?",
      a: "Yes. A session records what was done today (chemical peel, laser, PRP, microneedling, electrocautery, cryotherapy or an intralesional injection) and a settings table with one line per area: the area, the setting, and the passes or minutes.",
    },
    {
      q: "Does it record acne grade and hair loss stage?",
      a: "Yes. The first visit has acne grade I to IV, the Norwood stages 1 to 7 for men and Ludwig I to III for women, Fitzpatrick skin type I to VI, itch from 0 to 10, and dermoscopy findings such as yellow dots or exclamation-mark hairs.",
    },
    {
      q: "Can I book a full course of laser or peel sessions in one go?",
      a: "Yes. Turn on “Book treatment sessions (laser, peels)” while booking. Curogrid books the course together, four sessions four weeks apart and 30 minutes each by default, and labels each one, for example “Session 2 of 4”.",
    },
    {
      q: "Does it suit a hair clinic as well as a skin clinic?",
      a: "Yes. The hair parting and the top of the head are standard photo angles, a PRP session is ready to order, minoxidil, finasteride and biotin are in the medicine names, and pattern hair loss, alopecia areata and telogen effluvium are in the diagnosis search.",
    },
    {
      q: "Can I bill for products as well as procedures?",
      a: "Yes. Procedures are billed as services from the price list. A product the doctor writes on the prescription, such as a sunscreen, is given from stock at the medicine counter, which lowers the shelf count and adds it to the patient's bill.",
    },
    {
      q: "Is laser or PRP on the starter price list?",
      a: "No. “Laser session” and “PRP session” are ready to order as procedures and to book as a course, but the ten starter services stop at chemical peel, cryotherapy, electrocautery and the like. You add laser and PRP to the price list with your own fees.",
    },
    {
      q: "Can I take the photos on a phone or tablet?",
      a: "Yes. On a tablet or the phone app the camera opens; on a computer you pick the file. The photo goes to the patient's Photos tab under its angle.",
    },
  ],
};
