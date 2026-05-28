const trustedClinics = [
  { name: 'Dr Bharat Agravat', logo: '/images/dental_clinics/dr-bharat-agravat.png' },
  { name: 'Smile India Dental Clinic', logo: '/images/dental_clinics/smile-india.png' },
  { name: 'The Tooth Studio', logo: '/images/dental_clinics/the-tooth-studio.png' },
  { name: 'Anant Dental Clinic', logo: '/images/dental_clinics/anant-dental.png' },
  { name: 'Alcadent India', logo: '/images/dental_clinics/alcadent-india.png' },
  { name: 'Nagu Dental Speciality', logo: '/images/dental_clinics/nagu-dental.png' },
  { name: 'Indu Dental Clinic', logo: '/images/dental_clinics/indu-dental.png' },
  { name: "Dr. Poornima's Paravur Dental Care", logo: '/images/dental_clinics/paravur-dental.png' },
  { name: 'Smilez Dental Studio', logo: '/images/dental_clinics/smilez-dental.png' },
];

export default function ClinicLogoMarquee() {
  return (
    <section className="py-14 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[13px] font-semibold text-gray-500 tracking-wide mb-10">
          Trusted by leading dental clinics
        </p>
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
    </section>
  );
}
