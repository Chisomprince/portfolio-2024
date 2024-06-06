import { defineArrayMember, defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  title: "Page",
  type: "document",
  groups: [
    {
      name: "contents",
      title: "Contents",
      default: true,
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    // Define title field for page title
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "contents",
    }),
    // Define slug field for page URL
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      group: "contents",
    }),
    // Define description field for page description
    defineField({ name: "description", type: "text", rows: 2, group: "seo" }),
    // Define keywords field for SEO keywords
    defineField({
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describe your site.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      group: "seo",
    }),
    // Define pageBuilder field for building page content
    defineField({
      name: "contents",
      type: "array",
      title: "Page Builder",
      group: "contents",
      of: [
        defineArrayMember({ name: "hero", type: "hero" }),
        defineArrayMember({ name: "breadcrumb", type: "breadcrumb" }),
        defineArrayMember({ name: "banner", type: "banner" }),
        defineArrayMember({ name: "features", type: "features" }),
        defineArrayMember({ name: "section", type: "section" }),
        defineArrayMember({ name: "call_to_action", type: "call_to_action" }),
        defineArrayMember({ name: "testimonies", type: "testimonies" }),
        defineArrayMember({ name: "blogs", type: "blogs" }),
        defineArrayMember({ name: "tab", type: "tab" }),
        defineArrayMember({ name: "about", type: "about" }),
        defineArrayMember({ name: "gallery", type: "gallery" }),
        defineArrayMember({ name: "contact_us", type: "contact_us" }),
        defineArrayMember({
          name: "body",
          title: "Content",
          type: "object",
          preview: {
            select: {
              title: "title",
            },
            prepare() {
              return {
                title: "Body",
              };
            },
          },
          fields: [
            defineField({
              name: "body",
              title: "Body",
              type: "block_content",
            }),
          ],
        }),

        defineArrayMember({
          title: "Resuable Section",
          name: "resuable_section",
          type: "reference",
          to: { type: "resuable_section" },
        }),
      ],
    }),
  ],
});
