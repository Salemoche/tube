import { useEffect, useState } from 'react';
import { BackgroundStyles } from './background.styles';

const BackgroundComponent = () => {

  const [circleCols, setCircleCols] = useState(24);
  const [circles, setCircles] = useState([])

  useEffect(() => {

    let circleArray = []

    for (let count = 0; count < circleCols; count++) {
      circleArray.push(count)
    }

    setCircles(circleArray)
    console.log(circles)

  }, [circleCols])
  

  return (
    <BackgroundStyles>
      {circles.map( (circle, i) => { 
        return <div className="circle" key={`circle-${i}`}></div>}
      )}
    </BackgroundStyles>
  )
}

export default BackgroundComponent