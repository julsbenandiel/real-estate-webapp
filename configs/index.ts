import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
});

export enum ContentModel {
  CAROUSEL_BANNER = 'carouselBanner',
  PROPERTY_LISTING = 'propertyListing',
  AGENTS = 'agents',
  ABOUT_PAGE_DATA = 'aboutPageData'
}