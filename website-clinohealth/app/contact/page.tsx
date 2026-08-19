import Link from 'next/link';
import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { BRANDS } from '@/lib/brands';
import { pageMetadata } from '@/lib/seo';
import { CONTACT, whatsappLink } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Contact',
  description:
    'Talk to Clino Health about MolarPlus, SyrupDesk or the hospital and imaging software in development. WhatsApp, phone and email — answered in Hindi and English.',
  path: '/contact',
});

/**
 * Channel-first rather than form-first, deliberately.
 *
 * The old static page rendered a Name/Email/Subject/Message form with no
 * action and no handler — it looked like it worked and silently dropped
 * everything typed into it. Rather than port a dead form forward, this
 * page leads with the three channels that actually reach us, which is
 * also how this buyer prefers to make contact: a pharmacy or clinic owner
 * sends a WhatsApp message, they do not fill in a web form.
 *
 * TODO: if a form is still wanted, it needs a real endpoint (a route
 * handler posting to email or a CRM) before it goes on the page.
 */

const CHANNELS = [
  {
    Icon: MessageCircle,
    title: 'WhatsApp',
    detail: 'Fastest way to reach us',
    action: 'Start a chat',
    href: whatsappLink('Hi Clino Health, I would like to know more about your software.'),
    external: true,
  },
  {
    Icon: Phone,
    title: 'Phone',
    detail: CONTACT.phoneDisplay,
    action: 'Call us',
    href: `tel:${CONTACT.phone}`,
    external: false,
  },
  {
    Icon: Mail,
    title: 'Email',
    detail: CONTACT.support,
    action: 'Send an email',
    href: `mailto:${CONTACT.support}`,
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-clino-edge bg-clino-wash">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-clino-light">
            Contact
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-ink md:text-5xl">
            Tell us how your practice runs
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Whether you want a demo, help with a product you already use, or you run
            something we have not built for yet — the same people answer all three.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {CHANNELS.map(({ Icon, title, detail, action, href, external }) => (
              <a
                key={title}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group rounded-2xl border border-clino-edge bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-clino-wash text-clino-medium">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h2 className="mt-5 text-xl font-bold text-ink">{title}</h2>
                <p className="mt-2 text-sm text-ink-muted">{detail}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-clino-medium group-hover:text-clino-dark">
                  {action} <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-clino-edge bg-clino-wash p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-clino-medium">
                <Clock className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h2 className="mt-5 text-xl font-bold text-ink">Support hours</h2>
              <p className="mt-2 text-ink-muted">{CONTACT.hours}</p>
              <p className="mt-3 text-sm text-ink-muted">
                Answered in Hindi and English. Existing customers with an urgent problem at
                the counter should call rather than email.
              </p>
            </div>

            <div className="rounded-2xl border border-clino-edge bg-clino-wash p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-clino-medium">
                <MapPin className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h2 className="mt-5 text-xl font-bold text-ink">Where we are</h2>
              <address className="mt-2 space-y-1 not-italic leading-relaxed text-ink-muted">
                <p>{CONTACT.address.street}</p>
                <p>
                  {CONTACT.address.city}, {CONTACT.address.state} {CONTACT.address.postalCode}
                </p>
                <p>{CONTACT.address.countryName}</p>
              </address>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-clino-edge bg-clino-wash py-16">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-ink">
            Already using one of our products?
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Each brand has its own site and support. Going direct is usually quicker.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BRANDS.map((brand) => (
              <div key={brand.slug} className="rounded-2xl border border-clino-edge bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-clino-wash text-clino-medium">
                    <brand.Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-bold text-ink">{brand.name}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{brand.tagline}</p>
                {brand.url ? (
                  <a
                    href={brand.url}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-clino-medium hover:text-clino-dark"
                  >
                    Visit site <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <Link
                    href={`/brands/${brand.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-clino-medium hover:text-clino-dark"
                  >
                    In development →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
