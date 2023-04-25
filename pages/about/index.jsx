import { SliceZone } from '@prismicio/react'
import { createClient } from '../../prismicio'
import { components } from '../../slices'
import LayoutComponent from '../../components/layout/layout.component';
import NavigationComponent from '../../components/navigation/navigation.component';
import { ContentStyles } from '../../styles/global.components';
import { AboutContentStyles } from './about.styles';
import { PrismicNextImage, PrismicRichText } from '@prismicio/next';
import { motion } from 'framer-motion';

export default function AboutPage({ page, navigation }) {
  console.log(page.data.intro)
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
      >
        <AboutContentStyles>
          <div className="column-1 column content-column">
            <div className="intro">
              {/* { page.data.intro && <PrismicRichText field={page.data.intro} />} */}
              We offer a platform for artists to build and reimagine what the future could be, by promoting cultural exchange and intercultural and inter-medial dialogue. We believe that art can help us better understand ourselves and the world around us.
            </div>
            <div className="map">
              <h3>{page.data.map_label}</h3>
              <PrismicNextImage field={page.data.map}/>
            </div>
          </div>
          <div className="column-2 column images-column">
            <div className="image">
              <PrismicNextImage field={page.data.image}/>
            </div>
          </div>
        </AboutContentStyles>
      </motion.div>
    </LayoutComponent>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const page = await client.getSingle('about_page')

  const navigation = await client.getSingle( 'navigation' )

  return {
    props: {
      page,
      navigation
    },
  }
}