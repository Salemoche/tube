import { ColumnContentComponent } from '@/styles/global.components';
import styled from 'styled-components';

export const AboutContentStyles = styled(ColumnContentComponent)`
  img {
    width: 100%;
    height: auto;
  }

  .intro {
    margin-bottom: ${({ theme }) => theme.spacing.L };
    z-index: 1;
  }

  .plan {
    z-index: 1;
  }

  .column-1 {
    z-index: 1;
  }

  .map {
    iframe {
      border: none;
      width: calc( var(--circle-width) + 100%);
      position: relative;
      margin-left: calc(0px - var(--circle-width));
    }
  }

  @media screen and (max-width: ${ props => props.theme.breakpoints.M - 1 }px) {
    .map iframe {
      width: 100%;
      margin-left: 0;
    }
  }
`

export default AboutContentStyles