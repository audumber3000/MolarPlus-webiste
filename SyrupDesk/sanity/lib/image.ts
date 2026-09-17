import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({ projectId, dataset });

/** Sanity image reference to a URL. Width is set by the caller so we never
 *  ship a 4000px original to a phone. */
export function urlForImage(source: Image, width: number, height?: number) {
  const img = builder.image(source).width(width).auto("format").fit("crop");
  return (height ? img.height(height) : img).url();
}
