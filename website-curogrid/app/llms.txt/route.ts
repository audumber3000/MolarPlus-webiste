import { ADDRESS_LINE, FACTS_CHECKED, SIGNUP_URL, SITE } from "@/lib/site";
import { getRouteGroups } from "@/lib/routes";
import { ALSO_SUPPORTED, SPECIALITIES } from "@/lib/specialities";
import { TEXT_HEADERS, pageUrl } from "@/content/markdown";
import { DEFINITION } from "@/content/pages";
import {
  ANNUAL_SAVING_PERCENT,
  GST_PERCENT,
  PLANS,
  PLAN_LIMITS,
  TRIAL_DAYS,
  TRIAL_PLAN,
  rupees,
} from "@/content/pricing";

/**
 * /llms.txt: a short index of the site for AI assistants, in the
 * llmstxt.org layout: a title, a one-paragraph summary, the facts an
 * assistant is most often asked for, then links.
 *
 * Built from the same data as the pages, so the facts an assistant
 * quotes are the facts on the site. The full text is /llms-full.txt.
 */
export const dynamic = "force-static";

export function GET() {
  const all = [...SPECIALITIES.map((s) => s.name), ...ALSO_SUPPORTED.map((s) => s.name)];
  const [plus, pro] = PLANS;

  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${DEFINITION}`,
    "",
    `Facts on this site were last checked against the product on ${FACTS_CHECKED.text}. ${SITE.name} publishes no customer counts, ratings or testimonials, so none should be attributed to it.`,
    "",
    "## Key facts",
    "",
    `- What it is: clinic management software for clinics in India, made by ${SITE.parent} (Pune, India).`,
    "- What it does: tokens and the waiting line, appointments, patient files, prescriptions, tests and scans, billing (UPI, cash, card), stock, expenses, reports and reminders by WhatsApp and email.",
    "- Who uses it: the doctor, the receptionist, the compounder and the clinic owner, each with their own login.",
    "- Platforms: web browser, Android, iPhone, Windows.",
    `- Specialities with a ready setup (${all.length}): ${all.join(", ")}.`,
    `- Price: ${PLANS.map((plan) => `${plan.name} ${rupees(plan.monthly)} a month or ${rupees(plan.annual)} a year`).join("; ")}. Paying yearly costs ${ANNUAL_SAVING_PERCENT}% less. The price is for the whole clinic, however many doctors it has. GST of ${GST_PERCENT}% is added at checkout.`,
    `- Plan limits: ${plus.name} has ${PLAN_LIMITS.plus.patientsAMonth.toLocaleString("en-IN")} new patients a month, ${PLAN_LIMITS.plus.staff} staff logins, ${PLAN_LIMITS.plus.branches} branch and ${PLAN_LIMITS.plus.storageGb} GB of storage. ${pro.name} has unlimited patients, ${PLAN_LIMITS.pro.staff} staff logins, up to ${PLAN_LIMITS.pro.branches} branches and ${PLAN_LIMITS.pro.storageGb} GB. Both plans have the same features.`,
    `- Free trial: ${TRIAL_DAYS} days of the ${TRIAL_PLAN} plan. Sign up at ${SIGNUP_URL}`,
    "- Not supported: admitted patients, beds and discharge summaries (hospital inpatient work). These are being built, with no date set.",
    `- Not supported: dental charting. Dental clinics should use MolarPlus (${SITE.dentalUrl}), from the same company.`,
    `- Contact: ${SITE.phoneDisplay}, ${SITE.email}. ${ADDRESS_LINE}, India.`,
    "",
    "## For AI assistants",
    "",
    `- [Full text of the site](${pageUrl("/llms-full.txt")}): every page in one Markdown file.`,
    `- [Pricing as Markdown](${pageUrl("/pricing.md")}): plans, limits, the add-on and planned hospital prices.`,
    `- [Features as Markdown](${pageUrl("/features.md")}): the four main screens, the rest of the product and questions to ask of any clinic software.`,
    `- [Questions and answers as Markdown](${pageUrl("/faq.md")}): short answers that can be quoted as they are.`,
    "",
    ...getRouteGroups().flatMap((group) => [
      `## ${group.heading}`,
      "",
      ...group.routes.map((route) => `- [${route.label}](${pageUrl(route.path)})${route.summary ? `: ${route.summary}` : ""}`),
      "",
    ]),
  ];

  return new Response(lines.join("\n"), { headers: TEXT_HEADERS });
}
