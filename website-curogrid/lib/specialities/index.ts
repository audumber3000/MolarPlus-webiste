/**
 * The specialities Curogrid has a landing page for. THE single source
 * of truth: the header menu, the homepage grid, `/specialities`, every
 * `/[speciality]` page, the footer, the sitemap and `llms.txt` all read
 * from this file. Adding a speciality is one entry here.
 *
 * ## Where every fact comes from
 *
 * Nothing below is marketing invention. Each list is copied from the
 * app repo (`~/Developer/curogrid`), as it stood on 11 October 2026 (re-checked for every speciality on
 * 17 October 2026; each file's header names its sources):
 *
 * - `services`, `departments`, `consents`
 *     curogrid-backend/domains/onboarding/templates/catalogue.py
 *     (the app writes "Dressing — simple"; the site writes "Dressing,
 *     simple", because the site uses no dashes)
 * - `medicines`, `tests`, `scans`, `procedures`, `doseWords`,
 *   `durationWords`
 *     curogrid-backend/domains/onboarding/templates/packs.py
 *     (general practice has no pack: it uses `STARTER` in
 *     domains/encounter/routes/desk.py and `COMMON` in
 *     domains/orders/routes/orders.py)
 * - `course`
 *     curogrid-app/src/modules/appointments/utils/visitPlans.ts
 * - `fileCard`
 *     curogrid-app/src/modules/patients/utils/overview.ts and
 *     components/record/overview/TreatmentCard.tsx
 * - `diagnoses`
 *     curogrid-backend/domains/terminology/data/icd10_opd_starter.csv
 *     (365 rows). Names are the list's own, with two changes for
 *     reading: a trailing ", unspecified" is dropped and the everyday
 *     word in [brackets] is shown in (brackets).
 *
 * ## What the prose rests on
 *
 * `overview`, `points`, `day`, `notDone` and `faqs` are written by hand,
 * so each claim was checked against a file. The ones that matter most:
 *
 * - The speciality is picked in clinic setup, not at sign-up. Nothing
 *   is applied by default (catalogue.py; setup/Setup.tsx,
 *   setup/Specialty.tsx).
 * - Tests and scans are one tap ON THE VISIT SCREEN
 *   (consult/components/visit/TestPicker.tsx shows lab and radiology
 *   only). Procedures are one tap IN A NEW ORDER
 *   (orders/components/NewOrderDrawer.tsx). Never write "one-tap
 *   procedures on the visit".
 * - Directions are choices in the How often and How to take lists and
 *   durations are suggestions in the For box
 *   (consult/components/visit/MedicineRows.tsx). They are picked, so
 *   say "ready to pick", never "one tap".
 * - A speciality's names come first and the general lists follow
 *   (desk.py `medicines`, orders.py `orders_meta`). Physiotherapy adds
 *   no medicine names; the visit form still has its medicines part.
 * - CHANGED SINCE 11 OCTOBER: each speciality now has its own case
 *   paper on the visit (curogrid-backend/domains/specialty/profiles/
 *   <key>/case_paper.py), and some have care plans, papers to print and
 *   picture libraries in the same folder. Physiotherapy was re-checked
 *   against that folder on 17 October 2026 (body map, pain score, home
 *   exercises by picture; see content/showcases/physiotherapy.ts). The
 *   other pages were NOT re-checked and may still say "the visit form is
 *   the same for every speciality", which is no longer true.
 * - Priority tokens go ahead of normal ones (queue/models.py
 *   `PRIORITY_ORDER`, queue/services/tokens.py).
 * - CHANGED SINCE 11 OCTOBER (checked 11 November 2026): Curogrid Paeds
 *   draws WHO growth charts with centile lines, 3rd to 97th
 *   (curogrid-app/src/specialties/paediatrics/growth/lms.ts), and has a
 *   13-step IAP vaccine plan from the date of birth
 *   (profiles/paediatrics/care_plans.py, which says it is still to be
 *   checked by a practising paediatrician before launch).
 * - Consent is signed with a finger by the patient, a parent or
 *   guardian, or a relative (patients/components/consents/
 *   GetConsentDialog.tsx, patients/utils/consent.ts).
 * - Files are JPG, PNG, WebP or PDF, 15 MB each (patients/utils/files.ts).
 * - A medicine comes off the shelf count when it is given at the
 *   medicine counter, and that puts it on the patient's bill
 *   (inventory/components/requests/GiveDialog.tsx). A line typed onto
 *   a bill by hand does not touch stock (billing/components/AddLines.tsx).
 * - Plans, logins and storage: curogrid-backend/core/plans.py.
 * - No device or machine connections are offered
 *   (settings/utils/integrations.ts).
 *
 * When the app changes one of those, change it here. A page that
 * promises a procedure the app no longer offers is a broken promise to
 * a doctor on their first day.
 *
 * ## Prices
 *
 * The service prices are the app's starter prices: indicative cash
 * rates for a small Indian city practice. The clinic changes every one.
 * Pages must say so wherever a price is shown.
 *
 * ## URLs
 *
 * `slug` is the page's address at the site root and is costly to change
 * once indexed. American spellings ("pediatric", "gynecology") are in
 * the slugs because that is how they are typed into a search box in
 * India far more often; the page copy uses the Indian spelling as well.
 */
import { GENERAL_PRACTICE } from "./general_practice";
import { PAEDIATRICS } from "./paediatrics";
import { OBSTETRICS_GYNAECOLOGY } from "./obstetrics_gynaecology";
import { DERMATOLOGY } from "./dermatology";
import { ENT } from "./ent";
import { PHYSIOTHERAPY } from "./physiotherapy";
import { OPHTHALMOLOGY } from "./ophthalmology";
import { ORTHOPAEDICS } from "./orthopaedics";
import { GENERAL_SURGERY } from "./general_surgery";
import { DIABETOLOGY } from "./diabetology";
import type { Course, Speciality } from "./types";

export * from "./types";

/** In menu order. */
export const SPECIALITIES: ReadonlyArray<Speciality> = [
  GENERAL_PRACTICE,
  PAEDIATRICS,
  OBSTETRICS_GYNAECOLOGY,
  DERMATOLOGY,
  ENT,
  PHYSIOTHERAPY,
  OPHTHALMOLOGY,
  ORTHOPAEDICS,
  GENERAL_SURGERY,
  DIABETOLOGY,
];


export function getSpeciality(slug: string) {
  return SPECIALITIES.find((speciality) => speciality.slug === slug);
}

/** "every 2 days", "every week", "every 4 weeks". */
export function gapWords(days: number) {
  if (days % 7 === 0) {
    const weeks = days / 7;
    return weeks === 1 ? "a week apart" : `${weeks} weeks apart`;
  }
  return days === 1 ? "a day apart" : `${days} days apart`;
}

/** "a paediatric clinic", "an ENT clinic". Vowel sound, so "ENT" takes "an". */
export function withArticle(phrase: string) {
  return `${/^([aeiou]|ENT\b)/i.test(phrase) ? "an" : "a"} ${phrase}`;
}

/** "6 sessions, 2 days apart, 45 minutes each". */
export function courseWords(course: Course) {
  return `${course.count} ${course.noun}s, ${gapWords(course.everyDays)}${course.minutes ? `, ${course.minutes} minutes each` : ""}`;
}
