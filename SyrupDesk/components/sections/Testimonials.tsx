import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { Testimonial } from "@/components/ui/Testimonial";
import { TESTIMONIALS } from "@/content/social-proof";
import { SAMPLE_TESTIMONIALS } from "@/content/testimonials.sample";
import { cn } from "@/lib/cn";

/**
 * What pharmacy owners running SyrupDesk say.
 *
 * **Renders nothing until `TESTIMONIALS` holds real quotes.** That is
 * the whole safety mechanism: there is no placeholder array to forget
 * to remove, and no sample copy that could survive a merge. A visitor
 * sees a testimonial section only when there is something true to put
 * in it (BRIEF §7).
 *
 * The grid adapts to how many we actually have. Two real quotes in a
 * three-column grid leaves a hole that reads as a third customer who
 * asked to be taken down — so one centres, two go side by side, and
 * three or more fill the row.
 */
export function Testimonials() {
  // Real quotes always win. Sample quotes are a local design preview only:
  // `next build` runs with NODE_ENV=production, where this is always false.
  const showSamples = TESTIMONIALS.length === 0 && process.env.NODE_ENV !== "production";
  const items = TESTIMONIALS.length > 0 ? TESTIMONIALS : showSamples ? SAMPLE_TESTIMONIALS : [];
  if (items.length === 0) return null;

  const count = items.length;

  return (
    <Section tone="alt">
      <Container>
        {showSamples && (
          <p className="mb-8 rounded-sm border border-warning bg-surface px-4 py-3 text-small text-ink-700">
            <strong>Sample testimonials, shown on your local dev server only.</strong> They never
            appear on the live site. Add real quotes to <code>TESTIMONIALS</code> in
            content/social-proof.ts and these are replaced.
          </p>
        )}
        <SectionHeader
          eyebrow="Customers"
          title="From pharmacies already running on it"
          intro="Every quote here is from an owner who agreed to be named, with their shop and their city. We do not run anonymous testimonials. An unnamed pharmacy in an unnamed town proves nothing."
        />
        <div
          className={cn(
            "grid gap-6",
            count === 1 && "mx-auto max-w-2xl",
            count === 2 && "md:grid-cols-2",
            count >= 3 && "md:grid-cols-2 lg:grid-cols-3",
          )}
        >
          {items.map((testimonial) => (
            <Testimonial
              key={`${testimonial.name}-${testimonial.pharmacy}`}
              data={testimonial}
              sample={showSamples}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
