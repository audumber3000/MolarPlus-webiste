import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";
import { buildMetadata } from "@/lib/seo";
import { getRouteGroups } from "@/lib/routes";

export const metadata: Metadata = buildMetadata({
  title: "Sitemap of the Curogrid Website",
  description: "Every page on the Curogrid website in one list: specialities, features, pricing, company, resources and legal pages.",
  path: "/sitemap",
});

export default function SitemapPage() {
  return (
    <>
      <PageHero trail={[{ name: "Sitemap", path: "/sitemap" }]} title="Sitemap" lead="Every page on this website." />
      <Section>
        <Container>
          <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {getRouteGroups().map((group) => (
              <nav key={group.heading} aria-label={group.heading}>
                <h2 className="border-b-2 border-gray-900 pb-3 text-h4">{group.heading}</h2>
                <ul>
                  {group.routes.map((route) => (
                    <li key={route.path} className="border-b border-gray-200">
                      <Link href={route.path} className="flex min-h-11 items-center py-2 text-[0.9375rem] text-gray-800 hover:text-teal-700">
                        {route.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
