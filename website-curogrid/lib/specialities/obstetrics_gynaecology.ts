import type { Speciality } from "./types";

/**
 * Curogrid Gynae. Re-checked against the app repo on 17 October 2026:
 * profiles/obstetrics_gynaecology/ (template with the PCPNDT task, pack,
 * case_paper, care_plans, registration) and curogrid-app/src/specialties/
 * obstetrics_gynaecology/pregnancy/ (the Pregnancy tab, dated from the LMP
 * asked at registration; the baby's stage pictures never show its sex).
 */

export const OBSTETRICS_GYNAECOLOGY: Speciality = {
  slug: "gynecology-clinic-management-software",
  key: "obstetrics_gynaecology",
  appLabel: "Obstetrics and gynaecology",
  name: "Gynaecology",
  clinic: "gynaecology clinic",
  doctor: "gynaecologist",
  madeFor: "Gynaecologists (gynecologists), obstetricians, obgyn and women's health clinics",
  searchTerm: "gynecology clinic software",
  guide: "antenatal-visit-schedule-clinic-management",
  metaTitle: "Gynecology Clinic Software in India: Curogrid Gynae",
  metaDescription:
    "Curogrid Gynae, software for gynaecologists and obstetricians in India: weeks and due date from the LMP, the baby week by week, antenatal visits and scans laid out to 40 weeks, G P L A. From ₹420 a month.",
  h1: "Curogrid Gynae: software for gynaecology and obstetrics clinics",
  lead: "Curogrid Gynae is clinic software for gynaecologists and obstetricians in India. The last period is asked once at registration, and every pregnancy's file shows the weeks, the due date, the trimester and the baby's stage. The antenatal visits and scans are laid out from the LMP to 40 weeks, and each antenatal check records the fundal height, the baby's heart rate and the urine.",
  card: "Weeks and due date from the LMP, the baby week by week, the antenatal plan to 40 weeks.",
  overview: {
    title: "Software for a gynaecology and obstetrics clinic in India",
    body: [
      "Curogrid Gynae is for the gynaecologist's OPD and the women's health clinic: antenatal check-ups, gynaecology consultations, scans, and procedures such as a Pap smear or an IUCD insertion. Whether you search for gynae clinic software, gynecology software or obgyn software, it is this one product, and it covers the token line, appointments, prescriptions and billing in one place.",
      "The desk asks the last period, the obstetric history (G P L A) and the husband's name once. From the LMP the patient's Pregnancy tab works out the weeks and the due date, and shows the baby's stage for this week with its typical size, a picture the doctor can tap through while explaining. The antenatal plan lays out the visits and scans to 40 weeks, and each antenatal check has its own short form. The baby's sex is never recorded or shown.",
    ],
  },
  points: [
    {
      title: "Weeks and the due date, worked out for you",
      body: "Enter the LMP once at registration. The Pregnancy tab shows “28 weeks 1 day”, the due date, the trimester on a 40 week bar and the G P L A, and lists each visit's blood pressure and weight against the week it was taken in.",
    },
    {
      title: "The baby, week by week",
      body: "Beside the weeks is the baby's stage for this week, with its typical size: “Around 28 weeks, about 37 cm, 1 kg. The eyes open.” Every stage from 4 to 40 weeks is a tap, to show the mother while you talk.",
    },
    {
      title: "The antenatal plan to 40 weeks",
      body: "Start the pregnancy plan and Curogrid lays out 11 steps from the LMP: the dating scan and blood tests at 8 weeks, the NT scan at 12, the anomaly scan at 20, the OGTT at 24 to 28, the growth scan at 32, to the due date at 40. The dashboard lists who is due this week.",
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
    body: "It shows the antenatal plan's steps done and the next one due, such as “Anomaly scan (18 to 22 weeks)”, and the visits booked. The Pregnancy tab beside it holds the weeks, the due date and the baby's stage.",
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
      body: "Curogrid puts a PCPNDT registration task on the setup checklist. It does not generate, keep or submit Form F, and it is not a PCPNDT register. Keep your Form F and scan records as the Act requires.",
    },
    {
      title: "It does not connect to the ultrasound machine",
      body: "A scan is ordered and billed in Curogrid. The report is typed as the result or added to the patient's file as a PDF or a photo.",
    },
    {
      title: "It does not admit patients",
      body: "Normal delivery and Caesarean section are services you can bill. Admission, beds, a labour record, a partograph and the discharge summary are not built.",
    },
    {
      title: "No IVF cycle record",
      body: "Follicular study, AMH and a hormone profile are ready to order, and letrozole and clomiphene are in the medicine names. There is no IVF cycle chart or embryology record.",
    },
    {
      title: "The due date comes from the LMP only",
      body: "The weeks and the due date are worked out from the last period asked at registration. A due date corrected by the dating scan is written in the notes.",
    },
  ],
  faqs: [
    {
      q: "Does Curogrid Gynae work out the weeks of pregnancy and the due date?",
      a: "Yes. The desk enters the last period once at registration. The patient's Pregnancy tab then shows the weeks and days today, the due date, the trimester on a 40 week bar and the G P L A, and lists each visit's blood pressure and weight with the week it was taken in.",
    },
    {
      q: "Does it lay out the antenatal visits and scans?",
      a: "Yes. Start the pregnancy plan and Curogrid lays out 11 steps from the LMP: 8 weeks (first visit, dating scan, blood tests), 12 weeks (NT scan, Td 1), 16 weeks (Td 2), 20 weeks (anomaly scan), 24 weeks (OGTT), 28 weeks (Hb), 32 weeks (growth scan), 34, 36 (plan the delivery), 38, and the due date at 40. Tick each step when it is done, and print the pregnancy card.",
    },
    {
      q: "What does an antenatal check record?",
      a: "The weeks of pregnancy, fundal height in centimetres, the baby's heart rate, how the baby lies (head down, breech, transverse), swelling, urine albumin and sugar, what was given (iron and folic acid, calcium, Td), and notes such as “Danger signs explained”. Weight and blood pressure are in the visit's vitals.",
    },
    {
      q: "Can I book all of a patient's antenatal visits at once?",
      a: "Yes. In the booking drawer, turn on “Book antenatal visits”. Curogrid books the visits together, four visits four weeks apart unless you change it, and labels each one, for example “Visit 2 of 4”.",
    },
    {
      q: "Does Curogrid handle PCPNDT paperwork?",
      a: "Only a reminder. A clinic that chooses Obstetrics and gynaecology gets a PCPNDT registration task on its setup checklist, so the registration is not missed. Curogrid does not generate or submit Form F and is not a PCPNDT register. The baby's sex is never recorded, and the stage pictures never show it.",
    },
    {
      q: "Can it remind a patient of her next antenatal visit?",
      a: "Yes. Every appointment gets a reminder before it on WhatsApp and by email. Switch on “Care plan reminder” in Notifications and the patient is also messaged the day before the next step of her pregnancy plan, such as the anomaly scan.",
    },
    {
      q: "Can it manage a maternity home with admitted patients?",
      a: "Not yet. Curogrid today is for the clinic and OPD: appointments, visits, scans, prescriptions and bills. Admitting a patient, beds and the discharge summary are not built. You can bill a delivery as a service.",
    },
    {
      q: "Can I bill an antenatal package or a delivery?",
      a: "Yes. “Antenatal package, full term”, “Normal delivery” and “Caesarean section” are starter services, at starter prices of ₹12,000, ₹25,000 and ₹55,000. They are only a starting point. Set your own fee for each.",
    },
    {
      q: "Who can see a patient's record?",
      a: "Only the staff you allow. Each person has their own login and a role, and you decide what each role can open. A receptionist who may not read clinical notes does not see the visits. The record is not visible to other clinics.",
    },
    {
      q: "Is there a phone app for the doctor?",
      a: "Yes, for Android and iPhone. The doctor sees the line, writes the visit and opens a patient's Pregnancy tab, with the weeks, the due date and the baby's stage, on the phone.",
    },
  ],
};
