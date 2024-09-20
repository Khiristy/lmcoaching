import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const useScrollAnimation = (
  threshold = 0.5,
  initial = { opacity: 0, y: 50 },
  animateTo = { opacity: 1, y: 0 },
  transition = { duration: 3 }
) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold, // Déclenche l'animation lorsque 50% du composant est visible
  });

  useEffect(() => {
    if (inView) {
      controls.start(animateTo);
    } else {
      controls.start(initial);
    }
  }, [inView, controls, animateTo, initial]);

  return { ref, controls, transition };
};

export default useScrollAnimation;
