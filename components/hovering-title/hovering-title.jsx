
import { defaultTheme } from '@/styles/theme';
import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { proxy, useSnapshot } from 'valtio';
import { baseState } from '@/data/state';
import Link from 'next/link';
import { useState } from 'react';
import { HoveringTitleStyles, ContentOneStyles, ContentTwoStyles } from './hovering-title.style';

const HoveringTitleComponent = ({ options, containerRef }) => {


  options = {
    start_date: null,
    end_date: null,
    content1: null,
    content2: null,
    width_title: null,
    horizontal_alignment_title: 0,
    vertical_alignment_title: 0,
    width_date: null,
    horizontal_alignment_date: 0,
    vertical_alignment_date: 0,
    scrollSpeed: 0.3,
    scrollSpeedMobile: -0.3,
    hyphens: 'auto',
    mobileTop: 5,
    ...options
  }

  if ( options.start_date || options.end_date ) {

    const startDate = new Date(options.start_date);
    const endDate = new Date(options.end_date);

    options.content2 = 
    <>
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
    </>

  }

  if (options.title) options.content1 = options.title;

  const { scrollYProgress } = useScroll({ target: containerRef});
  const [scrollYPos, setScrollYPos] = useState(0)
  const offset = containerRef.current ? (-containerRef.current.offsetHeight + window.innerHeight) * options.scrollSpeed : 0;
  const offsetMobile = containerRef.current ? (-containerRef.current.offsetHeight + window.innerHeight) * options.scrollSpeedMobile : 0;
  const y = useTransform(scrollYProgress, [0, 1], [0, offset])
  const yMobile = useTransform(scrollYProgress, [0, 1], [0, offsetMobile])

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollYPos(latest)
  })

  const store = proxy(baseState);
  const snap = useSnapshot(store);

  return (
    <HoveringTitleStyles >
      <motion.div 
        style={{ y: snap.deviceMode != 'mobile' ? y : yMobile }}
        className="options-info"
      >
        <ContentOneStyles
          width={options.width_title}
          left={options.horizontal_alignment_title}
          top={options.vertical_alignment_title}
          hyphens={options.hyphens}
          mobileTop={options.mobileTop}
        >
          { options.content1 }
        </ContentOneStyles>
        <ContentTwoStyles 
          width={options.width_date}
          left={options.horizontal_alignment_date}
          top={options.vertical_alignment_date}
          hyphens={options.hyphens}
        >
          { options.content2 }
        </ContentTwoStyles>
      </motion.div>
    </HoveringTitleStyles>
  )
}

export default HoveringTitleComponent