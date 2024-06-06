import { authorType } from "./author";
import { categoryType } from "./category";
import contactType from "./contact-messages";

import { aboutModule } from "./modules/about";
import { actionsModule } from "./modules/actions";
import { bannerModule } from "./modules/banner";
import { blockContentModule } from "./modules/block-content";
import { blogModule } from "./modules/blogs";
import { breadcrumbModule } from "./modules/breadcrumb";
import { callToActionModule } from "./modules/call-to-action";
import { contactUs } from "./modules/contact-us";
import { featuresModule } from "./modules/features";
import { galleryModule } from "./modules/gallery";
import { heroModule } from "./modules/hero";
import { linkModule } from "./modules/link";
import { navItemModule } from "./modules/navItem";
import { sectionModule } from "./modules/section";
import { servicesCardModule } from "./modules/services";
import { tabsModule } from "./modules/tabs";
import { testimonyModule } from "./modules/testimonies";
import navigationType from "./navigation";
import { newsLetterType } from "./news-letters";
import { pageType } from "./page";
import { postType } from "./post";
import { promotionType } from "./promotionType";
import { resuableSectionType } from "./reusable-sections";
import { servicesType } from "./services";
import { siteSettingsType } from "./siteSettings";

import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettingsType,
    navigationType,
    pageType,
    resuableSectionType,
    postType,
    categoryType,
    authorType,
    servicesType,
    promotionType,
    contactType,
    newsLetterType,
    contactUs,

    // Modules
    actionsModule,
    blockContentModule,
    blogModule,
    callToActionModule,
    featuresModule,
    heroModule,
    linkModule,
    navItemModule,
    servicesCardModule,
    sectionModule,
    breadcrumbModule,
    testimonyModule,
    bannerModule,
    tabsModule,
    aboutModule,
    galleryModule,
  ],
};
