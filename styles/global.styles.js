import { createGlobalStyle } from "styled-components";
import getFontSize from '../utils/getFontSize';

const GlobalStyle = createGlobalStyle`

:root {
  --circle-width: 0px;
}

@font-face {
  font-family: 'Bull';
  src: url('./fonts/Bull-5-Mono.woff2') format('woff2'),
       url('./fonts/Bull-5-Mono.woff') format('woff')
}

::selection {
  background: ${ props => props.theme.colors.highlight };
  color: white;
}

::-moz-selection {
  background: ${ props => props.theme.colors.highlight };
  color: white;
}

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
}

main {

}

h1,
h2,
h3,
h4, 
h5,
h6 {
  text-decoration: none;
  font-size: inherit;
}

a {
  text-decoration: none;
  color: black;
}

p > a::after {
  content: '↗';
  margin-left: 0.5em;
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