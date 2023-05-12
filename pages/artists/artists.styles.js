import styled from 'styled-components';
import { ContentStyles } from '../../styles/global.components';

export const ArtistContentStyles = styled(ContentStyles)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  .artist {
    width: 50%;
  }
`

export default ArtistContentStyles