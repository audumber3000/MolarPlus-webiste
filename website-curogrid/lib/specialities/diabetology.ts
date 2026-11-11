import type { Speciality } from "./types";

/**
 * Curogrid Diabetes. Every list is copied from the app repo as it stood on
 * 17 October 2026: curogrid-backend/domains/specialty/profiles/diabetology/
 * (template, pack, case_paper, care_plans: a year of diabetes care, papers:
 * the insulin chart, registration) and curogrid-app/src/specialties/
 * diabetology/control/ (the Sugar control tab; HbA1c target 7%).
 */
export const DIABETOLOGY: Speciality = {
  slug: "diabetes-clinic-management-software",
  key: "diabetology",
  appLabel: "Diabetes and endocrinology",
  name: "Diabetes",
  clinic: "diabetes clinic",
  doctor: "diabetologist",
  madeFor: "Diabetologists, endocrinologists, physicians who run a diabetes clinic, and thyroid clinics",
  searchTerm: "diabetes clinic software",
  metaTitle: "Diabetes Clinic Software in India: Curogrid Diabetes",
  metaDescription:
    "Curogrid Diabetes, software for diabetologists in India: HbA1c over time against the target, home sugars and insulin doses, the yearly eye, foot and kidney checks done or due, an insulin chart printed. From ₹420 a month.",
  h1: "Curogrid Diabetes: software for diabetes clinics",
  lead: "Curogrid Diabetes is clinic software for diabetologists and diabetes and thyroid clinics in India. Each patient's Sugar control tab draws HbA1c over time against the usual 7% target, with the latest home sugars, the insulin doses and low sugar episodes. The yearly eye, foot, kidney, lipid and ECG checks show as done or due, and the insulin chart prints for the patient.",
  card: "HbA1c over time, home sugars and insulin, the yearly checks done or due.",
  overview: {
    title: "Software for a diabetes and endocrine clinic in India",
    body: [
      "A diabetes clinic sees the same patients every three months for years. What matters is the trend: is the HbA1c coming down, are the home sugars steady, is the insulin dose right, and were the eyes, feet and kidneys checked this year. Curogrid Diabetes keeps all of that on one tab, and sets up Diabetology and Diet and Lifestyle departments, HbA1c and foot care on the price list, and reviews three months apart.",
      "The first visit records the condition and how long it is known, whether the patient is on insulin, a table of home sugar readings, low sugar episodes, the insulin doses by time of day, a foot check, which yearly checks were done, and diet and activity. Each review records the sugars, lows and insulin again. HbA1c and the other results come from the tests you order.",
    ],
  },
  points: [
    {
      title: "HbA1c, against the target",
      body: "Every HbA1c result is drawn over time against the usual target of 7%, with the latest read out: “6.9%, at target, 11 Oct 2026”. A fall from 9.4 to 6.9 over a year is a line the patient can see.",
    },
    {
      title: "The yearly checks, done or due",
      body: "Eyes, feet, kidneys (ACR), lipids and ECG are listed with the day each was last done in the past year, or “Due”. The year of diabetes care plan lays out HbA1c every three months and the yearly checks from the start.",
    },
    {
      title: "Home sugars and insulin, in tables",
      body: "The visit has a table of home sugar readings (fasting, after food, bedtime) and a table of insulin by morning, afternoon and night. The latest of each shows on the Sugar control tab, and the insulin chart prints for the patient.",
    },
  ],
  departments: ["Diabetology", "Diet and Lifestyle"],
  services: [
    { name: "New consultation", price: 700, minutes: 30 },
    { name: "Follow-up consultation", price: 400, minutes: 20 },
    { name: "Diabetes review, quarterly", price: 900, minutes: 30 },
    { name: "Blood sugar, fasting and post-prandial", price: 200, minutes: 10 },
    { name: "HbA1c", price: 600, minutes: 5 },
    { name: "Diabetic foot examination", price: 800, minutes: 30 },
    { name: "Diabetic foot dressing", price: 600, minutes: 30 },
    { name: "Insulin initiation and training", price: 1200, minutes: 45 },
    { name: "Dietitian consultation", price: 700, minutes: 45 },
    { name: "Continuous glucose monitoring, fitting", price: 6000, minutes: 30 },
  ],
  medicines: [
    "Metformin 500 mg tablet", "Metformin 1000 mg SR tablet", "Glimepiride 1 mg tablet", "Glimepiride 2 mg tablet",
    "Glimepiride + Metformin tablet", "Gliclazide 60 mg MR tablet", "Sitagliptin 100 mg tablet",
    "Vildagliptin 50 mg tablet", "Teneligliptin 20 mg tablet", "Linagliptin 5 mg tablet", "Dapagliflozin 10 mg tablet",
    "Empagliflozin 10 mg tablet", "Pioglitazone 15 mg tablet", "Voglibose 0.3 mg tablet", "Insulin glargine",
    "Insulin degludec", "Insulin regular (human)", "Insulin NPH", "Premixed insulin 30/70", "Insulin aspart",
    "Semaglutide injection", "Levothyroxine 25 mcg tablet", "Levothyroxine 50 mcg tablet",
    "Levothyroxine 100 mcg tablet", "Carbimazole 10 mg tablet", "Rosuvastatin 10 mg tablet",
    "Atorvastatin 10 mg tablet", "Telmisartan 40 mg tablet", "Aspirin 75 mg tablet", "Pregabalin 75 mg capsule",
    "Methylcobalamin 1500 mcg tablet", "Glucometer strips", "Insulin pen needles",
  ],
  tests: [
    "HbA1c", "Blood sugar fasting", "Blood sugar PP", "Urine microalbumin (ACR)", "Lipid profile", "Serum creatinine",
    "TSH", "Free T4", "C-peptide",
  ],
  scans: ["ECG", "Fundus photo"],
  procedures: ["Foot examination", "Foot dressing", "Insulin teaching", "Diet counselling", "Random sugar (glucometer)"],
  doseWords: ["15 minutes before food", "Under the skin (injection)"],
  durationWords: ["2 months", "3 months"],
  course: { title: "Book reviews", noun: "review", count: 4, everyDays: 91 },
  fileCard: {
    title: "Sugar control",
    body: "It draws HbA1c over time, with the last fasting sugar and its date under it. The Sugar control tab beside it adds the home sugars, the insulin and the yearly checks.",
  },
  consents: ["Examination and treatment plan", "Procedure or operation"],
  diagnoses: [
    "Type 2 diabetes mellitus without complications",
    "Type 2 diabetes mellitus with renal complications (diabetic kidney disease)",
    "Type 2 diabetes mellitus with ophthalmic complications (diabetic retinopathy)",
    "Type 2 diabetes mellitus with neurological complications",
    "Type 2 diabetes mellitus with peripheral circulatory complications (diabetic foot)",
    "Type 1 diabetes mellitus without complications", "Type 1 diabetes mellitus with ketoacidosis",
    "Abnormal glucose tolerance test (prediabetes)", "Diabetes mellitus arising in pregnancy", "Hypoglycaemia",
    "Hypothyroidism", "Thyrotoxicosis", "Autoimmune thyroiditis (Hashimoto)", "Nontoxic goitre",
    "Polycystic ovarian syndrome (PCOS)", "Obesity", "Hyperlipidaemia (high cholesterol)", "Vitamin D deficiency",
    "Deficiency of other specified B group vitamins (vitamin B12 deficiency)", "Chronic kidney disease",
    "Hyperprolactinaemia", "Cushing syndrome",
  ],
  diagnosisNote:
    "For a diabetes and endocrine clinic the list covers type 1 and type 2 diabetes with their eye, kidney, nerve and foot complications, prediabetes, diabetes in pregnancy and low sugar, the thyroid, PCOS, obesity, high cholesterol, vitamin D and B12 deficiency, kidney disease and the other hormone conditions.",
  day: [],
  notDone: [
    {
      title: "It does not read a glucometer or a CGM",
      body: "Home sugars are typed into the visit's table. Curogrid does not connect to a glucometer, an insulin pen or a continuous glucose monitor; a CGM report goes in the patient's file as a PDF.",
    },
    {
      title: "It does not work out an insulin dose",
      body: "The insulin doses are what you write. Curogrid has no dose calculator and never suggests one.",
    },
    {
      title: "No diet plan builder",
      body: "Diet and activity are written on the visit, with ready words such as “Rice reduced” and “Diet chart given”. Curogrid does not build or print a diet chart.",
    },
    {
      title: "The target is the usual one",
      body: "HbA1c is drawn against 7%, the usual target for most adults. A different target for one patient is written in the notes.",
    },
    {
      title: "It does not send sugar readings from the patient's phone",
      body: "There is no patient app. Readings the patient brings on paper or WhatsApp are typed into the visit.",
    },
  ],
  faqs: [
    {
      q: "Does Curogrid Diabetes show HbA1c over time?",
      a: "Yes. Every HbA1c result from the tests you order is drawn over time on the patient's Sugar control tab, against the usual target of 7%, with the latest read out, such as “6.9%, at target”. The file's first card shows the same trend with the last fasting sugar under it.",
    },
    {
      q: "Does it track the yearly eye, foot and kidney checks?",
      a: "Yes. The Sugar control tab lists eyes, feet, kidneys (ACR), lipids and ECG, each with the day it was last done in the past year, or “Due”. Start the year of diabetes care plan and Curogrid lays out HbA1c every three months and the yearly checks.",
    },
    {
      q: "Can I record home sugar readings and insulin doses?",
      a: "Yes. The visit has a table of home sugar readings by day (fasting, after food, bedtime) and a table of insulin by morning, afternoon and night, with low sugar episodes as none, mild or needed help.",
    },
    {
      q: "Can I print an insulin chart?",
      a: "Yes. The insulin chart prints from the visit on your letterhead: each insulin and its units for each time of day, with a line at the foot: “Take the units written for each time. Bring this chart and your sugar readings to every visit.”",
    },
    {
      q: "Can I book a patient's reviews for the year?",
      a: "Yes. Turn on “Book reviews” in the booking drawer. Curogrid books four reviews three months apart unless you change it, each labelled “Review 2 of 4”.",
    },
    {
      q: "Does it suit a thyroid clinic?",
      a: "Yes. Registration asks about the thyroid, TSH and free T4 are one tap to order, levothyroxine and carbimazole are in the medicine names, and hypothyroidism, thyrotoxicosis, Hashimoto's and goitre are in the diagnosis search.",
    },
    {
      q: "Can a dietitian use it?",
      a: "Yes. Diet and Lifestyle is a department of its own, with a dietitian consultation on the price list. Each person has their own login.",
    },
    {
      q: "Is there a phone app for a diabetes clinic?",
      a: "Yes, for Android and iPhone. The doctor sees the line, writes the review and opens a patient's Sugar control tab on the phone. Curogrid also runs in a web browser and as a Windows app.",
    },
  ],
};
