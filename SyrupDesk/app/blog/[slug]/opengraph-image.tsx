import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";
import { getAllPosts, getPostBySlug, formatPostDate } from "@/lib/blog";

export const alt = `${SITE.name} blog`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** One image per post, prerendered alongside the posts themselves. */
export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

/** Same deliberate exception to the no-hardcoded-hex rule as the root
 *  OG image: satori never sees our stylesheet. Keep in sync with
 *  app/tokens.css. */
const GREEN_700 = "#005500";
const GREEN_300 = "#66bf66";
const GREEN_100 = "#d6efd6";

export default async function BlogOpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: GREEN_700,
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#ffffff", fontSize: 36, fontWeight: 700 }}>{SITE.name}</div>
          <div style={{ color: GREEN_300, fontSize: 18, fontWeight: 500 }}>
            {`by ${SITE.parent}`}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              maxWidth: 960,
            }}
          >
            {post?.title ?? "Running a pharmacy, written plainly"}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20, color: GREEN_100, fontSize: 24 }}>
          <span>{post?.tag ?? "Blog"}</span>
          <span>·</span>
          <span>{post ? formatPostDate(post.published) : SITE.name}</span>
          {post ? <span>·</span> : null}
          {post ? <span>{`${post.readingMinutes} min read`}</span> : null}
        </div>
      </div>
    ),
    size,
  );
}
