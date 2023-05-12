import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'
import GlobalStyle from '../styles/global.styles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/theme';
import { proxy, useSnapshot } from 'valtio';
import { baseState } from '../data/state';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useScroll } from 'framer-motion';

export default function App({ Component, pageProps }) {

  const store = proxy(baseState);

  const resizeScripts = e => {

    const windowWidth = window.innerWidth;
    let circleCount = 24
    let deviceMode = 'desktop'

    switch (true) {
      case windowWidth > defaultTheme.breakpoints['L']:
        circleCount = 24
        break;
      case windowWidth > defaultTheme.breakpoints['S']:
        circleCount = 18
        break;
      case windowWidth <= defaultTheme.breakpoints['S']:
        circleCount = 8
        deviceMode = 'mobile'
        break;
      default:
        circleCount = 24
        break;
    }

    let circleWidth = windowWidth / circleCount;
    document.documentElement.style.setProperty('--circle-width', `${circleWidth}px`)

    store.circleCount = circleCount
    store.deviceMode = deviceMode
    store.circleWidth = circleWidth
  }

  const changeHighlightColor = () => {

    const randomValue = Math.random();
    let randomColor = defaultTheme.colors.pink;

    if (randomValue < 0.33) randomColor = defaultTheme.colors.orange;
    else if (randomValue < 0.66) randomColor = defaultTheme.colors.green;

    
    document.documentElement.style.setProperty('--random-color', `${randomColor}`)
    console.log(randomColor)
  }

  useEffect(() => {
    resizeScripts();
    window.addEventListener( 'resize', resizeScripts)
    document.querySelectorAll('p > a, .menu-item').forEach(element => {
        element.addEventListener('mouseleave', changeHighlightColor)
    });
  
    return () => {
      window.removeEventListener( 'resize', resizeScripts)
      document.querySelectorAll('p > a, .menu-item').forEach(element => {
          element.addEventListener('mouseleave', changeHighlightColor)
      });
    }
  }, [])
  

  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <AnimatePresence
            mode="wait"
          >
            <Component {...pageProps} />
          </AnimatePresence>
        </ThemeProvider>
      </PrismicPreview>
    </PrismicProvider>
  )
}