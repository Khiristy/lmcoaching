import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export const useFadeIn = (delay = 0, distance = 50) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.8, ease: "easeOut" },
    });
  }, [controls, delay]);

  return {
    initial: { opacity: 0, y: distance },
    animate: controls,
  };
};
