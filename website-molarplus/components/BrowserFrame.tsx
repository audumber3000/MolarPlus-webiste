import Image from 'next/image';
import { colors } from '@/lib/seo';

/**
 * Native pixel size of every screenshot in /public/product. They are all
 * exported from the same 3000×1656 capture and downscaled together, so one
 * ratio describes the lot — which is what lets the frame reserve its space
 * before the image arrives instead of jolting the page when it does.
 */
export const SHOT_ASPECT = 'aspect-[2200/1214]';

/**
 * A lightweight macOS-style browser chrome that wraps a product screenshot,
 * so screens read as "the real app" rather than a floating image.
 *
 * Pass `src`/`alt` for a single screenshot. Pass `children` instead when the
 * caller needs to own what goes inside the frame — the homepage carousel
 * stacks every slide in there so it can cross-fade between images that are
 * already decoded, rather than swapping `src` and waiting on the network.
 */
export default function BrowserFrame({
  src,
  alt,
  url = 'app.molarplus.com',
  className = '',
  priority = false,
  sizes = '(min-width: 1024px) 64rem, 100vw',
  children,
}: {
  src?: string;
  alt?: string;
  url?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-[#2a276e]/10 ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-3 py-1.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <div className="mx-auto flex max-w-[60%] items-center gap-1.5 truncate rounded bg-white px-2.5 py-0.5 text-[10px] font-medium text-gray-400 ring-1 ring-gray-200">
          <span
            className="h-1 w-1 rounded-full"
            style={{ backgroundColor: colors.primary }}
          />
          {url}
        </div>
      </div>

      {children ?? (
        // The tinted box holds the frame's full height from first paint, so a
        // screenshot fades into a placeholder rather than pushing the page down.
        <div className={`relative ${SHOT_ASPECT} bg-gray-100`}>
          <Image
            src={src!}
            alt={alt!}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}
