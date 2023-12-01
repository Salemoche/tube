import * as prismic from '@prismicio/client'
import { createClient } from '../../../prismicio'
import LayoutComponent from '@/components/layout/layout.component'
import NavigationComponent from '@/components/navigation/navigation.component'
import { motion } from 'framer-motion';
import { defaultTheme } from '@/styles/theme';
import { DefaultContentStyles } from '@/styles/global.components';
import { SliceZone } from '@prismicio/react';
import { components } from '@/slices';
import ParallaxTitleComponent from '../../../components/parallax-title/parallax-title';
import { useRef, useState, useEffect } from 'react';
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import HoveringTitleComponent from '@/components/hovering-title/hovering-title';

const ExhibitionPage = ({ page, navigation }) => {

  const titleContainerRef = useRef(null);
  const [yPos, setYPos] = useState(0)

  const {scrollYProgress} = useScroll({
    target: titleContainerRef,
    // offset: ["0 1", "2 1"]
  })

  useEffect(() => {
    return scrollYProgress.onChange((v) => setYPos(v));
  }, [scrollYProgress]);


  return (
    <LayoutComponent 
      title={page?.data?.meta_title || ""}
      description={page?.data?.meta_description?.text || ""}
      image={page?.data?.meta_thumbnail?.url  || ""}
      header={ navigation ? <NavigationComponent navigation={navigation} currentItem={'exhibitions'} /> : null  }
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .3, delay: defaultTheme.transitions.fakePageLoad }}
      >
        { page && <DefaultContentStyles ref={ titleContainerRef }>
          <HoveringTitleComponent options={page.data} containerRef={titleContainerRef} />
          <SliceZone slices={page.data.slices} components={components}/>
        </DefaultContentStyles>}
      </motion.div>
    </LayoutComponent>
  )
}

export default ExhibitionPage

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('exhibition', params.uid)
  const navigation = await client.getSingle( 'navigation' )

  return {
    props: { 
      page,
      navigation 
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('page')

  return {
    paths: pages.map((page) => prismic.asLink(page)),
    fallback: true,
  }
}