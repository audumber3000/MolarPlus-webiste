import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Section";
import { TRUST_FACTS } from "@/content/pages";

/**
 * Who makes Curogrid and where the records are kept. The clinics that use
 * it are on the homepage's client wall (ClientWall). The photograph is atmosphere only, in black and
 * white under teal, with no name or quote (public/photos/CREDITS.md).
 */
export function TrustBand() {
  return (
    <Section tone="dark">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="relative aspect-[3/2] overflow-hidden rounded-md">
            <Image src="/photos/doctor-corridor.jpg" alt="" fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover grayscale" />
            <div aria-hidden="true" className="absolute inset-0 bg-teal-700/45" />
          </div>
          <div>
            <h2 className="max-w-[22ch] text-[1.75rem] leading-tight font-bold tracking-tight text-white sm:text-h2">
              Who makes it, and where your records are kept
            </h2>
            <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {TRUST_FACTS.map((fact) => (
                <div key={fact.term} className="border-t border-white/15 pt-4">
                  <dt className="font-semibold text-white">
                    {fact.href ? (
                      <Link href={fact.href} className="underline-offset-4 hover:underline">
                        {fact.term}
                      </Link>
                    ) : (
                      fact.term
                    )}
                  </dt>
                  <dd className="mt-1 text-[0.9375rem] text-teal-100">{fact.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
}
