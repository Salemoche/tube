import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import { NewsStyles } from './news.styles';

/**
 * @typedef {import("@prismicio/client").Content.NewsItemSlice} NewsItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewsItemSlice>} NewsItemProps
 * @param { NewsItemProps }
 */
const NewsItem = ({ slice }) => {
  const news = slice.primary?.news?.data;
  const spacingRight = slice.spacing_right;
  const width = slice.width;
  
  console.log(news)

  return (
    <NewsStyles>
      <div>
        <PrismicNextImage field={news.thumbnail} />
      </div>
      { news.title && <h2 className="title">{ news.title }</h2>}
      { news.summary && 
        <span className="summary">
          <PrismicRichText field={news.summary}/>
        </span>
      }
    </NewsStyles>
  )
}

export default NewsItem