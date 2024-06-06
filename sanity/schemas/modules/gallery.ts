import { defineField, defineType } from "sanity";

export const galleryModule = defineType({
  name: "gallery",
  type: "object",
  title: "Gallary",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      initialValue: "Gallery",
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
      name: "items",
      type: "array",
      title: "Galleries",
      of: [
        {
          type: "file",
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
