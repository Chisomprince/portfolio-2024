// ./schemas/heroType.ts

import { defineField, defineType } from "sanity";

export const aboutModule = defineType({
  name: "about",
  type: "object",
  title: "About",
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
  ],
});
