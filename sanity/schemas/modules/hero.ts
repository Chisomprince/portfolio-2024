// ./schemas/heroType.ts

import { defineField, defineType } from "sanity";

export const heroModule = defineType({
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      initialValue: "Main Hero",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "contents",
      description: "This is can be also be a carousel",
      type: "array",
      of: [
        defineField({
          name: "content",
          type: "object",
          fields: [
            defineField({
              name: "heading",
              type: "string",
            }),
            defineField({
              title: "subheading",
              name: "subheading",
              type: "block_content",
            }),
            defineField({
              name: "paragraph",
              title: "Body",
              type: "block_content",
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
        }),
      ],
    }),
  ],
});
