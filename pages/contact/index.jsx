import { PrismicRichText, SliceZone } from '@prismicio/react'
import { createClient } from '../../prismicio'
import { components } from '../../slices'
import LayoutComponent from '../../components/layout/layout.component';
import NavigationComponent from '../../components/navigation/navigation.component';
import { proxy, useSnapshot } from 'valtio';
import { baseState } from '../../data/state';
import { ContactContentStyles } from './contact.styles';

export default function ContactPage({ page, navigation }) {

  const store = proxy(baseState);
  const snap = useSnapshot(store);
  console.log(page)

  return (
    <LayoutComponent
      title={page.data.meta_title}
      description={page.data.meta_description.text}
      image={page.data.meta_thumbnail.url}
      header={ <NavigationComponent navigation={navigation} />  }
    >
      <ContactContentStyles circleCount={snap.circleCount}>
        <div className="column column-1 address-column">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
        <div className="column column-2 newsletter-column">
          <div className="newsletter-form">
            <div className="newsletter-intro">  
              <PrismicRichText field={page.data.intro}/>
            </div>
            <div className="newsletter-form">
              <input className="newsletter-input" type="text" placeholder={page.data.newsletter_placeholder}/>
              <input className="newsletter-submit"  type="submit" value={page.data.subscribe_button} />
            </div>
          </div>
        </div>
      </ContactContentStyles>
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