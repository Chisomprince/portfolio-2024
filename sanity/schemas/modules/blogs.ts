// ./schemas/heroType.ts

import { defineField, defineType } from "sanity";

export const blogModule = defineType({
  name: "blogs",
  type: "object",
  description: "The blog section",
  title: "Blogs",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "subheading",
      type: "string",
    }),
    // defineField({
    //   name: "paragraph",
    //   title: "Body",
    //   type: "block_content",
    // }),
    defineField({
      title: "Add Stories",
      name: "stories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "post" }],
        },
      ],
    }),
  ],
});
