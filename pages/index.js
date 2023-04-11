import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'
import LayoutComponent from '../components/layout/layout.component';
import NavigationComponent from '../components/navigation/navigation.component';

export default function ExhibitionsPage({ page, navigation }) {

  console.log(page)
  return (
    <LayoutComponent 
      title={page.data.meta_title}
      description={page.data.meta_description.text}
      image={page.data.meta_thumbnail.url}
      header={ <NavigationComponent navigation={navigation} />  }
    >
      <h1>Exhibitions</h1>
      <SliceZone slices={page.data.slices} components={components} />
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
                                horizontal_alignment
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
