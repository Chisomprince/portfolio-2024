import { defineField, defineType } from "sanity";

export const featuresModule = defineType({
  name: "features",
  type: "object",
  title: "Features",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      initialValue: "Features",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "heading",
      type: "string",
      title: "Main Heading",
      description: "Heading for the features section",
      validation: (Rule) => Rule.required(),
      initialValue: "Features",
    }),
    defineField({
      name: "feature",
      type: "array",
      title: "Features",
      of: [
        {
          type: "object",
          name: "feature",
          title: "Feature",
          fields: [
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
            defineField({ type: "text", name: "heading", rows: 2 }),
            defineField({
              name: "paragraph",
              title: "Content",
              type: "block_content",
            }),
          ],
          preview: {
            select: {
              title: "heading",
            },
            prepare({ title }) {
              return {
                title: `Feature - ${title}`,
              };
            },
          },
        },
      ],
    }),
  ],
});
