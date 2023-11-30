import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { ArtistStyles } from './artist.styles'
import Link from 'next/link'

/**
 * @typedef {import("@prismicio/client").Content.ArtistSlice} ArtistSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArtistSlice>} ArtistProps
 * @param { ArtistProps }
 */
const Artist = ({ slice, index, slices }) => {

  // console.log(slice.primary.connected_artist_page.data)
  console.log(slice.primary.connected_artist_page.data)

  return (
    <ArtistStyles className="artist">
      <p className="index">{index + 1 >= 10 ? `${index + 1}` : `0${index+1}`}</p>
      { slice.primary.connected_artist_page.data?.artist_name && <Link href={`/artist/${slice.primary.connected_artist_page.data.uid}`} className="name">{slice.primary.connected_artist_page.data.artist_name}</Link>}
      { slice.primary.connected_artist_page.data?.artist_information && <PrismicRichText field={slice.primary.connected_artist_page.data.artist_information}/>}
    </ArtistStyles>
  )
}

export default Artist