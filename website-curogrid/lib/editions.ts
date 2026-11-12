/**
 * Each speciality's own edition of Curogrid. Once a clinic picks a
 * speciality, the app shows "Curogrid Derma", "Curogrid Physio" and so on
 * in its side menu and phone header (curogrid-app/src/ui/edition.ts); a
 * general practice shows the plain logo. Every speciality page on this
 * site wears that edition's logo, and its body is about that speciality
 * only. It is not a dead end: the logo goes home, the header menu becomes
 * "Other specialities", the footer keeps its Specialities column, and a
 * row of the other editions sits above the closing band.
 *
 * Logos are the kit's own files (CuroGrid-Logo-Kit/05-specialty-logos),
 * never redrawn. `word` also names the edition's colour pair in
 * app/globals.css (`--edition-<word>`) and its screenshot folder in
 * public/screenshots/<word>/.
 */
export type Edition = {
  /** Folder, colour and screenshot name: "physio". */
  word: string;
  /** "Curogrid Physio": the logo's alt text and the product's name on the page. */
  name: string;
  /** `small` is the compact lockup, for the homepage's speciality tiles. */
  logo: { light: string; dark: string; small: string; width: number };
  /**
   * The photograph blended into the right of the page's hero, from
   * public/photos/heroes/<word>.jpg. These are ImagesBazaar photos used
   * under Clino Health's agreement with ImagesBazaar; each file's image
   * code is in public/photos/CREDITS.md. Shown in black and white under
   * teal, with no name or quote beside it.
   */
  photo?: { src: string; position?: string };
  /** A second photo of the same kind of clinic, blended into the closing band. */
  bandPhoto?: string;
};

const kit = (word: string) => ({
  light: `/brand/05-specialty-logos/${word}/curogrid-${word}-logo-primary.svg`,
  dark: `/brand/05-specialty-logos/${word}/curogrid-${word}-logo-reversed.svg`,
  small: `/brand/05-specialty-logos/${word}/curogrid-${word}-logo-small-primary.svg`,
  width: 538,
});

const edition = (word: string, name: string): Edition => ({
  word,
  name: `Curogrid ${name}`,
  logo: kit(word),
  photo: { src: `/photos/heroes/${word}.jpg` },
  bandPhoto: `/photos/heroes/${word}-2.jpg`,
});

/** By the speciality's `key` in lib/specialities. */
export const EDITIONS: Readonly<Record<string, Edition>> = {
  // A general clinic shows the plain logo, in the app and here.
  general_practice: {
    word: "general",
    name: "Curogrid",
    logo: { light: "/logo.svg", dark: "/logo-reversed.svg", small: "/brand/01-logo/svg/curogrid-logo-small-primary.svg", width: 339 },
    photo: { src: "/photos/heroes/general.jpg" },
    bandPhoto: "/photos/heroes/general-2.jpg",
  },
  paediatrics: edition("paeds", "Paeds"),
  obstetrics_gynaecology: edition("gynae", "Gynae"),
  dermatology: edition("derma", "Derma"),
  ent: edition("ent", "ENT"),
  physiotherapy: edition("physio", "Physio"),
  ophthalmology: edition("eye", "Eye"),
  orthopaedics: edition("ortho", "Ortho"),
  general_surgery: edition("surgery", "Surgery"),
  diabetology: edition("diabetes", "Diabetes"),
};

export function getEdition(key: string): Edition | undefined {
  return EDITIONS[key];
}
