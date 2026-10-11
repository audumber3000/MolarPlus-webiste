import { notFound } from "next/navigation";
import { OG_CONTENT_TYPE, OG_SIZE, shareImage } from "@/lib/og";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";
import { SITE } from "@/lib/site";

/** One share image for each post. It is also the `image` in the post's
 *  Article structured data (see articleSchema in lib/jsonld.ts). */
export const alt = "A post on the Curogrid blog";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return shareImage({
    title: post.title,
    label: "Blog",
    foot: `By the ${SITE.name} team  ·  ${formatDate(post.published)}`,
  });
}
