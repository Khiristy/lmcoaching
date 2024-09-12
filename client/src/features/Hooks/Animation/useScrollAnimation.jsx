import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const useScrollAnimation = (threshold = 0.5) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: threshold, // Déclencher l'animation lorsqu'un certain pourcentage du composant est visible
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return { ref, controls };
};

export default useScrollAnimation;