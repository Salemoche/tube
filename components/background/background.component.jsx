import { useEffect, useRef, useState } from 'react';
import { BackgroundStyles } from './background.styles';
import { baseState } from '../../pages/data/state';
import { proxy, useSnapshot } from 'valtio';

const BackgroundComponent = () => {

  const store = proxy(baseState)
  const snap = useSnapshot(store)
  const bgRef = useRef(null)
  const [circles, setCircles] = useState([])

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
  

  return (
    <BackgroundStyles ref={bgRef} circleCount={snap.circleCount}>
      { circles.map( circle => ( <div className="circle"></div> ))}
    </BackgroundStyles>
  )
}

export default BackgroundComponent