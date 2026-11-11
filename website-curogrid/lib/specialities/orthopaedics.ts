import type { Speciality } from "./types";

/**
 * Curogrid Ortho. Every list is copied from the app repo as it stood on
 * 17 October 2026: curogrid-backend/domains/specialty/profiles/
 * orthopaedics/ (template, pack, case_paper with the body map, care_plans:
 * the plaster) and curogrid-app/src/specialties/orthopaedics/ (the visit
 * plan "Book follow-ups (plaster check, review)").
 */
export const ORTHOPAEDICS: Speciality = {
  slug: "orthopedic-clinic-management-software",
  key: "orthopaedics",
  appLabel: "Orthopaedics",
  name: "Orthopaedics",
  clinic: "orthopaedic clinic",
  doctor: "orthopaedic surgeon",
  madeFor: "Orthopaedic surgeons (orthopedic doctors), bone and joint clinics and fracture clinics",
  searchTerm: "orthopedic clinic software",
  metaTitle: "Orthopedic Clinic Software in India: Curogrid Ortho",
  metaDescription:
    "Curogrid Ortho, software for orthopaedic surgeons in India: the injury marked on a body map, pain score, nerves and pulses checked, the plaster's checks laid out to 6 weeks, physiotherapy in the same clinic. From ₹420 a month.",
  h1: "Curogrid Ortho: software for orthopaedic clinics",
  lead: "Curogrid Ortho is clinic software for orthopaedic surgeons and bone and joint clinics in India. The first visit records how the injury happened, marks it on a front and back body map, scores the pain, and checks the pulses, feeling and movement. A plaster's checks are laid out from the day it went on, to the day it comes off at 6 weeks, and physiotherapy runs in the same clinic.",
  card: "The injury on a body map, the plaster's checks to 6 weeks, physiotherapy alongside.",
  overview: {
    title: "Software for an orthopaedic clinic in India",
    body: [
      "An orthopaedic clinic is an OPD with a plaster room, and often a physiotherapy room beside it. Curogrid Ortho sets up all three: Orthopaedics, Plaster Room and Physiotherapy departments, plaster casts, a closed reduction and a joint injection on the price list, and physiotherapy sessions and a 10 session package. It also runs the token line, the appointment book and the billing desk.",
      "The injury visit asks how it happened, marks where on a body map with right and left as the patient's own, scores the pain from 0 to 10, and records the findings, the nerves and pulses checked, the range of movement and the X-ray. The plaster plan then lays out the checks from the day the cast went on, and each review records the pain, the plaster and the X-ray again.",
    ],
  },
  points: [
    {
      title: "The injury on a body map",
      body: "Tap the right knee, the left wrist or any of 36 areas on a front and back body figure. How it happened (a fall, a road accident, sports, lifting, or no injury) and the pain from 0 to 10 sit beside it.",
    },
    {
      title: "The plaster's checks, laid out",
      body: "Start the plaster plan on the day the cast goes on and Curogrid lays out four checks: the next day for swelling and the fingers or toes, an X-ray at a week, a review at three weeks and the plaster off at six. The file shows “2 of 4 done” and the next one.",
    },
    {
      title: "Pulses, feeling and movement, ticked",
      body: "Every first visit has a short checklist: pulses, feeling, finger or toe movement and capillary refill, each ticked as normal. A missing tick is visible to the next doctor who opens the file.",
    },
  ],
  departments: ["Orthopaedics", "Plaster Room", "Physiotherapy"],
  services: [
    { name: "New consultation", price: 600, minutes: 20 },
    { name: "Follow-up consultation", price: 350, minutes: 15 },
    { name: "Plaster cast, below knee", price: 2500, minutes: 45 },
    { name: "Plaster cast, above elbow", price: 2000, minutes: 40 },
    { name: "Cast removal", price: 500, minutes: 20 },
    { name: "Closed reduction, small bone", price: 3500, minutes: 45 },
    { name: "Intra-articular injection", price: 2500, minutes: 30 },
    { name: "Aspiration of joint", price: 1500, minutes: 30 },
    { name: "Crepe bandage and support", price: 400, minutes: 15 },
    { name: "Physiotherapy session", price: 600, minutes: 45 },
    { name: "Physiotherapy, 10 session package", price: 5000, minutes: 45 },
  ],
  medicines: [
    "Aceclofenac 100 mg tablet", "Aceclofenac + Paracetamol tablet", "Etoricoxib 90 mg tablet",
    "Diclofenac 50 mg tablet", "Naproxen 500 mg tablet", "Thiocolchicoside 4 mg capsule", "Tizanidine 2 mg tablet",
    "Pregabalin 75 mg capsule", "Gabapentin 300 mg capsule", "Methylcobalamin 1500 mcg tablet",
    "Calcium + Vitamin D3 tablet", "Vitamin D3 60,000 IU sachet", "Diclofenac gel", "Pantoprazole 40 mg tablet",
    "Trypsin + Chymotrypsin tablet", "Allopurinol 100 mg tablet", "Febuxostat 40 mg tablet",
    "Alendronate 70 mg tablet", "Cefuroxime 500 mg tablet", "Crepe bandage", "Arm sling", "Knee cap",
    "Lumbar belt", "Cervical collar",
  ],
  tests: ["Uric acid", "RA factor", "Serum calcium", "HLA-B27", "Anti-CCP"],
  scans: [
    "X-ray knee AP/lateral", "X-ray shoulder", "X-ray wrist", "X-ray ankle", "X-ray hip and pelvis",
    "X-ray cervical spine", "MRI knee", "DEXA scan (bone density)",
  ],
  procedures: ["Plaster cast", "Slab", "Cast removal", "Joint injection", "Joint aspiration", "Strapping", "Physiotherapy session"],
  doseWords: ["Apply on the painful area"],
  durationWords: ["6 weeks", "3 months"],
  course: { title: "Book follow-ups (plaster check, review)", noun: "follow-up", count: 3, everyDays: 7 },
  fileCard: {
    title: "Treatment",
    body: "It shows the plaster plan as a row of dots, such as “2 of 4 done”, with the next check and its date, and the diagnosis, such as “Distal radius fracture, right”.",
  },
  consents: ["Examination and treatment plan", "Procedure or operation", "Local anaesthetic", "Sedation or general anaesthesia"],
  diagnoses: [
    "Fracture of lower end of radius", "Fracture of clavicle", "Fracture of neck of femur", "Fracture of lateral malleolus",
    "Fracture of metatarsal bone", "Fracture of other finger", "Dislocation of shoulder joint", "Sprain and strain of ankle",
    "Sprain and strain of wrist",
    "Sprain and strain involving (anterior)(posterior) cruciate ligament of knee (ACL or PCL injury)",
    "Derangement of meniscus due to old tear or injury (meniscus tear)", "Gonarthrosis", "Coxarthrosis (hip arthritis)",
    "Arthrosis (osteoarthritis)", "Rheumatoid arthritis", "Gout", "Osteoporosis", "Low back pain", "Lumbago with sciatica",
    "Other specified intervertebral disc displacement (slipped disc)", "Cervicalgia", "Spondylosis", "Spondylolisthesis",
    "Adhesive capsulitis of shoulder", "Rotator cuff syndrome", "Lateral epicondylitis", "Trigger finger",
    "Radial styloid tenosynovitis (de Quervain)", "Plantar fascial fibromatosis",
    "Presence of orthopaedic joint implants (joint replacement)",
  ],
  diagnosisNote:
    "For an orthopaedic clinic the list covers the common fractures and dislocations, sprains and ligament and meniscus injuries, arthritis of the knee and hip, gout and osteoporosis, the back and neck, the shoulder, elbow, hand and foot, and a joint replacement.",
  day: [],
  notDone: [
    {
      title: "It does not read X-rays",
      body: "X-rays are ordered in one tap and the result is typed against the order. Curogrid has no image viewer and does not connect to the X-ray machine; a photo or PDF of the film goes in the patient's file.",
    },
    {
      title: "It does not run the theatre or admit patients",
      body: "A closed reduction or a plaster is a service you bill. Implants, a theatre list, the operation note, beds and the discharge summary are not built.",
    },
    {
      title: "The plaster plan is one plan",
      body: "The four checks run from the day the cast goes on, to six weeks. A different schedule is booked with “Book follow-ups” and the plan can be stopped with a reason.",
    },
    {
      title: "It does not count a physiotherapy package down",
      body: "The 10 session package is a price on the bill. The count of sessions comes from the booking, and is not tied to what was paid.",
    },
    {
      title: "It does not tell the police",
      body: "A road accident or an assault is a medico-legal case. Curogrid keeps the visit's record but does not keep an MLC register or inform the police.",
    },
  ],
  faqs: [
    {
      q: "Does Curogrid Ortho have a body map?",
      a: "Yes. The injury visit has a front and back body figure. Tap the injured area, such as the right knee, and it is kept with its side, right and left being the patient's own. There are 36 areas, from the neck and shoulders to the heels.",
    },
    {
      q: "Does it track a plaster's checks?",
      a: "Yes. Start the plaster plan on the day the cast goes on and Curogrid lays out four checks: the next day (swelling, fingers or toes), 1 week (X-ray), 3 weeks (review) and 6 weeks (plaster off, X-ray). The patient's file shows how many are done and the next one, and you can print the card.",
    },
    {
      q: "What does the injury visit record?",
      a: "How it happened, where on the body map, pain from 0 to 10, findings (swelling, tenderness, deformity, bruising, wound, limp, less movement), pulses, feeling, finger or toe movement and capillary refill checked, range of movement in degrees, the X-ray, and the plan: cast, slab, splint, sling, injection, physiotherapy or surgery.",
    },
    {
      q: "Can I run physiotherapy in the same clinic?",
      a: "Yes. Physiotherapy is one of the three departments, with a physiotherapy session and a 10 session package on the price list and the session ready to order. Each physiotherapist has their own login.",
    },
    {
      q: "Can I book the follow-ups together?",
      a: "Yes. Turn on “Book follow-ups (plaster check, review)” in the booking drawer. Curogrid books three follow-ups a week apart unless you change it, each labelled “Follow-up 2 of 3”.",
    },
    {
      q: "Can I bill braces, belts and slings?",
      a: "Yes. A crepe bandage, arm sling, knee cap, lumbar belt and cervical collar are in the medicine names, so they are written on the prescription and given from stock at the counter, which puts them on the bill.",
    },
    {
      q: "Which X-rays and scans are ready to order?",
      a: "Eight: X-ray knee AP and lateral, shoulder, wrist, ankle, hip and pelvis, cervical spine, MRI knee and a DEXA scan. Each is one tap on the visit, and any other can be typed.",
    },
    {
      q: "Is there a phone app for an orthopaedic clinic?",
      a: "Yes, for Android and iPhone. The doctor sees the line, writes the injury visit with the body map, and opens a patient's file with the plaster plan on the phone. Curogrid also runs in a web browser and as a Windows app.",
    },
  ],
};
