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

    switch (true) {
      case windowWidth >= defaultTheme.breakpoints['L']:
        store.circleCount = 24
        break;
      case windowWidth >= defaultTheme.breakpoints['S']:
        store.circleCount = 12
        break;
      case windowWidth < defaultTheme.breakpoints['S']:
        store.circleCount = 6
        break;
      default:
        store.circleCount = 24
        break;
    }

    let circleWidth = Math.floor( windowWidth / snap.circleCount );
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