import styled from 'styled-components';

export const BackgroundStyles = styled('div')`

  position: absolute;
  width: 100%;
  height: 150%;
  min-height: 100vh;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: -1;
  background: white;

  .circle {
    border: 0.5px solid black;
    display: inline-block;
    width: calc(100% / ${ props => props.circleCount });
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    vertical-align: top;
    opacity: 0.2;
    pointer-events: none;
  }

  ${'' /* @media screen and (max-width: ${ props => props.theme.breakpoints.M - 1 }px) {
    left: calc(0px - (var(--circle-width) / 2));
    width: calc(100% + var(--circle-width));
  } */}

`