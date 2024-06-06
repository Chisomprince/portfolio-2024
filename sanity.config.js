"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.jsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { presentationTool } from "sanity/presentation";
import { apiVersion, dataset, projectId } from "./sanity/lib/env";
import { schema } from "./sanity/schemas";
const hiddenDocTypes = (listItem) =>
  !["site_settings", "donation_settings"].includes(listItem.getId());

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title("Content Manager")
          .items([
            S.listItem()
              .title("Site Settings")
              .child(
                S.editor()
                  .schemaType("site_settings")
                  .documentId("site_settings")
              ),
            // Add a visual divider (optional)
            S.divider(),
            S.divider(),
            ...S.documentTypeListItems().filter(hiddenDocTypes),
          ]);
        // return dataStructure(S, context);
      },
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: "/api/draft",
        },
      },
    }),
  ],
});
