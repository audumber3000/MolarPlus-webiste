import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { SPECIALITIES } from "@/lib/specialities";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <p className="text-small font-bold tracking-wider text-teal-700 uppercase">Page not found</p>
        <h1 className="mt-3 max-w-[18ch] text-[2.125rem] leading-[1.1] font-extrabold tracking-tight sm:text-display">
          That page is not here
        </h1>
        <p className="measure mt-5 text-body-lg text-gray-700">
          The address may be mistyped, or the page may have moved. These are the pages most people
          are looking for.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/">Go to the homepage</ButtonLink>
          <ButtonLink href="/sitemap" variant="secondary">See every page</ButtonLink>
        </div>
        <ul className="mt-12 grid max-w-3xl gap-x-12 border-t border-gray-200 sm:grid-cols-2">
          {SPECIALITIES.map((s) => (
            <li key={s.slug} className="border-b border-gray-200">
              <Link href={`/${s.slug}`} className="flex min-h-12 items-center text-body font-semibold text-gray-900 hover:text-teal-700">
                Curogrid for {s.doctor}s
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
