import React, { useState } from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next';
import { ExhibitionSliceStyles, ExhibitionTitleStyles, ExhibitionDateStyles, ExhibitionContentStyles } from './exhibition-slice.style';
import { defaultTheme } from '@/styles/theme';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

/**
 * @typedef {import("@prismicio/client").Content.ExhibitionSliceSlice} ExhibitionSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExhibitionSliceSlice>} ExhibitionSliceProps
 * @param { ExhibitionSliceProps }
 */
const ExhibitionSlice = ({ slice }) => {

  const exhibition = slice.primary.exhibition;
  const images = exhibition.data.slices.filter( slice => {
    if ( slice.primary.show_on_exhibitions_page ) return slice.primary
  });

  const startDate = new Date(exhibition.data.start_date);
  const endDate = new Date(exhibition.data.end_date);

  const { scrollYProgress } = useScroll();
  const [scrollYPos, setScrollYPos] = useState(0)

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollYPos(latest)
  })

  //TODO: find out why the primary isn't filtered


  return (
    <ExhibitionSliceStyles>
      <motion.div 
        style={{ y: scrollYPos * 600}}
        className="exhibition-info"
      >
        <ExhibitionTitleStyles
          width={slice.primary.width_title}
          left={slice.primary.horizontal_alignment_title}
          top={slice.primary.vertical_alignment_title}
        >
          { exhibition.data.title }
        </ExhibitionTitleStyles>
        <ExhibitionDateStyles 
          width={slice.primary.width_date}
          left={slice.primary.horizontal_alignment_date}
          top={slice.primary.vertical_alignment_date}
        >
          <span>{ 
            startDate.toLocaleDateString('en-GB', {
              month: '2-digit',
              year: '2-digit',
            }).replace(/\//g, '.') }
          </span>
          <span>–</span>
          <span>{ 
              endDate.toLocaleDateString('en-GB', {
                month: '2-digit',
                year: '2-digit',
              }).replace(/\//g, '.') }
          </span>
        </ExhibitionDateStyles>
      </motion.div>
      { images.map(( image, i ) => {
        return (
          <ExhibitionContentStyles 
            className='image' 
            key={`image-${i}`}
            spacingLeft={ image.primary.spacing_left}
            spacingRight={ image.primary.spacing_right}
            spacingTop={ image.primary.spacing_top}
            width={ image.primary.width}
            spacingLeftTablet={ Math.floor(image.primary.spacing_left * defaultTheme.tabletMultiplier)}
            spacingRightTablet={ Math.floor(image.primary.spacing_right * defaultTheme.tabletMultiplier)}
            spacingTopTablet={ Math.floor(image.primary.spacing_top * defaultTheme.tabletMultiplier)}
            widthTablet={ Math.floor(image.primary.width * defaultTheme.tabletMultiplier)}
          >
            { image.primary.image && <PrismicNextImage field={ image.primary.image } /> }
            { image.primary.title?.text ? <PrismicRichText field={image.primary.title}/> : `figure${ i > 9 ? i+1 : '0' + (i+1)}`}
            <PrismicRichText field={image.primary.description}/>
          </ExhibitionContentStyles>
        )
      }
      )}
    </ExhibitionSliceStyles>
  )
}

export default ExhibitionSlice