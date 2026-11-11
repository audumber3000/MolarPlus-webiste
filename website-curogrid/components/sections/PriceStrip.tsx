import Link from "next/link";
import { Container, Section } from "@/components/ui/Section";
import { TrialCta } from "@/components/Cta";
import { GST_PERCENT, PLANS, TRIAL_DAYS, TRIAL_PLAN, rupees } from "@/content/pricing";

/** The price in one band: both plans on one line, then the trial and a link to the full comparison. */
export function PriceStrip({ placement, note = "Everything on this page is included." }: { placement: string; note?: string }) {
  const [plus, pro] = PLANS;
  return (
    <Section tone="tint" className="py-12 lg:py-16">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-h3" data-numeric>
              From {rupees(plus.monthly)} a month, for the whole clinic
            </h2>
            <p className="mt-2 text-body text-gray-800" data-numeric>
              {plus.name} {rupees(plus.monthly)} · {pro.name} {rupees(pro.monthly)} a month, before {GST_PERCENT}% GST
            </p>
            <p className="measure mt-2 text-body text-gray-700">
              Not per doctor. {note} Start with {TRIAL_DAYS} days of {TRIAL_PLAN}, free.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <TrialCta placement={placement} />
            <Link href="/pricing" className="inline-flex min-h-13 items-center px-2 font-semibold text-teal-700 underline underline-offset-4">
              Compare the plans
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
