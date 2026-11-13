import Link from "next/link";
import { Container } from "@/components/ui/Section";
import { TRUST_MARKS, type TrustMarkKey } from "@/content/trust";

/**
 * The security and compliance seals, straight under the hero of the home
 * page and every speciality page. What each seal may say, and why some
 * are switched off, is in content/trust.ts.
 *
 * The seals are drawn here, one design for all of them, in the brand
 * teal. They are Curogrid's own marks, never a regulator's or a
 * certifier's artwork: no government emblem, no NHA or ISO logo.
 */

/** A small glyph at the top of each seal, on a 12 box. */
const GLYPH: Record<TrustMarkKey, React.ReactNode> = {
  aes256: (
    <>
      <path d="M2 5.5h8v6H2z" />
      <path d="M3.8 5.5V4a2.2 2.2 0 0 1 4.4 0v1.5" />
    </>
  ),
  dpdp: (
    <>
      <path d="M6 .6l5 2v3.6c0 2.9-2.1 4.9-5 5.8-2.9-.9-5-2.9-5-5.8V2.6z" />
      <path d="M3.6 6.1l1.7 1.7 3.1-3.3" />
    </>
  ),
  india: (
    <>
      <path d="M6 11.5S2 8.1 2 4.9a4 4 0 0 1 8 0c0 3.2-4 6.6-4 6.6z" />
      <circle cx="6" cy="4.9" r="1.4" />
    </>
  ),
  backups: (
    <>
      <path d="M10.4 5.4A4.5 4.5 0 0 0 2.3 3.4M1.6 6.6a4.5 4.5 0 0 0 8.1 2" />
      <path d="M2.2 .9v2.6h2.6M9.8 11.1V8.5H7.2" />
    </>
  ),
  abdm: (
    <>
      <path d="M1 6h3l1.3-3 1.6 6L8.2 6H11" />
    </>
  ),
  iso27001: (
    <>
      <path d="M6 .8l1.5 3.1 3.4.5-2.5 2.4.6 3.4L6 8.6l-3 1.6.6-3.4L1.1 4.4l3.4-.5z" />
    </>
  ),
};

function Seal({ mark }: { mark: (typeof TRUST_MARKS)[number] }) {
  // The big word shrinks to fit: "IN" sits large, "DAILY" smaller. Keep
  // `sealSub` to eight characters or the dotted ring cuts through it.
  const size = Math.min(17, 40 / (mark.seal.length * 0.64));
  return (
    <svg viewBox="0 0 72 72" width="72" height="72" aria-hidden="true" focusable="false" className="size-16 shrink-0 text-teal-700 sm:size-[4.5rem]">
      <circle cx="36" cy="36" r="34.25" className="fill-teal-50" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="36" cy="36" r="29.5" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="1 2.2" />
      <g transform="translate(30 12.5)" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="miter">
        {GLYPH[mark.key]}
      </g>
      <text x="36" y={38.5 + size * 0.32} textAnchor="middle" fill="currentColor" fontSize={size} fontWeight="800" letterSpacing="-0.02em">
        {mark.seal.toUpperCase()}
      </text>
      <text x="36" y="55" textAnchor="middle" fill="currentColor" fontSize="6.2" fontWeight="700" letterSpacing="0.12em">
        {mark.sealSub.toUpperCase()}
      </text>
    </svg>
  );
}

export function TrustMarks() {
  if (TRUST_MARKS.length === 0) return null;
  return (
    <section aria-labelledby="trust-marks" className="border-b border-gray-200 bg-gray-0 py-10 lg:py-12">
      <Container>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 id="trust-marks" className="text-small font-bold tracking-wider text-teal-700 uppercase">
            Security and compliance
          </h2>
          <Link href="/security" className="text-small font-semibold text-teal-700 underline underline-offset-4 hover:text-teal-900">
            How your records are protected
          </Link>
        </div>
        <ul className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_MARKS.map((mark) => (
            <li key={mark.key} className="flex items-center gap-4">
              <Seal mark={mark} />
              <div className="min-w-0">
                <p className="font-semibold leading-snug text-gray-900">{mark.title}</p>
                <p className="mt-1 text-[0.9375rem] leading-snug text-gray-600">{mark.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
