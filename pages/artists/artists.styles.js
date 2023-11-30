import styled from 'styled-components';
import { ContentStyles } from '../../styles/global.components';

export const ArtistContentStyles = styled(ContentStyles)`
  display: flex;
  flex-wrap: wrap;

  .artist {
    width: calc( var(--circle-width) * 5 );
  }
`

export default ArtistContentStyles