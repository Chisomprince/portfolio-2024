// ./schemas/heroType.ts

import { defineField, defineType } from "sanity";

export const servicesCardModule = defineType({
  name: "services_cards",
  type: "object",
  description: "Services Cards",
  title: "Services",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      initialValue: "Services Cards",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "heading",
      type: "text",
    }),
    defineField({
      name: "subheading",
      type: "text",
    }),
    defineField({
      name: "paragraph",
      type: "block_content",
    }),
    defineField({
      name: "contents",
      type: "array",
      of: [
        defineField({
          name: "service",
          type: "reference",
          to: [{ type: "services" }],
        }),
      ],
    }),
  ],
});
