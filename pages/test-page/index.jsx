import * as prismic from '@prismicio/client'
import { createClient } from '../../prismicio'
import LayoutComponent from '@/components/layout/layout.component'
import NavigationComponent from '@/components/navigation/navigation.component'
import { motion } from 'framer-motion';
import { defaultTheme } from '@/styles/theme';
import { DefaultContentStyles } from '@/styles/global.components';
import { SliceZone } from '@prismicio/react';
import { components } from '@/slices';

const ArtistPage = ({ page, navigation }) => {

  console.log(page, navigation)

  return (
    <LayoutComponent 
      title={page?.data?.meta_title || ""}
      description={page?.data?.meta_description?.text || ""}
      image={page?.data?.meta_thumbnail?.url  || ""}
      header={ navigation ? <NavigationComponent navigation={navigation} /> : null  }
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .3, delay: defaultTheme.transitions.fakePageLoad }}
      >
        {/* { page && <DefaultContentStyles>
          <SliceZone slices={page.data.slices}/>
        </DefaultContentStyles>} */}
      </motion.div>
    </LayoutComponent>
  )
}

export default ArtistPage

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('single_artist_page', params.uid)
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