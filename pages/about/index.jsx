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
            <div className="plan">
              <h3>{page.data.map_label}</h3>
              <PrismicNextImage field={page.data.image}/>
            </div>
          </div>
          <div className="column-2 column images-column">
            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.334798316607!2d2.6578557767421356!3d39.57460427158756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129793ab6241e8f3%3A0x5c4220cb2408d4ac!2sCarrer%20Nicolau%20de%20Pacs%2C%20Palma%2C%20Illes%20Balears%2C%20Spanien!5e0!3m2!1sde!2sch!4v1682597685787!5m2!1sde!2sch" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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