import { defineArrayMember, defineField, defineType } from "sanity";

export const servicesType = defineType({
  name: "services",
  type: "document",
  title: "Services",
  fields: [
    defineField({ name: "title", type: "string" }),

    defineField({
      name: "slug",
      title: "Slug",
      description: "This is the url to this service",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({ name: "description", type: "text", rows: 2 }),
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your site.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    defineField({
      name: "contents",
      type: "array",
      title: "Page Builder",
      of: [
        defineArrayMember({ name: "breadcrumb", type: "breadcrumb" }),
        defineArrayMember({ name: "body", type: "block_content" }),
        defineArrayMember({ name: "blogs", type: "blogs" }),
        defineArrayMember({ name: "testimonies", type: "testimonies" }),
        defineArrayMember({ name: "call_to_action", type: "call_to_action" }),
      ],
    }),
  ],
});
