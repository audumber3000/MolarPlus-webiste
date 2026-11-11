import type { Speciality } from "./types";

export const PHYSIOTHERAPY: Speciality = {
  slug: "physiotherapy-clinic-management-software",
  key: "physiotherapy",
  appLabel: "Physiotherapy and rehabilitation",
  name: "Physiotherapy",
  clinic: "physiotherapy clinic",
  doctor: "physiotherapist",
  madeFor: "Physiotherapists, physical therapists and rehabilitation clinics",
  searchTerm: "physiotherapy clinic software",
  guide: "physiotherapy-patients-dropping-out-of-sessions",
  metaTitle: "Physiotherapy Clinic Software in India: Curogrid Physio",
  metaDescription:
    "Curogrid Physio, software for physiotherapy clinics in India: pain score and body map assessment, home exercises by picture, a whole course of sessions booked at once, home visits on the phone. From ₹420 a month.",
  h1: "Curogrid Physio: software for physiotherapy clinics",
  lead: "Curogrid Physio is clinic software for physiotherapists and rehabilitation clinics in India. The first visit is a physiotherapy assessment, with a pain score, a body map, red flags and range of movement. Home exercises are picked by picture and printed for the patient. A whole course of sessions is booked at once, and home visits run from the phone app.",
  card: "Assessment with a body map, home exercises by picture, courses of sessions and home visits.",
  overview: {
    title: "Software for a physiotherapy and rehabilitation clinic in India",
    body: [
      "A physiotherapy clinic lives on repeat sessions. The patient comes six or ten times, at the same hour, and the questions are always which session this is, whether the pain is easing, and whether the last one was missed. Curogrid Physio is built around that course. Its first visit is a physiotherapy assessment and each session after it has a short note of its own. As physiotherapy clinic billing software it bills a single session, a package or a home visit.",
      "The assessment has the boxes a physiotherapist fills by hand on paper: pain on a 0 to 10 scale, where it hurts on a front and back body map, how it feels and what makes it worse, red flags, range of movement in degrees, muscle grades from 0 to 5, special tests, goals and the plan. Home exercises are picked from a library of 31 by their photograph, each with a dose, and print as the patient's home exercise sheet.",
    ],
  },
  points: [
    {
      title: "An assessment made for physiotherapy",
      body: "The first visit opens on a physiotherapy assessment: pain on a 0 to 10 scale, a front and back body map, red flags to tick, range of movement and muscle strength tables, special tests, goals and the plan. Each session after it records today's pain, what was given and how the patient responded.",
    },
    {
      title: "Home exercises, picked by picture",
      body: "Pick from 31 home exercises by their photograph, in ten groups from balance to stretches, and give each a dose such as “3 × 10”. The picks print as a home exercise sheet with each picture, the dose and how to do it.",
    },
    {
      title: "The whole course in one booking",
      body: "Turn on “Book a course of therapy sessions” and Curogrid books them all together: six sessions, two days apart, 45 minutes each, unless you change it. Each booking shows “Session 3 of 6”, and the patient's file flags a session that was missed and never rebooked.",
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
      where: "At the desk",
      title: "Registration asks the physio questions",
      body: "When a new patient is registered, Curogrid Physio asks two questions a physiotherapy clinic needs: the patient's work (desk job, driver, labourer, homemaker) and the problem area, from the neck to the ankle, after surgery or after a stroke. Who sent them goes in “Referred by”.",
    },
    {
      where: "At the first visit",
      title: "The assessment",
      body: "“Initial assessment” is a starter service of 45 minutes at ₹800. The physiotherapist marks the pain from 0 to 10, taps where it hurts on the body map, picks how it feels and what makes it worse, ticks any red flags, and fills range of movement, muscle strength, special tests, goals and the plan. An X-ray or MRI is one tap.",
    },
    {
      where: "Before the patient leaves",
      title: "Home exercises and the whole course",
      body: "Pick the home exercises by picture, give each a dose, and print the home exercise sheet. Then turn on “Book a course of therapy sessions”: Curogrid books six sessions, two days apart, 45 minutes each, at the same time of day. Change the number, up to 30, or the gap before you save. A date that clashes or falls on leave is skipped and listed.",
      href: "/features/appointments",
      linkText: "How appointments work",
    },
    {
      where: "At each session",
      title: "A short session note",
      body: "Each session has its own short note: pain today on the same 0 to 10 scale, a table of what was given with the minutes and setting (IFT, TENS, ultrasound, traction), the home exercises, how the patient responded, and notes. The appointment book shows each booking as “Session 3 of 6”.",
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
      title: "A session, a package or a home visit on the bill",
      body: "A session is billed at its starter ₹500, or the “10 session package” at ₹4,500, until you set your own prices. A “Home visit” is 60 minutes at a starter ₹1,200. Payment is taken by UPI, cash or card, on the computer or on the phone.",
      href: "/features/billing",
      linkText: "How billing works",
    },
  ],
  notDone: [
    {
      title: "It does not count a package down",
      body: "The 10 session package is a price on the bill. Curogrid does not take one session off a paid package each time. The count of sessions comes from the course booking, such as “3 of 6 done”.",
    },
    {
      title: "The exercise library is Curogrid's, with pictures and no videos",
      body: "The 31 home exercises are photographs with a line on how to do each. There are no exercise videos, and you cannot yet add your own exercises or pictures. An exercise that is not in the library is written in the notes.",
    },
    {
      title: "The home exercise sheet is printed, not sent",
      body: "The home exercise sheet prints from the visit on the computer. Curogrid does not yet send it to the patient on WhatsApp by itself; print it, or save it as a PDF and send it.",
    },
    {
      title: "No questionnaire scores",
      body: "There are no outcome questionnaires such as the Oswestry or neck disability index to fill and score. Pain is scored from 0 to 10 at every session, and anything else is written in the notes.",
    },
    {
      title: "Home visits have no map or travel log",
      body: "A home visit is booked, written and billed like a session. Curogrid does not plan a route, track the therapist's location or add travel time. A travel charge is a line you add to the bill.",
    },
    {
      title: "The medicines part is still on the visit",
      body: "The visit form keeps a medicines part, as every Curogrid clinic's does. Physiotherapy adds no medicine names to it, and you can leave it empty.",
    },
  ],
  faqs: [
    {
      q: "Does Curogrid Physio have a physiotherapy assessment form, a pain scale and a body chart?",
      a: "Yes. The first visit has a physiotherapy assessment: pain on a 0 to 10 scale (VAS), a front and back body map where you tap the painful area, how the pain feels, what makes it worse, red flags, range of movement in degrees, muscle strength from 0 to 5, special tests, goals and the plan. Each later session records pain today, what was given, home exercises and the response.",
    },
    {
      q: "Can I give patients home exercises with pictures?",
      a: "Yes. Pick from 31 exercises by their photograph, in groups such as mobility, posture, strength and stretches, and give each a dose such as “3 × 10” or “Hold 20 s × 3”. They print as a home exercise sheet on your letterhead, with each picture, the dose and how to do it. There are no videos.",
    },
    {
      q: "Can I book all of a patient's physiotherapy sessions at once?",
      a: "Yes. Turn on “Book a course of therapy sessions” in the booking drawer. Curogrid books six sessions two days apart, 45 minutes each, at the same time of day. You can change the number, up to 30, and the gap before you save.",
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
      q: "Can I manage home visits from the same app?",
      a: "Yes. “Home visit” is a starter service, set at 60 minutes and a starter price of ₹1,200. The desk books it in the physiotherapist's diary like any session. At the patient's home the physiotherapist opens the file on the phone app, writes the session with the same assessment and home exercises, and takes the payment by UPI, cash or card. The clinic sees it at once.",
    },
    {
      q: "Can I sell a package of sessions?",
      a: "Yes. A “10 session package” is one of the starter services, at a starter price of ₹4,500. You can change the price, or add your own packages, and bill it like any other service. Curogrid does not count sessions down against a paid package.",
    },
    {
      q: "Which therapies are ready to order?",
      a: "Eleven: exercise therapy, manual therapy, ultrasound therapy, IFT, TENS, traction, shortwave diathermy, wax bath, gait training, taping and dry needling. Each is one tap in a new order, and any other therapy can be typed.",
    },
    {
      q: "Is Curogrid Physio suitable for a solo physiotherapist?",
      a: "Yes. The Plus plan at ₹420 a month, before GST, is for the whole clinic and includes 6 staff logins. Pro is ₹999 a month. Every clinic starts with 5 days of Pro, free.",
    },
    {
      q: "Is there a phone app for a physiotherapy clinic?",
      a: "Yes, for Android and iPhone. The physiotherapist sees the day's sessions, writes the assessment or session note with the body map and home exercises, and takes payment. A patient's file on the phone shows the same Sessions card. Curogrid also runs in a web browser and as a Windows app.",
    },
  ],
};
