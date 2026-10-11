import { ADDRESS_LINE, FACTS_CHECKED, SIGNUP_URL, SITE } from "@/lib/site";
import { ALSO_SUPPORTED, SPECIALITIES, gapWords, type Speciality } from "@/lib/specialities";
import { getAllPosts } from "@/lib/blog";
import { FAQ_GROUPS, PRICING_FAQS, type Faq } from "./faq";
import { BUYING_QUESTIONS, FEATURE_PAGES, MORE_FEATURES, type FeaturePage } from "./features";
import {
  BELIEFS,
  DEFINITION,
  HOSPITAL_FAQS,
  HOSPITAL_STATUS,
  KEY_FACTS,
  MOBILE_FAQS,
  MOBILE_SCREENS,
  MOBILE_TASKS,
  SPECIALITY_COUNT,
  STORE_NOTE,
} from "./pages";
import {
  ANNUAL_SAVING_PERCENT,
  CHECKOUT_METHODS,
  GST_PERCENT,
  HOSPITAL_PLANS,
  INCLUDED_IN_EVERY_PLAN,
  OWN_WHATSAPP_ADDON,
  PLANS,
  PLAN_COMPARISON,
  TRIAL_DAYS,
  TRIAL_PLAN,
  rupees,
} from "./pricing";

/**
 * The site as Markdown, for AI assistants and buying agents that read
 * a page without rendering it.
 *
 * Nothing here is written by hand. Every function prints the same data
 * files the HTML pages render (`content/*.ts`, `lib/specialities.ts`,
 * `lib/blog.ts`), so the Markdown cannot say something the page does
 * not. It feeds `/pricing.md`, `/features.md`, `/faq.md` and
 * `/llms-full.txt`.
 *
 * Each function returns lines. `level` is the heading depth of the
 * section's own title, so a section can stand alone as a file (level 1)
 * or sit inside `/llms-full.txt` (level 2).
 */

export const MARKDOWN_HEADERS = { "content-type": "text/markdown; charset=utf-8" } as const;
export const TEXT_HEADERS = { "content-type": "text/plain; charset=utf-8" } as const;

export const pageUrl = (path: string) => `${SITE.url}${path === "/" ? "" : path}`;

const h = (level: number, text: string) => `${"#".repeat(level)} ${text}`;
const cell = (text: string) => text.replace(/\|/g, "\\|").replace(/\n/g, " ");

function table(head: ReadonlyArray<string>, rows: ReadonlyArray<ReadonlyArray<string>>) {
  return [
    `| ${head.map(cell).join(" | ")} |`,
    `| ${head.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${row.map(cell).join(" | ")} |`),
  ];
}

function faqLines(items: ReadonlyArray<Faq>, level: number) {
  return items.flatMap((item) => [h(level, item.q), "", item.a, ""]);
}

/** The line under a file's title: where the page is and when it was checked. */
function sourceLine(path: string) {
  return `Source: ${pageUrl(path)}. Facts last checked against the product on ${FACTS_CHECKED.text}.`;
}

/* ── Pricing ───────────────────────────────────────────────────────────── */

