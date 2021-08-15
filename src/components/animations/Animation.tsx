import Lottie from "react-lottie";

interface AnimationProps {
  animation?: Object;
  isStopped?: boolean;
  isPaused?: boolean;
  height?: string;
  width?: string;
}

export const Animation = ({
                            animation,
                            isStopped = false,
                            isPaused = false,
                            height = "400px",
                            width = "400px",
                          }: AnimationProps) => {
                              
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      height={height}
      width={width}
      isStopped={isStopped}
      isPaused={isPaused}
    />
  );
};

export default Animation;
