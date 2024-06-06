// ./schemas/heroType.ts

import { defineField, defineType } from "sanity";

export const testimonyModule = defineType({
  name: "testimonies",
  type: "object",
  description: "Testimonies section in a page",
  title: "Testimonies",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "subheading",
      type: "string",
    }),
    defineField({
      title: "Add testimony",
      name: "testimony",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              type: "string",
            }),
            // defineField({
            //   name: "role",
            //   type: "string",
            // }),
            defineField({
              name: "content",
              title: "Body",
              type: "block_content",
            }),
            defineField({
              name: "image",
              type: "image",
              title: "User Image",
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
        },
      ],
    }),
  ],
});
