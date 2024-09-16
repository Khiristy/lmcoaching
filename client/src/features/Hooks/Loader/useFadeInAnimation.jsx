import { useEffect, useState } from "react";

// Hook pour gérer l'animation de fade-in
const useFadeInAnimation = (fadeAnimationTimer) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Démarrer le fade-in
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, fadeAnimationTimer * 1000); // Timer en millisecondes

    return () => clearTimeout(timer); // Nettoyer le timer
  }, [fadeAnimationTimer]);

  return isVisible;
};

export default useFadeInAnimation;
