import { ArrowRight, MessageCircle, CalendarCheck, UserRound } from 'lucide-react';
import { colors } from '@/lib/seo';
import { whatsappLink } from '@/lib/constants';

/**
 * The AI WhatsApp assistant add-on, shown on /pricing.
 *
 * It is NOT built for clinics yet (as of 15 Nov 2026 the AI only answers
 * MolarPlus's own sales WhatsApp, in shadow mode, in WA Reach's backend/agent/).
 * So everything here is future tense, marked Coming soon, with no price, and the
 * only action is asking for early access. Do not turn any line into a present-
 * tense claim until clinics can switch it on.
 */

export const AI_ADDON = {
  name: 'AI WhatsApp assistant',
  status: 'Coming soon',
  earlyAccessMessage: "Hi, I'd like early access to the AI WhatsApp assistant for my dental clinic.",
} as const;

const POINTS = [
  {
    Icon: MessageCircle,
    title: 'Answers patients on your clinic’s number',
    body: 'It will reply to your patients on your clinic’s own WhatsApp number, day and night: timings, fees, treatments, directions and booking, using only what your clinic tells it.',
  },
  {
    Icon: CalendarCheck,
    title: 'Follows up after every visit',
    body: 'It will check in after a procedure, remind patients about their next sitting or check-up, and gently bring back patients who stopped coming.',
  },
  {
    Icon: UserRound,
    title: 'Your team stays in charge',
    body: 'Anything medical, urgent or unhappy will go straight to your team, and a person can take over any chat at any time.',
  },
];

export default function AiAssistantAddon() {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="ai-addon-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-bold text-blue-900 uppercase tracking-wider">
            Add-on &middot; {AI_ADDON.status}
          </p>
          <h2 id="ai-addon-heading" className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
            {AI_ADDON.name}
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            An assistant that will talk to your patients on WhatsApp the way your front desk would,
            so questions get answered and follow-ups go out even when the clinic is busy. Pricing
            will be announced at launch.
          </p>
        </div>

        <ul className="grid gap-4 md:grid-cols-3">
          {POINTS.map(({ Icon, title, body }) => (
            <li key={title} className="rounded-2xl border border-gray-200 bg-white p-6">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${colors.primary}1A` }}
              >
                <Icon className="h-5 w-5" style={{ color: colors.primary }} aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <a
            href={whatsappLink(AI_ADDON.earlyAccessMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition-colors"
            style={{ backgroundColor: colors.primary }}
          >
            Get early access on WhatsApp
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
