import { APP_LINKS } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * The official store badges — Google Play, App Store, Microsoft, Mac App
 * Store — ported from the MolarPlus site.
 *
 * The artwork is the stores' own, served from /public/badges rather
 * than hotlinked: a Wikimedia request on every page load is a third-party
 * dependency on a slow connection, and a broken one is a blank gap where
 * the download button should be.
 *
 * A badge whose `APP_LINKS` entry is still `null` renders in full colour
 * but is not a link yet — paste the URL and it becomes clickable.
 */

type Store = "playStore" | "appStore" | "windows" | "mac";

const BADGE: Record<Store, { src: string; alt: string }> = {
  playStore: { src: "/badges/google-play.svg", alt: "Get SyrupDesk on Google Play" },
  appStore: { src: "/badges/app-store.svg", alt: "Download SyrupDesk on the App Store" },
  windows: { src: "/badges/microsoft.svg", alt: "Get SyrupDesk from Microsoft" },
  mac: { src: "/badges/mac-app-store.svg", alt: "Download SyrupDesk on the Mac App Store" },
};

export function StoreBadge({ store, className }: { store: Store; className?: string }) {
  const href = APP_LINKS[store];
  const { src, alt } = BADGE[store];

  const img = (
    // Plain <img>: these are SVGs with no raster to optimise, and next/image
    // would need their intrinsic sizes hard-coded per file.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={cn(
        "h-10 w-auto",
        href && "transition-opacity duration-200 ease-out hover:opacity-90",
        className,
      )}
    />
  );

  if (!href) {
    return (
      <span className="inline-flex items-center">
        {img}
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
      {img}
    </a>
  );
}

/** All four on one baseline, wrapping two-by-two in a narrow column. */
export function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
      <StoreBadge store="playStore" />
      <StoreBadge store="appStore" />
      <StoreBadge store="windows" />
      <StoreBadge store="mac" />
    </div>
  );
}
