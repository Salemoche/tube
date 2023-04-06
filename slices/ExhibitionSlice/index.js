import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next';

/**
 * @typedef {import("@prismicio/client").Content.ExhibitionSliceSlice} ExhibitionSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExhibitionSliceSlice>} ExhibitionSliceProps
 * @param { ExhibitionSliceProps }
 */
const ExhibitionSlice = ({ slice }) => {

  const exhibition = slice.primary.exhibition;
  const images = exhibition.data.slices.filter( slice => {
    if ( slice.primary.show_on_exhibitions_page ) return slice.primary
  });

  console.log(images)

  //TODO: find out why the primary isn't filtered

  return (
    <section>
      <h2>{ exhibition.data.title }</h2>
      { images.map(( image, i ) => {
          return (<div className='image' key={`image-${i}`}>
            <PrismicNextImage field={ image.primary.image } />
            { image.primary.title?.text ? <PrismicRichText field={image.primary.title}/> : `figure${ i > 9 ? i+1 : '0' + (i+1)}`}
            <PrismicRichText field={image.primary.description}/>
          </div>)}
      )}
    </section>
  )
}

export default ExhibitionSlice