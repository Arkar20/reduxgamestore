import Lottie from "react-lottie"

const AnimationPlayer = ({option}) => {
     const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: option,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
        <Lottie options={defaultOptions}
            height={'80%'}
            width={'80%'}
        />
    )
}
export default AnimationPlayer