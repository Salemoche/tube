import { SliceZone } from '@prismicio/react'
import { createClient } from '../../prismicio'
import { components } from '../../slices'
import LayoutComponent from '../../components/layout/layout.component';
import NavigationComponent from '../../components/navigation/navigation.component';
import { ArtistContentStyles } from './artists.styles';
import { motion } from 'framer-motion';
import { defaultTheme } from '@/styles/theme';

export default function ArtistsPage({ page, navigation }) {
  return (
    <LayoutComponent
      title={page.data.meta_title}
      description={page.data.meta_description.text}
      image={page.data.meta_thumbnail.url}
      header={ <NavigationComponent navigation={navigation} />  }
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .3, delay: defaultTheme.transitions.fakePageLoad }}
      >
        <ArtistContentStyles>
          <SliceZone slices={page.data.slices} components={components} />
        </ArtistContentStyles>
      </motion.div>
    </LayoutComponent>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const page = await client.getSingle('artist_page')

  const navigation = await client.getSingle( 'navigation' )

  return {
    props: {
      page,
      navigation
    },
  }
}