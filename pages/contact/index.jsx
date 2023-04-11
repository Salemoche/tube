import { SliceZone } from '@prismicio/react'
import { createClient } from '../../prismicio'
import { components } from '../../slices'
import LayoutComponent from '../../components/layout/layout.component';
import NavigationComponent from '../../components/navigation/navigation.component';
import { ContentStyles } from '../../styles/global.components';
import { proxy, useSnapshot } from 'valtio';
import { baseState } from '../data/state';

export default function ContactPage({ page, navigation }) {

  const store = proxy(baseState);
  const snap = useSnapshot(store);

  return (
    <LayoutComponent
      title={page.data.meta_title}
      description={page.data.meta_description.text}
      image={page.data.meta_thumbnail.url}
      header={ <NavigationComponent navigation={navigation} />  }
    >
      <ContentStyles circleCount={snap.circleCount}>
        <SliceZone slices={page.data.slices} components={components} />
      </ContentStyles>
    </LayoutComponent>
  )
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const page = await client.getSingle('contact_page')

  const navigation = await client.getSingle( 'navigation' )

  return {
    props: {
      page,
      navigation
    },
  }
}