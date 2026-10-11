import { Container } from "@/components/ui/Section";
import { TrialCta, WhatsAppCta } from "@/components/Cta";
import { TRIAL_DAYS, TRIAL_PLAN } from "@/content/pricing";

/** The closing band on most pages. */
export function CtaBand({
  placement,
  title = "Try Curogrid in your own clinic",
  body = `The trial is ${TRIAL_DAYS} days of the ${TRIAL_PLAN} plan. Pick your speciality, and the services, medicines and booking are set up before your first patient.`,
  whatsappMessage,
}: {
  placement: string;
  title?: string;
  body?: string;
  whatsappMessage?: string;
}) {
  return (
    <section className="on-dark bg-teal-900 py-16 text-teal-100 lg:py-20">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="max-w-[20ch] text-[1.75rem] leading-tight font-bold tracking-tight text-white sm:text-h2">{title}</h2>
            <p className="measure mt-4 text-body-lg">{body}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <TrialCta placement={placement} tone="dark" />
            <WhatsAppCta placement={placement} tone="dark" message={whatsappMessage} />
          </div>
        </div>
      </Container>
    </section>
  );
}
