'use client';

/**
 * Analytics-instrumented hand-off links, safe to render from Server Components.
 *
 * Most pages in this app (`app/pricing`, `app/about`, `app/lab`, …) are Server
 * Components, which cannot pass an `onClick` to a child. That is the reason the
 * signup CTAs on those pages were previously untracked — the funnel simply could
 * not see them. This component takes only serializable props and owns its own
 * tracking, so a server page can drop it in unchanged.
 *
 * (Contrast `DesktopBadges.tsx`, which accepts an `onClick` prop and therefore
 * only works inside an existing client component.)
 */
import { trackSignupStarted } from '@/analytics/track';
import type { CtaLocation, Product } from '@/analytics/events';

type SignupLinkProps = {
  href: string;
  location: CtaLocation;
  /** Splits the funnel by product. Defaults to the main product, Clinic. */
  product?: Product;
  className?: string;
  /** Several pages set brand colours inline via `colors` from `lib/seo`. */
  style?: React.CSSProperties;
  children: React.ReactNode;
};

/** A link that hands the visitor off to the app (signup / login). */
export function SignupLink({
  href,
  location,
  product = 'clinic',
  className,
  style,
  children,
}: SignupLinkProps) {
  return (
    <a
      href={href}
      className={className}
      style={style}
      onClick={() => trackSignupStarted(location, href, product)}
    >
      {children}
    </a>
  );
}
