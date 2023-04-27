import { useEffect, useRef, useState } from 'react';
import { BackgroundStyles } from './background.styles';
import { baseState } from '../../data/state';
import { proxy, useSnapshot } from 'valtio';
import { useScroll, motion, useMotionValueEvent } from 'framer-motion';

const BackgroundComponent = () => {

  const store = proxy(baseState)
  const snap = useSnapshot(store)
  const bgRef = useRef(null)
  const [circles, setCircles] = useState([])
  const { scrollYProgress } = useScroll();
  const [scrollYPos, setScrollYPos] = useState(0)

  const createCircles = () => {
    let circlesArray = []
    const backgroundWidth = bgRef.current.offsetWidth
    const backgroundHeight = bgRef.current.offsetHeight
    const circleSize = backgroundWidth / snap.circleCount
    const circleRows = Math.floor(backgroundHeight / circleSize) + 1

    for (let rows = 0; rows < circleRows; rows++) {
      for (let cols = 0; cols < snap.circleCount; cols++) {
        circlesArray.push(cols)
      }
    }

    setCircles(circlesArray);
  }

  useEffect(() => {
    createCircles()
  }, [snap, bgRef])

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollYPos(latest)
  })
  

  return (
    <BackgroundStyles ref={bgRef} circleCount={snap.circleCount}>
      <motion.div style={{ y: snap.deviceMode != 'mobile' ? (scrollYPos-1)*(400) : 0}}>
        { circles.map( (circle, i) => ( <div key={`circle-${i}`} className="circle"></div> ))}
      </motion.div>
    </BackgroundStyles>
  )
}

export default BackgroundComponent