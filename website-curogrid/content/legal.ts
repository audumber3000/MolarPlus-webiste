import type { LegalSection } from "@/components/LegalDoc";
import { ADDRESS_LINE, SITE } from "@/lib/site";
import { PLANS, TRIAL_DAYS, TRIAL_PLAN, rupees } from "./pricing";

/**
 * The four legal pages.
 *
 * READ THIS BEFORE EDITING OR LAUNCHING.
 *
 * These are a careful first draft written from what the product
 * verifiably does. They have NOT been reviewed by a lawyer, and they
 * must be before the site takes a paying customer. Until then the four
 * pages are `noindex` (see each page file).
 *
 * What still blocks a review, and is deliberately left general here
 * rather than guessed:
 *
 * 1. The registered legal name of the company. "Clino Health" is the
 *    trading name; the contracting entity needs its full name and CIN.
 * 2. A named Grievance Officer. The DPDP Act and the IT Rules expect a
 *    named person with contact details. Only the support address is
 *    given.
 * 3. The vendors that receive data (WhatsApp provider, email provider,
 *    payment gateway, analytics). They are described by kind, not by
 *    name, because the list has not been verified against the live
 *    account. Name them once it has.
 * 4. The refund terms. The refund page commits to nothing numeric,
 *    because no refund policy has been decided. Decide it, then write it.
 * 5. Governing law and courts are given as Pune, from the office
 *    address. Confirm.
 *
 * What is deliberately NOT claimed anywhere: HIPAA, ISO 27001, SOC 2,
 * "bank-grade", "100% secure" or any certification. None exists.
 *
 * The hosting facts on the security page (AWS Mumbai, encrypted
 * database storage, 7-day automatic backups) are read from the
 * Terraform in the app repo (`infra/aws`). Re-check them against the
 * live AWS account before launch.
 */

export const LEGAL_UPDATED = "11 October 2026";

const CONTACT = `Write to ${SITE.email}, or to ${SITE.parent}, ${ADDRESS_LINE}.`;

export const PRIVACY: LegalSection[] = [
  {
    heading: "Who we are",
    paragraphs: [
      `Curogrid is clinic management software made by ${SITE.parent}, with its office at ${ADDRESS_LINE}. In this policy “we” means ${SITE.parent} and “Curogrid” means the software and this website.`,
      "This policy covers two different things: this public website, and the Curogrid software that clinics use. They handle very different information, so they are described separately.",
    ],
  },
  {
    heading: "This website",
    paragraphs: ["When you visit this website we collect:"],
    list: [
      "What you send us through a form: your name, mobile number, clinic name and message.",
      "How the site is used: pages viewed, buttons pressed, the kind of device and browser, and an approximate location derived from your IP address. Where recordings of a visit are made, anything typed into a form is masked.",
    ],
    after: [
      "We use this to call you back, to answer your question and to improve the site. We do not sell it and we do not use it for advertising on other sites.",
    ],
  },
  {
    heading: "The Curogrid software",
    paragraphs: [
      "A clinic that uses Curogrid stores information about its staff and its patients in it: names, contact details, visits, prescriptions, test results, bills and files the clinic uploads.",
      "That information belongs to the clinic. The clinic decides what is recorded and why, and is responsible to its patients for it. We hold and process it only to provide the software to that clinic, on the clinic's instructions. In the terms of India's Digital Personal Data Protection Act, 2023, the clinic is the data fiduciary and we act as its data processor.",
      "If you are a patient and want to see, correct or remove your record, ask your clinic. We will help the clinic do it.",
    ],
  },
  {
    heading: "Who else handles the information",
    paragraphs: ["We use a small number of service providers to run Curogrid. They may handle information only to provide their service to us:"],
    list: [
      "A cloud hosting provider, with servers in India (Mumbai).",
      "Messaging providers, to send WhatsApp and email reminders a clinic chooses to send.",
      "A payment processor, to collect subscription payments from clinics. We do not store card numbers.",
      "An analytics provider, for this website.",
    ],
    after: ["We disclose information when the law requires it. We do not share patient records with advertisers, insurers or anyone else."],
  },
  {
    heading: "Where it is kept, and for how long",
    paragraphs: [
      "Clinic and patient records are stored on servers in India.",
      "A clinic's records are kept for as long as the clinic has an account. When a clinic closes its account, it can ask for its records to be exported and then deleted. Indian law requires doctors to keep patient records for a period of years; that duty is the clinic's, and a clinic should export its records before asking for deletion.",
      "Messages sent through this website's forms are kept for as long as we are in conversation with you, and removed on request.",
    ],
  },
  {
    heading: "Your choices",
    list: [
      "Ask what we hold about you, and ask us to correct or delete it.",
      "Withdraw consent to being contacted, at any time.",
      "Complain to us, and if you are not satisfied, to the Data Protection Board of India.",
    ],
    after: [CONTACT],
  },
  {
    heading: "Changes",
    paragraphs: ["If this policy changes in a way that matters, we will say so on this page and change the date at the top."],
  },
];

