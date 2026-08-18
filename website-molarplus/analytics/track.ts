/**
 * Fail-safe tracking wrapper around the posthog-js singleton.
 *
 * Mirrors the app's `analytics/` structure. Every helper no-ops silently when
 * PostHog is not loaded (no key configured, SSR, ad-blocked, init failed) so
 * analytics can never break the page.
 */
import posthog from 'posthog-js';
import {
  MKT_EVENTS,
  firstTouchTypeFor,
  type MktEvent,
  type CtaLocation,
  type Product,
  type PlanTier,
  type BillingCycle,
} from './events';

type Props = Record<string, unknown>;

/** Low-level capture. Use the typed helpers below where one exists. */
export function track(event: MktEvent, properties?: Props): void {
  if (typeof window === 'undefined') return;
  try {
    if (!posthog.__loaded) return;
    posthog.capture(event, properties);
  } catch {
    /* never let analytics throw into the UI */
  }
}

export function trackCtaClick(location: CtaLocation, label: string): void {
  track(MKT_EVENTS.ctaClicked, { location, label });
}

/**
 * Fire on any "Sign up / Get started / Login" link that hands off to the app.
 *
 * NOTE: this is a *click*, and the browser may abandon the request as it
 * navigates cross-domain. Treat it as diagnostic ("which CTA earns clicks") and
 * treat the app's own `/signup` pageview as the authoritative funnel step.
 */
export function trackSignupStarted(
  location: CtaLocation,
  destination: string,
  product: Product = 'clinic',
): void {
  track(MKT_EVENTS.signupStarted, { location, destination, product });
}

export function trackPricingViewed(): void {
  track(MKT_EVENTS.pricingViewed);
}

/** Fire when a visitor clicks the CTA on a specific pricing card. */
export function trackPlanSelected(
  plan: PlanTier,
  billingCycle: BillingCycle,
  country: string,
): void {
  track(MKT_EVENTS.planSelected, { plan, billing_cycle: billingCycle, country });
}

export function trackDemoRequested(location: CtaLocation): void {
  track(MKT_EVENTS.demoRequested, { location });
}

/** form_id only — never pass raw email/phone into properties. */
export function trackContactSubmitted(formId: string): void {
  track(MKT_EVENTS.contactSubmitted, { form_id: formId });
}

export function trackAppStoreClick(
  store: 'apple' | 'google',
  product = 'clinic',
): void {
  track(
    store === 'apple' ? MKT_EVENTS.appStoreClicked : MKT_EVENTS.playStoreClicked,
    { product },
  );
}

export function trackDesktopDownload(platform: 'windows' | 'mac'): void {
  track(MKT_EVENTS.desktopDownloadClicked, { platform });
}

export function trackFaqExpanded(question: string): void {
  track(MKT_EVENTS.faqExpanded, { question });
}

/** A blog post page was opened. */
export function trackBlogPostViewed(
  slug: string,
  title: string,
  category: string,
): void {
  track(MKT_EVENTS.blogPostViewed, { slug, title, category });
}

/** A blog post was scrolled far enough to count as read. */
export function trackBlogPostRead(slug: string, category: string): void {
  track(MKT_EVENTS.blogPostRead, { slug, category });
}

/**
 * Records how this visitor FIRST arrived, as set-once person properties.
 *
 * Why person properties rather than an event or a super-property: the journey we
 * care about ("read a blog post → browsed the product → signed up days later on
 * app.molarplus.com") crosses both a time gap and a domain boundary. Person
 * properties live server-side on the person record and survive the `identify()`
 * merge the app performs at signup, so `signup_completed` can be broken down by
 * `first_touch_type` even though that property was set on a different site.
 *
 * Set-once semantics mean the FIRST landing page wins forever — later visits
 * never overwrite it, which is exactly what first-touch attribution means.
 *
 * PostHog already captures `$initial_pathname`, `$initial_referrer` and
 * `$initial_utm_*` automatically; we add only the semantic bucket and the blog
 * slug, which are far easier to break down by than a raw URL string.
 */
let firstTouchSent = false;

export function captureFirstTouch(pathname: string): void {
  if (typeof window === 'undefined' || firstTouchSent) return;
  try {
    if (!posthog.__loaded) return;
    firstTouchSent = true;

    const type = firstTouchTypeFor(pathname);
    const props: Props = { first_touch_type: type };

    // /blog/<slug> → capture which post did the acquiring.
    if (type === 'blog') {
      const slug = pathname.split('/')[2];
      if (slug) props.first_touch_blog_slug = slug;
    }

    // (undefined, setOnceProps) — first value wins, never overwritten.
    posthog.setPersonProperties(undefined, props);
  } catch {
    /* never let analytics throw into the UI */
  }
}
