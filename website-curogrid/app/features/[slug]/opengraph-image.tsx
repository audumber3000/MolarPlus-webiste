import { notFound } from "next/navigation";
import { OG_CONTENT_TYPE, OG_SIZE, shareImage } from "@/lib/og";
import { FEATURE_PAGES, getFeaturePage } from "@/content/features";

/** One share image for each feature page, with that page's headline. */
export const alt = "A Curogrid feature for clinics";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return FEATURE_PAGES.map((feature) => ({ slug: feature.slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = getFeaturePage(slug);
  if (!feature) notFound();

  return shareImage({ title: feature.h1, line: feature.card, label: "Features" });
}
