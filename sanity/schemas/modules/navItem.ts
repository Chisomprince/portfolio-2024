//File name: navItem.js
//File location: schemas/objects

export const navItemModule = {
  name: "navigationItem",
  title: "Navigation Item",
  type: "object",
  fields: [
    {
      name: "text",
      type: "string",
      title: "Navigation Text",
    },
    {
      name: "navigationItemUrl",
      type: "link",
      title: "Navigation Item URL",
    },
    {
      type: "array",
      name: "links",
      title: "Sub menu",
      of: [
        {
          type: "reference",
          to: [{ type: "post" }, { type: "services" }, { type: "page" }],
        },
      ],
    },
  ],
};
