import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Blocks, Boxes, GitBranch, Languages, ShieldCheck, WifiOff } from 'lucide-react';
import { BRANDS } from '@/lib/brands';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'How we build',
  description:
    'The shared spine underneath every Clino Health brand — one patient record, four app surfaces, offline resilience, and the engineering decisions that make Indian practices the design target rather than an afterthought.',
  path: '/platform',
});

const PRINCIPLES = [
  {
    Icon: Boxes,
    title: 'One record, four doors',
    body: 'Web, desktop, mobile and the fourth surface each brand needs all read and write the same record. A change at the counter is visible at the chair, and nobody reconciles two versions at closing time.',
  },
  {
    Icon: WifiOff,
    title: 'Offline is a requirement, not a feature',
    body: 'Connectivity in a tier-2 city is not a given. Every brand ships a desktop app that keeps working through an outage and reconciles when the line comes back.',
  },
  {
    Icon: Blocks,
    title: 'Shared spine, separate products',
    body: 'Authentication, tenancy, billing, messaging and reporting are built once and shared. What sits on top is written for one practice type, because a dental chair and a pharmacy counter have nothing in common.',
  },
  {
    Icon: ShieldCheck,
    title: 'Tenancy enforced at the data layer',
    body: 'Isolation between practices is not a filter applied in the interface. It is enforced where the data is read, so a bug in a screen cannot leak another practice’s records.',
  },
  {
    Icon: Languages,
    title: 'Built for how India actually communicates',
    body: 'WhatsApp and SMS are the channels patients read. Support happens in Hindi and English, on the phone, by people who know the product.',
  },
  {
    Icon: GitBranch,
    title: 'Ship small, ship often',
    body: 'The hosted apps update continuously rather than in annual versions. Fixes reach every practice the week they are written.',
  },
];

export default function PlatformPage() {
  return (
    <>
      <section className="border-b border-clino-edge bg-clino-wash">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-clino-light">
            How we build
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-ink md:text-5xl">
            Four brands on one spine
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Every brand we ship looks different because the practices are different. What
            sits underneath — identity, tenancy, records, billing, messaging — is the same
            in all of them. That is why a new brand takes months rather than years, and why
            a security fix reaches every product at once.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-clino-edge bg-clino-edge sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map(({ Icon, title, body }) => (
              <div key={title} className="bg-white p-8">
                <Icon className="h-6 w-6 text-clino-medium" strokeWidth={1.75} />
                <h2 className="mt-5 text-lg font-bold text-ink">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-clino-edge bg-clino-wash py-16 lg:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-extrabold text-ink md:text-4xl">
                The same four surfaces, every time
              </h2>
              <p className="mt-5 leading-relaxed text-ink-muted">
                A practice is not one person at one desk. There is someone at the counter,
                someone with the patient, someone away from the building checking figures,
                and someone outside the practice entirely — the laboratory a clinic sends
                work to, or the customers a pharmacy serves.
              </p>
              <p className="mt-4 leading-relaxed text-ink-muted">
                So every brand ships four apps rather than one, and the fourth is the one
                that changes: it is whoever that practice has to talk to.
              </p>
              <Link
                href="/products"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-clino-medium px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-clino-dark"
              >
                See all four, per brand <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-clino-edge bg-white">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-clino-edge bg-clino-wash/60">
                    <tr>
                      <th className="p-4 font-bold text-ink">Brand</th>
                      <th className="p-4 font-bold text-ink">The fourth surface</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BRANDS.map((brand) => (
                      <tr key={brand.slug} className="border-b border-clino-edge last:border-0">
                        <td className="p-4">
                          <Link
                            href={`/brands/${brand.slug}`}
                            className="font-semibold text-ink hover:text-clino-medium"
                          >
                            {brand.name}
                          </Link>
                          <span className="mt-0.5 block text-xs text-ink-muted">
                            {brand.category}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className="font-semibold text-clino-medium">
                            {brand.apps[brand.apps.length - 1].name}
                          </span>
                          <span className="mt-0.5 block text-xs text-ink-muted">
                            {brand.apps[brand.apps.length - 1].audience}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-clino-edge">
              <Image
                src="/reports.png"
                alt="Reporting and analytics in a Clino Health app"
                width={1400}
                height={900}
                className="h-auto w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-ink md:text-4xl">
                Reporting that answers the owner&apos;s question
              </h2>
              <p className="mt-5 leading-relaxed text-ink-muted">
                Not a dashboard of every metric we could compute — the three or four numbers
                a practice owner actually checks: what came in, what is outstanding, which
                treatments earn, and whether this month beats last.
              </p>
              <p className="mt-4 leading-relaxed text-ink-muted">
                The same reporting engine serves every brand, which is why a pharmacy and a
                dental clinic get comparable figures even though nothing else about them
                matches.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
