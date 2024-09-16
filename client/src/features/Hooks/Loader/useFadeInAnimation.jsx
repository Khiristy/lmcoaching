import { useSpring } from '@react-spring/web';

// Hook personnalisé pour les animations d'apparition
const useFadeInAnimation = (delay = 0, duration = 1000) => {
  return useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration },  // Durée de l'animation (en ms) 
    delay,  // Optionnel : délai pour différer l'animation
  });
};

export default useFadeInAnimation;
