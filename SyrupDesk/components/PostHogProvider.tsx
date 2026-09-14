"use client";

/**
 * Loads PostHog and captures pageviews.
 *
 * **SyrupDesk's own PostHog project**, not the MolarPlus one — set
 * `NEXT_PUBLIC_POSTHOG_KEY` to the SyrupDesk project's key. With no key
 * set (local dev, a preview build, a fork) this renders nothing and
 * loads nothing, which is the behaviour you want in every one of those
 * cases.
 *
 * The library is imported dynamically rather than statically so it
 * lands in its own chunk and stays out of the first load — see the note
 * in `lib/analytics.ts` about the 150KB budget.
 *
 * On session replay: it is **on, with inputs masked**. The contact form
 * takes a pharmacy owner's name and phone number, and a replay that
 * records those keystrokes turns a marketing tool into a store of
 * personal data we would then have to defend. Masked replays still
 * answer what replays are actually for here — where people hesitate,
 * what they scroll past, which control they could not find.
 */

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { attachClient, trackPageview, MARKETING_SOURCE } from "@/lib/analytics";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

let started = false;

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Boot once, on the client, after the page is interactive.
  //
  // There is deliberately no cancellation here. Loading PostHog is a
  // one-time global side effect, not a subscription, and there is
  // nothing to unsubscribe from. An earlier version aborted the
  // in-flight import from the effect's cleanup, which broke it exactly
  // where React runs effects twice: the first pass started the import
  // and was then torn down, the second pass was short-circuited by the
  // `started` guard, and the resolved import saw `cancelled` and
  // returned — so `init()` was never reached and no event ever left the
  // page. The module-level guard alone is the correct shape: it is what
  // makes a double invoke idempotent.
  useEffect(() => {
    if (started || !POSTHOG_KEY) return;
    started = true;

    void import("posthog-js").then(({ default: posthog }) => {
      try {
        posthog.init(POSTHOG_KEY, {
          api_host: POSTHOG_HOST,
          // No PHI on a marketing site, so autocapture is safe and
          // saves instrumenting every link by hand.
          autocapture: true,
          // Captured manually below: App Router navigations are not
          // page loads, so the automatic one fires once and never again.
          capture_pageview: false,
          capture_pageleave: true,
          person_profiles: "always",
          disable_session_recording: false,
          session_recording: {
            maskAllInputs: true,
          },
          loaded: (ph) => {
            ph.register({ source: MARKETING_SOURCE });
            attachClient(ph);
            // The snippet build puts PostHog here, and a good deal of
            // debugging advice (and PostHog's own toolbar) assumes it.
            // A module import does not, so do it by hand.
            (window as unknown as { posthog?: unknown }).posthog = ph;
          },
        });
      } catch {
        /* analytics must never break the page */
      }
    });
  }, []);

  useEffect(() => {
    if (!pathname || !POSTHOG_KEY) return;
    const qs = searchParams?.toString();
    trackPageview(`${window.location.origin}${pathname}${qs ? `?${qs}` : ""}`);
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider() {
  if (!POSTHOG_KEY) return null;
  return (
    // useSearchParams needs a Suspense boundary or it opts the whole
    // route out of static rendering.
    <Suspense fallback={null}>
      <PostHogPageView />
    </Suspense>
  );
}
