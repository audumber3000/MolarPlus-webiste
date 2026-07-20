/**
 * Provider-agnostic analytics stub.
 *
 * Deliberately does NOT load a third-party script (§8 of the brief).
 * When a provider is chosen, implement `dispatch` here — every call
 * site already routes through `track()` and needs no change.
 */

export type AnalyticsEvent =
  | "cta_start_free"
  | "cta_whatsapp"
  | "cta_book_demo"
  | "pricing_plan_selected"
  | "faq_opened"
  | "contact_form_submitted"
  | "nav_opened";

type Props = Record<string, string | number | boolean | undefined>;

function dispatch(event: AnalyticsEvent, props?: Props) {
  // TODO: wire a provider here. Left intentionally empty.
  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", event, props ?? {});
  }
}

/** Fail-safe: analytics must never break a page render. */
export function track(event: AnalyticsEvent, props?: Props) {
  try {
    dispatch(event, props);
  } catch {
    /* swallow */
  }
}
