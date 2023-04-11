import { useEffect, useState } from 'react';
import { BackgroundStyles } from './background.styles';
import { baseState } from '../../pages/data/state';
import { proxy, useSnapshot } from 'valtio';

const BackgroundComponent = () => {

  const store = proxy(baseState);
  const snap = useSnapshot(store);
  const [circles, setCircles] = useState([])

  useEffect(() => {

    let circleArray = []

    for (let count = 0; count < snap.circleCount; count++) {
      circleArray.push(count)
    }

    setCircles(circleArray)
    console.log(circles)

  }, [snap])
  

  return (
    <BackgroundStyles>
      {circles.map( (circle, i) => { 
        return <div className="circle" key={`circle-${i}`}></div>}
      )}
    </BackgroundStyles>
  )
}

export default BackgroundComponent