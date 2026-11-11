/**
 * The product screenshots, in one place with their alt text.
 *
 * Every one is a real capture of the real app on a staged clinic
 * ("Sanjeevani Clinic") whose patients are invented. Nothing from
 * `public/screenshots/in-progress/` belongs here: those show test
 * clinic names. See README.md.
 */
export type Shot = { src: string; alt: string; width: number; height: number };

const web = (file: string, alt: string): Shot => ({ src: `/screenshots/web/${file}.png`, alt, width: 2880, height: 1800 });
const phone = (file: string, alt: string): Shot => ({
  src: `/screenshots/phone-android/${file}.png`,
  alt,
  width: 1080,
  height: 2400,
});

export const SHOTS = {
  today: web(
    "today",
    "Curogrid's Today screen: nine patients waiting with token numbers and wait times, one called, one with the doctor, and the day's expected appointments",
  ),
  dashboard: web(
    "dashboard",
    "Curogrid's dashboard: money collected today, patients seen, amount still owed, average wait, and a chart of collections over 30 days",
  ),
  appointments: web(
    "appointments",
    "Curogrid's appointment book in day view, one column for each doctor, with the morning's bookings",
  ),
  file: web(
    "file",
    "A patient's file in Curogrid: allergies and conditions at the top, blood pressure over three visits, recent bills and payments, and the next visit",
  ),
  billing: web(
    "billing",
    "Curogrid's billing screen: amount to collect, money taken today split by UPI, cash and card, and a list of unpaid and part-paid bills",
  ),
  patients: web(
    "patients",
    "Curogrid's patient list with age, mobile number, last visit, next visit and amount still to pay for each patient",
  ),
  phoneHome: phone(
    "home",
    "The Curogrid phone app's home screen: patients waiting, money taken today, amount still to collect and takings over 14 days",
  ),
  phoneLine: phone(
    "line",
    "The doctor's line in the Curogrid phone app: tokens in order with wait times and a Call next button",
  ),
  phoneToday: phone("today", "The Today screen in the Curogrid phone app"),
  phoneFile: phone("file", "A patient's file in the Curogrid phone app"),
  phoneBills: phone("bills", "Bills in the Curogrid phone app"),
  phoneAppointments: phone("appointments", "Appointments in the Curogrid phone app"),
} as const;

/**
 * Each edition's own screenshots, taken on a demo clinic of that kind
 * whose patients and staff are invented (Move Well Physiotherapy,
 * Bengaluru; Glow Skin & Hair Clinic, Pune; and so on). Copied from the
 * `raw/` captures in ~/Developer/curogrid/marketing/screenshots/<word>;
 * the site draws its own frame. Each shows the edition's logo at the top
 * left, so never crop that corner off.
 *
 * Phone captures: physio, derma, gynae and paeds have all five everyday
 * screens (`phone: true`). ENT, diabetes and surgery have only the ones
 * that came out right (their other captures were mislabelled or caught
 * loading on 18 October 2026), so they list them. Eye, ortho and general
 * practice have none yet (`phone: false`).
 */
export function editionShot(word: string, kind: "web" | "phone", file: string, alt: string): Shot {
  return kind === "web"
    ? { src: `/screenshots/${word}/web/${file}.png`, alt, width: 2880, height: 1800 }
    : { src: `/screenshots/${word}/phone/${file}.png`, alt, width: 1080, height: 2400 };
}

export type EditionShots = {
  dashboard: Shot;
  today: Shot;
  week: Shot;
  billing: Shot;
  staff: Shot;
  attendance: Shot;
  phone?: Partial<Record<PhoneScreen, Shot>>;
};

export type PhoneScreen = "home" | "today" | "appointments" | "bills" | "more";
const ALL_PHONE: ReadonlyArray<PhoneScreen> = ["home", "today", "appointments", "bills", "more"];

/** The screens every clinic has, each with that clinic's data and logo. `name`: "Curogrid Physio". */
export function editionShots(word: string, name: string, { phone }: { phone: boolean | ReadonlyArray<PhoneScreen> }): EditionShots {
  const has = phone === true ? ALL_PHONE : phone === false ? [] : phone;
  const web = (file: string, alt: string) => editionShot(word, "web", file, alt);
  const mobile = (file: string, alt: string) => editionShot(word, "phone", file, alt);
  return {
    dashboard: web(
      "dashboard",
      `${name}'s dashboard: money collected and billed this month, patients seen, what is left after expenses, a day by day chart and recent payments by UPI, card and cash`,
    ),
    today: web("today", `${name}'s Today screen: patients waiting with token numbers and wait times, the patient with the doctor, and the appointments still expected today`),
    week: web("appointments-week", `${name}'s appointment book for a week, each doctor's bookings in their own colour`),
    billing: web("billing", `${name}'s billing screen: money to collect, taken today by card, UPI and cash, and the clinic's bills with what is paid and what is still to pay`),
    staff: web("staff", `${name}'s staff list: the owner, the doctors, the front desk and the rest of the team, each with their own sign-in`),
    attendance: web("attendance", `${name}'s attendance screen: the week's attendance for each member of the team`),
    phone:
      has.length > 0
        ? Object.fromEntries(
            has.map((screen) => {
              const alt = {
                home: `The ${name} phone app's home screen, with the clinic's numbers for right now`,
                today: `The token line in the ${name} phone app: who is next, who is with the doctor and who is waiting`,
                appointments: `Appointments in the ${name} phone app: a week strip with the number booked each day, and the day's bookings`,
                bills: `Bills in the ${name} phone app: what is still to collect, today's takings, and a Collect button on each unpaid bill`,
                more: `Every place in the ${name} phone app, as tiles`,
              }[screen];
              return [screen, mobile(screen, alt)];
            }),
          )
        : undefined,
  };
}
