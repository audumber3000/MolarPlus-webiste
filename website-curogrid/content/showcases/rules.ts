import type { Rule } from "./types";

/**
 * Rules that apply to more than one kind of clinic, written once. Each
 * speciality's showcase picks the ones that fit and adds its own.
 *
 * Read from public sources on 17 October 2026. Not legal advice, and every
 * page says so. Where a point is unsettled (DPDP dates, NMC's 2023
 * regulations held in abeyance since August 2023) the wording says so
 * rather than guessing. Product claims ("In Curogrid") were checked in
 * the app repo:
 * - registration number and council on prescriptions:
 *   curogrid-app/src/modules/staff/components/doctor/PrintFields.tsx
 * - GSTIN and a GST rate per service, both optional:
 *   settings/ClinicDetails.tsx, settings/PriceList.tsx
 * - medicines given at the counter go on the bill and come off stock:
 *   inventory/components/requests/GiveDialog.tsx
 * - consent signed with a finger: patients/components/consents/GetConsentDialog.tsx
 */
export const RULES_CHECKED = { iso: "2026-10-17", text: "17 October 2026" } as const;

export const DISCLAIMER =
  "This is a plain summary to help you ask the right questions, not legal or tax advice. The rules differ from state to state and some are changing this year. Confirm with your state council, your district health office or your chartered accountant.";

/** For a doctor's clinic. Physiotherapy has its own version (NCAHP). */
export const DOCTOR_REGISTRATION: Rule = {
  title: "Your registration as a doctor",
  law: "National Medical Commission Act, 2019, and your State Medical Council",
  body: "Only a doctor on a State Medical Register or the Indian Medical Register may practise medicine, and the registration number belongs on every prescription, certificate and receipt you sign. The NMC's 2023 conduct regulations were put on hold in August 2023, so the 2002 code of ethics still applies.",
  inCurogrid:
    "Each doctor's qualifications, registration number and council are kept on their staff profile and print under their name on every prescription.",
};

export const CLINIC_REGISTRATION: Rule = {
  title: "Register the clinic",
  law: "Clinical Establishments (Registration and Regulation) Act, 2010, or your state's own law",
  body: "In the states and union territories that have adopted the Act, a clinic cannot run without registering with the district registering authority, and national minimum standards are set for each kind of clinic. Other states have their own registration law. Your district health office will say which applies.",
  inCurogrid: "Curogrid does not register your clinic. Your clinic's name, address and contact numbers print on every bill and paper it makes.",
  source: { label: "Clinical Establishments Act portal", href: "https://clinicalestablishments.mohfw.gov.in/" },
};

export const PATIENT_DATA: Rule = {
  title: "Patients' personal data",
  law: "Digital Personal Data Protection Act, 2023, and its Rules of 2025",
  body: "A patient's record is personal data, and the clinic is responsible for it. Tell patients what you keep and why, keep it safe, use it for their care, and let a patient see or correct what you hold. The Rules were notified in November 2025 and most of their duties for clinics apply from May 2027.",
  inCurogrid: "Every member of the team has their own sign-in and role, so the records show who did what, and nobody shares a password.",
  source: { label: "Data protection framework, MeitY", href: "https://www.meity.gov.in/data-protection-framework" },
};

export function consentRule(forms: string, extra = ""): Rule {
  return {
    title: "Consent before treatment",
    law: "Informed consent",
    body: `Explain what you will do, why, and its risks before you start, and keep the patient's agreement. For a child, a parent or guardian agrees.${extra ? ` ${extra}` : ""}`,
    inCurogrid: `The setup adds ${forms}. The patient, a parent or guardian, or a relative signs with a finger on the screen, and the form is kept in the patient's file.`,
  };
}

export function wasteRule(what: string, inCurogrid: string): Rule {
  return {
    title: "Needles, dressings and other clinical waste",
    law: "Bio-Medical Waste Management Rules, 2016",
    body: `${what} Separate waste where it is made, put sharps in a puncture-proof white translucent container, hand it to your area's common bio-medical waste facility, and train the staff who handle it.`,
    inCurogrid,
    source: { label: "Bio-medical waste rules, CPCB", href: "https://cpcb.nic.in/rules-3/" },
  };
}

export function gstRule(body: string): Rule {
  return {
    title: "GST on your services",
    law: "CGST exemption notification 12/2017, entry 74",
    body,
    inCurogrid:
      "A GST rate is set on a service only if you give it one, so taxable and exempt services can sit on the same bill. The clinic's GSTIN is needed only if you are registered.",
  };
}

export const GST_HEALTH_CARE =
  "Health care by a clinical establishment or an authorised medical practitioner is exempt from GST: the diagnosis, treatment or care of an illness, injury or pregnancy. Anything sold or done outside that, such as a cosmetic product, may be taxed. Ask your chartered accountant what applies to your clinic.";

export const PRESCRIPTION_DRUGS: Rule = {
  title: "Medicines you give from the clinic",
  law: "Drugs and Cosmetics Rules, 1945, Schedule H1",
  body: "A clinic that gives medicines to its own patients follows the drug rules. For Schedule H1 drugs, such as certain newer antibiotics and habit-forming medicines, each supply is written in a separate register with the prescriber, the patient, the medicine and the quantity, and the register is kept for three years.",
  inCurogrid:
    "When the medicine counter gives a medicine, it comes off the shelf count and goes on the patient's bill, so you can see who got what and when. Curogrid does not print a Schedule H1 register.",
};

export const MEDICO_LEGAL: Rule = {
  title: "Injuries that are medico-legal cases",
  law: "Bharatiya Nagarik Suraksha Sanhita, 2023, and medico-legal practice",
  body: "An injury from a road accident, an assault, a burn or a poisoning is a medico-legal case. Treat first and never turn the patient away, then inform the local police and keep a careful record of what you saw and did.",
  inCurogrid:
    "Curogrid does not tell the police or keep an MLC register. Each visit records the time, the findings and what was done, and photos and reports can be added to the patient's file.",
};
