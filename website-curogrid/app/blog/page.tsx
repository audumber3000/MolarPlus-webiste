import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { buildMetadata } from "@/lib/seo";
import { formatDate, getAllPosts, readingMinutes } from "@/lib/blog";

export const metadata: Metadata = buildMetadata({
  title: "Blog: Running a Clinic in India",
  description: "Practical writing for doctors who run their own clinic: choosing software, managing the OPD line, billing and what each speciality needs.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <PageHero
        trail={[{ name: "Blog", path: "/blog" }]}
        title="Running a clinic, written plainly"
        lead="For doctors who run their own clinic. No jargon, and no number we cannot source."
      />
      <Section>
        <Container>
          <ul className="border-t border-gray-200">
            {posts.map((post) => (
              <li key={post.slug} className="border-b border-gray-200">
                <article className="grid gap-3 py-8 lg:grid-cols-[12rem_1fr] lg:gap-12">
                  <p className="text-small text-gray-600" data-numeric>
                    <time dateTime={post.published}>{formatDate(post.published)}</time>
                    <span className="block">{readingMinutes(post)} minute read</span>
                  </p>
                  <div>
                    <h2 className="max-w-[32ch] text-h3">
                      <Link href={`/blog/${post.slug}`} className="underline-offset-4 hover:text-teal-700 hover:underline">{post.title}</Link>
                    </h2>
                    <p className="measure mt-3 text-body text-gray-700">{post.description}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CtaBand placement="blog_footer" />
    </>
  );
}
