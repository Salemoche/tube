import styled from 'styled-components';

export const LoadingScreenStyles = styled('div')`
  height: 100%;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 100px;
    height: auto;
    max-width: 20vw;
  }
`