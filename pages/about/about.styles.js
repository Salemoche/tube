import { ColumnContentComponent } from '@/styles/global.components';
import styled from 'styled-components';

export const AboutContentStyles = styled(ColumnContentComponent)`
  img {
    width: 100%;
    height: auto;
  }

  .intro {
    margin-bottom: ${({ theme }) => theme.spacing.L };
  }

  .image {
    img {
      width: calc( var(--circle-width) + 100%);
      position: relative;
      margin-left: calc(0px - var(--circle-width));
      z-index: -1
    }
  }
`