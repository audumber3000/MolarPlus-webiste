import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { BlogClient } from "@/components/blog/BlogClient";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, blogSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { getAllPostSummaries, getTags } from "@/lib/blog";

/** Posts live in Sanity, so pages rebuild on a schedule rather than only
 *  on deploy. A new post is live within a minute of publishing. */
export const revalidate = 60;

export const metadata = buildMetadata({
  title: "Blog: running a retail pharmacy in India",
  description:
    "Practical writing on pharmacy operations for Indian medical stores: expiry control, GST filing, purchase entry and choosing software. No jargon, no invented statistics.",
  path: "/blog",
});

export default async function BlogIndexPage() {
  const [posts, tags] = await Promise.all([getAllPostSummaries(), getTags()]);

  return (
    <>
      <JsonLd data={blogSchema(posts)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <Section tone="tint" className="pt-12 pb-14 lg:pt-16 lg:pb-16">
        <Container>
          <SectionHeader
            as="h1"
            eyebrow="Blog"
            title="Running a pharmacy, written plainly"
            intro="Notes on the jobs that actually take up your day: expiry, GST, purchase entry and stock. Written for owners, not for software buyers."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <BlogClient posts={posts} tags={tags} />
        </Container>
      </Section>

      <CtaBand
        title="Try it on your own counter"
        body="Start on the free plan, or send us your stock list and we will set it up before you decide."
        placement="blog_footer"
      />
    </>
  );
}
