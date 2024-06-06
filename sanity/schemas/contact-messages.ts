// schemas/contact.js
const contactType = {
  name: "contact_messages",
  title: "Contact Messages",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "subject",
      title: "Subject",
      type: "string",
    },
    {
      name: "areaOfQuery",
      title: "Area of Query",
      type: "string",
    },
    {
      name: "other",
      title: "Other",
      type: "string",
    },
    {
      name: "message",
      title: "Message",
      type: "text",
    },
  ],
};
export default contactType;
