import React, { useEffect, useRef, useState, createRef } from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next';
import { ExhibitionSliceStyles, ExhibitionTitleStyles, ExhibitionDateStyles, ExhibitionContentStyles } from '../ExhibitionSlice/exhibition-slice.style';
import { defaultTheme } from '@/styles/theme';
import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { proxy, useSnapshot } from 'valtio';
import { baseState } from '@/data/state';

/**
 * @typedef {import("@prismicio/client").Content.ExhibitionImageSlice} ExhibitionImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExhibitionImageSlice>} ExhibitionImageProps
 * @param { ExhibitionImageProps }
 */
const ExhibitionImage = ({ slice, index }) => {

  const image = slice.primary.image;

  return (
    <ExhibitionContentStyles 
      className='image' 
      spacingLeft={ slice.primary.spacing_left}
      spacingRight={ slice.primary.spacing_right}
      spacingTop={ slice.primary.spacing_top}
      width={ slice.primary.width}
      height={ slice.primary.height}
    >
      { slice.primary.image && <div className="image-container"><PrismicNextImage field={ slice.primary.image } /></div> }
        <div className="image-caption">
          {/* <div className="name">{slice.primary.title[0]?.text ? <PrismicRichText field={slice.primary.title}/> : `figure${ index > 9 ? index+1 : '0' + (index+1)}`}</div> */}
          <div className="name">{slice.primary.title[0]?.text && <PrismicRichText field={slice.primary.title}/>}</div>
          {image?.primary?.information && <div className="info">{slice.primary.information}</div>}
        </div>

      { slice.primary.description &&
        <div className="description">
          <PrismicRichText field={slice.primary.description}/>
        </div>
      }
    </ExhibitionContentStyles>
  )
}

export default ExhibitionImage