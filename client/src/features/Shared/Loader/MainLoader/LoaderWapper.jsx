import { useState, useEffect } from 'react';
import LoaderLayout from './LoaderLayout'; // Import du composant Loader
import Home from '../pages/Home'; // Import de la page Home


const LoaderWrapper = () => {
  const [startAnimation, setStartAnimation] = useState(false); // Animation du Loader
  const [loading, setLoading] = useState(true); // Loader actif

  useEffect(() => {

    const minLoadTime = 5000; // Temps minimum d'animation du Loader
    const start = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - start;
      const remainingTime = minLoadTime - elapsed;


      if (remainingTime > 0) {
        setTimeout(() => {
          setStartAnimation(false); // Arrêter l'animation après le temps minimum
          setLoading(false); // Masquer le Loader
        }, remainingTime);
      } else {
        setStartAnimation(false); // Stopper l'animation
        setLoading(false); // Masquer le Loader
      }
    };

    if (document.readyState === "complete") {
      setStartAnimation(true); // Démarrer l'animation
      handleLoad();
    } else {
      window.addEventListener("load", () => {
        setStartAnimation(true); // Démarrer l'animation après le chargement
        handleLoad();
      });
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);


  return (
    <>
      {loading ? (
        <LoaderLayout startAnimation={startAnimation} />
      ) : (
        
        <Home /> // Afficher la page Home une fois le chargement terminé
      )}
    </>
  );
};

export default LoaderWrapper;