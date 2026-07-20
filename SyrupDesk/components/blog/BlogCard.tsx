import Link from "next/link";
import Image from "next/image";
import type { BlogPostSummary } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog";

/**
 * Listing card. Border-first like every other card on the site, with
 * the hover lift reserved for the fact that the whole thing is
 * clickable.
 *
 * Body copy stays at 16px. The competitor runs 14px card text and it
 * is a real legibility problem for this buyer, so the cards do not
 * shrink type to fit more in.
 */
export function BlogCard({ post }: { post: BlogPostSummary }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-md border border-ink-200 bg-surface transition duration-200 ease-out hover:shadow-md motion-reduce:transition-none">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-ink-200">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt=""
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        ) : (
          /* No art yet. A tinted panel carrying the tag reads as a
             deliberate choice; an empty grey box reads as broken. */
          <div className="flex h-full w-full items-center justify-center bg-green-50">
            <span className="px-6 text-center text-h4 font-semibold text-green-300">
              {post.tag}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-small text-ink-500">
          <span className="font-semibold text-green-700">{post.tag}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.published}>{formatPostDate(post.published)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingMinutes} min read</span>
        </div>

        <h3 className="mt-3 text-h4 font-semibold text-ink-900">
          {/* Only the title is a tab stop; ::after stretches the hit
              area over the card so the whole thing is tappable. */}
          <Link
            href={`/blog/${post.slug}`}
            className="after:absolute after:inset-0 group-hover:text-green-700"
          >
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 text-body text-ink-700">{post.description}</p>

        <span aria-hidden="true" className="mt-5 text-body font-medium text-green-700">
          Read the post →
        </span>
      </div>
    </article>
  );
}
