import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.NewsItemSlice} NewsItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewsItemSlice>} NewsItemProps
 * @param { NewsItemProps }
 */
const NewsItem = ({ slice }) => {
  const news = slice.primary?.news?.data;

  return (
    <article>
      <div>
        <PrismicNextImage field={news.thumbnail} />
      </div>
      <span className="title">
        {
          news.content ?
          <PrismicRichText field={news.content}/>
          : <h2>Template slice, update me!</h2>
        }
      </span>
    </article>
  )
}

export default NewsItem