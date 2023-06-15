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

  console.log(news)

  return (
    <NewsStyles 
      spacingRight={spacingRight} 
      spacingTop={spacingTop} 
      width={width}
    >
      { news?.thumbnail &&
        <div className="thumbnail">
          <PrismicNextImage field={news.thumbnail} />
        </div>
      }
      { news.title && <h2 className="title">{ news.title }</h2>}
      <p className="date">
        {
          new Date(slice.primary.news.first_publication_date).toLocaleDateString('en-GB', {
            month: '2-digit',
            year: '2-digit',
          }).replace(/\//g, '.') 
        }
      </p>
      { news.summary && 
        <div className="summary">
          <PrismicRichText field={news.summary}/>
        </div>
      }
      { news.content && 
        <div className="content">
          <PrismicRichText field={news.content}/>
        </div>
      }
    </NewsStyles>
  )
}

export default NewsItem