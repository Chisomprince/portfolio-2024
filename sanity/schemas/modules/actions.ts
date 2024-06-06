import { defineField, defineType } from "sanity";

export const actionsModule = defineType({
  type: "object",
  name: "actions",
  fields: [
    defineField({
      name: "actions",
      type: "array",
      of: [
        defineField({
          type: "object",
          name: "Button",
          fields: [
            defineField({ type: "string", name: "label" }),
            defineField({ type: "link", name: "link" }),
            defineField({
              type: "string",
              name: "variant",
              initialValue: "primary",
              options: {
                list: [
                  { title: "Secondary", value: "secondary" },
                  { title: "Primary", value: "primary" },
                ],
                layout: "dropdown",
              },
            }),
          ],
        }),
      ],
    }),
  ],
});
