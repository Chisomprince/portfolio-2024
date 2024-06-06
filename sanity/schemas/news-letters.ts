import { defineField, defineType } from "sanity";

export const newsLetterType = defineType({
  name: "news_letters",
  title: "News Letter",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "email",
    }),
  ],
});
