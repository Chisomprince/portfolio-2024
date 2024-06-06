// ./app/(blog)/page.tsx

import RenderComponent from "@/components/render-components";
import { sanityFetch } from "../../sanity/lib/fetch";
import { PAGE_QUERY } from "../../sanity/lib/queries";
export default async function Page() {
  const page = await sanityFetch({
    query: PAGE_QUERY,
    params: { slug: "home" },
  });

  console.log("page", page);
  return <RenderComponent data={page} />;
}
