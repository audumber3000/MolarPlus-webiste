'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { colors } from '@/lib/seo';
import BrowserFrame from '@/components/BrowserFrame';

export type Slide = {
  img: string;
  alt: string;
  label: string;
  title: string;
  desc: string;
};

const clinicSlides: Slide[] = [
  {
    img: '/product/dashboard.png',
    alt: 'MolarPlus dashboard showing total patients, appointments, revenue and today’s schedule',
    label: 'Dashboard',
    title: 'Your whole clinic at a glance',
    desc: 'Patients, appointments, revenue and today’s schedule the moment you log in, plus what needs your attention.',
  },
  {
    img: '/product/appointments.png',
    alt: 'MolarPlus appointment calendar in month view across the whole team',
    label: 'Appointments',
    title: 'Every booking on one calendar',
    desc: 'Day, week and month views across every chair and team member, with online bookings flowing straight in.',
  },
  {
    img: '/product/analytics.png',
    alt: 'MolarPlus analytics: new vs returning patients, revenue billed vs collected, appointment outcomes',
    label: 'Reports',
    title: 'Know your numbers',
    desc: 'New vs returning patients, billed vs collected, no-shows and outcomes: the reports that show where to grow.',
  },
  {
    img: '/product/templates.png',
    alt: 'MolarPlus template editor designing a branded tax invoice PDF with live preview',
    label: 'Templates',
    title: 'Invoices and documents, your brand',
    desc: 'Design GST-ready invoices, prescriptions and consent forms with your logo and colours, previewed live.',
  },
  {
    img: '/product/notifications.png',
    alt: 'MolarPlus notifications hub managing WhatsApp, email and SMS channels with wallet balance',
    label: 'Notifications',
    title: 'WhatsApp, email and SMS, built in',
    desc: 'Run reminders and updates across channels from one place, with delivery logs and spend in plain view.',
  },
];

const AUTO_MS = 3500;

export default function ProductShowcase({
  slides = clinicSlides,
  frameUrl = 'app.molarplus.com',
}: {
  slides?: Slide[];
  frameUrl?: string;
} = {}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((i: number) => setActive((i + slides.length) % slides.length), [slides.length]);
  const next = useCallback(() => setActive((a) => (a + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setActive((a) => (a - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(next, AUTO_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, next, active]);

  const current = slides[active];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {slides.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.label}
              type="button"
              onClick={() => go(i)}
              aria-pressed={isActive}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive ? 'text-white' : 'text-gray-500 hover:text-[#1a1c4b] hover:bg-gray-100'
              }`}
              style={isActive ? { backgroundColor: colors.primary } : undefined}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      {/* Stage */}
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute -inset-x-12 -top-8 bottom-0 bg-gradient-to-br from-blue-100/40 to-transparent rounded-[40px] blur-3xl -z-10" />

        {/* Keyed wrapper so each screen fades in */}
        <div key={active} className="animate-[fadeIn_0.4s_ease]">
          <BrowserFrame src={current.img} alt={current.alt} url={frameUrl} />
        </div>

        {/* Arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous screen"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden md:flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-gray-200 text-gray-700 hover:text-[#1a1c4b] hover:scale-105 transition-all"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next screen"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden md:flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-gray-200 text-gray-700 hover:text-[#1a1c4b] hover:scale-105 transition-all"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Caption */}
      <div className="mt-8 text-center max-w-2xl mx-auto min-h-[88px]">
        <h3 className="text-xl md:text-2xl font-bold text-[#1a1c4b] tracking-tight">{current.title}</h3>
        <p className="mt-2 text-gray-600 leading-relaxed">{current.desc}</p>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.label}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to ${s.label}`}
            className="h-2 rounded-full transition-all"
            style={{
              width: i === active ? 24 : 8,
              backgroundColor: i === active ? colors.primary : '#d1d5db',
            }}
          />
        ))}
      </div>
    </div>
  );
}
