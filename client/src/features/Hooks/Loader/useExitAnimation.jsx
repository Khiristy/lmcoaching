import { useSpring } from '@react-spring/web';

const useExitAnimation = (isOut, direction = "X", distance = "100vw", duration = 2000) => {
  // Validation pour s'assurer que la distance contient une unité correcte
  const validatedDistance = distance.includes("vw") || distance.includes("vh")
    ? distance
    : `${distance}vw`;

  const axis = direction === "X" ? "translateX" : "translateY";
  const initialTransform = `${axis}(0)`;
  const exitTransform = `${axis}(${validatedDistance})`;

  console.log(
    `Exit animation: isOut=${isOut}, transform=${isOut ? exitTransform : initialTransform}`
  );

  return useSpring({
    transform: isOut ? exitTransform : initialTransform,
    config: { tension: 200, friction: 20, duration }, // Spécifier les paramètres de durée et fluidité
    delay: isOut ? 1000 : 0,  // Synchronisation avec un délai de 1 seconde pour la sortie
  });
};

export default useExitAnimation;
