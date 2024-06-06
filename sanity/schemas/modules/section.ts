// ./schemas/heroType.ts

import { defineField, defineType } from "sanity";

export const sectionModule = defineType({
  name: "section",
  type: "object",
  title: "Section",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      initialValue: "Section",
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
    defineField({
      name: "image_position",
      title: "Image Position",
      type: "string",
      options: {
        list: [
          { title: "Right", value: "right" },
          { title: "Left", value: "left" },
        ],
        layout: "dropdown",
      },
    }),
  ],
});