export function pricingMarkdown(level = 1): string[] {
  const [plus, pro] = PLANS;
  return [
    h(level, `${SITE.name} pricing`),
    "",
    `${SITE.name} is clinic management software for clinics in India. It has two plans: ${plus.name} at ${rupees(plus.monthly)} a month and ${pro.name} at ${rupees(pro.monthly)} a month. The price is for the whole clinic, however many doctors and patients it has. Prices are in Indian rupees, before GST.`,
    "",
    sourceLine("/pricing"),
    "",
    `- Free trial: ${TRIAL_DAYS} days of the ${TRIAL_PLAN} plan, for every new clinic`,
    `- Paying yearly costs ${ANNUAL_SAVING_PERCENT}% less than paying monthly. The yearly price is one payment for the year`,
    `- GST: ${GST_PERCENT}% is added at checkout`,
    `- How to pay: ${CHECKOUT_METHODS}, from the Subscription page inside ${SITE.name}`,
    `- Start a trial: ${SIGNUP_URL}`,
    "",
    ...PLANS.flatMap((plan) => [
      h(level + 1, plan.name),
      "",
      `${plan.tagline}.`,
      "",
      `- Price: ${rupees(plan.monthly)} a month (billed monthly) | ${rupees(plan.annual)} a year (billed yearly), before GST`,
      ...plan.features.map((feature) => `- ${feature}`),
      "",
    ]),
    h(level + 1, `${plus.name} and ${pro.name} compared`),
    "",
    ...table(["", plus.name, pro.name], PLAN_COMPARISON.map((row) => [row.label, row.plus, row.pro])),
    "",
    h(level + 1, "Included in both plans"),
    "",
    ...INCLUDED_IN_EVERY_PLAN.map((item) => `- ${item}`),
    `- A ready setup for the clinic's speciality (${SPECIALITY_COUNT} specialities)`,
    "",
    h(level + 1, "Add-on"),
    "",
    `- ${OWN_WHATSAPP_ADDON.name}: ${rupees(OWN_WHATSAPP_ADDON.monthly)} a month or ${rupees(OWN_WHATSAPP_ADDON.annual)} a year on ${plus.name}, for each clinic location. Included in ${pro.name}.`,
    "",
    h(level + 1, "Hospitals (planned, not on sale yet)"),
    "",
    "Admitting patients, the bed board and the discharge summary are not built. These hospital plans cannot be bought today. The prices are the planned ones.",
    "",
    ...table(
      ["Planned plan", "Planned price a month", "What it is planned to allow"],
      HOSPITAL_PLANS.map((plan) => [plan.name, rupees(plan.monthly), plan.features.join("; ")]),
    ),
    "",
    h(level + 1, "Questions about price"),
    "",
    ...faqLines(PRICING_FAQS, level + 2),
  ];
}

/* ── Features ──────────────────────────────────────────────────────────── */

export function featureMarkdown(feature: FeaturePage, level = 2): string[] {
  return [
    h(level, feature.h1),
    "",
    feature.lead,
    "",
    `Page: ${pageUrl(`/features/${feature.slug}`)}`,
    "",
    ...table(["At a glance", ""], feature.facts.map((fact) => [fact.term, fact.detail])),
    "",
    h(level + 1, feature.question),
    "",
    ...feature.points.map((point) => `- **${point.title}.** ${point.body}`),
    "",
    ...faqLines(feature.faqs, level + 1),
  ];
}

export function buyingQuestionsMarkdown(level = 2): string[] {
  return [
    h(level, "What should a clinic ask before choosing clinic software?"),
    "",
    `Ask these ${BUYING_QUESTIONS.length} questions of any clinic software. ${SITE.name}'s own answers are beside them, including the ones that are no.`,
    "",
    ...table(
      ["Question to ask", "Why it matters", `${SITE.name}'s answer`],
      BUYING_QUESTIONS.map((row) => [row.ask, row.why, row.curogrid]),
    ),
    "",
  ];
}

export function featuresMarkdown(level = 1): string[] {
  return [
    h(level, `${SITE.name} features`),
    "",
    `${SITE.name} is clinic management software for clinics in India. Four screens run most of a clinic's day: ${FEATURE_PAGES.map((feature) => feature.name.toLowerCase()).join(", ").replace(/, ([^,]*)$/, " and $1")}. ${MORE_FEATURES.length} more parts are included in both plans.`,
    "",
    sourceLine("/features"),
    "",
    ...FEATURE_PAGES.flatMap((feature) => featureMarkdown(feature, level + 1)),
    h(level + 1, "Also in every plan"),
    "",
    ...MORE_FEATURES.map((feature) => `- **${feature.name}.** ${feature.body}`),
    "",
    ...buyingQuestionsMarkdown(level + 1),
  ];
}

