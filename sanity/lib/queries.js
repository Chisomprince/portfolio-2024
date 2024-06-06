export const modules = `
  _type == 'hero' => {
    ...,

  },
  _type == 'approach' => {
    ...
  },
  _type == 'section' => {
    ...
  },
  _type == 'call_to_action' => {
    ...
  },
  _type == 'breadcrumb' => {
    ...
  },
  _type == 'banner' => {
    ...
  },
  _type == 'campaigns_listing' => {
    ...
  },
  _type == 'blogs' => {
    ...,
    stories[] -> {
      ...,
      mainImage{
        asset->{
          _id,
          url
        }
      },
    }
  },
  _type == 'features' => {
    ...
  },
  _type == 'partners' => {
    ...
  },
  _type == 'portfolio' => {
    ...
  },
  _type == 'testimonies' => {
    ...
  },
  _type == 'tab' => {
    ...
  },
  _type == 'blog_listing' => {
    ...
  },
  _type == 'about' => {
    ...
  },
  _type == 'gallery' => {
    ...
  },
  _type == 'contact_us' => {
    ...
  },
  _type == 'body' => {
    ...
  },

`;

export const siteSettings = `
  path,
  title,
  description,
  keywords,
  mainNav->{
    items[]{
      ...,
      "slug":navigationItemUrl.internalLink->slug.current 
    }
  },
  footerNav->{
    items[]{
      ...,
      navigationItemUrl{
        ...
        internalLink->{slug}
      },
      links[]->{
        title,
        slug,
        pageBuilder[_type == "services"]{
          services[]->{title,slug}
        }
      }
    }
  },
  socials[]{...},
  address,
  emails,
  phones,
  copyright,
  footer_note,
  main_logo{asset->{url}},
  alt_logo{asset->{url}},
  mini_logo{asset->{url}},
  contactText,
  contactFormText
`;

// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug]{
  "slug":slug.current,
  contents[]{
    defined(_ref) => { ...@->contents[0]{
       ${modules}
    }},
    !defined(_ref) => {
       ${modules}
    }
  }
}`;

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;
