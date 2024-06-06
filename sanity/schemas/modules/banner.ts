// ./schemas/heroType.ts

import { defineField, defineType } from "sanity";

export const bannerModule = defineType({
  name: "banner",
  type: "object",
  title: "Banner",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      initialValue: "Banner",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "subheading",
      type: "string",
    }),

    defineField({
      name: "actions",
      type: "actions",
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
  ],
});
