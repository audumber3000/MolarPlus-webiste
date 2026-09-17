import { defineField, defineType } from "sanity";

/** Mirrors the BlogPost shape the site already renders (lib/blog.ts). */
export default defineType({
  name: "post",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short description",
      type: "text",
      rows: 3,
      description:
        "Shown on the listing card and used as the meta description. Keep it under about 155 characters so search results do not truncate it.",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "tag",
      title: "Topic",
      type: "string",
      description: "Doubles as the filter on the blog sidebar, so reuse existing topics.",
      options: {
        list: ["Operations", "Buying guide", "Compliance", "GST", "Growth", "Customers", "Setup"],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "updatedAt", title: "Updated", type: "datetime" }),
    defineField({
      name: "readingMinutes",
      title: "Reading time in minutes",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(60),
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt text",
          description: "Describes the picture for screen readers. Leave empty only if decorative.",
        },
      ],
    }),
    defineField({ name: "body", title: "Body", type: "blockContent" }),
  ],
  preview: {
    select: { title: "title", subtitle: "tag", media: "coverImage" },
  },
});
