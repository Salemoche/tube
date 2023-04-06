import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'
import LayoutComponent from '../components/layout/index';

export default function ExhibitionsPage({ page }) {
  return (
    <LayoutComponent>
      <h1>Exhibitions</h1>
      <SliceZone slices={page.data.slices} components={components} />
    </LayoutComponent>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('exhibitions_page')

  return {
    props: {
      page,
    },
  }
}
