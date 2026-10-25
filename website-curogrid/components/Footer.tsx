import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./ui/Section";
import { SocialLinks } from "./SocialLinks";
import { ANY_STORE_LIVE, StoreBadges } from "./StoreBadges";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { ADDRESS_LINE, SITE, whatsappLink } from "@/lib/site";
import { SPECIALITIES } from "@/lib/specialities";

type FooterLink = { href: string; label: string; external?: boolean };

const COLUMNS: ReadonlyArray<{ heading: string; links: ReadonlyArray<FooterLink> }> = [
  {
    heading: "Product",
    links: [
      { href: "/features", label: "All features" },
      { href: "/features/tokens-and-queue", label: "Tokens and queue" },
      { href: "/features/appointments", label: "Appointments" },
      { href: "/features/patient-records", label: "Patient files" },
      { href: "/features/billing", label: "Billing" },
      { href: "/mobile-app", label: "Mobile app" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    heading: "Specialities",
    links: [
      ...SPECIALITIES.map((s) => ({ href: `/${s.slug}`, label: s.name })),
      { href: "/specialities", label: "All specialities" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/book-demo", label: "Book a demo" },
      { href: "/hospitals", label: "For hospitals" },
      { href: SITE.parentUrl, label: SITE.parent, external: true },
    ],
  },
  {
    heading: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "Questions and answers" },
      { href: "/sitemap", label: "Sitemap" },
      { href: SITE.dentalUrl, label: "MolarPlus, for dental clinics", external: true },
    ],
  },
];

const LEGAL: ReadonlyArray<FooterLink> = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/refund-policy", label: "Refunds" },
  { href: "/delete-account", label: "Delete account" },
  { href: "/security", label: "Security" },
];

const LINK = "inline-flex min-h-10 items-center text-[0.9375rem] text-teal-100 transition-colors duration-150 ease-out hover:text-white";

function FooterAnchor({ link }: { link: FooterLink }) {
  return link.external ? (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={LINK}>
      {link.label}
    </a>
  ) : (
    <Link href={link.href} className={LINK}>
      {link.label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="on-dark bg-teal-950 text-teal-100">
      <Container>
        <div className="grid gap-x-8 gap-y-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo tone="dark" />
            <p className="mt-5 max-w-[34ch] text-[0.9375rem] text-teal-200">
              Clinic management software for Indian clinics. Tokens, appointments, patient files,
              prescriptions and bills, set up for your speciality.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-semibold text-white underline underline-offset-4 hover:text-teal-200"
            >
              <WhatsAppIcon tone="current" />
              Talk to us on WhatsApp
            </a>
            <p className="mt-1 text-[0.9375rem]">
              <a href={`tel:${SITE.phone}`} className="inline-flex min-h-10 items-center whitespace-nowrap hover:text-white">{SITE.phoneDisplay}</a>
            </p>
            <p className="text-[0.9375rem]">
              <a href={`mailto:${SITE.email}`} className="inline-flex min-h-10 items-center hover:text-white">{SITE.email}</a>
            </p>
            <nav aria-label="Curogrid on social media" className="mt-3">
              <SocialLinks className="-ml-3" />
            </nav>
            {/* Sitewide badges only once an app is really listed. */}
            {ANY_STORE_LIVE && <StoreBadges className="mt-5" />}
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="text-micro font-bold tracking-wider text-teal-300 uppercase">{column.heading}</h2>
              <ul className="mt-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <FooterAnchor link={link} />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-small text-teal-200 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}, a{" "}
            <a href={SITE.parentUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">
              {SITE.parent}
            </a>{" "}
            product. {ADDRESS_LINE}.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-5">
              {LEGAL.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex min-h-10 items-center hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