export const TERMS: LegalSection[] = [
  {
    heading: "The agreement",
    paragraphs: [
      `These terms are between ${SITE.parent} (“we”) and the clinic or person that creates a Curogrid account (“you”). By creating an account you agree to them.`,
      "If you create an account for a clinic, you confirm that you are allowed to do so on its behalf.",
    ],
  },
  {
    heading: "What Curogrid is, and is not",
    paragraphs: [
      "Curogrid is software for running a clinic: tokens, appointments, patient records, prescriptions, billing and stock.",
      "Curogrid is a record-keeping tool. It is not a medical device and it does not give medical advice. Lists of medicines, tests, diagnoses and starter prices are conveniences for typing; every clinical decision, every dose and every price is yours. You are responsible for checking what you record and what you prescribe.",
    ],
  },
  {
    heading: "Your account",
    list: [
      "Give each member of staff their own login. Do not share passwords.",
      "You are responsible for what is done under your clinic's logins.",
      "Tell us promptly if you believe an account has been misused.",
    ],
  },
  {
    heading: "Plans and payment",
    paragraphs: [
      `New clinics receive a ${TRIAL_DAYS}-day trial of the ${TRIAL_PLAN} plan. After the trial, continued use needs a paid plan: ${PLANS.map((plan) => `${plan.name} at ${rupees(plan.monthly)} a month or ${rupees(plan.annual)} a year`).join(", or ")}.`,
      "Plans are paid in advance, by the month or by the year. Prices may change; a change applies from your next renewal, and we will tell you before it does. Taxes are added where they apply.",
      "Refunds are covered by the refund policy.",
    ],
  },
  {
    heading: "Your data",
    paragraphs: [
      "The records you put into Curogrid are yours. We use them only to provide the software to you, as the privacy policy describes.",
      "You are responsible for having the right to record your patients' information, and for the duties a clinic has to its patients under Indian law.",
      "You can export your patient list and your bills from the software. If you close your account, ask us and we will help you take your records with you.",
    ],
  },
  {
    heading: "Fair use",
    paragraphs: ["Do not use Curogrid to break the law, to store information you have no right to hold, to try to reach another clinic's records, or to disrupt the service for others."],
  },
  {
    heading: "Availability",
    paragraphs: [
      "We work to keep Curogrid running and to keep your records safe, and we back up the database. We do not promise that it will never be interrupted.",
    ],
  },
  {
    heading: "Liability",
    paragraphs: [
      "Curogrid is provided as it is. To the extent the law allows, we are not liable for indirect losses, for loss of income, or for clinical outcomes. Our total liability to you in any year is limited to what you paid us for Curogrid in that year.",
      "Nothing here limits liability that the law does not allow to be limited.",
    ],
  },
  {
    heading: "Ending the agreement",
    paragraphs: [
      "You can stop using Curogrid at any time. We may suspend or close an account that breaks these terms or is not paid for, after giving notice where that is reasonable.",
    ],
  },
  {
    heading: "Law and contact",
    paragraphs: [
      "These terms are governed by the laws of India. Disputes are subject to the courts at Pune, Maharashtra.",
      CONTACT,
    ],
  },
];

export const REFUNDS: LegalSection[] = [
  {
    heading: "Try before you pay",
    paragraphs: [
      `Every clinic starts with a ${TRIAL_DAYS}-day trial of the ${TRIAL_PLAN} plan, without paying. The trial exists so that you can decide whether Curogrid suits your clinic before any money changes hands.`,
    ],
  },
  {
    heading: "Cancelling",
    paragraphs: [
      "You can cancel a plan at any time. Cancelling stops the next renewal. Your plan stays active until the end of the period you have already paid for.",
    ],
  },
  {
    heading: "Refunds",
    paragraphs: [
      "If you were charged by mistake, charged twice, or charged after you cancelled, tell us and we will put it right.",
      "For any other refund request, write to us with your clinic's name and the reason. We look at each request and reply.",
    ],
  },
  {
    heading: "How to ask",
    paragraphs: [CONTACT, `You can also message us on WhatsApp or call ${SITE.phoneDisplay}.`],
  },
];

export const SECURITY: LegalSection[] = [
  {
    heading: "Where your records are kept",
    paragraphs: [
      "Curogrid runs on Amazon Web Services in the Mumbai region. Clinic and patient records are stored in India.",
    ],
  },
  {
    heading: "Each clinic's records are separate",
    paragraphs: [
      "Every clinic is a separate tenant. A person signed in to one clinic cannot open another clinic's patients, bills or reports.",
    ],
  },
  {
    heading: "Protection in storage and in transit",
    list: [
      "The database's storage is encrypted.",
      "The connection between your browser or phone and Curogrid is encrypted (HTTPS).",
      "The database accepts connections only from Curogrid's own server, not from the internet.",
    ],
  },
  {
    heading: "Backups",
    paragraphs: ["The database is backed up automatically every day, and each backup is kept for seven days."],
  },
  {
    heading: "Who can see what inside your clinic",
    list: [
      "Each member of staff has their own login.",
      "Each login has a role. You decide what each role can open: a receptionist need not see clinical notes, and a doctor need not see the accounts.",
      "An audit log records who did what.",
    ],
  },
  {
    heading: "What we do not claim",
    paragraphs: [
      "Curogrid does not hold a security certification such as ISO 27001 or SOC 2, and we will not use those names until it does. No system is perfectly secure. What we can do is tell you plainly what is in place.",
    ],
  },
  {
    heading: "Reporting a problem",
    paragraphs: [`If you believe you have found a security problem in Curogrid, write to ${SITE.email}. We will reply.`],
  },
];
