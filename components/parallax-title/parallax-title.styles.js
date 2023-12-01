import styled from 'styled-components';
import getFontSize from '../../utils/getFontSize';

export const ParallaxTitleStyles = styled('div')`
  width: 100%;
  height: 100svh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-content: end;
  pointer-events: none;
  padding: 0 var(--circle-width);

  ${ props => getFontSize( 'XL', props )};

  &.title-background {
    z-index: -1;
  }


  .column {
    height: auto;
    position: relative;

    &.left {
      width: ${props => props.contentLeftWidth}%;
    }

    &.right {
      width: ${props => props.contentRightWidth}%;
    }

    .column-content {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  }
`