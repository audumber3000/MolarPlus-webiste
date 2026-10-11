import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { formatDate, getAllPosts, getPost, readingMinutes } from "@/lib/blog";
import { SITE } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.description,
    path: `/blog/${post.slug}`,
    article: { published: post.published, modified: post.updated },
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <article>
        <header className="on-dark bg-teal-900 pt-8 pb-12 text-teal-100 lg:pt-10 lg:pb-16">
          <Container>
            <Breadcrumbs
              tone="dark"
              trail={[
                { name: "Blog", path: "/blog" },
                { name: post.title, path: `/blog/${post.slug}` },
              ]}
            />
            <h1 className="mt-6 max-w-[26ch] text-[2rem] leading-[1.12] font-extrabold tracking-tight text-white sm:text-[2.75rem]">
              {post.title}
            </h1>
            <p className="mt-5 text-small text-teal-200" data-numeric>
              By the {SITE.name} team · <time dateTime={post.published}>{formatDate(post.published)}</time> · {readingMinutes(post)} minute read
            </p>
          </Container>
        </header>

        <Container className="py-12 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_17rem] lg:gap-16">
            <div className="measure">
              {post.body.map((block, i) => {
                switch (block.type) {
                  case "h2":
                    return <h2 key={i} className="mt-10 mb-3 text-h3">{block.text}</h2>;
                  case "ul":
                    return (
                      <ul key={i} className="my-4 list-disc space-y-2 pl-5 text-body-lg text-gray-700 marker:text-gray-400">
                        {block.items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    );
                  case "ol":
                    return (
                      <ol key={i} className="my-4 list-decimal space-y-2 pl-5 text-body-lg text-gray-700 marker:text-gray-500">
                        {block.items.map((item) => <li key={item}>{item}</li>)}
                      </ol>
                    );
                  case "table":
                    return (
                      <div key={i} className="my-6 overflow-x-auto rounded-md border border-gray-200 bg-gray-0">
                        <table className="w-full border-collapse text-left text-[0.9375rem]">
                          <caption className="sr-only">{block.caption}</caption>
                          <thead>
                            <tr className="border-b border-gray-200 text-small text-gray-500">
                              {block.head.map((cell) => (
                                <th key={cell} scope="col" className="px-4 py-3 font-semibold sm:px-5">{cell}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {block.rows.map((row) => (
                              <tr key={row[0]} className="border-b border-gray-100 align-top last:border-0">
                                {row.map((cell, c) =>
                                  c === 0 ? (
                                    <th key={c} scope="row" className="px-4 py-2.5 font-semibold text-gray-900 sm:px-5">{cell}</th>
                                  ) : (
                                    <td key={c} className="px-4 py-2.5 text-gray-700 sm:px-5">{cell}</td>
                                  ),
                                )}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  default:
                    return <p key={i} className="my-4 text-body-lg text-gray-700">{block.text}</p>;
                }
              })}
            </div>

            <aside className="self-start border-t-2 border-gray-900 pt-4 lg:sticky lg:top-24">
              <h2 className="text-small font-bold tracking-wider text-gray-500 uppercase">Read next</h2>
              <ul className="mt-2">
                {post.related.map((link) => (
                  <li key={link.href} className="border-b border-gray-200">
                    <Link href={link.href} className="flex min-h-12 items-center py-2 text-[0.9375rem] font-semibold text-teal-700 hover:underline hover:underline-offset-4">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </article>
      <CtaBand placement={`blog_post_${post.slug}`} />
    </>
  );
}
