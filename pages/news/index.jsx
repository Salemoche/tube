import { SliceZone } from '@prismicio/react'
import { createClient } from '../../prismicio'
import { components } from '../../slices'
import LayoutComponent from '../../components/layout/layout.component';

export default function NewsPage({ page }) {
  
  return (
    <LayoutComponent>
      <h1>News</h1>
      <SliceZone slices={page.data.slices} components={components} />
    </LayoutComponent>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const page = await client.getSingle('news_page', {
    graphQuery: `{
      news_page {
        slices {
          ...on news_item {
            variation {
              ... on default {
                primary {
                  spacing_right
                  news {
                    ...on news {
                      title
                      thumbnail
                      content
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

  console.log(page)

  return {
    props: {
      page,
    },
  }
}