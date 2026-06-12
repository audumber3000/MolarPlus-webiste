type BadgeProps = {
  comingSoon?: boolean;
  href?: string;
  className?: string;
  onClick?: () => void;
};

const BADGES = {
  windows: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Get_it_from_Microsoft_Badge.svg',
    alt: 'Get MolarPlus from Microsoft',
  },
  mac: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk.svg',
    alt: 'Download MolarPlus on the Mac App Store',
  },
};

function Badge({
  src,
  alt,
  comingSoon,
  href,
  className = '',
  onClick,
}: {
  src: string;
  alt: string;
} & BadgeProps) {
  const img = (
    <img
      src={src}
      alt={comingSoon ? `${alt}, Coming soon` : alt}
      className={`h-12 w-auto transition-all ${
        comingSoon
          ? 'grayscale opacity-60 cursor-not-allowed'
          : 'hover:opacity-90 hover:-translate-y-0.5'
      } ${className}`}
    />
  );

  if (comingSoon) {
    return (
      <div className="relative inline-block">
        {img}
        <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 rounded-md bg-amber-100 border border-amber-300 text-amber-900 text-[8px] font-bold uppercase tracking-[0.18em] leading-none">
          Soon
        </span>
      </div>
    );
  }

  if (!href) return img;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
      onClick={onClick}
    >
      {img}
    </a>
  );
}

export function WindowsBadge({ comingSoon = true, href, className = '', onClick }: BadgeProps) {
  return (
    <Badge
      {...BADGES.windows}
      comingSoon={comingSoon}
      href={href}
      className={className}
      onClick={onClick}
    />
  );
}

export function MacBadge({ comingSoon = true, href, className = '', onClick }: BadgeProps) {
  return (
    <Badge {...BADGES.mac} comingSoon={comingSoon} href={href} className={className} onClick={onClick} />
  );
}

export default function DesktopBadges({ comingSoon = true }: { comingSoon?: boolean }) {
  return (
    <>
      <WindowsBadge comingSoon={comingSoon} />
      <MacBadge comingSoon={comingSoon} />
    </>
  );
}
