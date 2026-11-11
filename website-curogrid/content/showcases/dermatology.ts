import { editionShot, editionShots } from "@/lib/shots";
import { CLINIC_REGISTRATION, DISCLAIMER, DOCTOR_REGISTRATION, PATIENT_DATA, PRESCRIPTION_DRUGS, RULES_CHECKED, consentRule, gstRule, wasteRule } from "./rules";
import type { Showcase } from "./types";

/**
 * Curogrid Derma's page. Checked against the app repo on 17 October 2026:
 *
 * - The skin visit and the session: curogrid-backend/domains/specialty/
 *   profiles/dermatology/case_paper.py. Registration (skin type, comes
 *   for): registration.py. The labels are the app's own.
 * - The Photos tab: photo_angles.py (six angles, each with a guide hint)
 *   and curogrid-app/src/specialties/core/photos/ (PhotoBoard: guide until
 *   the first photo, two dates side by side, consent first). The phone app
 *   takes them with the camera (curogrid-phone-app/.../photos/PhotosTab.tsx).
 *   Photos are served only to signed-in staff (photos/api.ts).
 * - The skin and hair pictures in the screenshots are from Curogrid's own
 *   illustration library; every patient is invented.
 *
 * Rules: the 2002 code of ethics (no advertising or soliciting) still
 * applies while the NMC's 2023 regulations are in abeyance; the GST
 * definition of health care leaves out hair transplant and cosmetic or
 * plastic surgery unless it restores or reconstructs (notification
 * 12/2017, clause 2(zg)).
 */
const SHOTS = editionShots("derma", "Curogrid Derma", { phone: true });
const FACE = editionShot(
  "derma",
  "web",
  "before-after-photos",
  "Curogrid Derma's Photos tab: a melasma patient's face from the front before and after, 12 weeks apart, on 17 Jul 2026 before the first peel and on 12 Oct 2026 after the 3rd peel, under a row of six standard angles",
);
const FACE_PHONE = editionShot("derma", "phone", "before-after-face", "A face before and after treatment, side by side, in the Curogrid Derma phone app");
const HAIR = editionShot(
  "derma",
  "web",
  "hair-before-after",
  "Curogrid Derma's Photos tab: a woman's thinning hair parting before minoxidil and PRP on 26 Jun 2026, and after 4 PRP sessions on 10 Oct 2026, 15 weeks apart",
);
const HAIR_PHONE = editionShot("derma", "phone", "before-after-hair", "A hair parting before and after PRP in the Curogrid Derma phone app");

