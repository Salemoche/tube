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
    'XSR': 'calc( var(--circle-width) / 8)',
    'SR': 'calc( var(--circle-width) / 4)',
    'MR': 'calc( var(--circle-width) / 2)',
    'LR': 'calc( var(--circle-width) * 0.75)',
    'XLR': 'calc( var(--circle-width))',
    'XS': '4px',
    'S': '8px',
    'M': '16px',
    'L': '32px',
    'XL': '64px',
  },
  fontSizes: {
    'S': {
      unit: 'px',
      fontSize: 14,
      lineHeight: 1.4,
      letterSpacing: 0
    },
    'M': {
      unit: 'px',
      fontSize: 16,
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