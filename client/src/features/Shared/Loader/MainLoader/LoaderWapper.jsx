import { useState, useEffect } from 'react';
import LoaderLayout from './LoaderLayout'; // Import du composant Loader
import Home from '../pages/Home'; // Import de la page Home


const LoaderWrapper = () => {
  const [startAnimation, setStartAnimation] = useState(false); // Animation du Loader
  const [loading, setLoading] = useState(true); // Loader actif

  useEffect(() => {
    console.log("Initial loading:", loading);
    console.log("Initial startAnimation (before updates):", startAnimation);

    const minLoadTime = 5000; // Temps minimum d'animation du Loader
    const start = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - start;
      const remainingTime = minLoadTime - elapsed;

      console.log("Page loaded, time elapsed:", elapsed, "ms");
      console.log("Remaining time for loader:", remainingTime, "ms");

      if (remainingTime > 0) {
        setTimeout(() => {
          console.log("Stopping animation after remaining time.");
          setStartAnimation(false); // Arrêter l'animation après le temps minimum
          setLoading(false); // Masquer le Loader
          console.log("Loader hidden after timeout");
        }, remainingTime);
      } else {
        console.log("Stopping animation immediately.");
        setStartAnimation(false); // Stopper l'animation
        setLoading(false); // Masquer le Loader
        console.log("Loader hidden immediately");
      }
    };

    if (document.readyState === "complete") {
      console.log("Page already loaded, starting animation.");
      setStartAnimation(true); // Démarrer l'animation
      handleLoad();
    } else {
      window.addEventListener("load", () => {
        console.log("Page loaded, starting animation.");
        setStartAnimation(true); // Démarrer l'animation après le chargement
        handleLoad();
      });
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  console.log("Rendering LoaderWrapper with loading:", loading, "and startAnimation:", startAnimation);

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