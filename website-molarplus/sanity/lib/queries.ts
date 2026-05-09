import { groq } from 'next-sanity';

export const postFieldsQuery = groq`
  _id,
  title,
  "slug": slug.current,
  description,
  coverImage,
  "category": category->title,
  "categorySlug": category->slug.current,
  "author": author->{ name, role, image },
  publishedAt,
  isTrending,
  seoTitle,
  seoDescription,
  canonicalUrl,
  noIndex
`;

export const allPostsQuery = groq`
  *[_type == "post" && !(_id in path("drafts.**")) && noIndex != true]
  | order(publishedAt desc) {
    ${postFieldsQuery}
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ${postFieldsQuery},
    body,
    faqs
  }
`;

export const allSlugsQuery = groq`
  *[_type == "post" && defined(slug.current) && noIndex != true][].slug.current
`;

export const allCategoriesQuery = groq`
  *[_type == "category"] {
    "name": title,
    "count": count(*[_type == "post" && references(^._id) && noIndex != true])
  }[count > 0]
`;
