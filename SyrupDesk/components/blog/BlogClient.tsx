"use client";

import { useMemo, useState } from "react";
import type { BlogPostSummary } from "@/lib/blog";
import { BlogCard } from "./BlogCard";
import { BlogSidebar } from "./BlogSidebar";

/**
 * Only the tag filter needs client state, so this wrapper is the sole
 * client boundary on the blog — the cards and the post bodies stay
 * server-rendered.
 */
export function BlogClient({
  posts,
  tags,
}: {
  posts: BlogPostSummary[];
  tags: Array<{ name: string; count: number }>;
}) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const visible = useMemo(
    () => (selectedTag ? posts.filter((post) => post.tag === selectedTag) : posts),
    [posts, selectedTag],
  );

  return (
    <div className="flex flex-col gap-12 lg:flex-row">
      <div className="lg:w-2/3">
        {/* Announced so a filter change is not a silent DOM swap for
            screen-reader users. */}
        <p aria-live="polite" className="sr-only">
          {`${visible.length} ${visible.length === 1 ? "post" : "posts"} shown`}
        </p>

        <ul className="grid gap-6 md:grid-cols-2">
          {visible.map((post) => (
            <li key={post.slug}>
              <BlogCard post={post} />
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:w-1/3">
        <BlogSidebar
          tags={tags}
          totalPosts={posts.length}
          selectedTag={selectedTag}
          onSelectTag={setSelectedTag}
        />
      </div>
    </div>
  );
}
