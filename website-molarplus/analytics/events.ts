/**
 * Marketing-site analytics catalog.
 *
 * This site shares ONE PostHog project with the MolarPlus app. To keep the two
 * data sets cleanly separable:
 *   - every event carries a `source: 'marketing_site'` super-property
 *     (registered once in PostHogProvider), and
 *   - every custom event defined here is prefixed `mkt_` so it can never collide
 *     with the app's own catalog (`signup_completed`, `patient_created`, ...).
 *
 * Keep ALL marketing event names in this file — never scatter string literals.
 */

/** Super-property stamped on every event so app vs. marketing is filterable. */
export const MARKETING_SOURCE = 'marketing_site';

export const MKT_EVENTS = {
  /** A primary call-to-action was clicked. props: { location, label } */
  ctaClicked: 'mkt_cta_clicked',
  /** The pricing UI became visible. */
  pricingViewed: 'mkt_pricing_viewed',
  /** A "book a demo" CTA was clicked. */
  demoRequested: 'mkt_demo_requested',
  /** The contact / demo form was submitted. props: { form_id } — NO raw PII. */
  contactSubmitted: 'mkt_contact_submitted',
  /** A "Sign up / Get started / Login" link that hands off to the app was clicked. */
  signupStarted: 'mkt_signup_started',
  /** Apple App Store badge/link clicked. props: { product } */
  appStoreClicked: 'mkt_app_store_clicked',
  /** Google Play badge/link clicked. props: { product } */
  playStoreClicked: 'mkt_play_store_clicked',
  /** Desktop (Windows / Mac) download badge clicked. props: { platform } */
  desktopDownloadClicked: 'mkt_desktop_download_clicked',
  /** A marketing video was played. */
  videoPlayed: 'mkt_video_played',
  /** An FAQ item was expanded. props: { question } */
  faqExpanded: 'mkt_faq_expanded',
} as const;

export type MktEvent = (typeof MKT_EVENTS)[keyof typeof MKT_EVENTS];

/** Where a CTA lives, for the `location` property on `mkt_cta_clicked`. */
export type CtaLocation =
  | 'nav'
  | 'hero'
  | 'pricing'
  | 'footer'
  | 'contact'
  | 'mobile_section';
