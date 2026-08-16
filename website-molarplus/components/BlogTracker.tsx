'use client';

/**
 * Blog attribution + engagement tracking, mounted once per blog post page.
 *
 * Answers two questions the funnel needs and `$pageview` alone cannot:
 *
 *   1. WHICH post brought this person in (`mkt_blog_post_viewed`), so signups can
 *      be attributed back to individual content rather than "/blog" in aggregate.
 *   2. Did they actually READ it (`mkt_blog_post_read`), so a post with 10k
 *      bounces is distinguishable from one that genuinely held 10k readers.
 *      Ranking content by pageviews alone reliably promotes the wrong posts.
 *
 * "Read" deliberately requires BOTH scroll depth and dwell time. Depth alone
 * misfires on short posts that fit on one screen (they'd be 100% "read" the
 * instant they load); time alone counts an abandoned background tab.
 */
import { useEffect, useRef } from 'react';
import { trackBlogPostViewed, trackBlogPostRead } from '@/analytics/track';

/** Fraction of the scrollable page that must be passed to count as read. */
const READ_DEPTH = 0.5;
/** Minimum time on page before a read can be credited. */
const MIN_DWELL_MS = 10_000;
/** For posts too short to scroll, dwell time alone has to carry the signal. */
const SHORT_POST_DWELL_MS = 30_000;

export default function BlogTracker({
  slug,
  title,
  category,
}: {
  slug: string;
  title: string;
  category: string;
}) {
  const readFired = useRef(false);

  useEffect(() => {
    trackBlogPostViewed(slug, title, category);
  }, [slug, title, category]);

  useEffect(() => {
    readFired.current = false;
    const startedAt = Date.now();

    const fireRead = () => {
      if (readFired.current) return;
      readFired.current = true;
      trackBlogPostRead(slug, category);
    };

    const scrollable = () =>
      document.documentElement.scrollHeight - window.innerHeight;

    const onScroll = () => {
      if (readFired.current) return;
      const max = scrollable();
      if (max <= 0) return; // too short to scroll — handled by the timer below
      const depth = window.scrollY / max;
      if (depth >= READ_DEPTH && Date.now() - startedAt >= MIN_DWELL_MS) {
        fireRead();
      }
    };

    // Short posts can never satisfy the depth test, so credit them on dwell.
    const shortPostTimer = window.setTimeout(() => {
      if (scrollable() <= 0) fireRead();
    }, SHORT_POST_DWELL_MS);

    // A reader can also sit past MIN_DWELL_MS already scrolled far enough
    // without firing another scroll event — re-check once the threshold passes.
    const dwellTimer = window.setTimeout(onScroll, MIN_DWELL_MS);

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(shortPostTimer);
      window.clearTimeout(dwellTimer);
    };
  }, [slug, category]);

  return null;
}
