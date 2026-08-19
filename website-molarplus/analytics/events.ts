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
  /**
   * A specific plan's CTA was clicked on the pricing UI.
   * props: { plan, billing_cycle, country }
   *
   * `pricingViewed` says people looked; this says which tier and which billing
   * cycle they actually reached for, which is the only way to tell whether the
   * Plus/Pro split and the annual discount are landing.
   */
  planSelected: 'mkt_pricing_plan_selected',
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
  /** A blog post page was opened. props: { slug, title, category } */
  blogPostViewed: 'mkt_blog_post_viewed',
  /**
   * A blog post was actually *read* (scrolled past READ_THRESHOLD), not just
   * opened. Fires at most once per post view. props: { slug, category }
   *
   * This is the signal that separates "content brought a visitor" from
   * "content brought a bounce" — without it, a post with 10k bounced
   * pageviews looks identical to one that genuinely engaged 10k readers.
   */
  blogPostRead: 'mkt_blog_post_read',
} as const;

export type MktEvent = (typeof MKT_EVENTS)[keyof typeof MKT_EVENTS];

/** Where a CTA lives, for the `location` property on `mkt_cta_clicked`. */
export type CtaLocation =
  | 'nav'
  | 'hero'
  | 'pricing'
  | 'footer'
  | 'contact'
  | 'mobile_section'
  | 'workflow'
  | 'final_cta'
  | 'path_solo'
  | 'path_pro'
  | 'path_enterprise'
  // Added for the acquisition funnel: every server-rendered page that hands
  // off to the app now reports its own location.
  | 'umbrella_final'
  | 'pricing_page'
  | 'features'
  | 'platform'
  | 'about'
  | 'lab_hero'
  | 'lab_final'
  | 'blog_post';

/** Which product a signup hand-off is for, so the funnel can be split. */
export type Product = 'clinic' | 'lab';

/** The plans, as used in `mkt_pricing_plan_selected`. */
export type PlanTier = 'plus' | 'pro' | 'growth';

/** Billing cadence chosen on the pricing toggle. */
export type BillingCycle = 'monthly' | 'annual';

/**
 * How a visitor first arrived, recorded ONCE per person as a set-once person
 * property (see `captureFirstTouch`). Because person properties live server-side
 * and survive the `identify()` merge at signup, these answer the question
 * "did people who read the blog eventually sign up?" — the blog visit and the
 * signup happen on different domains, days apart, so a super-property or
 * sessionStorage would not survive the journey.
 */
export type FirstTouchType = 'blog' | 'clinic' | 'lab' | 'umbrella' | 'other';

/** Classify a landing pathname into a `FirstTouchType`. */
export function firstTouchTypeFor(pathname: string): FirstTouchType {
  if (pathname.startsWith('/blog')) return 'blog';
  if (pathname.startsWith('/clinic')) return 'clinic';
  if (pathname.startsWith('/lab')) return 'lab';
  if (pathname === '/') return 'umbrella';
  return 'other';
}
