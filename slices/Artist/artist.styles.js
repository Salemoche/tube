import getFontSize from '@/utils/getFontSize';
import styled from 'styled-components';

export const ArtistStyles = styled('div')`

  padding-right: ${({ theme }) => theme.spacing.MR };
  ${props => getFontSize('M', props) };

  .name {
    text-decoration: underline;
  }

  
`