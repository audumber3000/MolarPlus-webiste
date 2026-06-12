'use client';

/**
 * PostHog bootstrap for the marketing site.
 *
 * IMPORTANT: this uses the SAME PostHog project as the MolarPlus app (same key +
 * host). It does NOT create a second project. The `source: 'marketing_site'`
 * super-property keeps marketing data filterable apart from app data, while the
 * shared cross-subdomain cookie lets a visitor's pre-signup activity stitch onto
 * their user once the app calls `identify` at signup.
 *
 * Marketing has NO PHI, so autocapture / pageviews / heatmaps are all safe here
 * (unlike the app, which masks PHI). We do NOT identify anonymous visitors — the
 * app owns identify at signup/login.
 */
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { MARKETING_SOURCE } from './events';

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

if (typeof window !== 'undefined' && POSTHOG_KEY && !posthog.__loaded) {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST, // same as the app
    autocapture: true, // safe — marketing site has NO PHI
    capture_pageview: false, // captured manually below for App Router SPA nav
    capture_pageleave: true,
    person_profiles: 'always', // we WANT anonymous visitor analytics here
    // cross_subdomain_cookie defaults to true — DO NOT disable it. It's what
    // lets the anonymous id carry from www.molarplus.com to app.molarplus.com.
    loaded: (ph) => {
      // Separation tag: stamped on EVERY event automatically.
      ph.register({ source: MARKETING_SOURCE });
    },
  });
}

/** Captures `$pageview` on every App Router client-side navigation. */
function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname || !posthog.__loaded) return;
    let url = window.origin + pathname;
    const qs = searchParams?.toString();
    if (qs) url += `?${qs}`;
    posthog.capture('$pageview', { $current_url: url });
  }, [pathname, searchParams]);

  return null;
}

export default function PostHogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  );
}