/* ── Phone app ─────────────────────────────────────────────────────────── */

export function mobileMarkdown(level = 2): string[] {
  return [
    h(level, `The ${SITE.name} phone app`),
    "",
    `The ${SITE.name} phone app is the Android and iPhone version of ${SITE.name} clinic software. It signs in to the same clinic as the web version and is included in both plans.${STORE_NOTE}`,
    "",
    `Page: ${pageUrl("/mobile-app")}`,
    "",
    ...table(["Who", "What they do on the phone"], MOBILE_TASKS.map((task) => [task.who, task.does])),
    "",
    ...MOBILE_SCREENS.map((screen) => `- **${screen.title}.** ${screen.body}`),
    "",
    ...faqLines(MOBILE_FAQS, level + 1),
  ];
}

/* ── Specialities ──────────────────────────────────────────────────────── */

const list = (label: string, items: ReadonlyArray<string>) => (items.length > 0 ? [`- ${label} (${items.length}): ${items.join(", ")}`] : []);

export function specialityMarkdown(s: Speciality, level = 3): string[] {
  return [
    h(level, s.h1),
    "",
    s.lead,
    "",
    `Page: ${pageUrl(`/${s.slug}`)}`,
    "",
    ...s.points.map((point) => `- **${point.title}.** ${point.body}`),
    "",
    `What ${SITE.name} sets up for a ${s.clinic} in clinic setup. Every item can be renamed, repriced or deleted by the clinic.`,
    "",
    ...list("Departments", s.departments),
    `- Booking a course: ${s.course.count} ${s.course.noun}s, ${gapWords(s.course.everyDays)}${s.course.minutes ? `, ${s.course.minutes} minutes each` : ""}. The numbers can be changed when booking`,
    ...list("Medicines offered as you type", s.medicines),
    ...list("Tests", s.tests),
    ...list("Scans", s.scans),
    ...list("One-tap procedures", s.procedures),
    ...list("Dose words", s.doseWords),
    ...list("Consent forms", s.consents),
    `- First card in the patient's file: ${s.fileCard.title}. ${s.fileCard.body}`,
    "",
    `Starter services (${s.services.length}). The prices are starting points for the clinic to change. They are not ${SITE.name}'s charges.`,
    "",
    ...table(["Service", "Starter price", "Minutes"], s.services.map((service) => [service.name, rupees(service.price), String(service.minutes)])),
    "",
    ...faqLines(s.faqs, level + 1),
  ];
}

export function specialitiesMarkdown(level = 2): string[] {
  return [
    h(level, `Specialities ${SITE.name} sets itself up for`),
    "",
    `${SITE.name} has a ready setup for ${SPECIALITY_COUNT} specialities. The clinic picks its speciality in clinic setup and gets that speciality's departments, a starter list of services with prices, the medicines, tests and procedures offered on the doctor's screen, and its consent forms. A clinic with more than one speciality can pick several.`,
    "",
    ...SPECIALITIES.flatMap((s) => specialityMarkdown(s, level + 1)),
    h(level + 1, "Also supported, without a page on this site yet"),
    "",
    ...ALSO_SUPPORTED.map((s) => `- ${s.name}: ${s.note}`),
    "",
    `Dental clinics are not supported. Dentists should use MolarPlus (${SITE.dentalUrl}), from the same company.`,
    "",
  ];
}

/* ── Hospitals ─────────────────────────────────────────────────────────── */

export function hospitalsMarkdown(level = 2): string[] {
  return [
    h(level, `${SITE.name} for hospitals`),
    "",
    `${SITE.name} does not handle admitted patients yet. A hospital can run its OPD on ${SITE.name} today. Admissions, the bed board and the discharge summary are being built, and no date has been set.`,
    "",
    `Page: ${pageUrl("/hospitals")}`,
    "",
    ...table(["Hospital work", "In Curogrid today"], HOSPITAL_STATUS.map((row) => [row.work, row.built ? "Yes" : "No, not built yet"])),
    "",
    ...faqLines(HOSPITAL_FAQS, level + 1),
  ];
}

