import { ShieldCheck, IndianRupee, Smartphone, LifeBuoy } from 'lucide-react';
import { AWARDS } from '@/lib/social-proof';
import { colors } from '@/lib/seo';

/**
 * The reassurance strip that sits under the hero.
 *
 * Deliberately NOT review-platform award badges. Those artworks (Capterra
 * Shortlist, G2 Leader, GetApp Category Leaders, Software Advice FrontRunners)
 * are trademarked, issued by the platform, and carry a link-back requirement —
 * publishing one that was not awarded is a fabricated credential, and for
 * software handling patient records it is exactly the claim that collapses a
 * deal at procurement. lib/social-proof.ts makes the same call about the same
 * badges; this component defers to it rather than working around it.
 *
 * What it shows instead is four things that are true today and verifiable on
 * the site: the entry price, migration help, the platform coverage, and the
 * data-protection posture. When AWARDS is finally non-empty, the real badges
 * render below these automatically and nothing here needs rewriting.
 */
const SIGNALS = [
  {
    Icon: IndianRupee,
    title: 'Free plan, no expiry',
    note: 'Full clinic from ₹399/month.',
  },
  {
    Icon: LifeBuoy,
    title: 'We move your records',
    note: 'Free migration from paper or other software.',
  },
  {
    Icon: Smartphone,
    title: 'Works on every device',
    note: 'Web, iOS, Android, Windows and Mac.',
  },
  {
    Icon: ShieldCheck,
    title: 'Built for Indian health data',
    note: 'DPDP Act 2023 and ABDM standards.',
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-gray-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {SIGNALS.map(({ Icon, title, note }) => (
            <li key={title} className="flex items-start gap-3.5">
              <Icon
                className="mt-0.5 h-5 w-5 shrink-0"
                style={{ color: colors.primary }}
                aria-hidden="true"
              />
              <div className="min-w-0">
                <div className="text-[15px] font-bold leading-tight text-[#1a1c4b]">{title}</div>
                <p className="mt-1 text-sm leading-snug text-gray-500">{note}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Renders only once a real, earned badge exists. See lib/social-proof.ts. */}
        {AWARDS.length > 0 && (
          <div className="mt-10 border-t border-gray-100 pt-8">
            <p className="mb-6 text-center text-[13px] font-semibold tracking-wide text-gray-500">
              Recognised on the software review platforms buyers check
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
              {AWARDS.map((award) => (
                <li key={`${award.platform}-${award.award}-${award.year}`}>
                  <a
                    href={award.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex transition-opacity hover:opacity-80"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={award.src}
                      alt={`${award.platform} ${award.award} ${award.year}`}
                      className="h-16 w-auto"
                      loading="lazy"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
