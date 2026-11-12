import { Container } from "@/components/ui/Section";
import { HeroPhoto } from "@/components/HeroPhoto";
import { TrialCta, WhatsAppCta } from "@/components/Cta";
import { TRIAL_DAYS, TRIAL_PLAN } from "@/content/pricing";

/** The closing band on most pages. */
export function CtaBand({
  placement,
  title = "Try Curogrid in your own clinic",
  body = `The trial is ${TRIAL_DAYS} days of the ${TRIAL_PLAN} plan. Pick your speciality, and the services, medicines and booking are set up before your first patient.`,
  whatsappMessage,
  photo,
}: {
  placement: string;
  title?: string;
  body?: string;
  whatsappMessage?: string;
  /** A photo blended into the right of the band; the buttons then sit under the text. */
  photo?: string;
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-teal-900 py-16 text-teal-100 lg:py-24">
      {photo && <HeroPhoto src={photo} />}
      <Container className="relative">
        <div className={photo ? "flex max-w-xl flex-col gap-8" : "flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"}>
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
