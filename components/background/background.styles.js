import styled from 'styled-components';

export const BackgroundStyles = styled('div')`

  position: absolute;
  width: 100%;
  height: 150%;
  min-height: 100vh;
  left: 0;
  top: 0;
  overflow: hidden;

  .circle {
    border: 0.5px solid black;
    display: inline-block;
    width: calc(100% / ${ props => props.circleCount });
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    vertical-align: top;
    opacity: 0.2;
  }


`