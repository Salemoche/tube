import React, { useEffect, useRef, useState, createRef } from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next';
import { ExhibitionSliceStyles, ExhibitionTitleStyles, ExhibitionDateStyles, ExhibitionContentStyles } from './exhibition-slice.style';
import { defaultTheme } from '@/styles/theme';
import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { proxy, useSnapshot } from 'valtio';
import { baseState } from '@/data/state';

/**
 * @typedef {import("@prismicio/client").Content.ExhibitionSliceSlice} ExhibitionSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExhibitionSliceSlice>} ExhibitionSliceProps
 * @param { ExhibitionSliceProps }
 */
const ExhibitionSlice = ({ slice, index }) => {

  const containerRef = useRef(null);
  const exhibition = slice.primary.exhibition;
  const images = exhibition.data.slices.filter( slice => {
    if ( slice.primary.show_on_exhibitions_page ) return slice.primary
  });

  const startDate = new Date(exhibition.data.start_date);
  const endDate = new Date(exhibition.data.end_date);

  const { scrollYProgress } = useScroll({ target: containerRef});
  const [scrollYPos, setScrollYPos] = useState(0)
  const offset = containerRef.current ? (-containerRef.current.offsetHeight + window.innerHeight) * 0.3 : 0;
  const offsetMobile = containerRef.current ? (-containerRef.current.offsetHeight + window.innerHeight) * 0.3 : 0;
  const y = useTransform(scrollYProgress, [0, 1], [0, offset])
  const yMobile = useTransform(scrollYProgress, [0, 1], [0, offsetMobile])

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollYPos(latest)
  })

  const store = proxy(baseState);
  const snap = useSnapshot(store);

  // const exhibitionContentRefs = useRef([]);
  // exhibitionContentRefs.current = images.map((_, i) => exhibitionContentRefs.current[i] ?? createRef());

  // const calculateImageHeight = () => {
  //   exhibitionContentRefs.current.forEach((ref, i) => {
  //     if (ref.current) {

  //       ref.current.style.height = 'auto';
  //       const circleWidth = window.innerWidth / snap.circleCount;
  //       const timesCircle = Math.floor(ref.current.offsetHeight / circleWidth) + 1;
  //       ref.current.style.height = snap.circleWidth * timesCircle + 'px';
  //       console.log(ref.current.offsetHeight, circleWidth, ref.current.offsetHeight / circleWidth, timesCircle, circleWidth * timesCircle + 'px')

  //     }
  //   })
  // }

  // useEffect(() => {
  //   calculateImageHeight();
  // }, [exhibitionContentRefs])

  // useEffect(() => {
  //   window.addEventListener('resize', calculateImageHeight);
  
  //   return () => {
  //     window.removeEventListener('resize', calculateImageHeight);
  //   }
  // }, [])
  

  // console.log(images)
  

  //TODO: find out why the primary isn't filtered


  return (
    <ExhibitionSliceStyles
      index={index}
      ref={containerRef}
    >
      <motion.div 
        style={{ y: snap.deviceMode != 'mobile' ? y : yMobile }}
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
            height={ image.primary.height}
            // ref={exhibitionContentRefs.current[i]}
            // widthTablet={ Math.floor(image.primary.width * defaultTheme.tabletMultiplier)}
          >
            { image.primary.image && <div className="image-container"><PrismicNextImage field={ image.primary.image } /></div> }
              <div className="image-caption">
                {/* <div className="name">{image.primary.title[0]?.text ? <PrismicRichText field={image.primary.title}/> : `figure${ i > 9 ? i+1 : '0' + (i+1)}`}</div> */}
                <div className="name">{image.primary.title[0]?.text && <PrismicRichText field={image.primary.title}/>}</div>
                {image?.primary?.information && <div className="info">{image.primary.information}</div>}
              </div>

            { image.primary.description &&
              <div className="description">
                <PrismicRichText field={image.primary.description}/>
              </div>
            }
          </ExhibitionContentStyles>
        )
      }
      )}
    </ExhibitionSliceStyles>
  )
}

export default ExhibitionSlice