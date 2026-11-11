import { DERMATOLOGY_SHOWCASE } from "./dermatology";
import { DIABETOLOGY_SHOWCASE } from "./diabetology";
import { ENT_SHOWCASE } from "./ent";
import { GENERAL_PRACTICE_SHOWCASE } from "./general_practice";
import { GENERAL_SURGERY_SHOWCASE } from "./general_surgery";
import { OBSTETRICS_GYNAECOLOGY_SHOWCASE } from "./obstetrics_gynaecology";
import { OPHTHALMOLOGY_SHOWCASE } from "./ophthalmology";
import { ORTHOPAEDICS_SHOWCASE } from "./orthopaedics";
import { PAEDIATRICS_SHOWCASE } from "./paediatrics";
import { PHYSIOTHERAPY_SHOWCASE } from "./physiotherapy";
import type { Showcase } from "./types";

export type { Showcase, Spotlight } from "./types";

/** Edition pages, by the speciality's `key` in lib/specialities. Each also needs an entry in lib/editions.ts. */
const SHOWCASES: Readonly<Record<string, Showcase>> = {
  general_practice: GENERAL_PRACTICE_SHOWCASE,
  paediatrics: PAEDIATRICS_SHOWCASE,
  obstetrics_gynaecology: OBSTETRICS_GYNAECOLOGY_SHOWCASE,
  dermatology: DERMATOLOGY_SHOWCASE,
  ent: ENT_SHOWCASE,
  physiotherapy: PHYSIOTHERAPY_SHOWCASE,
  ophthalmology: OPHTHALMOLOGY_SHOWCASE,
  orthopaedics: ORTHOPAEDICS_SHOWCASE,
  general_surgery: GENERAL_SURGERY_SHOWCASE,
  diabetology: DIABETOLOGY_SHOWCASE,
};

export function getShowcase(key: string): Showcase | undefined {
  return SHOWCASES[key];
}
