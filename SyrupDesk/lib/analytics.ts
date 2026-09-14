/**
 * Marketing-site analytics.
 *
 * PostHog, on **SyrupDesk's own project** — not the MolarPlus one. The
 * two are separate products sold to separate buyers; sharing a project
 * would put dentists and pharmacists in one funnel and make every
 * number need a filter before it meant anything.
 *
 * Three things worth knowing before changing this file:
 *
 * 1. **posthog-js is imported dynamically**, after mount, from
 *    `PostHogProvider`. It is ~60KB gzipped and the brief puts the home
 *    route under 150KB of JS total (§8) — a static import spends a
 *    third of that budget on analytics before a single pixel of the
 *    page renders. Loading it late costs us nothing that matters: the
 *    events below are all interactions, which cannot happen before the
 *    page is interactive anyway, and the first pageview is queued.
 *
 * 2. **Every call here is fail-safe.** No key configured, ad-blocked,
 *    offline, init threw — `track()` swallows it. Analytics must never
 *    be the reason a pharmacy owner sees a broken page.
 *
 * 3. **Event names are prefixed `mkt_` on the way out**, matching the
 *    house convention on the MolarPlus site. Call sites use the short
 *    name; the prefix is added in one place, here.
 */

export type AnalyticsEvent =
  | "cta_start_free"
  | "cta_whatsapp"
  | "cta_book_demo"
  | "pricing_plan_selected"
  | "faq_opened"
  | "contact_form_submitted"
  | "nav_opened"
  /** The expiry calculator was actually used — a slider moved or the
   *  purchase figure edited. High-intent: this visitor is doing sums. */
  | "expiry_calculator_used";

type Props = Record<string, string | number | boolean | undefined>;

/** Stamped on every event, so marketing traffic stays separable if the
 *  app ever reports into this same project. */
export const MARKETING_SOURCE = "marketing_site";

/**
 * Only the one method we use.
 *
 * posthog-js hands the `loaded` callback a `PostHogInterface`, which is
 * not the same type as the `PostHog` class it exports — depending on
 * the two against each other is how this file breaks on a patch
 * release. A structural type for `capture` is all the coupling we need.
 */
type Capturer = { capture: (event: string, props?: Props) => unknown };

let client: Capturer | null = null;

/**
 * Events fired before posthog-js finished loading.
 *
 * Small and bounded: if the library never arrives (blocked, offline)
 * the queue is simply dropped rather than growing all session.
 */
const queue: Array<{ event: string; props?: Props }> = [];
const QUEUE_MAX = 20;

/** Called by PostHogProvider once the library is up. */
export function attachClient(ph: Capturer) {
  client = ph;
  for (const item of queue.splice(0)) {
    try {
      ph.capture(item.event, item.props);
    } catch {
      /* swallow */
    }
  }
}

function dispatch(event: AnalyticsEvent, props?: Props) {
  const name = `mkt_${event}`;
  if (client === null) {
    if (queue.length < QUEUE_MAX) queue.push({ event: name, props });
    return;
  }
  client.capture(name, props);
}

/** Fail-safe: analytics must never break a page render. */
export function track(event: AnalyticsEvent, props?: Props) {
  try {
    dispatch(event, props);
  } catch {
    /* swallow */
  }
}

/** A client-side route change. Pageviews are captured manually because
 *  App Router navigations are not full page loads. */
export function trackPageview(url: string) {
  try {
    if (client === null) {
      if (queue.length < QUEUE_MAX) queue.push({ event: "$pageview", props: { $current_url: url } });
      return;
    }
    client.capture("$pageview", { $current_url: url });
  } catch {
    /* swallow */
  }
}
