import type { CSSProperties } from "react";
import Link from "next/link";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DemoCta, TrialCta } from "@/components/Cta";
import { ProductShot } from "@/components/mockups/ProductShot";
import { PhoneShot } from "@/components/mockups/PhoneShot";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProofStrip, Testimonials } from "@/components/sections/Proof";
import { PriceStrip } from "@/components/sections/PriceStrip";
import { ScreenGrid } from "@/components/sections/ScreenGrid";
import { SpecialityPills } from "@/components/sections/SpecialityPills";
import { HeroPhoto } from "@/components/HeroPhoto";
import { JsonLd } from "@/components/JsonLd";
import { sharedFaqs } from "./parts";
import { softwareApplicationSchema } from "@/lib/jsonld";
import { SITE } from "@/lib/site";
import { courseWords, withArticle, type Speciality } from "@/lib/specialities";
import type { Edition } from "@/lib/editions";
import type { Showcase, Spotlight } from "@/content/showcases";
import { PLANS, TRIAL_DAYS, TRIAL_PLAN, rupees } from "@/content/pricing";
import { getPost } from "@/lib/blog";

/**
 * A speciality's edition page ("Curogrid Physio"). It sells to a busy
 * doctor: each section is a big picture, one line and three short
 * benefits. The detail a doctor may want later (every field on the form,
 * the clinic's flow step by step, the rules in India, what it does not
 * do, the medicine lists) is folded into rows that open on a tap. Folded
 * text stays in the HTML, so search engines still read all of it.
 *
 * Its body is about this speciality only. The header ("Other
 * specialities") and the footer still lead to the other nine, so the page
 * is never a dead end (lib/editions.ts). The edition's colour is set once,
 * on the wrapper, as --accent and --accent-on-dark.
 */
const H2 = "text-[1.75rem] leading-tight font-bold tracking-tight sm:text-h2";
const SUMMARY =
  "flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 text-h4 [&::-webkit-details-marker]:hidden";
type Tone = "default" | "alt";

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className="mt-1 shrink-0 text-accent">
      <path d="M4.5 10.5l3.5 3.5 7.5-8" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Benefits({ items, dark = false }: { items: ReadonlyArray<string>; dark?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((b) => (
        <li key={b} className={`flex gap-3 text-body-lg font-semibold ${dark ? "text-white" : "text-gray-900"}`}>
          <span className={dark ? "text-accent-on-dark" : ""}>
            <Check />
          </span>
          {b}
        </li>
      ))}
    </ul>
  );
}

function Plus({ dark = false }: { dark?: boolean }) {
  return (
    <span aria-hidden="true" className={`text-2xl leading-none transition-transform group-open:rotate-45 ${dark ? "text-teal-200" : "text-gray-500"}`}>
      +
    </span>
  );
}

/** The picture, and the phone overlapping its corner when there is one. */
function Picture({ shot, phone, priority = false }: { shot: NonNullable<Spotlight["shot"]>; phone?: Spotlight["phone"]; priority?: boolean }) {
  if (!phone) return <ProductShot shot={shot} priority={priority} />;
  return (
    <div className="relative pb-6 lg:pb-12">
      <div className="lg:mr-[12%]">
        <ProductShot shot={shot} priority={priority} sizes="(min-width: 1200px) 960px, 100vw" />
      </div>
      <PhoneShot
        shot={phone}
        sizes="(min-width: 1024px) 240px, 160px"
        className="absolute right-0 bottom-0 hidden sm:block sm:max-w-[160px] lg:max-w-[240px]"
      />
    </div>
  );
}

