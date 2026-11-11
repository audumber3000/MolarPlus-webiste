import type { EditionShots, Shot } from "@/lib/shots";

/**
 * A speciality's own edition page ("Curogrid Physio"): everything beyond
 * the shared facts in lib/specialities. app/[speciality]/page.tsx renders
 * a speciality with a showcase through components/speciality/
 * ShowcasePage.tsx.
 *
 * The rules of lib/specialities hold here too: every product claim is
 * checked against the app repo, and each file says where.
 */

/** One part of a form on the doctor's screen: its label in the app, and what goes in it. */
export type FormPart = { label: string; detail: string };

/**
 * One section about something only this speciality gets: the physio
 * assessment, the growth chart, the audiogram. The picture comes first,
 * then up to two columns: `lists` and `groups` on the left, the rest on
 * the right. A second list goes to the right when nothing else is there.
 */
export type Spotlight = {
  /** The section's anchor: "assessment". */
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  /** Three short lines on what the doctor gets out of it. Shown first; the detail below folds away. */
  benefits: ReadonlyArray<string>;
  /** Left out when there is no screenshot of it yet. */
  shot?: Shot;
  /** A phone capture of the same thing, set beside the picture. */
  phone?: Shot;
  lists?: ReadonlyArray<{ title: string; parts: ReadonlyArray<FormPart> }>;
  /** Named groups of names: exercises by kind, vaccines by age. */
  groups?: { title: string; items: ReadonlyArray<{ name: string; items: ReadonlyArray<string> }> };
  /** Small ready choices, such as doses. */
  chips?: { title: string; items: ReadonlyArray<string>; after?: string };
  /** Something it prints, or a point worth a box of its own. */
  card?: { title: string; body: string; quote?: string };
  note?: string;
};

export type ShowcaseStep = { stage: string; title: string; body: string; href?: string; linkText?: string };

export type Rule = {
  title: string;
  /** The law or rule it rests on, as it is officially named. */
  law: string;
  body: string;
  /** What Curogrid does about it, or plainly that it does nothing. */
  inCurogrid: string;
  source?: { label: string; href: string };
};

export type Showcase = {
  /** The line above the headline: "For physiotherapy and rehabilitation clinics". */
  eyebrow: string;
  /** The one line under the headline: what the doctor gets. */
  tagline: string;
  /** For the structured data: "Physiotherapy clinic management software". */
  category: string;
  shots: EditionShots;
  hero: { web: Shot; phone?: Shot; caption: string };
  /** This speciality's rows in the at-a-glance table. Price and platforms are added after them. */
  glance: ReadonlyArray<readonly [string, string]>;
  spotlights: ReadonlyArray<Spotlight>;
  journey: {
    title: string;
    intro: string;
    steps: ReadonlyArray<ShowcaseStep>;
    shots: ReadonlyArray<{ shot: Shot; caption: string }>;
  };
  /** A dark band for one more thing that matters to this kind of clinic: home visits, the pregnancy's visits. */
  band?: {
    id: string;
    eyebrow: string;
    title: string;
    intro: string;
    steps: ReadonlyArray<{ title: string; body: string }>;
    phones?: ReadonlyArray<Shot>;
    shot?: Shot;
    limits?: string;
  };
  /** What the lists call this speciality's procedures: "Therapies" for physiotherapy. */
  procedureLabel?: string;
  practiceIntro: string;
  rules: {
    title: string;
    intro: string;
    checked: { iso: string; text: string };
    items: ReadonlyArray<Rule>;
    disclaimer: string;
  };
  /** `ready`: what is set up before the first patient, said after the trial length. */
  closing: { title: string; ready: string };
};
