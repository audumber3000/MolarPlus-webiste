import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

/**
 * Read only client for the site.
 *
 * `useCdn` is off so an edit in the Studio shows up on the next revalidate
 * rather than whenever the CDN happens to expire. The dataset is public, so
 * no token is needed to read.
 */
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: "published",
});
