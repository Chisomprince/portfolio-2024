export const socialMedia = [
  { title: "Facebook", value: "facebook" },
  { title: "Twitter", value: "twitter" },
  { title: "Instagram", value: "instagram" },
  { title: "LinkedIn", value: "linkedin" },
  { title: "Youtube", value: "youtube" },
];

export const siteSettingsType = {
  name: "site_settings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Describe your site for search engines and social media.",
      rows: 3,
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your site.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "main_logo",
      type: "image",
      title: "Main Logo",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
    {
      name: "alt_logo",
      type: "image",
      title: "Alternate Logo",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
    {
      name: "mini_logo",
      type: "image",
      title: "Sub Logo",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
    {
      name: "footer_note",
      type: "text",
      title: "Footer notes",
      rows: 3,
    },
    {
      title: "Main navigation",
      name: "mainNav",
      description: "Select menu for main navigation",
      type: "reference",
      to: { type: "navigation" },
    },

    {
      title: "Footer Links",
      name: "footerNav",
      type: "reference",
      to: { type: "navigation" },
    },
    {
      name: "socials",
      type: "array",
      description: "Add link to your social handles",
      title: "Social Media",
      of: [
        {
          type: "object",
          name: "social",
          title: "Social",
          fields: [
            {
              name: "socialMedia",
              title: "Social Media",
              type: "string",
              options: {
                list: socialMedia.map(({ title, value }) => ({ title, value })),
                layout: "radio",
              },
            },
            {
              type: "string",
              name: "path",
              title: "URL",
              description: "URL to the page",
            },
          ],
        },
      ],
    },
    {
      name: "address",
      type: "array",
      description: "Add your address here",
      title: "Address",
      of: [
        {
          type: "text",
          rows: 2,
          name: "addr",
          title: "Address",
        },
      ],
    },
    {
      name: "emails",
      type: "array",
      description: "Add your email addresses here",
      title: "Emails",
      of: [
        {
          type: "email",
          rows: 2,
          name: "address",
          title: "Address",
        },
      ],
    },
    {
      name: "phones",
      type: "array",
      description: "Add your phone numbers here",
      title: "Phones",
      of: [
        {
          type: "string",
          name: "phone",
          title: "Address",
        },
      ],
    },
    {
      name: "copyright",
      type: "text",
      title: "Copyright notes",
      rows: 3,
    },
    {
      name: "contactText",
      type: "text",
      title: "Contact Text",
      rows: 3,
    },
    {
      name: "contactFormText",
      type: "text",
      title: "Contact Form Text",
      rows: 3,
    },
  ],
};
