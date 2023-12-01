import React, { useEffect, useRef, useState, createRef } from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next';
import { ExhibitionSliceStyles, ExhibitionContentStyles } from './exhibition-slice.style';
import HoveringTitleComponent from '@/components/hovering-title/hovering-title';

/**
 * @typedef {import("@prismicio/client").Content.ExhibitionSliceSlice} ExhibitionSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExhibitionSliceSlice>} ExhibitionSliceProps
 * @param { Eimport { Link } from 'next/link';
xhibitionSliceProps }
 */
const ExhibitionSlice = ({ slice, index }) => {

  const containerRef = useRef(null);
  const images = slice.primary.exhibition.data.slices.filter( slice => {
    if ( slice.primary.show_on_exhibitions_page ) return slice.primary
  });


  return (
    <ExhibitionSliceStyles
      index={index}
      ref={containerRef}
      href={`/exhibition/${slice.primary.exhibition.uid}`}
    >
      <HoveringTitleComponent options={slice.primary.exhibition.data} containerRef={containerRef} />
      <ExhibitionContentStyles 
        className='image'
        spacingLeft={ images[0].primary.spacing_left}
        spacingRight={ images[0].primary.spacing_right}
        spacingTop={ images[0].primary.spacing_top}
        width={ images[0].primary.width}
        height={ images[0].primary.height}
        // ref={exhibitionContentRefs.current[i]}
        // widthTablet={ Math.floor(images[0].primary.width * defaultTheme.tabletMultiplier)}
      >
        { images[0].primary.image && <div className="image-container"><PrismicNextImage field={ images[0].primary.image } /></div> }
          <div className="image-caption">
            {/* <div className="name">{images[0].primary.title[0]?.text ? <PrismicRichText field={images[0].primary.title}/> : `figure${ i > 9 ? i+1 : '0' + (i+1)}`}</div> */}
            <div className="name">{images[0].primary.title[0]?.text && <PrismicRichText field={images[0].primary.title}/>}</div>
            {images[0]?.primary?.information && <div className="info">{images[0].primary.information}</div>}
          </div>

        { images[0].primary.description &&
          <div className="description">
            <PrismicRichText field={images[0].primary.description}/>
          </div>
        }
      </ExhibitionContentStyles>
    </ExhibitionSliceStyles>
  )
}

export default ExhibitionSlice