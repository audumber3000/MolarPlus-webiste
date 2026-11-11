import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShowcasePage } from "@/components/speciality/ShowcasePage";
import { buildMetadata } from "@/lib/seo";
import { SPECIALITIES, getSpeciality } from "@/lib/specialities";
import { getEdition } from "@/lib/editions";
import { getShowcase } from "@/content/showcases";

/**
 * Every speciality's page: its own edition ("Curogrid Physio"), written
 * for that kind of clinic alone. The layout is components/speciality/
 * ShowcasePage.tsx; the facts are lib/specialities/<key>.ts and
 * content/showcases/<key>.ts; the logo and colour are lib/editions.ts.
 *
 * The pages live at the site root (`/physiotherapy-clinic-management-
 * software`), so this segment would otherwise swallow any mistyped URL:
 * `dynamicParams = false` makes everything not listed a 404.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return SPECIALITIES.map((s) => ({ speciality: s.slug }));
}

type Props = { params: Promise<{ speciality: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { speciality: slug } = await params;
  const s = getSpeciality(slug);
  if (!s) return {};
  return buildMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/${s.slug}` });
}

export default async function SpecialityPage({ params }: Props) {
  const { speciality: slug } = await params;
  const s = getSpeciality(slug);
  const showcase = s && getShowcase(s.key);
  const edition = s && getEdition(s.key);
  if (!s || !showcase || !edition) notFound();
  return <ShowcasePage s={s} showcase={showcase} edition={edition} />;
}
