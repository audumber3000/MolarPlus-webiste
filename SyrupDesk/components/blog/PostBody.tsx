import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import type { Image as SanityImage } from "sanity";

/**
 * Renders a post body from Sanity.
 *
 * The mapping is deliberately narrow and matches `sanity/schemas/blockContent.ts`:
 * an editor is only offered styles the site's Prose component can actually
 * render, so nothing an author picks in the Studio comes out unstyled.
 */
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote>
        <p>{children}</p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: { bullet: ({ children }) => <li>{children}</li>, number: ({ children }) => <li>{children}</li> },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => {
      const href = (value as { href?: string } | undefined)?.href ?? "";
      // Internal links go through next/link so they do not reload the site.
      return href.startsWith("/") ? (
        <Link href={href}>{children}</Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const img = value as SanityImage & { alt?: string };
      if (!img?.asset) return null;
      return (
        <figure className="not-prose my-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-ink-200">
            <Image src={urlForImage(img, 1400)} alt={img.alt ?? ""} fill sizes="(min-width: 1024px) 42rem, 100vw" className="object-cover" />
          </div>
        </figure>
      );
    },
  },
};

export function PostBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