export const DERMATOLOGY_SHOWCASE: Showcase = {
  eyebrow: "For dermatologists, skin, hair and aesthetic clinics",
  tagline: "Show patients their progress with before and after photos, and keep every session's settings.",
  category: "Dermatology clinic management software",
  shots: SHOTS,
  glance: [
    ["Photos", "Six standard angles with guide pictures; any two dates side by side"],
    ["The skin visit", "Concern, where, what it looks like, itch 0 to 10, Fitzpatrick type, acne grade, Norwood or Ludwig stage, dermoscopy"],
    ["Each session", "What was done, the settings for each area, the response since last time"],
    ["Booking a course", "“Book treatment sessions (laser, peels)”: 4 sessions, 4 weeks apart, each shown as “Session 2 of 4”"],
    ["Medicines offered first", "42 skin and hair names, from isotretinoin and adapalene to minoxidil and sunscreen"],
    ["Consent", "Clinical photographs, procedure, local anaesthetic, and the examination and treatment plan"],
  ],
  hero: {
    web: FACE,
    phone: FACE_PHONE,
    caption: "Curogrid Derma on the computer and on the phone, at Glow Skin & Hair Clinic, a demo clinic. The patients are invented and the pictures are drawings.",
  },
  spotlights: [
    {
      id: "photos",
      benefits: ["Show patients their own progress, side by side", "Every photo taken the same way, at the same angle", "Nothing is photographed without signed consent"],
      eyebrow: "Before and after",
      title: "Progress you can see, at the same angle every time",
      intro:
        "A skin patient forgets how she looked three months ago; the photo does not. Curogrid Derma keeps each patient's photos under six standard angles, shows a guide so each one is taken the same way, and puts any two dates side by side.",
      shot: FACE,
      lists: [
        {
          title: "The six angles, each with its guide",
          parts: [
            { label: "Face, front", detail: "Straight on, eyes level, hair back, even light." },
            { label: "Face, left side", detail: "The left cheek to the camera, nose pointing away." },
            { label: "Face, right side", detail: "The right cheek to the camera." },
            { label: "Top of the head", detail: "From above, the crown in the middle." },
            { label: "Hair parting", detail: "A centre parting, from above." },
            { label: "Body area", detail: "The affected area, with a little normal skin around it." },
          ],
        },
      ],
      card: {
        title: "Consent comes first",
        body: "Nothing can be photographed until the patient has signed the Clinical photographs consent, on the screen, with a finger. The photos are served only to your signed-in staff.",
      },
      note: "Before a photo is kept it is shown beside its guide, with the date and a short note such as “After the 3rd peel”. On a tablet or the phone app the camera opens; on a computer you pick the file.",
    },
    {
      id: "hair",
      benefits: ["Prove PRP and minoxidil are working, in two photos", "Norwood and Ludwig stages recorded in one tap", "Patients who see results stay for the full course"],
      eyebrow: "Hair",
      title: "A hair clinic's proof, in two photos",
      intro:
        "Hair fall is slow to change and slow to show. The top of the head and the hair parting are standard angles of their own, so a patient on minoxidil and PRP can see the parting fill in, dated, side by side.",
      shot: HAIR,
      phone: HAIR_PHONE,
      lists: [
        {
          title: "For a hair patient",
          parts: [
            { label: "Hair loss stage", detail: "Norwood 1 to 7 for men, Ludwig I to III for women." },
            { label: "Dermoscopy", detail: "Ready words such as “Yellow dots” and “Exclamation-mark hairs”." },
            { label: "Tried before", detail: "Hair oils or shampoos, steroid creams, home remedies, or nothing yet." },
            { label: "Ready to order", detail: "Serum ferritin, a hormone profile, a PRP session; minoxidil, finasteride and biotin in the medicines." },
          ],
        },
      ],
    },
    {
      id: "skin-visit",
      benefits: ["Acne grade, skin type and hair loss stage in taps", "Every peel and laser setting kept for the next session", "Sessions booked as a course, so patients come back"],
      eyebrow: "On the doctor's screen",
      title: "A skin visit, and a short form for every session",
      intro: "The first visit is an assessment in a dermatologist's words, most of it a tap. A laser, peel or PRP session, or a review, uses the short form.",
      lists: [
        {
          title: "The first visit: Skin and hair",
          parts: [
            { label: "Concern", detail: "Acne, pigmentation, hair fall, itching or rash, fungal infection, psoriasis, eczema, warts, vitiligo, nails, cosmetic." },
            { label: "Where", detail: "Face, scalp, neck, chest, back, arms, hands, legs, feet, groin, nails, whole body." },
            { label: "What it looks like", detail: "Macule, patch, papule, plaque, nodule, pustule, vesicle, scale, crust, erosion, scar, darker or lighter skin." },
            { label: "Itch", detail: "0, none, to 10, the worst." },
            { label: "Skin type", detail: "Fitzpatrick I to VI." },
            { label: "Acne grade", detail: "I comedones, II papules, III pustules, IV nodules and cysts." },
            { label: "Tried before", detail: "Steroid creams, antifungals, home remedies, isotretinoin, hair oils or shampoos, nothing yet." },
            { label: "Findings", detail: "Dermoscopy and other findings, with ready words such as “Collarette of scale”." },
          ],
        },
        {
          title: "Each session: Procedure or review",
          parts: [
            { label: "Done today", detail: "Chemical peel, laser, PRP, microneedling, electrocautery, cryotherapy, intralesional injection, or review only." },
            { label: "Settings", detail: "One line per area: the area, the setting, and the passes or minutes." },
            { label: "Since last time", detail: "Better, same, worse, redness, peeling, darkening, fewer spots, less hair fall." },
            { label: "Itch", detail: "The same 0 to 10 scale." },
            { label: "Notes", detail: "Ready words such as “Sunscreen advised” and “Next session in 4 weeks”." },
          ],
        },
      ],
    },
  ],
  journey: {
    title: "A skin patient's way through the clinic, step by step",
    intro: "From the first consultation to the last session. Each step is something Curogrid Derma does today.",
    steps: [
      {
        stage: "At the desk",
        title: "Registered with the skin type",
        body: "Name, age and mobile number, then two questions only a skin clinic asks: the Fitzpatrick skin type, from “always burns” to “never burns”, and whether she comes for skin, hair, nails or cosmetic care.",
      },
      {
        stage: "Before the first photo",
        title: "Consent on the screen",
        body: "She reads “Clinical photographs” and signs with a finger. Until then the Photos tab will not take a photo.",
      },
      {
        stage: "The first visit",
        title: "The assessment and the baseline photos",
        body: "Record the concern, where it is, what it looks like, the grade or stage and the dermoscopy findings. Take the baseline photos at the standard angles, each beside its guide.",
      },
      {
        stage: "Writing the prescription",
        title: "Topicals in your own words",
        body: "The skin and hair medicines are offered first. Pick “Thin layer on affected area”, “On the scalp” or “Alternate nights”, and “6 weeks” or “3 months” for how long. A KOH scraping, a biopsy or a patch test is one tap. A red warning shows if she is allergic to what you write.",
      },
      {
        stage: "Planning a course",
        title: "The sessions booked together",
        body: "Turn on “Book treatment sessions (laser, peels)”. Curogrid books four sessions, four weeks apart, 30 minutes each, at the same time of day. Change the number or the gap before you save.",
        href: "/features/appointments",
        linkText: "How appointments work",
      },
      {
        stage: "Each session",
        title: "What was done, and the settings",
        body: "Record the procedure, the settings for each area, the response since last time, and a photo at the same angle. The booking shows “Session 2 of 4”.",
      },
      {
        stage: "At the counter",
        title: "The session and the products on one bill",
        body: "The peel is billed from the price list. A sunscreen the doctor wrote is given from the shelf at the medicine counter, which takes it off the stock count and puts it on the same bill.",
        href: "/features/billing",
        linkText: "How billing works",
      },
      {
        stage: "At the review",
        title: "Before and after, side by side",
        body: "Open the angle and the first and latest photos are side by side, with the weeks between them. The patient sees her own progress, dated.",
      },
    ],
    shots: [
      { shot: SHOTS.today, caption: "Today: the token line and the appointments still expected." },
      { shot: SHOTS.week, caption: "The week's consultations and sessions, one colour for each doctor." },
    ],
  },
  practiceIntro: "The front desk, the money and the team, set up for a skin and hair clinic and shown here with one.",
  rules: {
    title: "The rules a skin and hair clinic in India works under",
    intro: "A short guide to the registrations and rules that apply to a dermatology practice, and what Curogrid does, or does not do, about each.",
    checked: RULES_CHECKED,
    items: [
      DOCTOR_REGISTRATION,
      CLINIC_REGISTRATION,
      {
        title: "Patients' photos and before and after posts",
        law: "Code of medical ethics, 2002, and the Digital Personal Data Protection Act, 2023",
        body: "A doctor may not advertise or solicit patients, and a patient's photo is personal data. Take clinical photos with written consent, use them for her care, and never publish one, a before and after post included, without her separate permission and in a way she cannot be recognised.",
        inCurogrid: "No photo can be taken before the Clinical photographs consent is signed. Photos are shown only to your signed-in staff, and Curogrid never posts or shares them.",
      },
      gstRule(
        "Health care services are exempt from GST, but the definition leaves out hair transplant and cosmetic or plastic surgery, unless it restores or reconstructs after a birth defect, an injury or trauma. A skin clinic often bills both kinds. Ask your chartered accountant which of your services are taxed.",
      ),
      PRESCRIPTION_DRUGS,
      consentRule("four consent forms: “Examination and treatment plan”, “Procedure or operation”, “Local anaesthetic” and “Clinical photographs”"),
      wasteRule(
        "Needles from injections and PRP, biopsy tissue and the swabs from cautery are bio-medical waste.",
        "Curogrid does not manage waste. Each procedure is ordered and recorded on the session, so what was done and when is on record.",
      ),
      PATIENT_DATA,
    ],
    disclaimer: DISCLAIMER,
  },
  closing: {
    title: "Try Curogrid Derma in your clinic",
    ready: "the Photos tab, the skin visit, the session settings and your services",
  },
};
