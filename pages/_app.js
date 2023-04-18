import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'
import GlobalStyle from '../styles/global.styles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/theme';
import { proxy, useSnapshot } from 'valtio';
import { baseState } from './data/state';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {

  const store = proxy(baseState);
  const snap = useSnapshot(store);

  const resizeScripts = e => {

    const windowWidth = window.innerWidth;
    let circleCount = 18
    let deviceMode = 'desktop'

    switch (true) {
      case windowWidth > defaultTheme.breakpoints['L']:
        circleCount = 18
        break;
      case windowWidth >= defaultTheme.breakpoints['S']:
        circleCount = 12
        break;
      case windowWidth < defaultTheme.breakpoints['S']:
        circleCount = 6
        deviceMode = 'mobile'
        break;
      default:
        circleCount = 18
        break;
    }

    store.circleCount = circleCount
    store.deviceMode = deviceMode

    let circleWidth = Math.floor( windowWidth / circleCount );
    document.documentElement.style.setProperty('--circle-width', `${circleWidth}px`)
  }

  useEffect(() => {
    resizeScripts();
    window.addEventListener( 'resize', resizeScripts)
  
    return () => {
      window.removeEventListener( 'resize', resizeScripts)
    }
  }, [])
  

  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </PrismicPreview>
    </PrismicProvider>
  )
}