import { Container, Section } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";

export type LegalSection = {
  heading: string;
  paragraphs?: ReadonlyArray<string>;
  list?: ReadonlyArray<string>;
  after?: ReadonlyArray<string>;
};

const slug = (heading: string) => heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/** The shared layout of the four legal pages: a contents list on the
 *  left, numbered sections on the right. */
export function LegalDoc({
  path,
  title,
  lead,
  updated,
  sections,
}: {
  path: string;
  title: string;
  lead: string;
  /** Shown to the reader: "11 October 2026". */
  updated: string;
  sections: ReadonlyArray<LegalSection>;
}) {
  return (
    <>
      <PageHero trail={[{ name: title, path }]} title={title} lead={lead} />
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-16">
            <nav aria-label="On this page" className="self-start lg:sticky lg:top-24">
              <p className="text-small text-gray-600">Last updated {updated}</p>
              <ol className="mt-4 border-t border-gray-200 text-[0.9375rem]">
                {sections.map((section, i) => (
                  <li key={section.heading} className="border-b border-gray-200">
                    <a href={`#${slug(section.heading)}`} className="flex min-h-11 items-center gap-3 py-2 text-gray-700 hover:text-teal-700">
                      <span className="w-5 shrink-0 text-gray-400" data-numeric>{i + 1}</span>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="measure space-y-12">
              {sections.map((section, i) => (
                <section key={section.heading} id={slug(section.heading)} aria-labelledby={`${slug(section.heading)}-h`}>
                  <h2 id={`${slug(section.heading)}-h`} className="text-h3">
                    <span className="mr-3 text-gray-400" data-numeric>{i + 1}</span>
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4 text-body text-gray-700">
                    {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {section.list && (
                      <ul className="list-disc space-y-2 pl-5 marker:text-gray-400">
                        {section.list.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    )}
                    {section.after?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
