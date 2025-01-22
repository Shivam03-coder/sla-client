"use client";
import Lottie from "lottie-react";

type LottieComponentProps = {
  animationData?: object; // The animation data
  width?: number | string; // Width of the animation
  height?: number | string; // Height of the animation
};
const LottieComponent: React.FC<LottieComponentProps> = ({
  animationData,
  width = 500,
  height = 500,
}) => {
  return (
    <div
      style={{
        width,
        height,
      }}
    >
      <Lottie
        animationData={animationData}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default LottieComponent;
