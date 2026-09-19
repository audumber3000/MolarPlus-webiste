import type { Metadata } from 'next';
import { ContactCard, RegionCard, SafeguardList, SubprocessorTable } from '@/components/Compliance';
import { FRAMEWORKS, HOSTING, LAST_REVIEWED, OPERATOR, statementTitle } from '@/lib/compliance';
import { SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/seo';

const description =
  'How MolarPlus handles patient data under India’s DPDP Act, HIPAA in the United States, the GDPR in Europe and POPIA in South Africa.';

export const metadata: Metadata = {
  title: 'Compliance and Data Protection',
  description,
  alternates: { canonical: `${SITE_URL}/compliance` },
  openGraph: {
    title: 'Compliance and Data Protection | MolarPlus',
    description,
    url: `${SITE_URL}/compliance`,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Compliance and Data Protection',
  description,
  url: `${SITE_URL}/compliance`,
  publisher: { '@type': 'Organization', name: OPERATOR, url: SITE_URL },
  hasPart: FRAMEWORKS.map((f) => ({
    '@type': 'WebPage',
    name: statementTitle(f),
    url: `${SITE_URL}/compliance/${f.slug}`,
  })),
};

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="pt-36 pb-16 bg-slate-50/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">Compliance</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.05]">
              Patient data, under the law where your clinic practises.
            </h1>
            <p className="mt-7 text-lg md:text-xl text-gray-600 leading-relaxed">
              MolarPlus serves dental clinics in India, the United States, Europe and South Africa. Each statement below
              sets out how MolarPlus handles patient data under the data protection law of that region, provision by
              provision.
            </p>
            <p className="mt-5 text-sm text-gray-500">
              Operated by {OPERATOR} <span className="mx-1.5 text-gray-300">·</span> Last reviewed {LAST_REVIEWED}
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FRAMEWORKS.map((f) => (
              <RegionCard key={f.slug} framework={f} />
            ))}
          </div>
        </div>
      </header>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
            <div className="lg:sticky lg:top-32 self-start">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">In every region</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
                One set of safeguards, whichever law applies.
              </h2>
              <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                Clinic and patient records are stored on {HOSTING.provider} in the {HOSTING.location}. The same
                controls protect every clinic, and each regional statement maps them to the provisions of its law.
              </p>
            </div>
            <SafeguardList />
          </div>
        </div>
      </section>

      <section id="subprocessors" className="py-20 bg-slate-50/60 border-y border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">Sub-processors</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
              Every provider that handles clinic data.
            </h2>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              MolarPlus uses the following service providers to deliver the service. Some process data outside India,
              including in the United States. Under their commercial terms, Anthropic and OpenAI do not use data
              submitted through their APIs to train their models. MolarPlus will update this register before engaging a
              new provider that handles patient data.
            </p>
          </div>
          <SubprocessorTable />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">Shared responsibility</div>
              <h2 className="text-3xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
                What MolarPlus secures, and what the clinic decides.
              </h2>
              <div className="mt-5 space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  MolarPlus is responsible for the security of the service: the infrastructure, the application and the
                  safeguards described on this page.
                </p>
                <p>
                  The clinic is responsible for how it uses the service: obtaining patient consent, deciding which staff
                  may see what, keeping sign-in details private, and keeping records for the period its professional
                  regulator requires.
                </p>
              </div>
            </div>
            <div className="self-end">
              <ContactCard heading="Privacy and grievance contact" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
