import { SOCIAL, type SocialName } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Brand glyphs, drawn inline rather than pulled from an icon package:
 * four paths do not justify a dependency, and inline means they inherit
 * `currentColor` and flip with the footer's green like everything else.
 *
 * All four are solid marks on a 24-box so the row reads as one set —
 * mixing a stroked Instagram with three filled marks looks like a
 * mistake at 20px.
 */
const ICONS: Record<SocialName, React.ReactNode> = {
  LinkedIn: (
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  ),
  Instagram: (
    <>
      <path
        fillRule="evenodd"
        d="M7 0h10a7 7 0 0 1 7 7v10a7 7 0 0 1-7 7H7a7 7 0 0 1-7-7V7a7 7 0 0 1 7-7zm0 2.2A4.8 4.8 0 0 0 2.2 7v10A4.8 4.8 0 0 0 7 21.8h10a4.8 4.8 0 0 0 4.8-4.8V7A4.8 4.8 0 0 0 17 2.2H7z"
      />
      <path
        fillRule="evenodd"
        d="M12 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 2.2a3.96 3.96 0 1 1 0 7.92 3.96 3.96 0 0 1 0-7.92z"
      />
      <circle cx="18.41" cy="5.6" r="1.44" />
    </>
  ),
  Facebook: (
    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z" />
  ),
  YouTube: (
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
  ),
};

/**
 * Icon row. `rel="me"` is the identity half of the same claim the
 * JSON-LD `sameAs` makes; the links are deliberately *followed* —
 * nofollow on your own profiles works against entity consolidation.
 */
export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-1", className)}>
      {SOCIAL.map((profile) => (
        <li key={profile.name}>
          <a
            href={profile.href}
            target="_blank"
            rel="me noopener noreferrer"
            aria-label={`SyrupDesk on ${profile.name}`}
            title={`SyrupDesk on ${profile.name}`}
            className="inline-flex size-11 items-center justify-center rounded-sm text-green-200 transition-colors duration-200 ease-out hover:text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="fill-current">
              {ICONS[profile.name]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
