import { defineField, defineType } from "sanity";

export const contactUs = defineType({
  type: "object",
  name: "contact_us",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "subheading",
      type: "string",
    }),
  ],
});