/** Everything in a spotlight beyond its benefits, folded. */
function Detail({ x }: { x: Spotlight }) {
  const blocks = [
    ...(x.lists ?? []).map((list) => ({ title: list.title, rows: list.parts.map((p) => [p.label, p.detail] as const) })),
    ...(x.groups ? [{ title: x.groups.title, rows: x.groups.items.map((g) => [g.name, g.items.join(", ")] as const) }] : []),
  ];
  if (blocks.length === 0 && !x.chips && !x.card && !x.note) return null;
  return (
    <details className="group mt-10 border-y border-gray-200">
      <summary className={`${SUMMARY} text-gray-900 hover:text-teal-700`}>
        See everything it records
        <Plus />
      </summary>
      <div className="grid gap-10 pb-8 lg:grid-cols-2 lg:gap-16">
        {blocks.map((b) => (
          <div key={b.title}>
            <h3 className="text-h4">{b.title}</h3>
            <dl className="mt-3 border-t border-gray-200">
              {b.rows.map(([label, detail]) => (
                <div key={label} className="grid gap-1 border-b border-gray-200 py-2.5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <dt className="font-semibold text-gray-900">{label}</dt>
                  <dd className="text-[0.9375rem] text-gray-700">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
        {(x.chips || x.card || x.note) && (
          <div className="space-y-6">
            {x.chips && (
              <div>
                <h3 className="text-h4">{x.chips.title}</h3>
                <p className="mt-2 text-[0.9375rem] text-gray-700">
                  {x.chips.items.join(", ")}. {x.chips.after}
                </p>
              </div>
            )}
            {x.card && (
              <div>
                <h3 className="text-h4">{x.card.title}</h3>
                <p className="mt-2 text-[0.9375rem] text-gray-700">{x.card.body}</p>
              </div>
            )}
            {x.note && <p className="text-[0.9375rem] text-gray-700">{x.note}</p>}
          </div>
        )}
      </div>
    </details>
  );
}

function SpotlightSection({ x, tone, heroSrc }: { x: Spotlight; tone: Tone; heroSrc: string }) {
  // The hero already shows this picture: do not show it twice.
  const showShot = !!x.shot && x.shot.src !== heroSrc;
  return (
    <Section tone={tone} id={x.id}>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-3 text-small font-bold tracking-wider text-teal-700 uppercase">{x.eyebrow}</p>
            <h2 className={`max-w-[20ch] ${H2}`}>{x.title}</h2>
            <p className="measure mt-4 text-body-lg text-gray-600">{x.intro}</p>
          </div>
          <Benefits items={x.benefits} />
        </div>
        {showShot && (
          <div className="mt-10">
            <Picture shot={x.shot!} phone={x.phone} />
          </div>
        )}
        <Detail x={x} />
      </Container>
    </Section>
  );
}

export function ShowcasePage({ s, showcase: x, edition }: { s: Speciality; showcase: Showcase; edition: Edition }) {
  const accent = {
    "--accent": `var(--edition-${edition.word})`,
    "--accent-on-dark": `var(--edition-${edition.word}-on-dark)`,
  } as CSSProperties;
  const crumb = edition.name === "Curogrid" ? `Curogrid for ${s.name.toLowerCase()}` : edition.name;
  const spotlightTone = (i: number): Tone => (i % 2 === 0 ? "alt" : "default");
  const clinicTone: Tone = x.band ? "default" : spotlightTone(x.spotlights.length);
  const phones = x.shots.phone;
  // The phone section: this speciality's own phone screen first, then the everyday ones, leaving out any the dark band already shows.
  const inBand = new Set((x.band?.phones ?? []).map((shot) => shot.src));
  const mobile = phones
    ? [x.hero.phone, phones.today, phones.appointments, phones.bills, phones.home, phones.more]
        .filter((shot): shot is NonNullable<typeof shot> => !!shot && !inBand.has(shot.src))
        .slice(0, 4)
    : [];
  const [plus] = PLANS;
  const guide = s.guide ? getPost(s.guide) : undefined;

  // The folded "good to know" rows: the rules in India, then what it does not do, then the lists.
  const lists = (
    [
      ["Medicines offered as you type", s.medicines],
      ["Tests, one tap on the visit", s.tests],
      ["Scans, one tap on the visit", s.scans],
      [`${x.procedureLabel ?? "Procedures"}, one tap in a new order`, s.procedures],
      ["Diagnoses searched most", s.diagnoses],
    ] as ReadonlyArray<[string, ReadonlyArray<string>]>
  ).filter(([, items]) => items.length > 0);
  const goodToKnow = [
    ...x.rules.items.map((r) => ({
      q: r.title,
      a: (
        <>
          <p>
            {r.body} In Curogrid: {r.inCurogrid}
          </p>
          <p className="mt-2 text-small text-gray-500">
            Under: {r.law}.
            {r.source && (
              <>
                {" "}
                <a href={r.source.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-teal-700">
                  Source: {r.source.label}
                </a>
              </>
            )}
          </p>
        </>
      ),
    })),
    ...s.notDone.map((n) => ({ q: n.title, a: n.body })),
    ...lists.map(([title, items]) => ({ q: title, a: `${items.join(", ")}.` })),
  ];

  return (
    <div style={accent}>
      <JsonLd
        data={{
          ...softwareApplicationSchema({
            name: edition.name === "Curogrid" ? `Curogrid for ${s.clinic}s` : edition.name,
            description: s.metaDescription,
            path: `/${s.slug}`,
            category: x.category,
            features: [
              ...x.spotlights.flatMap((spot) => spot.benefits),
              `${s.course.title}: ${courseWords(s.course)}`,
              "Tokens and the waiting line",
              "Billing with UPI, cash and card",
              "WhatsApp and email appointment reminders",
              "Phone app for Android and iPhone",
            ],
          }),
          screenshot: `${SITE.url}${x.hero.web.src}`,
          audience: { "@type": "Audience", audienceType: s.madeFor },
          countriesSupported: "IN",
        }}
      />

      {/* Hero */}
      <section className="on-dark relative overflow-hidden bg-teal-900 pt-8 text-teal-100 lg:pt-10">
        {edition.photo && (
          <div className="absolute inset-x-0 top-0 h-[34rem]">
            <HeroPhoto src={edition.photo.src} position={edition.photo.position} />
          </div>
        )}
        <Container className="relative">
          <Breadcrumbs
            trail={[
              { name: "Specialities", path: "/specialities" },
              { name: crumb, path: `/${s.slug}` },
            ]}
            tone="dark"
          />
          <p className="mt-8 text-small font-bold tracking-wider text-accent-on-dark uppercase">{x.eyebrow}</p>
          <h1 className="mt-3 max-w-[20ch] text-[2.125rem] leading-[1.1] font-extrabold tracking-tight text-white sm:text-display">
            {s.h1}
          </h1>
          <p className="measure mt-5 text-body-lg text-teal-100">{x.tagline}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <TrialCta placement={`speciality_hero_${s.key}`} tone="dark" />
            <DemoCta placement={`speciality_hero_${s.key}`} tone="dark" />
          </div>
          <p className="mt-4 text-small text-teal-200" data-numeric>
            From {rupees(plus.monthly)} a month for the whole clinic. {TRIAL_DAYS} days free.
          </p>
          <figure className="mt-12 pb-10 lg:mt-16 lg:pb-16">
            <Picture shot={x.hero.web} phone={x.hero.phone} priority />
            <figcaption className="sr-only">{x.hero.caption}</figcaption>
          </figure>
        </Container>
      </section>

      <ProofStrip speciality={s.key} clinicWord={`${s.clinic}s`} />

      {x.spotlights.map((spot, i) => (
        <SpotlightSection key={spot.id} x={spot} tone={spotlightTone(i)} heroSrc={x.hero.web.src} />
      ))}

      {/* One more thing that matters to this kind of clinic */}
      {x.band && (
        <Section tone="dark" id={x.band.id}>
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
              <div>
                <p className="mb-3 text-small font-bold tracking-wider text-accent-on-dark uppercase">{x.band.eyebrow}</p>
                <h2 className={`text-white ${H2}`}>{x.band.title}</h2>
                <div className="mt-8">
                  <Benefits items={x.band.steps.map((step) => step.title)} dark />
                </div>
                <details className="group mt-8 border-y border-white/15">
                  <summary className={`${SUMMARY} text-white`}>
                    How it works
                    <Plus dark />
                  </summary>
                  <div className="space-y-4 pb-6 text-[0.9375rem] text-teal-100">
                    <p>{x.band.intro}</p>
                    {x.band.steps.map((step) => (
                      <p key={step.title}>
                        <span className="font-semibold text-white">{step.title}. </span>
                        {step.body}
                      </p>
                    ))}
                    {x.band.limits && <p>{x.band.limits}</p>}
                  </div>
                </details>
              </div>
              {x.band.phones && x.band.phones.length > 0 ? (
                <ul className="grid grid-cols-3 gap-3 sm:gap-5">
                  {x.band.phones.map((shot) => (
                    <li key={shot.src}>
                      <PhoneShot shot={shot} sizes="(min-width: 1024px) 200px, 30vw" />
                    </li>
                  ))}
                </ul>
              ) : (
                x.band.shot && <ProductShot shot={x.band.shot} sizes="(min-width: 1024px) 600px, 100vw" />
              )}
            </div>
          </Container>
        </Section>
      )}

      {/* The rest of the clinic, in pictures */}
      <Section tone={clinicTone}>
        <Container>
          <SectionHeader
            eyebrow="The whole clinic"
            title="Front desk, money and team, in one place"
            intro="Tokens, appointments, bills, staff and the day's takings, on the computer and the phone."
          />
          <ScreenGrid
            items={[
              { shot: x.shots.today, caption: "Today's line" },
              { shot: x.shots.week, caption: "The appointment book" },
              { shot: x.shots.dashboard, caption: "The owner's dashboard" },
              { shot: x.shots.billing, caption: "Billing by UPI, card and cash" },
            ]}
          />
          <details className="group mt-12 border-y border-gray-200">
            <summary className={`${SUMMARY} text-gray-900 hover:text-teal-700`}>
              {x.journey.title}
              <Plus />
            </summary>
            <p className="measure pt-2 pb-4 text-[0.9375rem] text-gray-600">{x.journey.intro}</p>
            <ol className="pb-6">
              {x.journey.steps.map((step, i) => (
                <li key={step.title} className="grid gap-1 border-t border-gray-200 py-4 lg:grid-cols-[14rem_1fr] lg:gap-10">
                  <p className="text-small font-bold text-teal-700">
                    <span data-numeric>{i + 1}.</span> {step.stage}
                  </p>
                  <p className="text-[0.9375rem] text-gray-700">
                    <span className="font-semibold text-gray-900">{step.title}. </span>
                    {step.body}
                    {step.href && step.linkText && (
                      <>
                        {" "}
                        <Link href={step.href} className="font-semibold text-teal-700 underline underline-offset-4">
                          {step.linkText}
                        </Link>
                      </>
                    )}
                  </p>
                </li>
              ))}
            </ol>
          </details>
        </Container>
      </Section>

      {/* The phone app, on its own */}
      {mobile.length > 0 && (
        <Section tone="dark" id="phone-app">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
              <div>
                <p className="mb-3 text-small font-bold tracking-wider text-accent-on-dark uppercase">On the phone</p>
                <h2 className={`max-w-[20ch] text-white ${H2}`}>Your clinic in your pocket</h2>
                <p className="measure mt-4 text-body-lg text-teal-100">
                  The same {edition.name === "Curogrid" ? "Curogrid" : edition.name} on Android and iPhone, for the doctor, the front desk and the owner.
                </p>
              </div>
              <Benefits
                dark
                items={[
                  "See the line and call the next patient from anywhere",
                  "Open a patient's file, write the visit, take the payment",
                  "Today's appointments and takings, wherever you are",
                ]}
              />
            </div>
            <ul className={`mx-auto mt-12 grid grid-cols-2 gap-4 sm:gap-6 ${mobile.length >= 4 ? "lg:grid-cols-4" : "max-w-4xl sm:grid-cols-3"}`}>
              {mobile.map((shot) => (
                <li key={shot.src}>
                  <PhoneShot shot={shot} sizes="(min-width: 1024px) 260px, 45vw" className="mx-auto" />
                </li>
              ))}
            </ul>
            <p className="mt-10 text-center">
              <Link href="/mobile-app" className="inline-flex min-h-11 items-center font-semibold text-white underline underline-offset-4 hover:text-teal-200">
                About the phone app
              </Link>
            </p>
          </Container>
        </Section>
      )}

      <Testimonials speciality={s.key} doctorWord={`${s.doctor}s`} />

      <PriceStrip placement={`speciality_price_${s.key}`} />

      <FaqSection items={[...s.faqs, ...sharedFaqs(s)]} title={`Questions from ${s.doctor}s`} />

      {guide && (
        <Section className="py-10 lg:py-12">
          <Container>
            <p className="text-body text-gray-700">
              From the blog:{" "}
              <Link href={`/blog/${guide.slug}`} className="font-semibold text-teal-700 underline underline-offset-4">
                {guide.title}
              </Link>
            </p>
          </Container>
        </Section>
      )}

      {/* Good to know, folded: rules, limits, lists */}
      <Section tone="alt" id="good-to-know">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <h2 className={H2}>Good to know</h2>
              <p className="mt-4 text-[0.9375rem] text-gray-600">
                Registrations and rules for {withArticle(s.clinic)} in India, what Curogrid does not do, and the lists it offers.
                The rules are a plain summary, not legal advice, checked on{" "}
                <time dateTime={x.rules.checked.iso}>{x.rules.checked.text}</time>.
              </p>
            </div>
            <Accordion items={goodToKnow} firstOpen={false} />
          </div>
        </Container>
      </Section>

      {/* The way on to the other editions */}
      <Section className="py-10 lg:py-12">
        <Container>
          <SpecialityPills tone="light" exclude={s.slug} label={`Not ${withArticle(s.clinic)}? The other editions`} />
        </Container>
      </Section>

      <CtaBand
        placement={`speciality_footer_${s.key}`}
        title={x.closing.title}
        body={`${TRIAL_DAYS} days of ${TRIAL_PLAN}, free. Pick “${s.appLabel}” in setup and ${x.closing.ready} are ready before your first patient.`}
        whatsappMessage={`Hi, I run ${withArticle(s.clinic)} and want to know more about ${edition.name}.`}
      />
    </div>
  );
}
