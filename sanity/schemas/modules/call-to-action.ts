// ./schemas/heroType.ts

import { defineField, defineType } from "sanity";

export const callToActionModule = defineType({
  name: "call_to_action",
  type: "object",
  title: "Call To Action",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      initialValue: "Call to action",
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
      name: "content",
      title: "Body",
      type: "block_content",
    }),
    defineField({
      name: "actions",
      type: "array",
      of: [
        {
          type: "object",
          name: "Button",
          fields: [
            { type: "string", name: "label" },
            { type: "string", name: "href" },
            {
              type: "string",
              name: "variant",
              options: {
                list: [
                  { title: "Secondary", value: "secondary" },
                  { title: "Primary", value: "primary" },
                ],
                layout: "radio",
              },
            },
          ],
        },
      ],
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
