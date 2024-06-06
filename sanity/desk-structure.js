// Add Schema type to hidden

const hiddenDocTypes = (listItem) =>
  !["site_settings"].includes(listItem.getId());

// Render a custom UI to view siteconfig & pages
// and showing other items except mentioed in the hiddendoctypes
export default (S) =>
  S.list()
    .title("Content Manager")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(
          S.editor().schemaType("site_settings").documentId("site_settings")
        ),
      // Add a visual divider (optional)
      S.divider(),
      S.listItem()
        .title("Donation Settings")
        .child(
          S.editor().schemaType("site_settings").documentId("site_settings")
        ),
      S.divider(),
      S.listItem()
        .title("Blog and Stories")
        .child(S.editor().schemaType("post").documentId("post")),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
