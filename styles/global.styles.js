import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

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
}


html,
body,
main {
  max-width: 100vw;
  overflow-x: hidden;
  position: relative;
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

`

export default GlobalStyle