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
 * Logos are built from Curogrid Brand Kit v2 by scripts/brand-lockups.py,
 * into public/brand/lockups/<word>/: the kit's wordmark copied path for
 * path, and the speciality word in the wordmark's own face. An edition's
 * logo has no mark: beside the speciality's name the mark made the header
 * logo too big. The plain logo (/logo.svg) keeps it. Re-run that script,
 * never hand-edit the SVGs. `word` also names the edition's colour pair in
 * app/globals.css (`--edition-<word>`) and its screenshot folder in
 * public/screenshots/<word>/.
 */
export type Edition = {
  /** Folder, colour and screenshot name: "physio". */
  word: string;
  /** "Curogrid Physio": the logo's alt text and the product's name on the page. */
  name: string;
  /** `light` and `dark` are the header's logo, `width` and `height`
   *  their files' own size. `small` is the homepage's speciality tile. */
  logo: { light: string; dark: string; width: number; height: number; small: Lockup };
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

type Lockup = { src: string; width: number; height: number };

/** File sizes, as scripts/brand-lockups.py prints them. */
export const LOGO_WIDTH = 576; // the plain logo, with the mark
export const LOGO_HEIGHT = 153;
const WORDMARK_HEIGHT = 97; // every lockup without the mark

const kit = (word: string, width: number) => ({
  light: `/brand/lockups/${word}/color.svg`,
  dark: `/brand/lockups/${word}/on-dark.svg`,
  width,
  height: WORDMARK_HEIGHT,
  small: { src: `/brand/lockups/${word}/small.svg`, width, height: WORDMARK_HEIGHT },
});

const edition = (word: string, name: string, width: number): Edition => ({
  word,
  name: `Curogrid ${name}`,
  logo: kit(word, width),
  photo: { src: `/photos/heroes/${word}.jpg` },
  bandPhoto: `/photos/heroes/${word}-2.jpg`,
});

/** By the speciality's `key` in lib/specialities. */
export const EDITIONS: Readonly<Record<string, Edition>> = {
  // A general clinic shows the plain logo, in the app and here.
  general_practice: {
    word: "general",
    name: "Curogrid",
    logo: {
      light: "/logo.svg",
      dark: "/logo-reversed.svg",
      width: LOGO_WIDTH,
      height: LOGO_HEIGHT,
      small: { src: "/brand/lockups/general/small.svg", width: 395, height: WORDMARK_HEIGHT },
    },
    photo: { src: "/photos/heroes/general.jpg" },
    bandPhoto: "/photos/heroes/general-2.jpg",
  },
  paediatrics: edition("paeds", "Paeds", 618),
  obstetrics_gynaecology: edition("gynae", "Gynae", 630),
  dermatology: edition("derma", "Derma", 633),
  ent: edition("ent", "ENT", 558),
  physiotherapy: edition("physio", "Physio", 632),
  ophthalmology: edition("eye", "Eye", 539),
  orthopaedics: edition("ortho", "Ortho", 612),
  general_surgery: edition("surgery", "Surgery", 681),
  diabetology: edition("diabetes", "Diabetes", 705),
};

export function getEdition(key: string): Edition | undefined {
  return EDITIONS[key];
}
