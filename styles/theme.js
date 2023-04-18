export const defaultTheme = {
  breakpoints: {
    'XS': 320,
    'S': 414,
    'M': 768,
    'L': 1024,
    'XL': 1400,
  },
  colors: {
    highlight: '#FF3E9D',
    gray: '#B4B4B4',
  },
  spacing: {
    'XS': 'calc( var(--circle-width) / 8)',
    'S': 'calc( var(--circle-width) / 4)',
    'M': 'calc( var(--circle-width) / 2)',
    'L': 'calc( var(--circle-width) * 0.75)',
    'XL': 'calc( var(--circle-width))',
  },
  fontSizes: {
    'S': {
      unit: 'px',
      fontSize: 16,
      lineHeight: 1.4,
      letterSpacing: 0
    },
    'M': {
      unit: 'px',
      fontSize: 21,
      lineHeight: 1.4,
      letterSpacing: 0
    },
    'L': {
      unit: 'px',
      fontSize: 35,
      lineHeight: 1.4,
      letterSpacing: 0
    },
    'XL': {
      unit: 'px',
      fontSize: 10,
      lineHeight: 1.4,
      letterSpacing: 0
    },
  },
  transitions: {
    'default': '.3s'
  }
}