import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/ui/Section";
import { Prose } from "@/components/blog/Prose";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts, getPostBySlug, formatPostDate } from "@/lib/blog";

/** Every post is known at build time, so all of /blog is prerendered. */
export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

/** A slug outside generateStaticParams is a 404, not a rendered page. */
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return buildMetadata({ title: "Post not found", description: "", path: "/blog", index: false });

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    article: { published: post.published, modified: post.updated },
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const Body = post.body;
  const others = getAllPosts().filter((p) => p.slug !== post.slug);

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      <Section tone="tint" className="pt-12 pb-12 lg:pt-16 lg:pb-14">
        <Container>
          <div className="measure">
            <Link
              href="/blog"
              className="text-small font-medium text-green-700 hover:underline underline-offset-4"
            >
              ← All posts
            </Link>

            <h1 className="mt-5 text-[1.75rem] leading-tight font-bold tracking-tight text-ink-900 sm:text-h2">
              {post.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-small text-ink-500">
              <span className="font-semibold text-green-700">{post.tag}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.published}>{formatPostDate(post.published)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} min read</span>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-12 lg:py-16">
        <Container>
          <article>
            <Prose>
              <Body />
            </Prose>
          </article>

          {others.length > 0 && (
            <aside className="mt-16 border-t border-ink-200 pt-10">
              <h2 className="text-h4 font-semibold text-ink-900">More from the blog</h2>
              <ul className="mt-4 space-y-3">
                {others.map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={`/blog/${other.slug}`}
                      className="text-body font-medium text-green-700 hover:underline underline-offset-4"
                    >
                      {other.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </Container>
      </Section>

      <CtaBand
        title="Put this into practice"
        body="SyrupDesk keeps batch, expiry and GST on one record, so the routine above runs off your own data instead of a notebook."
        placement="blog_post_footer"
      />
    </>
  );
}
