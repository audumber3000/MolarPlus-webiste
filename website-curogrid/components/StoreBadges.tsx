import { APP_LINKS } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * The stores' own badge artwork, served from /public/badges and never
 * redrawn. A badge whose `APP_LINKS` entry is still `null` renders but
 * is not a link; paste the URL and it becomes one.
 */
type Store = keyof typeof APP_LINKS;

/** `width` and `height` are each file's own size, so the browser
 *  reserves the space before the image arrives and nothing shifts. */
const BADGE: Record<Store, { src: string; alt: string; width: number; height: number }> = {
  playStore: { src: "/badges/google-play.svg", alt: "Get Curogrid on Google Play", width: 180, height: 53 },
  appStore: { src: "/badges/app-store.svg", alt: "Download Curogrid on the App Store", width: 135, height: 40 },
  windows: { src: "/badges/microsoft.svg", alt: "Get Curogrid from Microsoft", width: 864, height: 312 },
};

export function StoreBadge({ store, className }: { store: Store; className?: string }) {
  const href = APP_LINKS[store];
  const { src, alt, width, height } = BADGE[store];

  // eslint-disable-next-line @next/next/no-img-element
  const img = <img src={src} alt={alt} width={width} height={height} loading="lazy" className={cn("h-10 w-auto", className)} />;

  if (!href) return <span className="inline-flex items-center">{img}</span>;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center transition-opacity duration-150 hover:opacity-85">
      {img}
    </a>
  );
}

export function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
      <StoreBadge store="playStore" />
      <StoreBadge store="appStore" />
      <StoreBadge store="windows" />
    </div>
  );
}

/** True once any store listing is live. Pages use it to choose between
 *  "Download" and "Coming to the stores" wording. */
export const ANY_STORE_LIVE = Object.values(APP_LINKS).some(Boolean);
