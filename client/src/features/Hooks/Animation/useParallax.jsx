import { useMotionValue } from "framer-motion";


export const useParallax = () => {
  // Créer des valeurs de motion pour x et y
  const xParallax = useMotionValue(0);
  const yParallax = useMotionValue(0);

  // Gérer le mouvement de la souris
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 10 - 5; // Réduire l'amplitude à [-5, 5]
    const y = (e.clientY / window.innerHeight) * 10 - 5; // Réduire l'amplitude à [-5, 5]

    xParallax.set(x); // Mettre à jour les valeurs de motion
    yParallax.set(y);
  };

  // Retourner les valeurs de parallax et le gestionnaire de mouvement de la souris
  return { xParallax, yParallax, handleMouseMove };
};
