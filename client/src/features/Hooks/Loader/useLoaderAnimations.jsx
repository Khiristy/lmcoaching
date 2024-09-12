import { useMemo } from 'react';

const useLoaderAnimations = () => {
  // Variantes de translation pour les images du haut et du bas
  const slideVariants = useMemo(
    () => ({
      top: {
        initial: { y: '-100%' },
        animate: { y: 0, transition: { duration: 1 } },
        exit: { y: '-100%', transition: { duration: 1 } },
      },
      bottom: {
        initial: { y: '100%' },
        animate: { y: 0, transition: { duration: 1 } },
        exit: { y: '100%', transition: { duration: 1 } },
      },
    }),
    []
  );

  // Variante de fondu pour l'image du milieu
  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.5 } },
    exit: { opacity: 0, transition: { duration: 1.5 } },
  };

  return { slideVariants, fadeVariants };
};

export default useLoaderAnimations;
