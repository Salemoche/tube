import { createGlobalStyle } from "styled-components";
import getFontSize from '../utils/getFontSize';

const GlobalStyle = createGlobalStyle`

:root {
  --circle-width: 0px;
  --random-color: '#000000';
}

@font-face {
  font-family: 'Bull';
  src: url('./fonts/Bull-5-Mono.woff2') format('woff2'),
       url('./fonts/Bull-5-Mono.woff') format('woff')
}

::selection {
  background: ${ props => props.theme.colors.pink };
  color: white;
}

::-moz-selection {
  background: ${ props => props.theme.colors.pink };
  color: white;
}

::-webkit-scrollbar {
  display: none;
}

-ms-overflow-style: none;
scrollbar-width: none;

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Bull';
}


html,
body,
main {
  max-width: 100vw;
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;

  ${ props => getFontSize('S', props)}
  
  ${'' /* font-size: 1.39vw;
  line-height: 1.49;

  @media screen and (max-width: ${ props => props.theme.breakpoints.L }px) {
    font-size: 1.85vw;
  }

  @media screen and (max-width: ${ props => props.theme.breakpoints.M }px) {
    font-size: 16px;
  } */}
}

main, body {
  width: 100vw;;
  overflow: hidden;
}

main {
  padding-bottom: calc( ${({ theme }) => theme.spacing.SR }*2 + 1.4rem);
}

h1,
h2,
h3,
h4, 
h5,
h6 {
  text-decoration: none;
  font-size: inherit;
  font-weight: inherit;
}

a {
  text-decoration: none;
  color: black;
}

p > a {
  transition: ${props => props.theme.transitions.default};
  &:hover {
    color: var(--random-color);
  }

  &::after {
    content: '↗';
    margin-left: 0.5em;
  }
}

input {
  border: none;
  outline: none;
}

button,
input[type=submit],
.button {
  border: none;
  background: none;
  cursor: pointer;
}

img {
  width: 100%;
  height: auto;
}


/**========================
*	Utility Classes
*========================*/

.font-s {
  ${ props => getFontSize('S', props) };
}

.font-m {
  ${ props => getFontSize('M', props) };
}

.font-l {
  ${ props => getFontSize('L', props) };
}


`

export default GlobalStyle