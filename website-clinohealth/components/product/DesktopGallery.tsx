'use client';

import Image from 'next/image';
import { useId, useState } from 'react';
import type { Shot } from '@/lib/products/molarplus';
import type { PlatformKey } from '@/lib/products/molarplus';
import PlatformIcon from './PlatformIcon';

/**
 * The desktop screenshots, as Windows and macOS tabs.
 *
 * Both panels are in the HTML, so crawlers and no-JS readers see every screenshot; the inactive
 * one is only `hidden`, and its images are lazy, so it costs nothing until someone opens it.
 * Images keep their own aspect ratio (16:9 on Windows, 16:10 on Mac): nothing is cropped or
 * stretched. Each opens the full-size original.
 */
export default function DesktopGallery({
  sets,
  accent,
}: {
  sets: { key: Extract<PlatformKey, 'windows' | 'mac'>; label: string; shots: Shot[] }[];
  accent: string;
}) {
  const [active, setActive] = useState(sets[0].key);
  const id = useId();

  return (
    <div>
      <div role="tablist" aria-label="Desktop platform" className="inline-flex rounded-full border border-molar-edge bg-white p-1">
        {sets.map((set) => {
          const selected = set.key === active;
          return (
            <button
              key={set.key}
              id={`${id}-tab-${set.key}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${id}-panel-${set.key}`}
              onClick={() => setActive(set.key)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors"
              style={selected ? { backgroundColor: accent, color: '#fff' } : { color: accent }}
            >
              <PlatformIcon platform={set.key} className="h-4 w-4" />
              {set.label}
            </button>
          );
        })}
      </div>

      {sets.map((set) => (
        <div
          key={set.key}
          id={`${id}-panel-${set.key}`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${set.key}`}
          hidden={set.key !== active}
          className="mt-8"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {set.shots.map((shot, i) => (
              <figure key={shot.src} className={i === 0 ? 'md:col-span-2' : undefined}>
                <a
                  href={shot.src}
                  target="_blank"
                  rel="noopener"
                  className="block overflow-hidden rounded-xl border border-molar-edge bg-white transition-colors hover:border-molar"
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    sizes={i === 0 ? '(min-width: 1280px) 1216px, 100vw' : '(min-width: 1280px) 596px, (min-width: 768px) 50vw, 100vw'}
                    className="h-auto w-full"
                  />
                </a>
                <figcaption className="mt-3 text-sm font-medium text-ink-muted">
                  {shot.title}, on {set.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
