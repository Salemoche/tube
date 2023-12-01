import { useMotionValueEvent, useScroll, useTransform, motion} from "framer-motion";
import { ParallaxTitleStyles } from "./parallax-title.styles"
import { useRef, useState, useEffect } from "react";

const ParallaxTitleComponent = ({ options }) => {

  const containerRef = useRef(null);

  options = {
    scrollDistPercent: 50,
    containerRef: containerRef,
    contentLeft: '',
    contentLeftWidth: 50,
    contentRight: '',
    contentRightWidth: 50,
    ...options
  }

  return (
    <>
      <ParallaxTitleStyles 
        ref={ containerRef } 
        className={`title-foreground`} 
        contentLeftWidth={options.contentLeftWidth}
        contentRightWidth={options.contentRightWidth}
      >
        <div className="column left">
          <motion.div 
            className="column-content"
            style={{ y: options.yPos * 500 }}
            dangerouslySetInnerHTML={{ __html: options.contentLeft }}
          >
          </motion.div>
        </div>
        <div className="column right">
          <motion.div 
            className="column-content"
            style={{ y: options.yPos * 500 }}
            dangerouslySetInnerHTML={{ __html: options.contentright }}
          >
          </motion.div>
        </div>
      </ParallaxTitleStyles>
    </>
  )
}

export default ParallaxTitleComponent