import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./ui/Section";
import { SocialLinks } from "./SocialLinks";
import { StoreBadge } from "./StoreBadges";
import { SITE, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const COLUMNS = [
  {
    heading: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy policy" },
      { href: "/terms", label: "Terms of service" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="on-dark bg-green-700 text-green-100">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="text-white">
              <Logo byline linkByline tone="dark" />
            </div>
            <p className="measure mt-4 text-small text-green-200">
              Pharmacy management software for retail pharmacies in India: billing, inventory,
              purchases, customers and GST.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center gap-2 text-body font-medium text-white underline underline-offset-4 transition-colors duration-200 ease-out hover:text-green-200"
            >
              <WhatsAppIcon tone="current" />
              Talk to us on WhatsApp
            </a>
            {/* Sitewide, so every page carries the outbound profile
                links that back the Organization `sameAs`. */}
            <nav aria-label="SyrupDesk on social media" className="mt-4">
              <SocialLinks className="-ml-3" />
            </nav>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="text-small font-semibold uppercase tracking-wider text-green-300">
                {column.heading}
              </h2>
              <ul className="mt-4 space-y-1">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-11 items-center text-body text-green-100 transition-colors duration-200 ease-out hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Download Apps — same column the MolarPlus footer carries. */}
          <div>
            <h2 className="text-small font-semibold uppercase tracking-wider text-green-300">
              Download apps
            </h2>
            <p className="mt-4 text-micro font-semibold uppercase tracking-wider text-green-300/70">
              Mobile
            </p>
            <div className="mt-2 flex max-w-[10rem] flex-col gap-2.5">
              <StoreBadge store="appStore" className="h-auto w-full" />
              <StoreBadge store="playStore" className="h-auto w-full" />
            </div>
            <p className="mt-6 text-micro font-semibold uppercase tracking-wider text-green-300/70">
              Desktop
            </p>
            <div className="mt-2 flex max-w-[10rem] flex-col gap-2.5">
              <StoreBadge store="windows" className="h-auto w-full" />
              <StoreBadge store="mac" className="h-auto w-full" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-green-600 py-8 text-small text-green-200 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}, a {SITE.parent} product. Made in India.
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href={`tel:${SITE.phone}`}
              className="transition-colors duration-200 ease-out hover:text-white"
            >
              {SITE.phoneDisplay}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="transition-colors duration-200 ease-out hover:text-white"
            >
              {SITE.email}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
