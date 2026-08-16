import { AWARDS } from '@/lib/social-proof';
import { COMPANY_STATS } from '@/lib/stats';

const trustedClinics = [
  { name: 'Dr Bharat Agravat', logo: '/images/dental_clinics_nobg/dr-bharat-agravat.png' },
  { name: 'Smile India Dental Clinic', logo: '/images/dental_clinics_nobg/smile-india.png' },
  { name: 'The Tooth Studio', logo: '/images/dental_clinics_nobg/the-tooth-studio.png' },
  { name: 'Anant Dental Clinic', logo: '/images/dental_clinics_nobg/anant-dental.png' },
  { name: 'Alcadent India', logo: '/images/dental_clinics_nobg/alcadent-india.png' },
  { name: 'Nagu Dental Speciality', logo: '/images/dental_clinics_nobg/nagu-dental.png' },
  { name: 'Indu Dental Clinic', logo: '/images/dental_clinics_nobg/indu-dental.png' },
  { name: "Dr. Poornima's Paravur Dental Care", logo: '/images/dental_clinics_nobg/paravur-dental.png' },
  { name: 'Smilez Dental Studio', logo: '/images/dental_clinics_nobg/smilez-dental.png' },
];

export default function ClinicLogoMarquee() {
  return (
    <section className="py-14 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[13px] font-semibold text-gray-500 tracking-wide mb-10">
          Trusted by leading dental clinics
        </p>

        {/*
          The numbers sit with the logos rather than in a headline band of their
          own: both answer the same question — "who else uses this?" — and they
          land harder together than as two separate trust sections competing a
          screen apart. Set at body size on purpose; oversized figures read as
          decoration, and a reader scanning for reassurance takes a modest,
          specific number more seriously than a huge one.
        */}
        <ul className="mb-12 flex flex-wrap items-baseline justify-center gap-x-10 gap-y-3 sm:gap-x-16">
          {COMPANY_STATS.map((stat) => (
            <li key={stat.label} className="flex items-baseline gap-2">
              <span className="text-lg font-bold tracking-tight text-[#1a1c4b] tabular-nums">
                {stat.value}
              </span>
              <span className="text-[13px] text-gray-500">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...trustedClinics, ...trustedClinics].map((clinic, i) => (
            <div
              key={`${clinic.name}-${i}`}
              className="mx-3 flex h-24 w-52 flex-shrink-0 items-center justify-center rounded-2xl border border-gray-200/70 bg-white px-6 shadow-sm"
            >
              <img
                src={clinic.logo}
                alt={`${clinic.name} logo`}
                className="max-h-14 max-w-full w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Review-platform awards sit under the clinic logos rather than
          in a section of their own: both answer the same question, and
          two separate trust bands compete instead of compounding.
          Renders nothing until AWARDS holds a real, earned badge. */}
      {AWARDS.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[13px] font-semibold text-gray-500 tracking-wide mt-14 mb-8">
            Recognised on the software review platforms buyers check
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
            {AWARDS.map((award) => (
              <li key={`${award.platform}-${award.award}-${award.year}`}>
                <a
                  href={award.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex transition-opacity hover:opacity-80"
                >
                  <img
                    src={award.src}
                    // Spelled out, not "award badge" — this is the only
                    // text a screen reader or an image search gets.
                    alt={`${award.platform} ${award.award} ${award.year} — MolarPlus`}
                    className="h-24 w-auto"
                    loading="lazy"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
