import { groq } from "next-sanity";
import { client } from "./lib/client";
import * as queries from "./lib/queries";
export async function getPage(slug) {
  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug]{
        "slug":slug.current,
        contents[]{
          defined(_ref) => { ...@->contents[0]{
             ${queries.modules}
          }},
          !defined(_ref) => {
             ${queries.modules}
          }
        }
      }`,
    { slug }
  );
}

export async function getServices() {
  return client.fetch(
    groq`*[_type == "services"]{
        path,
        title,
        description,
        keywords,
        slug
      }`
  );
}

export async function getCampaigns() {
  return client.fetch(groq`
  *[_type == "campaigns" ] | order(publishedAt desc) {
    title,
    introduction,
    publishedAt,
    goal,
    raised,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    "categories": categories[]->{
      title
    },
  }
`);
}

export async function getCampaignDetails(slug) {
  return client.fetch(
    groq`
  *[_type == "campaigns" && slug.current == $slug][0]{
    title,
    description,
    publishedAt,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    "categories": categories[]->{
      title
    },
    ...
  }
`,
    { slug }
  );
}

export async function getDonationDetails(slug) {
  return client.fetch(
    groq`
  *[_type == "donation" && tx_ref == $slug][0]{
    title,
    donated_amount,
    _id
  }
`,
    { slug }
  );
}
export async function createDonation(data) {
  return client.create({
    _type: "donation",
    ...data,
  });
}

export async function createNewsLetterSubscription(data) {
  return client.create({
    _type: "news_letters",
    ...data,
  });
}
export async function getBlogs() {
  return client.fetch(groq`
  *[_type == "post" ] | order(publishedAt desc){
    title,
    introduction,
    publishedAt,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    "categories": categories[]->{
      title
    },
    "author": author->{
      name,
      "avatar": avatar.asset->url
    },
  }
`);
}
export async function getBlogDetails(slug) {
  return client.fetch(
    groq`
  *[_type == "post" && slug.current == $slug][0]{
    title,
    description,
    publishedAt,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    "categories": categories[]->{
      title
    },
    ...
  }
`,
    { slug }
  );
}

export async function getCategories() {
  return client.fetch(groq`
  *[_type == "category" ] | order(publishedAt desc){
    ...
  }
`);
}

export async function getDonationSettings() {
  return client.fetch(groq`
    *[_type == "donation_settings"]{
      ...
    }
  `);
}

export async function getSiteSettings() {
  return client.fetch(groq`
    *[_type == "site_settings"]{
      ${queries.siteSettings}
    }
  `);
}
