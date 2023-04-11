import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { ContactItemStyles, NewsletterItemStyles } from './contact-item.styles';

/**
 * @typedef {import("@prismicio/client").Content.ContactItemSlice} ContactItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactItemSlice>} ContactItemProps
 * @param { ContactItemProps }
 */

const DefaultItem = ({ props }) => {
  return (
    <ContactItemStyles>
      <PrismicRichText field={props.primary.title}/>
    </ContactItemStyles>
  )
}

const NewsletterItem = ({props: { primary: { email_placeholder, intro, subscribe_button }}} ) => {

  return (
    <NewsletterItemStyles>
      <PrismicRichText field={intro}/>
    </NewsletterItemStyles>
  )
}

const ContactItem = ({ slice }) => {

  const variation = slice.variation;

  return (
  <section>
    { variation == 'default' && <DefaultItem props={slice}/>}
    { variation == 'newsletter' && <NewsletterItem props={slice}/>}
  </section>
  )
}

export default ContactItem