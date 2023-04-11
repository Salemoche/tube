import { useEffect, useState } from 'react';
import { BackgroundStyles } from './background.styles';

const BackgroundComponent = () => {

  const [circleCount, setCircleCount] = useState(24);
  const [circles, setCircles] = useState([])

  useEffect(() => {

    let circleArray = []

    for (let count = 0; count < circleCount; count++) {
      circleArray.push(count)
    }

    setCircles(circleArray)
    console.log(circles)

  }, [circleCount])
  

  return (
    <BackgroundStyles>
      {circles.map( (circle, i) => { 
        return <div className="circle" key={`circle-${i}`}></div>}
      )}
    </BackgroundStyles>
  )
}

export default BackgroundComponent