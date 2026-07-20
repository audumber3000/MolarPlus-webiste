import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./ui/Section";
import { SITE, whatsappLink } from "@/lib/site";

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
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-white">
              <Logo byline />
            </div>
            <p className="measure mt-4 text-small text-green-200">
              Pharmacy management software for retail pharmacies in India — billing, inventory,
              purchases, customers and GST.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center text-body font-medium text-white underline underline-offset-4 transition-colors duration-200 ease-out hover:text-green-200"
            >
              Talk to us on WhatsApp
            </a>
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
