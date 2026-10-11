import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";
import { DemoCta, TrialCta } from "@/components/Cta";
import { ProductShot } from "@/components/mockups/ProductShot";
import { PhoneShot } from "@/components/mockups/PhoneShot";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { SpecialityGrid } from "@/components/sections/SpecialityGrid";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { FEATURE_PAGES, getFeaturePage } from "@/content/features";

export const dynamicParams = false;

export function generateStaticParams() {
  return FEATURE_PAGES.map((feature) => ({ slug: feature.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeaturePage(slug);
  if (!feature) return {};
  const seo = buildMetadata({
    title: feature.metaTitle,
    description: feature.metaDescription,
    path: `/features/${feature.slug}`,
  });
  // Tells an AI assistant where the feature pages are as plain Markdown.
  return { ...seo, alternates: { ...seo.alternates, types: { "text/markdown": `${SITE.url}/features.md` } } };
}

export default async function FeaturePage({ params }: Props) {
  const { slug } = await params;
  const feature = getFeaturePage(slug);
  if (!feature) notFound();

  const others = FEATURE_PAGES.filter((f) => f.slug !== feature.slug);

  return (
    <>
      <PageHero
        trail={[
          { name: "Features", path: "/features" },
          { name: feature.name, path: `/features/${feature.slug}` },
        ]}
        title={feature.h1}
        lead={feature.lead}
      >
        <TrialCta placement={`feature_hero_${feature.slug}`} tone="dark" />
        <DemoCta placement={`feature_hero_${feature.slug}`} tone="dark" />
      </PageHero>

      <Section>
        <Container>
          <ProductShot
            shot={feature.shot}
            priority
            caption="A real screen, on a clinic we set up with invented patients."
          />
        </Container>
      </Section>

      <Section tone="alt">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
            <div>
              <h2 className="mb-8 max-w-[22ch] text-[1.75rem] leading-tight font-bold tracking-tight sm:text-h2">{feature.question}</h2>
              <dl>
                {feature.points.map((point) => (
                  <div key={point.title} className="border-t border-gray-300 py-6 first:border-t-2 first:border-gray-900">
                    <dt className="text-h4 text-gray-900">{point.title}</dt>
                    <dd className="measure mt-2 text-body text-gray-700">{point.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
            {feature.phone && (
              <div className="flex flex-col items-center lg:items-end">
                <PhoneShot shot={feature.phone} />
                <p className="mt-4 max-w-[280px] text-small text-gray-600">The same thing on the phone app.</p>
              </div>
            )}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <h2 className="text-[1.75rem] leading-tight font-bold tracking-tight sm:text-h2">{feature.name} at a glance</h2>
            <table className="w-full border-collapse border-y border-gray-200 text-left text-body">
              <caption className="sr-only">{feature.name} in Curogrid: the facts</caption>
              <tbody>
                {feature.facts.map((fact) => (
                  <tr key={fact.term} className="border-b border-gray-200 align-top last:border-0">
                    <th scope="row" className="w-[36%] py-4 pr-4 text-[0.9375rem] font-semibold text-gray-500">{fact.term}</th>
                    <td className="py-4 text-gray-900" data-numeric>{fact.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section className="py-10 lg:py-12">
        <Container>
          <p className="text-body text-gray-700">
            From the blog:{" "}
            <Link href={feature.guide.href} className="font-semibold text-teal-700 underline underline-offset-4">
              {feature.guide.label}
            </Link>
          </p>
        </Container>
      </Section>

      <FaqSection items={feature.faqs} title={`Questions about ${feature.name.toLowerCase()}`} tone="alt" />

      <Section>
        <Container>
          <SectionHeader title="The other main screens" />
          <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-3">
            {others.map((other) => (
              <li key={other.slug} className="border-t-2 border-gray-900 pt-4">
                <h3 className="text-h4">
                  <Link href={`/features/${other.slug}`} className="underline-offset-4 hover:text-teal-700 hover:underline">
                    {other.name}
                  </Link>
                </h3>
                <p className="mt-2 text-[0.9375rem] text-gray-700">{other.card}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="alt">
        <Container>
          <SectionHeader
            eyebrow="Specialities"
            title="It works the way your speciality does"
            intro="The same screen uses different words, services and lists for each kind of clinic."
          />
          <SpecialityGrid />
        </Container>
      </Section>

      <CtaBand placement={`feature_footer_${feature.slug}`} />
    </>
  );
}
