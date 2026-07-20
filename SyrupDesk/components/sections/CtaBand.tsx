import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { SIGNUP_URL, whatsappLink } from "@/lib/site";

export function CtaBand({
  title = "Print your first bill today",
  body = "The free plan covers a single counter with GST billing, and there is no card to enter. If you would rather see it first, message us on WhatsApp and we will walk you through it.",
  placement,
}: {
  title?: string;
  body?: string;
  placement: string;
}) {
  return (
    <Section tone="dark">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[1.75rem] leading-tight font-bold tracking-tight text-white sm:text-h2">
            {title}
          </h2>
          <p className="measure mx-auto mt-4 text-body-lg text-green-100">{body}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink
              href={SIGNUP_URL}
              size="lg"
              className="border-white bg-white text-green-700 hover:border-green-100 hover:bg-green-100"
            >
              Start free
            </ButtonLink>
            <ButtonLink
              href={whatsappLink()}
              variant="secondary"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              className="border-green-200 text-white hover:bg-green-800"
            >
              Talk to us on WhatsApp
            </ButtonLink>
          </div>
          <p className="mt-4 text-small text-green-200" data-placement={placement}>
            Free plan · No card needed · Your data stays yours
          </p>
        </div>
      </Container>
    </Section>
  );
}
