import Image from "next/image";
import { Container, Section } from "@/components/ui/Section";
import { SAMPLE_CLIENTS, SAMPLE_LISTINGS, SAMPLE_TESTIMONIALS } from "@/content/proof.sample";
import { clientsFor, testimonialsFor } from "@/content/proof";

/**
 * The proof on a speciality page and the home page. Real entries come
 * from content/proof.ts, which needs a record of consent for each one.
 *
 * In development (`npm run dev`) an empty section shows the invented
 * samples from content/proof.sample.ts instead, each marked "Sample", so
 * the layout can be tested. `next build` sets NODE_ENV to "production",
 * so the samples never reach the built site.
 */
const DEV = process.env.NODE_ENV === "development";

type Quote = { quote: string; name: string; role: string; clinic: string; city: string; photo?: string };

function SampleTag() {
  return (
    <span className="ml-2 rounded-sm bg-amber-50 px-1.5 py-0.5 align-middle text-micro font-bold tracking-wider text-amber-700 uppercase">
      Sample
    </span>
  );
}

/** Where the drawn sample logos live (public/samples/clinics). */
const sampleLogo = (speciality: string, name: string) =>
  `/samples/clinics/${speciality}/${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}.svg`;

/** "Used by" logos, then "Listed on" badges, in one quiet band under the hero. */
export function ProofStrip({ speciality, clinicWord }: { speciality: string; clinicWord: string }) {
  const clients = clientsFor(speciality);
  const sampleClients = DEV && clients.length === 0 ? SAMPLE_CLIENTS[speciality] ?? [] : [];
  const sampleListings = DEV ? SAMPLE_LISTINGS : [];
  const hasClients = clients.length > 0 || sampleClients.length > 0;
  const hasListings = sampleListings.length > 0;
  if (!hasClients && !hasListings) return null;
  const logos = [
    ...clients.map((c) => ({ key: c.name, name: c.name, locations: c.city ?? "", src: c.logo })),
    ...sampleClients.map((c) => ({ key: c.name, name: c.name, locations: c.city, src: sampleLogo(speciality, c.name) })),
  ];
  return (
    <Section className="py-10 lg:py-12">
      <Container>
        {hasClients && (
          <p className="text-center text-small font-semibold text-gray-500">
            Some of the {clinicWord} using Curogrid
            {sampleClients.length > 0 && <SampleTag />}
          </p>
        )}
      </Container>
      {hasClients && (
        <Container>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {logos.map((logo) => (
              <li key={logo.key} className="flex min-h-28 w-[calc(50%-0.375rem)] flex-col sm:w-56 items-center justify-center gap-2 rounded-md border border-gray-200 bg-gray-0 px-4 py-5 text-center">
                {logo.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={logo.src} alt={logo.name} className="max-h-12 w-auto max-w-40 object-contain" loading="lazy" />
                ) : (
                  <span className="text-sm font-semibold leading-snug text-gray-700">{logo.name}</span>
                )}
                {logo.src && <span className="text-xs font-medium leading-snug text-gray-700">{logo.name}</span>}
                {logo.locations && <span className="text-xs leading-snug text-gray-500">{logo.locations}</span>}
              </li>
            ))}
          </ul>
        </Container>
      )}
      <Container>
        {hasListings && (
          <div className={hasClients ? "mt-12 border-t border-gray-200 pt-8" : ""}>
            <p className="text-center text-small font-semibold text-gray-500">
              Listed on
              {sampleListings.length > 0 && <SampleTag />}
            </p>
            <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {sampleListings.map((l) => (
                <li key={l.name}>
                  <Image src={l.logo} alt={l.name} width={l.width} height={l.height} className={`${l.heightClass} w-auto`} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </Section>
  );
}

function Initials({ name }: { name: string }) {
  const letters = name
    .replace(/^Dr\.?\s+/i, "")
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return <span className="grid size-12 shrink-0 place-items-center rounded-md bg-teal-100 text-small font-bold text-teal-800">{letters}</span>;
}

function Card({ t, sample }: { t: Quote; sample: boolean }) {
  return (
    <figure className="flex h-full flex-col rounded-md border border-gray-200 bg-gray-0 p-6">
      <blockquote className="flex-1 text-body text-gray-800">“{t.quote}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        {t.photo ? <Image src={t.photo} alt="" width={48} height={48} className="size-12 rounded-md object-cover" /> : <Initials name={t.name} />}
        <span>
          <span className="block font-semibold text-gray-900">
            {t.name}
            {sample && <SampleTag />}
          </span>
          <span className="block text-small text-gray-600">
            {t.role}, {t.clinic}, {t.city}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

/** What doctors of this speciality say. */
export function Testimonials({ speciality, doctorWord }: { speciality: string; doctorWord: string }) {
  const real: ReadonlyArray<Quote> = testimonialsFor(speciality);
  const samples = DEV && real.length === 0 ? SAMPLE_TESTIMONIALS[speciality] ?? [] : [];
  if (real.length === 0 && samples.length === 0) return null;
  return (
    <Section tone="alt">
      <Container>
        <h2 className="max-w-[22ch] text-[1.75rem] leading-tight font-bold tracking-tight sm:text-h2">What {doctorWord} say</h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {real.map((t) => (
            <li key={t.name}>
              <Card t={t} sample={false} />
            </li>
          ))}
          {samples.map((t) => (
            <li key={t.name}>
              <Card t={t} sample />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
