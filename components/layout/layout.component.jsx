import Head from 'next/head'

import BackgroundComponent from '../background/background.component'
import LoadingScreenComponent from '../loading-screen/loading-screen.component'
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import FooterComponent from '../footer/footer.component';
import { defaultTheme } from '@/styles/theme';

const LayoutComponent = ({ 
  children, 
  title = 'Tube Gallery', 
  description = 'Tube Gallery Site', 
  thumbnail = 'https://media.wired.co.uk/photos/606dba2c581351b2c44d89d3/master/w_1600,c_limit/gettyimages-881725440.jpg', 
  header = null
}) => {

  const [contentLoaded, setContentLoaded] = useState(false)

  useEffect(() => {

    if (typeof window === 'undefined') return console.log('no window')

    window.addEventListener('load', () => { setContentLoaded(true); } )
    setTimeout(() => { setContentLoaded(true) }, 1000);

    return () => {
      window.removeEventListener('load', () => { setContentLoaded(true) } )
    }

  }, [])

  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={ title }/>
        <meta property="og:description" content={ description }></meta>
        <meta property="og:image" content={ thumbnail } />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence>
        { !contentLoaded &&
          <motion.div
            style={{
              zIndex: 1000,
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100%',
            }}
            initial={{ 
              opacity: 0,
              pointerEvents: 'all'
            }}
            animate={{ 
              opacity: 1,
              pointerEvents: 'none'
            }}
            exit={{ 
              opacity: 0,
              pointerEvents: 'all',
              transition: { delay: defaultTheme.transitions.fakePageLoad * 0.6}
            }}
            transition={{ duration: .3}}
          >
            <LoadingScreenComponent/>
          </motion.div>
        }
      </AnimatePresence>
      { header && 
        <header>
          { header }
        </header>
      }
      <main>
        <BackgroundComponent/>
        { children }
        <FooterComponent />
      </main>
    </>
  )
}

export default LayoutComponent