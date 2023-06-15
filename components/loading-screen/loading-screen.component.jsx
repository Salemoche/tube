import BackgroundComponent from "../background/background.component"
import { LoadingScreenStyles } from "./loading-screen.styles"

const LoadingScreenComponent = () => {
  return (
    <LoadingScreenStyles className="loading-screen">
      <img src="images/Icon-3D.gif" alt="" />
      {/* <BackgroundComponent/> */}
    </LoadingScreenStyles>
  )
}

export default LoadingScreenComponent