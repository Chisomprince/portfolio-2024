import { defineArrayMember, defineField, defineType } from "sanity";

export const resuableSectionType = defineType({
  name: "resuable_section",
  title: "Resuable Section",
  type: "document",

  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "contents",
      type: "array",
      title: "Contents",
      of: [
        defineArrayMember({ name: "hero", type: "hero" }),
        defineArrayMember({ name: "breadcrumb", type: "breadcrumb" }),
        defineArrayMember({ name: "banner", type: "banner" }),
        defineArrayMember({ name: "features", type: "features" }),
        defineArrayMember({ name: "section", type: "section" }),
        defineArrayMember({ name: "call_to_action", type: "call_to_action" }),
        defineArrayMember({ name: "testimonies", type: "testimonies" }),
        defineArrayMember({ name: "blogs", type: "blogs" }),
        defineArrayMember({ name: "tab", type: "tab" }),
        defineArrayMember({ name: "about", type: "about" }),
        defineArrayMember({ name: "gallery", type: "gallery" }),
        defineArrayMember({
          name: "body",
          title: "Content",
          type: "object",
          preview: {
            select: {
              title: "title",
            },
            prepare(selection) {
              return {
                title: "body",
              };
            },
          },
          fields: [
            defineField({
              name: "body",
              title: "Body",
              type: "block_content",
            }),
          ],
        }),
      ],
    }),
  ],
});
