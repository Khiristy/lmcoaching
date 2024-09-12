import { useEffect, useState } from 'react';

const useLoader = (minLoadTime = 5000) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsPageLoaded(true);
    };

    // Écouter l'événement de chargement de la page
    window.addEventListener('load', handleLoad);

    // Timer pour s'assurer que le loader est affiché pendant un minimum de 5 secondes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minLoadTime);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    };
  }, [minLoadTime]);

  return { isLoading, isPageLoaded };
};

export default useLoader;