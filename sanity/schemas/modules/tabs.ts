import { defineField, defineType } from "sanity";

export const tabsModule = defineType({
  name: "tab",
  type: "object",
  title: "Tabs",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      initialValue: "Mission | Vision | Objective | Features",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "heading",
      type: "string",
      title: "Main Heading",
      validation: (Rule) => Rule.required(),
      initialValue: "Tabs",
    }),
    defineField({
      name: "tabs",
      type: "array",
      title: "Tabs",
      of: [
        {
          type: "object",
          name: "tab",
          title: "Tab",
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
          },
        },
      ],
    }),
    defineField({
      name: "intro_video",
      type: "url",
      title: "Intro Video",
    }),
  ],
});
