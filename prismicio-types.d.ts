// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AboutPageDocumentDataSlicesSlice = never;

/**
 * Content for About Page documents
 */
interface AboutPageDocumentData {
  /**
   * Intro field in *About Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Intro
   * - **API ID Path**: about_page.intro
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  intro: prismic.RichTextField;

  /**
   * Plan Label field in *About Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_page.map_label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  map_label: prismic.KeyTextField;

  /**
   * Plan field in *About Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_page.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Slice Zone field in *About Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AboutPageDocumentDataSlicesSlice> /**
   * Meta Title field in *About Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_page.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *About Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_page.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  meta_description: prismic.RichTextField;

  /**
   * Meta Thumbnail field in *About Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_page.meta_thumbnail
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_thumbnail: prismic.ImageField<never>;
}

/**
 * About Page document from Prismic
 *
 * - **API ID**: `about_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<AboutPageDocumentData>,
    "about_page",
    Lang
  >;

type ArtistPageDocumentDataSlicesSlice = ArtistSlice;

/**
 * Content for Artist Page documents
 */
interface ArtistPageDocumentData {
  /**
   * Slice Zone field in *Artist Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: artist_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ArtistPageDocumentDataSlicesSlice> /**
   * Meta Title field in *Artist Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: artist_page.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Artist Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: artist_page.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  meta_description: prismic.RichTextField;

  /**
   * Meta Thumbnail field in *Artist Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: artist_page.meta_thumbnail
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_thumbnail: prismic.ImageField<never>;
}

/**
 * Artist Page document from Prismic
 *
 * - **API ID**: `artist_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArtistPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ArtistPageDocumentData>,
    "artist_page",
    Lang
  >;

type ContactPageDocumentDataSlicesSlice = ContactItemSlice;

/**
 * Content for Contact Page documents
 */
interface ContactPageDocumentData {
  /**
   * Intro field in *Contact Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_page.intro
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  intro: prismic.RichTextField;

  /**
   * Newsletter Placeholder field in *Contact Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_page.newsletter_placeholder
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  newsletter_placeholder: prismic.KeyTextField;

  /**
   * Subscribe Button field in *Contact Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_page.subscribe_button
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subscribe_button: prismic.KeyTextField;

  /**
   * Slice Zone field in *Contact Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ContactPageDocumentDataSlicesSlice> /**
   * Meta Title field in *Contact Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_page.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Contact Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_page.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  meta_description: prismic.RichTextField;

  /**
   * Meta Thumbnail field in *Contact Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_page.meta_thumbnail
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_thumbnail: prismic.ImageField<never>;
}

/**
 * Contact Page document from Prismic
 *
 * - **API ID**: `contact_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ContactPageDocumentData>,
    "contact_page",
    Lang
  >;

type DefaultPageDocumentDataSlicesSlice = DefaultTextSlice;

/**
 * Content for Default Page documents
 */
interface DefaultPageDocumentData {
  /**
   * Title field in *Default Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Page Title
   * - **API ID Path**: default_page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Default Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: default_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<DefaultPageDocumentDataSlicesSlice> /**
   * Meta Title field in *Default Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: default_page.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Default Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: default_page.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  meta_description: prismic.RichTextField;

  /**
   * Meta Thumbnail field in *Default Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: default_page.meta_thumbnail
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_thumbnail: prismic.ImageField<never>;
}

/**
 * Default Page document from Prismic
 *
 * - **API ID**: `default_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type DefaultPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<DefaultPageDocumentData>,
    "default_page",
    Lang
  >;

type ExhibitionDocumentDataSlicesSlice = ExhibitionImageSlice;

/**
 * Content for Exhibition documents
 */
interface ExhibitionDocumentData {
  /**
   * Title field in *Exhibition*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Exhibition Title
   * - **API ID Path**: exhibition.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Horizontal Alignment (Title) field in *Exhibition*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.horizontal_alignment_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  horizontal_alignment_title: prismic.NumberField;

  /**
   * Vertical Alignment (Title) field in *Exhibition*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.vertical_alignment_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  vertical_alignment_title: prismic.NumberField;

  /**
   * Width (Title) field in *Exhibition*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.width_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  width_title: prismic.NumberField;

  /**
   * Start Date field in *Exhibition*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.start_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  start_date: prismic.DateField;

  /**
   * End Date field in *Exhibition*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.end_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  end_date: prismic.DateField;

  /**
   * Horizontal Alignment (Date) field in *Exhibition*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.horizontal_alignment_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  horizontal_alignment_date: prismic.NumberField;

  /**
   * Vertical Alignment (Date) field in *Exhibition*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.vertical_alignment_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  vertical_alignment_date: prismic.NumberField;

  /**
   * Width (Date) field in *Exhibition*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.width_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  width_date: prismic.NumberField;

  /**
   * Slice Zone field in *Exhibition*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ExhibitionDocumentDataSlicesSlice>;
}

/**
 * Exhibition document from Prismic
 *
 * - **API ID**: `exhibition`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ExhibitionDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ExhibitionDocumentData>,
    "exhibition",
    Lang
  >;

type ExhibitionsPageDocumentDataSlicesSlice = ExhibitionSliceSlice;

/**
 * Content for Exhibitions Page (Home) documents
 */
interface ExhibitionsPageDocumentData {
  /**
   * Slice Zone field in *Exhibitions Page (Home)*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibitions_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ExhibitionsPageDocumentDataSlicesSlice> /**
   * Meta Title field in *Exhibitions Page (Home)*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibitions_page.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Exhibitions Page (Home)*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibitions_page.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  meta_description: prismic.RichTextField;

  /**
   * Meta Thumbnail field in *Exhibitions Page (Home)*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibitions_page.meta_thumbnail
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_thumbnail: prismic.ImageField<never>;
}

/**
 * Exhibitions Page (Home) document from Prismic
 *
 * - **API ID**: `exhibitions_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ExhibitionsPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ExhibitionsPageDocumentData>,
    "exhibitions_page",
    Lang
  >;

type NavigationDocumentDataSlicesSlice = MenuItemSlice;

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Slice Zone field in *Navigation*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<NavigationDocumentDataSlicesSlice>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

/**
 * Content for News documents
 */
interface NewsDocumentData {
  /**
   * Title field in *News*
   *
   * - **Field Type**: Text
   * - **Placeholder**: News Title
   * - **API ID Path**: news.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Thumbnail field in *News*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: news.thumbnail
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  thumbnail: prismic.ImageField<never>;

  /**
   * Summary field in *News*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: News summary for overview
   * - **API ID Path**: news.summary
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  summary: prismic.RichTextField;

  /**
   * Content field in *News*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: News Content
   * - **API ID Path**: news.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * News document from Prismic
 *
 * - **API ID**: `news`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NewsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<NewsDocumentData>, "news", Lang>;

type NewsPageDocumentDataSlicesSlice = NewsItemSlice;

/**
 * Content for News Page documents
 */
interface NewsPageDocumentData {
  /**
   * Slice Zone field in *News Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: news_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<NewsPageDocumentDataSlicesSlice> /**
   * Meta Title field in *News Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news_page.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *News Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news_page.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  meta_description: prismic.RichTextField;

  /**
   * Meta Thumbnail field in *News Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: news_page.meta_thumbnail
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_thumbnail: prismic.ImageField<never>;
}

/**
 * News Page document from Prismic
 *
 * - **API ID**: `news_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NewsPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NewsPageDocumentData>,
    "news_page",
    Lang
  >;

type SingleArtistPageDocumentDataSlicesSlice = ExhibitionImageSlice;

/**
 * Content for Single Artist Page documents
 */
interface SingleArtistPageDocumentData {
  /**
   * Artist Name field in *Single Artist Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: single_artist_page.artist_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  artist_name: prismic.KeyTextField;

  /**
   * Information field in *Single Artist Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: single_artist_page.artist_information
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  artist_information: prismic.RichTextField;

  /**
   * Artist Info field in *Single Artist Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: single_artist_page.artist_info
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  artist_info: prismic.RichTextField;

  /**
   * Slice Zone field in *Single Artist Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: single_artist_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SingleArtistPageDocumentDataSlicesSlice> /**
   * Meta Description field in *Single Artist Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: single_artist_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Single Artist Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: single_artist_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Single Artist Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: single_artist_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Single Artist Page document from Prismic
 *
 * - **API ID**: `single_artist_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SingleArtistPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<SingleArtistPageDocumentData>,
    "single_artist_page",
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
  | SingleArtistPageDocument;

/**
 * Primary content in *Artist → Primary*
 */
export interface ArtistSliceDefaultPrimary {
  /**
   * Name field in *Artist → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Artist Name
   * - **API ID Path**: artist.primary.name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Information field in *Artist → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Artist Information
   * - **API ID Path**: artist.primary.information
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  information: prismic.RichTextField;

  /**
   * Artist Page field in *Artist → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: artist.primary.connected_artist_page
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  connected_artist_page: prismic.ContentRelationshipField<"single_artist_page">;
}

/**
 * Default variation for Artist Slice
 *
 * - **API ID**: `default`
 * - **Description**: Artist
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArtistSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ArtistSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Artist*
 */
type ArtistSliceVariation = ArtistSliceDefault;

/**
 * Artist Shared Slice
 *
 * - **API ID**: `artist`
 * - **Description**: Artist
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArtistSlice = prismic.SharedSlice<"artist", ArtistSliceVariation>;

/**
 * Primary content in *ContactItem → Primary*
 */
export interface ContactItemSliceDefaultPrimary {
  /**
   * Content field in *ContactItem → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Contact Information
   * - **API ID Path**: contact_item.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Default variation for ContactItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: ContactItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactItemSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *ContactItem → Primary*
 */
export interface ContactItemSliceNewsletterPrimary {
  /**
   * Intro field in *ContactItem → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Newsletter
   * - **API ID Path**: contact_item.primary.intro
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  intro: prismic.RichTextField;

  /**
   * Email Placeholder field in *ContactItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_item.primary.email_placeholder
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email_placeholder: prismic.KeyTextField;

  /**
   * Subscribe Button field in *ContactItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_item.primary.subscribe_button
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subscribe_button: prismic.KeyTextField;
}

/**
 * Newsletter variation for ContactItem Slice
 *
 * - **API ID**: `newsletter`
 * - **Description**: ContactItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactItemSliceNewsletter = prismic.SharedSliceVariation<
  "newsletter",
  Simplify<ContactItemSliceNewsletterPrimary>,
  never
>;

/**
 * Slice variation for *ContactItem*
 */
type ContactItemSliceVariation =
  | ContactItemSliceDefault
  | ContactItemSliceNewsletter;

/**
 * ContactItem Shared Slice
 *
 * - **API ID**: `contact_item`
 * - **Description**: ContactItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactItemSlice = prismic.SharedSlice<
  "contact_item",
  ContactItemSliceVariation
>;

/**
 * Primary content in *DefaultText → Primary*
 */
export interface DefaultTextSliceDefaultPrimary {
  /**
   * Text field in *DefaultText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Add your text
   * - **API ID Path**: default_text.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for DefaultText Slice
 *
 * - **API ID**: `default`
 * - **Description**: DefaultText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DefaultTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<DefaultTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *DefaultText*
 */
type DefaultTextSliceVariation = DefaultTextSliceDefault;

/**
 * DefaultText Shared Slice
 *
 * - **API ID**: `default_text`
 * - **Description**: DefaultText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DefaultTextSlice = prismic.SharedSlice<
  "default_text",
  DefaultTextSliceVariation
>;

/**
 * Primary content in *StandardContentItem → Primary*
 */
export interface ExhibitionImageSliceDefaultPrimary {
  /**
   * Image field in *StandardContentItem → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *StandardContentItem → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title
   * - **API ID Path**: exhibition_image.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Information field in *StandardContentItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_image.primary.information
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  information: prismic.KeyTextField;

  /**
   * Description field in *StandardContentItem → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Description
   * - **API ID Path**: exhibition_image.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Show on Exhibitions Page field in *StandardContentItem → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: exhibition_image.primary.show_on_exhibitions_page
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  show_on_exhibitions_page: prismic.BooleanField;

  /**
   * Spacing Left field in *StandardContentItem → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_image.primary.spacing_left
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  spacing_left: prismic.NumberField;

  /**
   * Spacing Right field in *StandardContentItem → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_image.primary.spacing_right
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  spacing_right: prismic.NumberField;

  /**
   * Spacing Top field in *StandardContentItem → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_image.primary.spacing_top
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  spacing_top: prismic.NumberField;

  /**
   * Width field in *StandardContentItem → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_image.primary.width
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  width: prismic.NumberField;

  /**
   * Height field in *StandardContentItem → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_image.primary.height
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  height: prismic.NumberField;
}

/**
 * Default variation for StandardContentItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: ExhibitionImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExhibitionImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ExhibitionImageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *StandardContentItem*
 */
type ExhibitionImageSliceVariation = ExhibitionImageSliceDefault;

/**
 * StandardContentItem Shared Slice
 *
 * - **API ID**: `exhibition_image`
 * - **Description**: ExhibitionImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExhibitionImageSlice = prismic.SharedSlice<
  "exhibition_image",
  ExhibitionImageSliceVariation
>;

/**
 * Primary content in *ExhibitionSlice → Primary*
 */
export interface ExhibitionSliceSliceDefaultPrimary {
  /**
   * Exhibition field in *ExhibitionSlice → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: exhibition_slice.primary.exhibition
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  exhibition: prismic.ContentRelationshipField<"exhibition">;
}

/**
 * Default variation for ExhibitionSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: ExhibitionSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExhibitionSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ExhibitionSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ExhibitionSlice*
 */
type ExhibitionSliceSliceVariation = ExhibitionSliceSliceDefault;

/**
 * ExhibitionSlice Shared Slice
 *
 * - **API ID**: `exhibition_slice`
 * - **Description**: ExhibitionSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExhibitionSliceSlice = prismic.SharedSlice<
  "exhibition_slice",
  ExhibitionSliceSliceVariation
>;

/**
 * Primary content in *MenuItem → Primary*
 */
export interface MenuItemSliceDefaultPrimary {
  /**
   * Label field in *MenuItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu_item.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *MenuItem → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: menu_item.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for MenuItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: MenuItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MenuItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<MenuItemSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *MenuItem*
 */
type MenuItemSliceVariation = MenuItemSliceDefault;

/**
 * MenuItem Shared Slice
 *
 * - **API ID**: `menu_item`
 * - **Description**: MenuItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MenuItemSlice = prismic.SharedSlice<
  "menu_item",
  MenuItemSliceVariation
>;

/**
 * Primary content in *NewsItem → Primary*
 */
export interface NewsItemSliceDefaultPrimary {
  /**
   * News field in *NewsItem → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: news_item.primary.news
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  news: prismic.ContentRelationshipField<"news">;

  /**
   * Spacing to the Left (times circle) field in *NewsItem → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: news_item.primary.spacing_left
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  spacing_left: prismic.NumberField;

  /**
   * Spacing to the Right (times circle) field in *NewsItem → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: news_item.primary.spacing_right
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  spacing_right: prismic.NumberField;

  /**
   * Spacing to the Top (times circle) field in *NewsItem → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: news_item.primary.spacing_top
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  spacing_top: prismic.NumberField;

  /**
   * Width field in *NewsItem → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: news_item.primary.width
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  width: prismic.NumberField;
}

/**
 * Default variation for NewsItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: NewsItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NewsItemSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *NewsItem*
 */
type NewsItemSliceVariation = NewsItemSliceDefault;

/**
 * NewsItem Shared Slice
 *
 * - **API ID**: `news_item`
 * - **Description**: NewsItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsItemSlice = prismic.SharedSlice<
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
      AboutPageDocument,
      AboutPageDocumentData,
      AboutPageDocumentDataSlicesSlice,
      ArtistPageDocument,
      ArtistPageDocumentData,
      ArtistPageDocumentDataSlicesSlice,
      ContactPageDocument,
      ContactPageDocumentData,
      ContactPageDocumentDataSlicesSlice,
      DefaultPageDocument,
      DefaultPageDocumentData,
      DefaultPageDocumentDataSlicesSlice,
      ExhibitionDocument,
      ExhibitionDocumentData,
      ExhibitionDocumentDataSlicesSlice,
      ExhibitionsPageDocument,
      ExhibitionsPageDocumentData,
      ExhibitionsPageDocumentDataSlicesSlice,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataSlicesSlice,
      NewsDocument,
      NewsDocumentData,
      NewsPageDocument,
      NewsPageDocumentData,
      NewsPageDocumentDataSlicesSlice,
      SingleArtistPageDocument,
      SingleArtistPageDocumentData,
      SingleArtistPageDocumentDataSlicesSlice,
      AllDocumentTypes,
      ArtistSlice,
      ArtistSliceDefaultPrimary,
      ArtistSliceVariation,
      ArtistSliceDefault,
      ContactItemSlice,
      ContactItemSliceDefaultPrimary,
      ContactItemSliceNewsletterPrimary,
      ContactItemSliceVariation,
      ContactItemSliceDefault,
      ContactItemSliceNewsletter,
      DefaultTextSlice,
      DefaultTextSliceDefaultPrimary,
      DefaultTextSliceVariation,
      DefaultTextSliceDefault,
      ExhibitionImageSlice,
      ExhibitionImageSliceDefaultPrimary,
      ExhibitionImageSliceVariation,
      ExhibitionImageSliceDefault,
      ExhibitionSliceSlice,
      ExhibitionSliceSliceDefaultPrimary,
      ExhibitionSliceSliceVariation,
      ExhibitionSliceSliceDefault,
      MenuItemSlice,
      MenuItemSliceDefaultPrimary,
      MenuItemSliceVariation,
      MenuItemSliceDefault,
      NewsItemSlice,
      NewsItemSliceDefaultPrimary,
      NewsItemSliceVariation,
      NewsItemSliceDefault,
    };
  }
}
