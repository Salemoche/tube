import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'
import LayoutComponent from '../components/layout/layout.component';
import NavigationComponent from '../components/navigation/navigation.component';
import { ContentStyles, HomeContentStyles } from '../styles/global.components';
import { motion } from 'framer-motion';

export default function ExhibitionsPage({ page, navigation }) {  

  const isHovered = () => {
    console.log('hub')
  }

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
        transition={{ duration: .3, delay: 3 }}
      >
        <HomeContentStyles>
          <SliceZone slices={page.data.slices} components={components}/>
        </HomeContentStyles>
      </motion.div>
    </LayoutComponent>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('exhibitions_page', {
    graphQuery: `{
      exhibitions_page {
        meta_title
        meta_description
        meta_thumbnail
        slices {
          ...on exhibition_slice {
            variation {
              ... on default {
                primary {
                  width_title
                  horizontal_alignment_title
                  vertical_alignment_title
                  width_date
                  horizontal_alignment_date
                  vertical_alignment_date
                  exhibition {
                    ... on exhibition {
                      title
                      start_date
                      end_date
                      slices {
                        ...on exhibition_image {
                          variation {
                            ...on default {
                              primary {
                                image
                                title
                                description
                                show_on_exhibitions_page
                                spacing_right
                                spacing_left
                                spacing_top
                                width
                              }
                            }
                          }
                        }
                      }
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
