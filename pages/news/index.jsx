import { SliceZone } from '@prismicio/react'
import { createClient } from '../../prismicio'
import { components } from '../../slices'
import LayoutComponent from '../../components/layout/layout.component';
import NavigationComponent from '../../components/navigation/navigation.component';
import { ContentStyles } from '../../styles/global.components';
import { NewsContainerStyles } from './news.styles';
import { motion } from 'framer-motion';
import { defaultTheme } from '@/styles/theme';

export default function NewsPage({ page, navigation }) {
  
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
        <ContentStyles>
          <NewsContainerStyles>
            <SliceZone slices={page.data.slices} components={components} />
          </NewsContainerStyles>
        </ContentStyles>
      </motion.div>
    </LayoutComponent>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const page = await client.getSingle('news_page', {
    graphQuery: `{
      news_page {
        meta_title
        meta_description
        meta_thumbnail
        slices {
          ...on news_item {
            variation {
              ... on default {
                primary {
                  spacing_right
                  spacing_left
                  spacing_top
                  width
                  news {
                    ...on news {
                      title
                      thumbnail
                      summary
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`

  })

  const navigation = await client.getSingle( 'navigation' )

  return {
    props: {
      page,
      navigation
    },
  }
}