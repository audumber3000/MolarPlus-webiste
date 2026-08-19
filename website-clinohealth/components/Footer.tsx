import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { BRANDS } from '@/lib/brands';
import { CONTACT, SITE } from '@/lib/site';

/**
 * The footer repeats the brand/app hierarchy the mega-menu shows, so a
 * visitor who scrolled past the nav still gets the full portfolio, and
 * so every app has at least one crawlable link on every page.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-clino-edge bg-clino-wash">
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Image
              src="/logo-wordmark.svg"
              alt="Clino Health"
              width={700}
              height={343}
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              {SITE.description}
            </p>
            <address className="mt-6 space-y-1 text-sm not-italic text-ink-muted">
              <p>{CONTACT.address.street}</p>
              <p>
                {CONTACT.address.city}, {CONTACT.address.state} {CONTACT.address.postalCode}
              </p>
              <p>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-clino-medium">
                  {CONTACT.email}
                </a>
              </p>
              <p>
                <a href={`tel:${CONTACT.phone}`} className="hover:text-clino-medium">
                  {CONTACT.phoneDisplay}
                </a>
              </p>
            </address>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-4">
            {BRANDS.map((brand) => (
              <div key={brand.slug}>
                <Link
                  href={`/brands/${brand.slug}`}
                  className="text-sm font-bold text-ink hover:text-clino-medium"
                >
                  {brand.name}
                </Link>
                <ul className="mt-3 space-y-2">
                  {brand.apps.map((app) => (
                    <li key={app.name}>
                      {app.url ? (
                        <a
                          href={app.url}
                          className="flex items-center gap-1 text-sm text-ink-muted hover:text-clino-medium"
                        >
                          {app.name}
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      ) : (
                        <span className="text-sm text-ink-muted/70">{app.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-bold text-ink">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-muted">
              <li><Link href="/products" className="hover:text-clino-medium">All products</Link></li>
              <li><Link href="/platform" className="hover:text-clino-medium">How we build</Link></li>
              <li><Link href="/about" className="hover:text-clino-medium">About</Link></li>
              <li><Link href="/contact" className="hover:text-clino-medium">Contact</Link></li>
              <li><Link href="/security" className="hover:text-clino-medium">Security</Link></li>
              <li><Link href="/privacy" className="hover:text-clino-medium">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-clino-medium">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-clino-edge pt-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.name}. Built in Pune, for Indian healthcare.</p>
          <p>Support in Hindi and English, on WhatsApp and by phone.</p>
        </div>
      </div>
    </footer>
  );
}
