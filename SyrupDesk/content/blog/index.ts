import type { ComponentType } from "react";

/**
 * The original TSX posts. Nothing on the site reads these any more: they are
 * the input to scripts/migrate-posts-to-sanity.ts, which rendered them into
 * the Portable Text now held in Sanity. Kept so that migration is repeatable
 * and auditable. New posts are written in the Studio, not here.
 */
export type LegacyPost = {
  slug: string;
  title: string;
  description: string;
  published: string;
  updated?: string;
  tag: string;
  readingMinutes: number;
  coverImage?: string;
  coverAlt?: string;
  body: ComponentType;
};
import { meta as expiryMeta, Body as ExpiryBody } from "./expiry-losses-retail-pharmacy";
import { meta as buyingMeta, Body as BuyingBody } from "./best-pharmacy-software-india-2026";
import { meta as gstMeta, Body as GstBody } from "./gst-for-medical-stores-2026";
import { meta as scheduleMeta, Body as ScheduleBody } from "./schedule-h-h1-x-register-guide";
import { meta as openMeta, Body as OpenBody } from "./how-to-open-medical-store-india";
import { meta as paperMeta, Body as PaperBody } from "./billing-software-vs-paper-bill-book";
import { meta as regularsMeta, Body as RegularsBody } from "./keep-regular-customers-coming-back";
import { meta as growMeta, Body as GrowBody } from "./how-to-grow-medical-store-2026";
import { meta as featuresMeta, Body as FeaturesBody } from "./pharmacy-software-features-that-matter";
import { meta as appMeta, Body as AppBody } from "./pharmacy-app-for-medical-store-owners";

/**
 * The post registry. Each post file exports its own `meta` and `Body`;
 * this barrel is the only place they are paired up, so adding a post
 * is one import and one array entry.
 *
 * Order here does not matter: getAllPosts() sorts by published date.
 */
export const POSTS: LegacyPost[] = [
  { ...expiryMeta, body: ExpiryBody },
  { ...buyingMeta, body: BuyingBody },
  { ...gstMeta, body: GstBody },
  { ...scheduleMeta, body: ScheduleBody },
  { ...openMeta, body: OpenBody },
  { ...paperMeta, body: PaperBody },
  { ...regularsMeta, body: RegularsBody },
  { ...growMeta, body: GrowBody },
  { ...featuresMeta, body: FeaturesBody },
  { ...appMeta, body: AppBody },
];
