import Link from 'next/link';
import { Database, KeyRound, RefreshCw, ScrollText, ShieldCheck, WifiOff } from 'lucide-react';
import LegalLayout, { Bullets, Clause } from '@/components/LegalLayout';
import { pageMetadata } from '@/lib/seo';
import { CONTACT } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Security',
  description:
    'How Clino Health secures patient data across MolarPlus and SyrupDesk — tenant isolation, role-based access, encryption in transit and at rest, audit logs and data portability.',
  path: '/security',
});

/**
 * NOTE — this page was rewritten during the Next.js rebuild.
 *
 * The old static page said "your data never leaves your system" and
 * "no data transmission over the internet". That described a desktop-only
 * product. Both shipping brands now run as hosted multi-tenant apps
 * (app.molarplus.com, app.syrupdesk.com) on paid monthly plans, so that
 * claim had become false — and a false claim on a security page is worse
 * than no page. It now describes the architecture that actually exists.
 *
 * Two claims from the old page were dropped rather than reworded:
 * HIPAA (a US statute that does not govern an Indian clinic, and which
 * we are not positioned to attest to) and ISO 27001 (a certification we
 * do not hold — "follows the standard" is not a thing that can be
 * verified). The DPDP Act 2023 is the law that actually applies.
 */

const CONTROLS = [
  {
    Icon: Database,
    title: 'Tenant isolation',
    body: 'Every clinic, laboratory and store is a separate tenant. Queries are scoped to the practice that owns the record, so one practice cannot reach another practice’s data.',
  },
  {
    Icon: KeyRound,
    title: 'Role-based access control',
    body: 'Owners, doctors, technicians and front-desk staff hold different permissions. You decide who can view, edit or delete a record, and you can revoke access immediately.',
  },
  {
    Icon: ShieldCheck,
    title: 'Encryption in transit and at rest',
    body: 'All traffic between your device and our servers runs over TLS. Stored data is encrypted at rest using industry-standard algorithms.',
  },
  {
    Icon: ScrollText,
    title: 'Audit logging',
    body: 'Record access and changes are logged with the user and timestamp, so there is a trail to inspect if a question is ever raised.',
  },
  {
    Icon: WifiOff,
    title: 'Offline resilience',
    body: 'The desktop apps keep working through an internet outage and sync when the connection returns. A dropped line stops the sync, not the clinic.',
  },
  {
    Icon: RefreshCw,
    title: 'Regular security updates',
    body: 'Fixes ship to the hosted apps continuously and to the desktop apps as updates. Keeping the desktop app current is the one part that needs you.',
  },
];

export default function SecurityPage() {
  return (
    <>
      <LegalLayout
        title="Security"
        intro="Patient records are the most sensitive files most people will ever have. Here is precisely how we handle them — and where the responsibility is yours rather than ours."
        updated="August 2026"
      >
        <Clause heading="Where your data lives">
          <p>
            MolarPlus and SyrupDesk run as hosted applications. Your practice&apos;s data
            sits in our managed database rather than on the computer at your front desk,
            which is what lets the web, mobile and desktop apps show the same record to
            different people at the same time.
          </p>
          <p>
            The desktop apps hold a local working copy so billing and record-keeping
            survive an internet outage, and reconcile with the server once you are back
            online.
          </p>
        </Clause>

        <Clause heading="Access control">
          <p>Within a practice, you control who sees what:</p>
          <Bullets
            items={[
              'Create accounts with different permission levels for owners, doctors and staff',
              'Control who can view, edit or delete patient records',
              'Review user activity through audit logs',
              'Remove a user’s access immediately when they leave',
            ]}
          />
        </Clause>

        <Clause heading="Regulatory position">
          <p>
            We build against India&apos;s Digital Personal Data Protection Act, 2023, which
            is the law that governs patient data held by an Indian practice, alongside the
            IT (Reasonable Security Practices) Rules, 2011.
          </p>
          <p>
            We do not claim HIPAA compliance or ISO 27001 certification. HIPAA is United
            States legislation and does not govern an Indian clinic; ISO 27001 is a
            certification held after an external audit, and we will say so here when we
            hold one rather than before.
          </p>
        </Clause>

        <Clause heading="What remains your responsibility">
          <p>
            We secure the platform. The practice secures its own use of it — and in
            practice this is where most real incidents begin:
          </p>
          <Bullets
            items={[
              'Use strong, unique passwords and do not share logins between staff',
              'Remove accounts for staff who have left',
              'Keep desktop apps and the operating systems they run on updated',
              'Restrict physical access to computers left logged in at the counter',
              'Keep your own exported backups if your retention obligations require them',
            ]}
          />
        </Clause>

        <Clause heading="Reporting a vulnerability">
          <p>
            If you find a security issue, tell us before you tell anyone else and we will
            work it promptly. Email{' '}
            <a href={`mailto:${CONTACT.security}`} className="font-semibold text-clino-medium hover:text-clino-dark">
              {CONTACT.security}
            </a>{' '}
            or call{' '}
            <a href={`tel:${CONTACT.phone}`} className="font-semibold text-clino-medium hover:text-clino-dark">
              {CONTACT.phoneDisplay}
            </a>
            . We do not take legal action against researchers who report in good faith and
            give us reasonable time to fix the issue.
          </p>
        </Clause>

        <Clause heading="Related">
          <p>
            See the{' '}
            <Link href="/privacy" className="font-semibold text-clino-medium hover:text-clino-dark">
              privacy policy
            </Link>{' '}
            for what we collect and why, and{' '}
            <Link href="/platform" className="font-semibold text-clino-medium hover:text-clino-dark">
              how we build
            </Link>{' '}
            for the engineering decisions underneath all of this.
          </p>
        </Clause>
      </LegalLayout>

      <section className="border-t border-clino-edge bg-clino-wash py-16">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-ink">The controls, in short</h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-clino-edge bg-clino-edge sm:grid-cols-2 lg:grid-cols-3">
            {CONTROLS.map(({ Icon, title, body }) => (
              <div key={title} className="bg-white p-7">
                <Icon className="h-6 w-6 text-clino-medium" strokeWidth={1.75} />
                <h3 className="mt-4 text-base font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
