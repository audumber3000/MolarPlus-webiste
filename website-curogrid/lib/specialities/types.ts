/** The shape of a speciality. The facts themselves are in one file per speciality; see index.ts. */
export type Service = { name: string; price: number; minutes: number };

export type Course = {
  /** The switch's own words in the booking drawer. */
  title: string;
  /** What one booking in the course is called: "Session 3 of 6". */
  noun: string;
  count: number;
  everyDays: number;
  minutes?: number;
};

/** One step of the clinic's day. `href` must be a page on this site. */
export type DayStep = { where: string; title: string; body: string; href?: string; linkText?: string };

export type Speciality = {
  slug: string;
  /** The app's template key. */
  key: string;
  /** The name on the app's own speciality picker. */
  appLabel: string;
  /** Short name for menus and cards. */
  name: string;
  /** "skin and hair clinic": used mid-sentence. */
  clinic: string;
  /** Who runs it: "dermatologist". */
  doctor: string;
  /** Who the page is for, with the other spellings and everyday names. */
  madeFor: string;
  /** The words this doctor types into a search box: "pediatric clinic software". Used in the price question. */
  searchTerm: string;
  /** Slug of the blog post written for this speciality, when there is one. */
  guide?: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** The 40 to 60 word plain answer under the headline. */
  lead: string;
  /** One line for the homepage grid and the index. */
  card: string;
  /** What the page is about, in the words this doctor searches with. */
  overview: { title: string; body: ReadonlyArray<string> };
  /** Three things that are true of this speciality and no other. */
  points: ReadonlyArray<{ title: string; body: string }>;
  departments: ReadonlyArray<string>;
  services: ReadonlyArray<Service>;
  medicines: ReadonlyArray<string>;
  tests: ReadonlyArray<string>;
  scans: ReadonlyArray<string>;
  procedures: ReadonlyArray<string>;
  /** How a dose is written in this speciality: choices in the How often and How to take lists. */
  doseWords: ReadonlyArray<string>;
  /** Lengths of treatment this speciality adds to the For box. */
  durationWords: ReadonlyArray<string>;
  course: Course;
  fileCard: { title: string; body: string };
  consents: ReadonlyArray<string>;
  /** Diagnoses this doctor writes most, from the shared ICD-10 starter list. */
  diagnoses: ReadonlyArray<string>;
  /** What that part of the list covers, in a sentence or two. */
  diagnosisNote: string;
  /** One working day, step by step, from behaviour checked in the app. */
  day: ReadonlyArray<DayStep>;
  /** What a doctor of this speciality might assume and Curogrid does not do. */
  notDone: ReadonlyArray<{ title: string; body: string }>;
  faqs: ReadonlyArray<{ q: string; a: string }>;
};

export const GENERAL_COURSE: Course = { title: "Book several visits", noun: "visit", count: 3, everyDays: 7 };

/** The number of rows in icd10_opd_starter.csv. Every clinic searches the same list. */
export const DIAGNOSIS_COUNT = 365;
