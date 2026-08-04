import Image from "next/image";
import { Container, Section } from "@/components/ui/Section";
import { AWARDS } from "@/content/social-proof";

/**
 * Review-platform awards, in the split the category has settled on:
 * the claim on the left, the evidence on the right, so the badges are
 * read as proof of a sentence rather than as decoration.
 *
 * Renders nothing while AWARDS is empty — same guard as the trust bar
 * and the testimonials. An awards section with no awards is worse than
 * no section, and this way the layout is ready the day the first badge
 * arrives instead of being built under time pressure then.
 */
export function Awards() {
  if (AWARDS.length === 0) return null;

  // Plain tone deliberately: it sits between the testimonials and the
  // FAQ, both of which are `alt`.
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-h2 text-ink-900">Don&rsquo;t just take our word for it</h2>
            <p className="measure mt-4 text-body-lg text-ink-700">
              SyrupDesk is rated by the pharmacies running it, on the software review
              platforms buyers actually check.
            </p>
          </div>

          <ul className="grid grid-cols-2 justify-items-center gap-8 sm:grid-cols-3">
            {AWARDS.map((award) => (
              <li key={`${award.platform}-${award.award}-${award.year}`}>
                <a
                  href={award.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center transition-opacity duration-200 ease-out hover:opacity-80"
                >
                  <Image
                    src={award.src}
                    /* Spelled out rather than "award badge": this is the
                       only text a screen reader or an image search gets. */
                    alt={`${award.platform} ${award.award} ${award.year} — SyrupDesk`}
                    width={award.width}
                    height={award.height}
                    className="h-auto w-full max-w-[140px]"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
