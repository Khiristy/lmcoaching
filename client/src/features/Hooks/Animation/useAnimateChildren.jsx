import { useAnimation } from "framer-motion";
import { useEffect } from "react";

const useAnimateChildren = (
  inView,
  initial = { opacity: 0, y: 50 },
  animateTo = { opacity: 1, y: 0 },
  transition = { duration: 1 }
) => {
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start(animateTo);
    } else {
      controls.start(initial);
    }
  }, [inView, controls, animateTo, initial]);

  return { controls, transition };
};

export default useAnimateChildren;
