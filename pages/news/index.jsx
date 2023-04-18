import { SliceZone } from '@prismicio/react'
import { createClient } from '../../prismicio'
import { components } from '../../slices'
import LayoutComponent from '../../components/layout/layout.component';
import NavigationComponent from '../../components/navigation/navigation.component';
import { ContentStyles } from '../../styles/global.components';
import { NewsContainerStyles } from './news.styles';

export default function NewsPage({ page, navigation }) {
  
  return (
    <LayoutComponent
      title={page.data.meta_title}
      description={page.data.meta_description.text}
      image={page.data.meta_thumbnail.url}
      header={ <NavigationComponent navigation={navigation} />  }
    >
      <ContentStyles>
        <NewsContainerStyles>
          <SliceZone slices={page.data.slices} components={components} />
        </NewsContainerStyles>
      </ContentStyles>
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