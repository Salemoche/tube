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
  const spacingRight = slice.primary.spacing_right || 0;
  const spacingTop = slice.primary.spacing_top || 0;
  const width = slice.primary.width || 3;
  
  console.log(slice)

  return (
    <NewsStyles 
      spacingRight={spacingRight} 
      spacingTop={spacingTop} 
      width={width}
    >
      <div className="thumbnail">
        <PrismicNextImage field={news.thumbnail} />
      </div>
      { news.title && <h2 className="title">{ news.title }</h2>}
      { news.summary && 
        <div className="summary">
          <PrismicRichText field={news.summary}/>
        </div>
      }
    </NewsStyles>
  )
}

export default NewsItem