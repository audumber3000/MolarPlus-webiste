import { SPECIALITIES } from "./specialities";
import { FEATURE_PAGES } from "@/content/features";
import { getAllPosts } from "./blog";

/**
 * Every public page, grouped. One list feeds `sitemap.xml`, the
 * `/sitemap` page for people and `llms.txt`, so a new page is added
 * once and appears in all three.
 *
 * `priority` reflects commercial intent: the speciality pages, pricing
 * and features are what should rank. `index: false` keeps a page out
 * of sitemap.xml (it is still listed on the human sitemap).
 */
export type Route = {
  path: string;
  label: string;
  summary?: string;
  priority: number;
  index?: boolean;
  /** The page is rendered from the checked product data (the speciality
   *  lists and the plans), so `FACTS_CHECKED` in lib/site.ts is an honest
   *  last-changed date for it. sitemap.xml uses it as `lastmod`. */
  facts?: boolean;
};
export type RouteGroup = { heading: string; routes: Route[] };

export function getRouteGroups(): RouteGroup[] {
  return [
    {
      heading: "Curogrid",
      routes: [
        { path: "/", label: "Home", summary: "What Curogrid is and who it is for.", priority: 1, facts: true },
        { path: "/pricing", label: "Pricing", summary: "The two plans, their limits and the free trial.", priority: 0.9, facts: true },
        { path: "/mobile-app", label: "Mobile app", summary: "The phone app for Android and iPhone.", priority: 0.7 },
        { path: "/hospitals", label: "For hospitals", summary: "What works for a hospital today and what is being built.", priority: 0.5 },
      ],
    },
    {
      heading: "Specialities",
      routes: [
        { path: "/specialities", label: "All specialities", summary: "Every speciality Curogrid sets itself up for.", priority: 0.9, facts: true },
        ...SPECIALITIES.map((s) => ({
          path: `/${s.slug}`,
          label: `${s.name}: ${s.h1}`,
          summary: s.card,
          priority: 0.9,
          facts: true,
        })),
      ],
    },
    {
      heading: "Features",
      routes: [
        { path: "/features", label: "All features", summary: "Everything the software does.", priority: 0.8 },
        ...FEATURE_PAGES.map((f) => ({ path: `/features/${f.slug}`, label: f.name, summary: f.card, priority: 0.8 })),
      ],
    },
    {
      heading: "Company",
      routes: [
        { path: "/about", label: "About", summary: "Who makes Curogrid and why.", priority: 0.5 },
        { path: "/contact", label: "Contact", summary: "WhatsApp, phone, email and a call-back form.", priority: 0.6 },
        { path: "/book-demo", label: "Book a demo", summary: "See Curogrid set up for your speciality.", priority: 0.7 },
      ],
    },
    {
      heading: "Resources",
      routes: [
        { path: "/faq", label: "Questions and answers", summary: "Plain answers, including what Curogrid does not do yet.", priority: 0.6 },
        { path: "/blog", label: "Blog", summary: "Practical writing on running a clinic.", priority: 0.6 },
        ...getAllPosts().map((post) => ({ path: `/blog/${post.slug}`, label: post.title, summary: post.description, priority: 0.6 })),
      ],
    },
    {
      heading: "Legal",
      routes: [
        { path: "/security", label: "Security", summary: "Where records are kept and what protects them.", priority: 0.4 },
        // noindex until a lawyer has reviewed them: see content/legal.ts.
        { path: "/privacy", label: "Privacy policy", priority: 0.2, index: false },
        { path: "/terms", label: "Terms of service", priority: 0.2, index: false },
        { path: "/refund-policy", label: "Refund policy", priority: 0.2, index: false },
        { path: "/delete-account", label: "Delete your account", priority: 0.1, index: false },
      ],
    },
  ];
}
