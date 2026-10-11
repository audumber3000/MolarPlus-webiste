/**
 * The product screenshots, in one place with their alt text.
 *
 * Every one is a real capture of the real app on a staged clinic
 * ("Sanjeevani Clinic") whose patients are invented. Newer captures that still show test
 * clinic names live in `design/screenshots-not-for-publishing/`, outside
 * `public/`, so they are never served. See README.md.
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
