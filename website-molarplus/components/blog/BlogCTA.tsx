import { ArrowRight } from 'lucide-react';
import { APP_URL } from '@/lib/constants';
import { colors } from '@/lib/seo';
import { SignupLink } from '@/components/TrackedCTA';

/**
 * The inline aside that gives blog readers a way into the product.
 *
 * Blog posts previously dead-ended: the only exits were "All Posts" and the
 * nav, so content that ranked well produced no measurable signups.
 *
 * Styled as an editor's note rather than an ad unit — a single rule in the
 * brand accent, set in the text column, no card, no gradient, no badge. It is
 * placed mid-article by `splitBodyForCta` because most readers never reach the
 * end of a post, and `not-prose` keeps the surrounding `prose` typography from
 * restyling it.
 */
export default function BlogCTA() {
  return (
    <aside
      className="not-prose my-14 border-l-2 pl-6"
      style={{ borderColor: colors.primary }}
    >
      <p className="text-lg font-bold text-[#1a1c4b] leading-snug">
        Still running your clinic on spreadsheets?
      </p>
      <p className="mt-2 text-gray-600 leading-relaxed">
        MolarPlus keeps patient records, appointments, and billing in one place,
        so the front desk stops rebuilding the same information every morning.
        Free for a single clinic.
      </p>
      <SignupLink
        href={`${APP_URL}/signup`}
        location="blog_post"
        className="mt-4 inline-flex items-center gap-1.5 font-bold hover:gap-2.5 transition-all"
        style={{ color: colors.primary }}
      >
        Start free
        <ArrowRight className="w-4 h-4" />
      </SignupLink>
    </aside>
  );
}
