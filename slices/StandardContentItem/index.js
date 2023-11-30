import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { ExhibitionContentStyles } from '../ExhibitionSlice/exhibition-slice.style'

/**
 * @typedef {import("@prismicio/client").Content.ExhibitionImageSlice} ExhibitionImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExhibitionImageSlice>} ExhibitionImageProps
 * @param { ExhibitionImageProps }
 */
const ExhibitionImage = ({ slice }) => (
  <ExhibitionContentStyles>
    hello
  </ExhibitionContentStyles>
)

export default ExhibitionImage