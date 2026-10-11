import { notFound } from "next/navigation";
import { OG_CONTENT_TYPE, OG_SIZE, shareImage } from "@/lib/og";
import { SPECIALITIES, getSpeciality } from "@/lib/specialities";

/** One share image for each speciality page, with that page's headline. */
export const alt = "Curogrid clinic management software, set up for this speciality";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return SPECIALITIES.map((s) => ({ speciality: s.slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ speciality: string }> }) {
  const { speciality } = await params;
  const s = getSpeciality(speciality);
  if (!s) notFound();

  return shareImage({ title: s.h1, line: s.card });
}
