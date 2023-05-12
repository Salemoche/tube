import { ColumnContentComponent } from '@/styles/global.components';
import styled from 'styled-components';

export const AboutContentStyles = styled(ColumnContentComponent)`
  img {
    width: 100%;
    height: auto;
  }

  .intro {
    margin-bottom: ${({ theme }) => theme.spacing.LR };
    z-index: 1;
  }

  .plan {
    z-index: 1;
  }

  .column-1 {
    z-index: 1;
  }

  .map {
    height: 100%;
    position: relative;
    margin-left: calc(0px - var(--circle-width));
    width: calc( var(--circle-width) + 100%);
  }

  @media screen and (max-width: ${ props => props.theme.breakpoints.M - 1 }px) {

    .plan h3 {
      padding-bottom: ${({ theme }) => theme.spacing.SR };
    }

    .map {
      width: 100%;
      margin-left: 0;
      min-height: calc( var(--circle-width) * 4 );
    }
  }
`

export default AboutContentStyles