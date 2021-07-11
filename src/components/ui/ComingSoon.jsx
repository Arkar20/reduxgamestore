import React from 'react'
import Lottie from 'react-lottie'
import animationdata from "../../assets/animation/comingsoon.json"

const ComingSoon = () => {
 const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationdata,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
             <Lottie options={defaultOptions}
            height={'60%'}
            width={'100%'}
        />
    )
}
export default ComingSoon