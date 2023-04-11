import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { ArtistStyles } from './artist.styles'

/**
 * @typedef {import("@prismicio/client").Content.ArtistSlice} ArtistSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArtistSlice>} ArtistProps
 * @param { ArtistProps }
 */
const Artist = ({ slice, index, slices }) => {

  return (
    <ArtistStyles>
      <p className="index">{index + 1 >= 10 ? `${index + 1}` : `0${index+1}`}</p>
      { slice.primary.name && <p className="name">{slice.primary.name}</p>}
      { slice.primary.information && <PrismicRichText field={slice.primary.information}/>}
    </ArtistStyles>
  )
}

export default Artist