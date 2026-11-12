import { Container, Section } from "@/components/ui/Section";
import { SPECIALITIES } from "@/lib/specialities";
import { CLIENTS, LISTINGS, STATS, STATS_AS_OF } from "@/content/proof";

/** At most this many clinics from each speciality, so no one kind of clinic fills the wall. */
const PER_SPECIALITY = 2;

/**
 * The homepage's proof, straight under the hero: the headline numbers,
 * then clinics that run on Curogrid, a couple from each speciality in
 * menu order. Only clinics in content/proof.ts appear, each with a record
 * of how it was confirmed. Logos are transparent PNGs in
 * public/customers/<word>/, shown in their own colours on white tiles.
 */
export function ClientWall() {
  const order = [...SPECIALITIES.map((s) => s.key), "general"];
  const picked = order.flatMap((key) => CLIENTS.filter((c) => c.speciality === key).slice(0, PER_SPECIALITY));
  return (
    <Section className="py-12 lg:py-16">
      <Container>
        <dl className="grid grid-cols-3 divide-x divide-gray-200 border-y border-gray-200">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-1 py-5 text-center sm:px-2 sm:py-8">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-[1.625rem] leading-none font-extrabold tracking-tight text-teal-700 sm:text-[2.5rem]" data-numeric>
                  {stat.value}
                </span>
                <span className="mt-2 block text-small text-gray-600 sm:text-[0.9375rem]">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-2 text-right text-micro text-gray-500">As of {STATS_AS_OF}</p>

        {picked.length > 0 && (
          <>
            <h2 className="mt-10 text-center text-small font-semibold text-gray-600">Some of the clinics that run on Curogrid</h2>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {picked.map((c) => (
                <li
                  key={c.name}
                  className="flex h-24 w-[calc(50%-0.375rem)] items-center justify-center rounded-md border border-gray-200 bg-gray-0 px-4 py-3 sm:w-48"
                >
                  {c.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={c.logo}
                      alt={c.city ? `${c.name}, ${c.city}` : c.name}
                      loading="lazy"
                      className="max-h-16 w-auto max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-center text-small leading-snug font-semibold text-gray-700">
                      {c.name}
                      {c.city && <span className="block font-normal text-gray-500">{c.city}</span>}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}

        {LISTINGS.length > 0 && (
          <div className="mt-10 flex flex-col items-center gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:justify-center sm:gap-10">
            <p className="text-small font-semibold text-gray-600">Listed on</p>
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {LISTINGS.map((l) => (
                <li key={l.name}>
                  {/* Logos only, no link: visitors stay on the site. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={l.logo} alt={`Curogrid is listed on ${l.name}`} width={l.width} height={l.height} loading="lazy" className={l.width === l.height ? "h-10 w-auto" : "h-7 w-auto"} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </Section>
  );
}
