import { css } from 'styled-components'

const getFontSize = (size, props) => {
  const fontSizes = props.theme.fontSizes
  const multiplier = fontSizes[size].unit === 'em' || fontSizes[size].unit === 'rem' ? 0 : 0.0625
  const fontSize = fontSizes[size].fontSize * multiplier
  const lineHeight = fontSizes[size].lineHeight
  const letterSpacing = fontSizes[size].letterSpacing * multiplier

  return css`
    font-size: ${fontSize}rem;
    line-height: ${lineHeight || 'inherit'};
    letter-spacing: ${letterSpacing ? letterSpacing + 'rem' : 'inherit'};
  `
}

export default getFontSize
