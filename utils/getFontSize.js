import { css } from 'styled-components'

const getFontSize = (size, props) => {
  const fontSizes = props.theme.fontSizes
  let fontSize = fontSizes[size].fontSize
  const lineHeight = fontSizes[size].lineHeight
  const letterSpacing = fontSizes[size].letterSpacing

  switch (true) {
    case fontSizes[size].unit === 'em' || fontSizes[size].unit === 'rem':
      fontSize = fontSizes[size].fontSize + 'rem';
      break;
    case fontSizes[size].unit === 'px':
      fontSize = fontSizes[size].fontSize * 0.0625 + 'rem';
      break;
    case fontSizes[size].unit === 'vw':
      fontSize = fontSizes[size].fontSize + 'vw';
      break;
    default:
      fontSize = fontSizes[size].fontSize + 'rem';
      break;
  }

  return css`
    font-size: ${fontSize};
    line-height: ${lineHeight || 'inherit'};
    letter-spacing: ${letterSpacing}%;
  `
}

export default getFontSize
