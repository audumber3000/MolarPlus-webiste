import { GST_PERCENT, PLANS, TRIAL_DAYS, TRIAL_PLAN, rupees } from "@/content/pricing";
import type { Speciality } from "@/lib/specialities";

/**
 * Pieces of the speciality page (ShowcasePage), kept apart so they stay small.
 */

/**
 * The questions every doctor asks whatever the speciality: price,
 * reminders, ABDM, offline and language. They are built here, from
 * content/pricing.ts, so a price change never leaves six stale answers
 * in lib/specialities.ts. They join the speciality's own questions in
 * the page's single FAQ block.
 *
 * Checked in the app on 11 October 2026:
 * - reminders: settings/notifyApi.ts (`appointment_reminder`, sent
 *   "Before the appointment"; prescription, bill and receipt messages)
 * - ABHA: patients/components/form/PatientForm.tsx ("Recorded, not yet
 *   checked with ABDM"); ABDM credentials are a phase 2 task in
 *   onboarding/checklist.py
 * - offline: the phone app's AppBanners.tsx ("Nothing can be saved
 *   until the internet is back") and consult/components/visit/VisitForm.tsx
 * - language: neither app has a translation layer; every screen is English
 */
export function sharedFaqs(s: Speciality) {
  const [plus, pro] = PLANS;
  return [
    {
      q: `How much does ${s.searchTerm} cost in India?`,
      a: `Curogrid ${plus.name} is ${rupees(plus.monthly)} a month and ${pro.name} is ${rupees(pro.monthly)} a month, or ${rupees(plus.annual)} and ${rupees(pro.annual)} for a year. GST of ${GST_PERCENT}% is added. The price is for the whole clinic, not for each doctor, and the ${s.appLabel} setup is included in both plans. Every clinic starts with ${TRIAL_DAYS} days of ${TRIAL_PLAN}, free.`,
    },
    {
      q: "Does Curogrid send appointment reminders on WhatsApp?",
      a: `Yes. Curogrid sends the patient a reminder before the appointment by WhatsApp and email, and can send the prescription, the bill and the receipt the same way. On ${plus.name} the WhatsApp messages go from the Curogrid number. On ${pro.name} they go from your clinic's own number.`,
    },
    {
      q: "Is Curogrid ABDM compliant, and does it support ABHA?",
      a: "Not yet. A patient's 14-digit ABHA number can be recorded on their file, where it is marked as not checked with ABDM. Curogrid does not yet verify an ABHA number, create one or share records through ABDM.",
    },
    {
      q: "Does Curogrid work offline or in Hindi?",
      a: "No. Curogrid needs an internet connection. The phone app tells you when it is offline and saves nothing until the connection is back, and on a computer a visit you are typing is kept on that computer until it can be saved. The screens are in English only.",
    },
  ];
}

