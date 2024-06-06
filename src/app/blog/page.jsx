// ./app/(blog)/page.tsx

import Posts from "@/components/sections/Posts";
import { POSTS_QUERY, sanityFetch } from "../../../sanity/lib/fetch";

export default async function Page() {
  const posts = await sanityFetch({
    query: POSTS_QUERY,
  });

  return <Posts posts={posts} />;
}
