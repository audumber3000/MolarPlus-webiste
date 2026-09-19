import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL, colors } from '@/lib/seo';
import {
  FRAMEWORKS,
  HOSTING,
  LAST_REVIEWED,
  OPERATOR,
  PRIVACY_CONTACT,
  SAFEGUARDS,
  SUBPROCESSORS,
  statementTitle,
  type Framework,
} from '@/lib/compliance';

/*
 * Building blocks for /compliance. Pages are server components with no
 * client JavaScript: the contents list is plain anchor links and the
 * sticky sidebar is CSS.
 */

export function Flag({ framework, size = 'md' }: { framework: Framework; size?: 'sm' | 'md' | 'lg' }) {
  const dims = { sm: [24, 16], md: [36, 24], lg: [72, 48] }[size];
  return (
    <Image
      src={framework.flag}
      alt={framework.flagAlt}
      width={dims[0]}
      height={dims[1]}
      unoptimized
      className="rounded-[3px] ring-1 ring-black/10 shrink-0"
    />
  );
}

export interface TocEntry {
  id: string;
  title: string;
}

/** Page shell for one regional framework. */
export function ComplianceDocument({
  framework,
  toc,
  children,
}: {
  framework: Framework;
  toc: TocEntry[];
  children: ReactNode;
}) {
  const facts: [string, string][] = [
    ['Applies to', framework.region],
    ['Regulator', framework.regulator],
    ['The clinic is the', framework.clinicRole],
    ['MolarPlus is the', framework.ourRole],
    ['Data is hosted in', HOSTING.location],
    ['Last reviewed', LAST_REVIEWED],
  ];

  const url = `${SITE_URL}/compliance/${framework.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: statementTitle(framework),
    description: framework.summary,
    url,
    publisher: { '@type': 'Organization', name: OPERATOR, url: SITE_URL },
    about: { '@type': 'Legislation', name: framework.law, legislationIdentifier: framework.citation },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Compliance', item: `${SITE_URL}/compliance` },
        { '@type': 'ListItem', position: 2, name: framework.region, item: url },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="relative pt-32 pb-14 border-b border-gray-100 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
            <Link href="/compliance" className="hover:text-gray-900 transition-colors">
              Compliance
            </Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-700">{framework.region}</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <Flag framework={framework} size="lg" />
            <div className="max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">
                {framework.region}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
                {framework.law}
              </h1>
              <p className="mt-4 text-sm font-medium text-gray-500">{framework.citation}</p>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">{framework.summary}</p>
            </div>
          </div>

          <dl className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
            {facts.map(([label, value]) => (
              <div key={label} className="bg-white p-5">
                <dt className="text-xs font-bold uppercase tracking-wider text-gray-500">{label}</dt>
                <dd className="mt-1.5 text-base font-semibold text-[#1a1c4b]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[220px_1fr] gap-12 lg:gap-16">
          <aside className="hidden lg:block">
            <nav aria-label="Contents" className="sticky top-28">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Contents</div>
              <ol className="space-y-2.5 text-sm">
                {toc.map((entry, i) => (
                  <li key={entry.id}>
                    <a href={`#${entry.id}`} className="flex gap-2 text-gray-600 hover:text-[#1a1c4b] transition-colors">
                      <span className="tabular-nums text-gray-400">{i + 1}.</span>
                      <span>{entry.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="max-w-3xl space-y-14 text-gray-700 leading-relaxed">{children}</article>
        </div>
      </div>

      <OtherRegions current={framework.slug} />
    </div>
  );
}

