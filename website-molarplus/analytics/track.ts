/**
 * Fail-safe tracking wrapper around the posthog-js singleton.
 *
 * Mirrors the app's `analytics/` structure. Every helper no-ops silently when
 * PostHog is not loaded (no key configured, SSR, ad-blocked, init failed) so
 * analytics can never break the page.
 */
import posthog from 'posthog-js';
import { MKT_EVENTS, type MktEvent, type CtaLocation } from './events';

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

/** Fire on any "Sign up / Get started / Login" link that hands off to the app. */
export function trackSignupStarted(
  location: CtaLocation,
  destination: string,
): void {
  track(MKT_EVENTS.signupStarted, { location, destination });
}

export function trackPricingViewed(): void {
  track(MKT_EVENTS.pricingViewed);
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
