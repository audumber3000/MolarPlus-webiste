import type { BlogPost } from "@/lib/blog";
import { meta as expiryMeta, Body as ExpiryBody } from "./expiry-losses-retail-pharmacy";
import { meta as buyingMeta, Body as BuyingBody } from "./best-pharmacy-software-india-2026";

/**
 * The post registry. Each post file exports its own `meta` and `Body`;
 * this barrel is the only place they are paired up, so adding a post
 * is one import and one array entry.
 *
 * Order here does not matter — getAllPosts() sorts by published date.
 */
export const POSTS: BlogPost[] = [
  { ...expiryMeta, body: ExpiryBody },
  { ...buyingMeta, body: BuyingBody },
];