/** A numbered section. `n` must match the entry's position in the page's toc. */
export function Section({ id, n, title, children }: { id: string; n: number; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-bold text-[#1a1c4b] mb-5 flex gap-3">
        <span className="tabular-nums" style={{ color: colors.primary }}>
          {n}.
        </span>
        <span>{title}</span>
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export interface ProvisionRow {
  provision: string;
  requirement: string;
  practice: ReactNode;
}

/** Maps each legal provision to what MolarPlus does about it. */
export function ProvisionTable({ rows, lawLabel = 'Provision' }: { rows: ProvisionRow[]; lawLabel?: string }) {
  return (
    <div className="mt-2 rounded-2xl border border-gray-200 overflow-hidden">
      <div className="hidden md:grid grid-cols-[140px_1fr_1.3fr] bg-slate-50 border-b border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-500">
        <div className="px-4 py-3">{lawLabel}</div>
        <div className="px-4 py-3">What the law requires</div>
        <div className="px-4 py-3">How MolarPlus meets it</div>
      </div>
      <div className="divide-y divide-gray-200">
        {rows.map((row) => (
          <div key={row.provision} className="grid md:grid-cols-[140px_1fr_1.3fr] text-[15px]">
            <div className="px-4 pt-4 md:py-4 font-semibold text-[#1a1c4b]">{row.provision}</div>
            <div className="px-4 pt-1 md:py-4 text-gray-600">{row.requirement}</div>
            <div className="px-4 pt-2 pb-4 md:py-4 text-gray-700">{row.practice}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SafeguardList() {
  return (
    <dl className="grid sm:grid-cols-2 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
      {SAFEGUARDS.map((s, i) => (
        // An odd last item spans both columns, so the grid never ends on an empty cell.
        <div
          key={s.title}
          className={`bg-white p-5 ${i === SAFEGUARDS.length - 1 && SAFEGUARDS.length % 2 === 1 ? 'sm:col-span-2' : ''}`}
        >
          <dt className="font-semibold text-[#1a1c4b]">{s.title}</dt>
          <dd className="mt-1.5 text-[15px] text-gray-600 leading-relaxed">{s.body}</dd>
        </div>
      ))}
    </dl>
  );
}

export function SubprocessorTable() {
  return (
    <div className="rounded-2xl border border-gray-200 overflow-hidden">
      <div className="hidden md:grid grid-cols-[180px_1fr_1fr] bg-slate-50 border-b border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-500">
        <div className="px-4 py-3">Provider</div>
        <div className="px-4 py-3">Purpose</div>
        <div className="px-4 py-3">Data involved</div>
      </div>
      <div className="divide-y divide-gray-200">
        {SUBPROCESSORS.map((s) => (
          <div key={s.name} className="grid md:grid-cols-[180px_1fr_1fr] text-[15px]">
            <div className="px-4 pt-4 md:py-3.5 font-semibold text-[#1a1c4b]">{s.name}</div>
            <div className="px-4 pt-1 md:py-3.5 text-gray-700">{s.purpose}</div>
            <div className="px-4 pt-1 pb-4 md:py-3.5 text-gray-500">{s.data}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactCard({ heading = PRIVACY_CONTACT.role }: { heading?: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/60">
      <div className="text-xs font-bold uppercase tracking-wider text-gray-500">{heading}</div>
      <address className="not-italic mt-3 space-y-1 text-[15px] text-gray-700">
        <div className="font-semibold text-[#1a1c4b]">{PRIVACY_CONTACT.name}</div>
        <div>
          Email:{' '}
          <a href={`mailto:${PRIVACY_CONTACT.email}`} className="underline decoration-gray-300 hover:decoration-current" style={{ color: colors.primary }}>
            {PRIVACY_CONTACT.email}
          </a>
        </div>
        <div>Telephone: {PRIVACY_CONTACT.phone}</div>
        <div>{PRIVACY_CONTACT.address}</div>
      </address>
    </div>
  );
}

/**
 * `compact` is the homepage variant: flag, region and the law's short name
 * on one line, no summary, so four sit in a row beside the security cards.
 */
export function RegionCard({ framework, compact = false }: { framework: Framework; compact?: boolean }) {
  if (compact) {
    return (
      <Link
        href={`/compliance/${framework.slug}`}
        className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-100 hover:shadow-lg transition-all"
      >
        <Flag framework={framework} size="md" />
        <div className="min-w-0">
          <div className="text-xs font-bold uppercase tracking-wider text-gray-500">{framework.regionShort}</div>
          <div className="font-bold text-[#1a1c4b] leading-tight">{framework.name}</div>
        </div>
        <span aria-hidden className="ml-auto text-gray-300 group-hover:text-gray-500 transition-colors">
          →
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={`/compliance/${framework.slug}`}
      className="group flex flex-col h-full rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-100 hover:shadow-lg transition-all"
    >
      <div className="flex items-center gap-3">
        <Flag framework={framework} size="md" />
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-gray-500">{framework.region}</div>
          <div className="text-lg font-bold text-[#1a1c4b]">{framework.name}</div>
        </div>
      </div>
      <p className="mt-4 text-[15px] text-gray-600 leading-relaxed flex-1">{framework.summary}</p>
      <div className="mt-5 text-sm font-semibold" style={{ color: colors.primary }}>
        Read the {framework.name} statement <span aria-hidden className="inline-block group-hover:translate-x-0.5 transition-transform">→</span>
      </div>
    </Link>
  );
}

function OtherRegions({ current }: { current: Framework['slug'] }) {
  return (
    <section className="py-16 bg-slate-50/60 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-[#1a1c4b] mb-6">Other regions</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {FRAMEWORKS.filter((f) => f.slug !== current).map((f) => (
            <RegionCard key={f.slug} framework={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
