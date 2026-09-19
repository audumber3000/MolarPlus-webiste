import Image from 'next/image';
import { GENERAL_REQUIREMENTS, REQUIREMENT_GROUPS } from '@/lib/requirements';

/*
 * The requirements tables on /platform. Real tables on desktop; on a phone
 * each row becomes its own block, because a three column table at 390px
 * is unreadable however it is styled.
 */
export default function SystemRequirements() {
  return (
    <div className="space-y-12">
      {REQUIREMENT_GROUPS.map((group) => (
        <section key={group.id} aria-labelledby={`req-${group.id}`}>
          <h3 id={`req-${group.id}`} className="text-2xl font-bold text-[#1a1c4b]">
            {group.title}
          </h3>
          <p className="mt-2 text-gray-600 leading-relaxed max-w-3xl">{group.intro}</p>

          <div className="mt-6 rounded-2xl border border-gray-200 overflow-hidden bg-white">
            <div className="hidden md:grid grid-cols-[minmax(200px,1fr)_minmax(180px,1fr)_1.4fr] bg-slate-50 border-b border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-500">
              <div className="px-5 py-3">{group.entityLabel}</div>
              <div className="px-5 py-3">{group.versionLabel}</div>
              <div className="px-5 py-3">Notes</div>
            </div>

            <div className="divide-y divide-gray-200">
              {group.rows.map((row) => (
                <div
                  key={`${group.id}-${row.name}`}
                  className="grid md:grid-cols-[minmax(200px,1fr)_minmax(180px,1fr)_1.4fr] md:items-center"
                >
                  <div className="flex items-center gap-3 px-5 pt-5 md:py-4">
                    <Image
                      src={row.logo}
                      alt={`${row.name} logo`}
                      width={28}
                      height={28}
                      unoptimized
                      className="h-7 w-7 object-contain shrink-0"
                    />
                    <span className="font-semibold text-[#1a1c4b]">{row.name}</span>
                  </div>
                  <div className="px-5 pt-2 md:py-4 text-[15px] font-medium text-gray-900">{row.minimum}</div>
                  <div className="px-5 pt-1 pb-5 md:py-4 text-[15px] text-gray-600">{row.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section aria-labelledby="req-general">
        <h3 id="req-general" className="text-2xl font-bold text-[#1a1c4b]">
          Whatever the device
        </h3>
        <ul className="mt-4 space-y-3 max-w-3xl">
          {GENERAL_REQUIREMENTS.map((item) => (
            <li key={item} className="flex gap-3 text-gray-600 leading-relaxed">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
