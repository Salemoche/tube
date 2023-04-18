import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { ContactItemStyles, NewsletterItemStyles } from './contact-item.styles';

/**
 * @typedef {import("@prismicio/client").Content.ContactItemSlice} ContactItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactItemSlice>} ContactItemProps
 * @param { ContactItemProps }
 */

const ContactItem = ({ slice }) => {

  return (
  <section>
    <ContactItemStyles>
      <PrismicRichText field={slice.primary.title}/>
    </ContactItemStyles>
  </section>
  )
}

export default ContactItem