/* ── Questions ─────────────────────────────────────────────────────────── */

export function faqMarkdown(level = 1): string[] {
  return [
    h(level, `${SITE.name} questions and answers`),
    "",
    `Plain answers about ${SITE.name}, clinic management software for clinics in India: what it is, what it costs, what it does and what it does not do yet.`,
    "",
    sourceLine("/faq"),
    "",
    ...FAQ_GROUPS.flatMap((group) => [h(level + 1, group.title), "", ...faqLines(group.items, level + 2)]),
  ];
}

/* ── Company ───────────────────────────────────────────────────────────── */

export function aboutMarkdown(level = 2): string[] {
  return [
    h(level, `Who makes ${SITE.name}`),
    "",
    `${SITE.name} is made by ${SITE.parent}, a software company in Pune, India. ${SITE.parent} also makes MolarPlus, for dental clinics and dental labs.`,
    "",
    `Page: ${pageUrl("/about")}`,
    "",
    `- Company: ${SITE.parent} (${SITE.parentUrl})`,
    `- Office: ${ADDRESS_LINE}, India`,
    `- Phone: ${SITE.phoneDisplay}`,
    `- Email: ${SITE.email}`,
    `- Product site: ${SITE.url}`,
    `- App: ${SITE.appUrl}`,
    "",
    h(level + 1, "What the company holds to"),
    "",
    ...BELIEFS.map((belief) => `- **${belief.title}.** ${belief.body}`),
    "",
  ];
}

/* ── Blog ──────────────────────────────────────────────────────────────── */

/** A post's body. Reads blocks by shape, so a new block type added to
 *  lib/blog.ts is skipped here and does not break the file. */
function blockLines(block: object, level: number): string[] {
  const b = block as { type?: string; text?: string; items?: ReadonlyArray<string>; head?: ReadonlyArray<string>; rows?: ReadonlyArray<ReadonlyArray<string>> };
  if (b.type === "h2" && b.text) return [h(level, b.text), ""];
  if (b.type === "ol" && b.items) return [...b.items.map((item, i) => `${i + 1}. ${item}`), ""];
  if (b.items) return [...b.items.map((item) => `- ${item}`), ""];
  if (b.head && b.rows) return [...table(b.head, b.rows), ""];
  if (b.text) return [b.text, ""];
  return [];
}

export function blogMarkdown(level = 2): string[] {
  const posts = getAllPosts();
  if (posts.length === 0) return [];
  return [
    h(level, "Blog"),
    "",
    ...posts.flatMap((post) => [
      h(level + 1, post.title),
      "",
      `Page: ${pageUrl(`/blog/${post.slug}`)}. Published ${post.published}${post.updated ? `, updated ${post.updated}` : ""}.`,
      "",
      post.description,
      "",
      ...post.body.flatMap((block) => blockLines(block, level + 2)),
    ]),
  ];
}

/* ── The whole site ────────────────────────────────────────────────────── */

export function fullMarkdown(): string[] {
  return [
    `# ${SITE.name}`,
    "",
    `> ${DEFINITION}`,
    "",
    `This file is the full text of ${SITE.url} in one request, for AI assistants. It is built from the same data as the pages. Facts were last checked against the product on ${FACTS_CHECKED.text}. The short index is ${SITE.url}/llms.txt.`,
    "",
    "## Key facts",
    "",
    ...KEY_FACTS.map((fact) => `- ${fact.term}: ${fact.detail}`),
    "",
    ...pricingMarkdown(2),
    ...featuresMarkdown(2),
    ...mobileMarkdown(2),
    ...specialitiesMarkdown(2),
    ...hospitalsMarkdown(2),
    ...faqMarkdown(2),
    ...aboutMarkdown(2),
    ...blogMarkdown(2),
  ];
}
