// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for About Page documents */
interface AboutPageDocumentData {
  /**
   * Intro field in *About Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Intro
   * - **API ID Path**: about_page.intro
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  intro: prismicT.RichTextField;
  /**
   * Plan Label field in *About Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_page.map_label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  map_label: prismicT.KeyTextField;
  /**
   * Plan field in *About Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_page.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
  /**
   * Slice Zone field in *About Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<AboutPageDocumentDataSlicesSlice>;
  /**
   * Meta Title field in *About Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_page.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismicT.KeyTextField;
  /**
   * Meta Description field in *About Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_page.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismicT.RichTextField;
  /**
   * Meta Thumbnail field in *About Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_page.meta_thumbnail
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_thumbnail: prismicT.ImageField<never>;
}
/**
 * Slice for *About Page → Slice Zone*
 *
 */
type AboutPageDocumentDataSlicesSlice = never;
/**
 * About Page document from Prismic
 *
 * - **API ID**: `about_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutPageDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<AboutPageDocumentData>,
    "about_page",
    Lang
  >;
/** Content for Artist Page documents */
interface ArtistPageDocumentData {
  /**
   * Slice Zone field in *Artist Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: artist_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<ArtistPageDocumentDataSlicesSlice>;
  /**
   * Meta Title field in *Artist Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: artist_page.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismicT.KeyTextField;
  /**
   * Meta Description field in *Artist Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: artist_page.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismicT.RichTextField;
  /**
   * Meta Thumbnail field in *Artist Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: artist_page.meta_thumbnail
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_thumbnail: prismicT.ImageField<never>;
}
/**
 * Slice for *Artist Page → Slice Zone*
 *
 */
type ArtistPageDocumentDataSlicesSlice = ArtistSlice;
/**
 * Artist Page document from Prismic
 *
 * - **API ID**: `artist_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArtistPageDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<ArtistPageDocumentData>,
    "artist_page",
    Lang
  >;
/** Content for Contact Page documents */
interface ContactPageDocumentData {
  /**
   * Intro field in *Contact Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_page.intro
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  intro: prismicT.RichTextField;
  /**
   * Newsletter Placeholder field in *Contact Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_page.newsletter_placeholder
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  newsletter_placeholder: prismicT.KeyTextField;
  /**
   * Subscribe Button field in *Contact Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_page.subscribe_button
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  subscribe_button: prismicT.KeyTextField;
  /**
   * Slice Zone field in *Contact Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<ContactPageDocumentDataSlicesSlice>;
  /**
   * Meta Title field in *Contact Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_page.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismicT.KeyTextField;
  /**
   * Meta Description field in *Contact Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_page.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismicT.RichTextField;
  /**
   * Meta Thumbnail field in *Contact Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_page.meta_thumbnail
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_thumbnail: prismicT.ImageField<never>;
}
/**
 * Slice for *Contact Page → Slice Zone*
 *
 */
type ContactPageDocumentDataSlicesSlice = ContactItemSlice;
/**
 * Contact Page document from Prismic
 *
 * - **API ID**: `contact_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactPageDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<ContactPageDocumentData>,
    "contact_page",
    Lang
  >;
/** Content for Default Page documents */
interface DefaultPageDocumentData {
  /**
   * Title field in *Default Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Page Title
   * - **API ID Path**: default_page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * Slice Zone field in *Default Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: default_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<DefaultPageDocumentDataSlicesSlice>;
  /**
   * Meta Title field in *Default Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: default_page.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismicT.KeyTextField;
  /**
   * Meta Description field in *Default Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: default_page.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismicT.RichTextField;
  /**
   * Meta Thumbnail field in *Default Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: default_page.meta_thumbnail
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_thumbnail: prismicT.ImageField<never>;
}
/**
 * Slice for *Default Page → Slice Zone*
 *
 */
type DefaultPageDocumentDataSlicesSlice = DefaultTextSlice;
/**
 * Default Page document from Prismic
 *
 * - **API ID**: `default_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type DefaultPageDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<
    Simplify<DefaultPageDocumentData>,
    "default_page",
    Lang
  >;
/** Content for Exhibition documents */
interface ExhibitionDocumentData {
  /**
   * Title field in *Exhibition*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Exhibition Title
   * - **API ID Path**: exhibition.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * Start Date field in *Exhibition*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.start_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  start_date: prismicT.DateField;
  /**
   * End Date field in *Exhibition*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.end_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  end_date: prismicT.DateField;
  /**
   * Page Link field in *Exhibition*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.page_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  page_link: prismicT.LinkField;
  /**
   * Slice Zone field in *Exhibition*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<ExhibitionDocumentDataSlicesSlice>;
}
/**
 * Slice for *Exhibition → Slice Zone*
 *
 */
type ExhibitionDocumentDataSlicesSlice = ExhibitionImageSlice;
/**
 * Exhibition document from Prismic
 *
 * - **API ID**: `exhibition`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ExhibitionDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<ExhibitionDocumentData>,
    "exhibition",
    Lang
  >;
/** Content for Exhibitions Page documents */
interface ExhibitionsPageDocumentData {
  /**
   * Slice Zone field in *Exhibitions Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibitions_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<ExhibitionsPageDocumentDataSlicesSlice>;
  /**
   * Meta Title field in *Exhibitions Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibitions_page.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismicT.KeyTextField;
  /**
   * Meta Description field in *Exhibitions Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibitions_page.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismicT.RichTextField;
  /**
   * Meta Thumbnail field in *Exhibitions Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibitions_page.meta_thumbnail
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_thumbnail: prismicT.ImageField<never>;
}
/**
 * Slice for *Exhibitions Page → Slice Zone*
 *
 */
type ExhibitionsPageDocumentDataSlicesSlice = ExhibitionSliceSlice;
/**
 * Exhibitions Page document from Prismic
 *
 * - **API ID**: `exhibitions_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ExhibitionsPageDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<ExhibitionsPageDocumentData>,
    "exhibitions_page",
    Lang
  >;
/** Content for Navigation documents */
interface NavigationDocumentData {
  /**
   * Slice Zone field in *Navigation*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<NavigationDocumentDataSlicesSlice>;
}
/**
 * Slice for *Navigation → Slice Zone*
 *
 */
type NavigationDocumentDataSlicesSlice = MenuItemSlice;
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;
/** Content for News documents */
interface NewsDocumentData {
  /**
   * Title field in *News*
   *
   * - **Field Type**: Text
   * - **Placeholder**: News Title
   * - **API ID Path**: news.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * Thumbnail field in *News*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: news.thumbnail
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  thumbnail: prismicT.ImageField<never>;
  /**
   * Summary field in *News*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: News summary for overview
   * - **API ID Path**: news.summary
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  summary: prismicT.RichTextField;
  /**
   * Content field in *News*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: News Content
   * - **API ID Path**: news.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  content: prismicT.RichTextField;
}
/**
 * News document from Prismic
 *
 * - **API ID**: `news`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NewsDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<Simplify<NewsDocumentData>, "news", Lang>;
/** Content for News Page documents */
interface NewsPageDocumentData {
  /**
   * Slice Zone field in *News Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: news_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<NewsPageDocumentDataSlicesSlice>;
  /**
   * Meta Title field in *News Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news_page.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismicT.KeyTextField;
  /**
   * Meta Description field in *News Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news_page.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismicT.RichTextField;
  /**
   * Meta Thumbnail field in *News Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: news_page.meta_thumbnail
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_thumbnail: prismicT.ImageField<never>;
}
/**
 * Slice for *News Page → Slice Zone*
 *
 */
type NewsPageDocumentDataSlicesSlice = NewsItemSlice;
/**
 * News Page document from Prismic
 *
 * - **API ID**: `news_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NewsPageDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<NewsPageDocumentData>,
    "news_page",
    Lang
  >;
/** Content for Standard Page documents */
interface StandardPageDocumentData {
  /**
   * Slice Zone field in *Standard Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: standard_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<StandardPageDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Standard Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: standard_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismicT.KeyTextField;
  /**
   * Meta Image field in *Standard Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: standard_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismicT.ImageField<never>;
  /**
   * Meta Title field in *Standard Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: standard_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismicT.KeyTextField;
}
/**
 * Slice for *Standard Page → Slice Zone*
 *
 */
type StandardPageDocumentDataSlicesSlice = ExhibitionImageSlice;
/**
 * Standard Page document from Prismic
 *
 * - **API ID**: `standard_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type StandardPageDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<
    Simplify<StandardPageDocumentData>,
    "standard_page",
    Lang
  >;
export type AllDocumentTypes =
  | AboutPageDocument
  | ArtistPageDocument
  | ContactPageDocument
  | DefaultPageDocument
  | ExhibitionDocument
  | ExhibitionsPageDocument
  | NavigationDocument
  | NewsDocument
  | NewsPageDocument
  | StandardPageDocument;
/**
 * Primary content in Artist → Primary
 *
 */
interface ArtistSliceDefaultPrimary {
  /**
   * Name field in *Artist → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Artist Name
   * - **API ID Path**: artist.primary.name
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  name: prismicT.KeyTextField;
  /**
   * Information field in *Artist → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Artist Information
   * - **API ID Path**: artist.primary.information
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  information: prismicT.RichTextField;
}
/**
 * Default variation for Artist Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Artist`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ArtistSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<ArtistSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Artist*
 *
 */
type ArtistSliceVariation = ArtistSliceDefault;
/**
 * Artist Shared Slice
 *
 * - **API ID**: `artist`
 * - **Description**: `Artist`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ArtistSlice = prismicT.SharedSlice<"artist", ArtistSliceVariation>;
/**
 * Primary content in ContactItem → Primary
 *
 */
interface ContactItemSliceDefaultPrimary {
  /**
   * Content field in *ContactItem → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Contact Information
   * - **API ID Path**: contact_item.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismicT.RichTextField;
}
/**
 * Default variation for ContactItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ContactItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactItemSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<ContactItemSliceDefaultPrimary>,
  never
>;
/**
 * Primary content in ContactItem → Primary
 *
 */
interface ContactItemSliceNewsletterPrimary {
  /**
   * Intro field in *ContactItem → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Newsletter
   * - **API ID Path**: contact_item.primary.intro
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  intro: prismicT.RichTextField;
  /**
   * Email Placeholder field in *ContactItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_item.primary.email_placeholder
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  email_placeholder: prismicT.KeyTextField;
  /**
   * Subscribe Button field in *ContactItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_item.primary.subscribe_button
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  subscribe_button: prismicT.KeyTextField;
}
/**
 * Newsletter variation for ContactItem Slice
 *
 * - **API ID**: `newsletter`
 * - **Description**: `ContactItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactItemSliceNewsletter = prismicT.SharedSliceVariation<
  "newsletter",
  Simplify<ContactItemSliceNewsletterPrimary>,
  never
>;
/**
 * Slice variation for *ContactItem*
 *
 */
type ContactItemSliceVariation =
  | ContactItemSliceDefault
  | ContactItemSliceNewsletter;
/**
 * ContactItem Shared Slice
 *
 * - **API ID**: `contact_item`
 * - **Description**: `ContactItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactItemSlice = prismicT.SharedSlice<
  "contact_item",
  ContactItemSliceVariation
>;
/**
 * Primary content in DefaultText → Primary
 *
 */
interface DefaultTextSliceDefaultPrimary {
  /**
   * Text field in *DefaultText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Add your text
   * - **API ID Path**: default_text.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismicT.RichTextField;
}
/**
 * Default variation for DefaultText Slice
 *
 * - **API ID**: `default`
 * - **Description**: `DefaultText`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type DefaultTextSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<DefaultTextSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *DefaultText*
 *
 */
type DefaultTextSliceVariation = DefaultTextSliceDefault;
/**
 * DefaultText Shared Slice
 *
 * - **API ID**: `default_text`
 * - **Description**: `DefaultText`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type DefaultTextSlice = prismicT.SharedSlice<
  "default_text",
  DefaultTextSliceVariation
>;
/**
 * Primary content in StandardPageContent → Primary
 *
 */
interface ExhibitionImageSliceDefaultPrimary {
  /**
   * Image field in *StandardPageContent → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_image.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
  /**
   * Title field in *StandardPageContent → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title
   * - **API ID Path**: exhibition_image.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismicT.TitleField;
  /**
   * Information field in *StandardPageContent → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_image.primary.information
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  information: prismicT.KeyTextField;
  /**
   * Description field in *StandardPageContent → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Description
   * - **API ID Path**: exhibition_image.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * Show on Exhibitions Page field in *StandardPageContent → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: exhibition_image.primary.show_on_exhibitions_page
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  show_on_exhibitions_page: prismicT.BooleanField;
  /**
   * Spacing Left field in *StandardPageContent → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_image.primary.spacing_left
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  spacing_left: prismicT.NumberField;
  /**
   * Spacing Right field in *StandardPageContent → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_image.primary.spacing_right
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  spacing_right: prismicT.NumberField;
  /**
   * Spacing Top field in *StandardPageContent → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_image.primary.spacing_top
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  spacing_top: prismicT.NumberField;
  /**
   * Width field in *StandardPageContent → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_image.primary.width
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  width: prismicT.NumberField;
  /**
   * Height field in *StandardPageContent → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_image.primary.height
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  height: prismicT.NumberField;
}
/**
 * Default variation for StandardPageContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ExhibitionImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ExhibitionImageSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<ExhibitionImageSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *StandardPageContent*
 *
 */
type ExhibitionImageSliceVariation = ExhibitionImageSliceDefault;
/**
 * StandardPageContent Shared Slice
 *
 * - **API ID**: `exhibition_image`
 * - **Description**: `ExhibitionImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ExhibitionImageSlice = prismicT.SharedSlice<
  "exhibition_image",
  ExhibitionImageSliceVariation
>;
/**
 * Primary content in ExhibitionSlice → Primary
 *
 */
interface ExhibitionSliceSliceDefaultPrimary {
  /**
   * Exhibition field in *ExhibitionSlice → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_slice.primary.exhibition
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  exhibition: prismicT.RelationField<"exhibition">;
  /**
   * Horizontal Alignment (Title) field in *ExhibitionSlice → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_slice.primary.horizontal_alignment_title
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  horizontal_alignment_title: prismicT.NumberField;
  /**
   * Vertical Alignment (Title) field in *ExhibitionSlice → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_slice.primary.vertical_alignment_title
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  vertical_alignment_title: prismicT.NumberField;
  /**
   * Width (Title) field in *ExhibitionSlice → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_slice.primary.width_title
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  width_title: prismicT.NumberField;
  /**
   * Horizontal Alignment (Date) field in *ExhibitionSlice → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_slice.primary.horizontal_alignment_date
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  horizontal_alignment_date: prismicT.NumberField;
  /**
   * Vertical Alignment (Date) field in *ExhibitionSlice → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_slice.primary.vertical_alignment_date
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  vertical_alignment_date: prismicT.NumberField;
  /**
   * Width (Date) field in *ExhibitionSlice → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_slice.primary.width_date
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  width_date: prismicT.NumberField;
}
/**
 * Default variation for ExhibitionSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ExhibitionSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ExhibitionSliceSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<ExhibitionSliceSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *ExhibitionSlice*
 *
 */
type ExhibitionSliceSliceVariation = ExhibitionSliceSliceDefault;
/**
 * ExhibitionSlice Shared Slice
 *
 * - **API ID**: `exhibition_slice`
 * - **Description**: `ExhibitionSlice`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ExhibitionSliceSlice = prismicT.SharedSlice<
  "exhibition_slice",
  ExhibitionSliceSliceVariation
>;
/**
 * Primary content in MenuItem → Primary
 *
 */
interface MenuItemSliceDefaultPrimary {
  /**
   * Label field in *MenuItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu_item.primary.label
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  label: prismicT.KeyTextField;
  /**
   * Link field in *MenuItem → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: menu_item.primary.link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismicT.LinkField;
}
/**
 * Default variation for MenuItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: `MenuItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MenuItemSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<MenuItemSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *MenuItem*
 *
 */
type MenuItemSliceVariation = MenuItemSliceDefault;
/**
 * MenuItem Shared Slice
 *
 * - **API ID**: `menu_item`
 * - **Description**: `MenuItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MenuItemSlice = prismicT.SharedSlice<
  "menu_item",
  MenuItemSliceVariation
>;
/**
 * Primary content in NewsItem → Primary
 *
 */
interface NewsItemSliceDefaultPrimary {
  /**
   * News field in *NewsItem → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: news_item.primary.news
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  news: prismicT.RelationField<"news">;
  /**
   * Spacing Left field in *NewsItem → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: news_item.primary.spacing_left
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  spacing_left: prismicT.NumberField;
  /**
   * Spacing Right field in *NewsItem → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: news_item.primary.spacing_right
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  spacing_right: prismicT.NumberField;
  /**
   * Spacing Top field in *NewsItem → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: news_item.primary.spacing_top
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  spacing_top: prismicT.NumberField;
  /**
   * Width field in *NewsItem → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: news_item.primary.width
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  width: prismicT.NumberField;
}
/**
 * Default variation for NewsItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: `NewsItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NewsItemSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<NewsItemSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *NewsItem*
 *
 */
type NewsItemSliceVariation = NewsItemSliceDefault;
/**
 * NewsItem Shared Slice
 *
 * - **API ID**: `news_item`
 * - **Description**: `NewsItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NewsItemSlice = prismicT.SharedSlice<
  "news_item",
  NewsItemSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      AboutPageDocumentData,
      AboutPageDocumentDataSlicesSlice,
      AboutPageDocument,
      ArtistPageDocumentData,
      ArtistPageDocumentDataSlicesSlice,
      ArtistPageDocument,
      ContactPageDocumentData,
      ContactPageDocumentDataSlicesSlice,
      ContactPageDocument,
      DefaultPageDocumentData,
      DefaultPageDocumentDataSlicesSlice,
      DefaultPageDocument,
      ExhibitionDocumentData,
      ExhibitionDocumentDataSlicesSlice,
      ExhibitionDocument,
      ExhibitionsPageDocumentData,
      ExhibitionsPageDocumentDataSlicesSlice,
      ExhibitionsPageDocument,
      NavigationDocumentData,
      NavigationDocumentDataSlicesSlice,
      NavigationDocument,
      NewsDocumentData,
      NewsDocument,
      NewsPageDocumentData,
      NewsPageDocumentDataSlicesSlice,
      NewsPageDocument,
      StandardPageDocumentData,
      StandardPageDocumentDataSlicesSlice,
      StandardPageDocument,
      AllDocumentTypes,
      ArtistSliceDefaultPrimary,
      ArtistSliceDefault,
      ArtistSliceVariation,
      ArtistSlice,
      ContactItemSliceDefaultPrimary,
      ContactItemSliceDefault,
      ContactItemSliceNewsletterPrimary,
      ContactItemSliceNewsletter,
      ContactItemSliceVariation,
      ContactItemSlice,
      DefaultTextSliceDefaultPrimary,
      DefaultTextSliceDefault,
      DefaultTextSliceVariation,
      DefaultTextSlice,
      ExhibitionImageSliceDefaultPrimary,
      ExhibitionImageSliceDefault,
      ExhibitionImageSliceVariation,
      ExhibitionImageSlice,
      ExhibitionSliceSliceDefaultPrimary,
      ExhibitionSliceSliceDefault,
      ExhibitionSliceSliceVariation,
      ExhibitionSliceSlice,
      MenuItemSliceDefaultPrimary,
      MenuItemSliceDefault,
      MenuItemSliceVariation,
      MenuItemSlice,
      NewsItemSliceDefaultPrimary,
      NewsItemSliceDefault,
      NewsItemSliceVariation,
      NewsItemSlice,
    };
  }
}
