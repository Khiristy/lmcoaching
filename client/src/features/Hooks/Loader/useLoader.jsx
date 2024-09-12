import { useState, useEffect } from 'react';

const useLoader = (minLoadTime = 5000) => {
  const [isLoading, setIsLoading] = useState(true); // Par défaut, le chargement commence à true
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsPageLoaded(true);  // La page est maintenant chargée
    };

    window.addEventListener('load', handleLoad);

    const timer = setTimeout(() => {
      setIsLoading(false);  // Après le délai minimum, le chargement est terminé
    }, minLoadTime);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer); // Nettoyage du timer
    };
  }, [minLoadTime]);

  return { isLoading, isPageLoaded };
};

export default useLoader;