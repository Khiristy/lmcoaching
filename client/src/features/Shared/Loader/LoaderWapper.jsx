import { useState, useEffect } from 'react';
import MainLoader from './MainLoader/MainLoader';
import PropTypes from 'prop-types';  // Ajouter import pour les propTypes

const LoaderWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);  // État de chargement du loader
  const [startAnimation, setStartAnimation] = useState(false);  // Animation du loader
  const [loaderFinished, setLoaderFinished] = useState(false);  // Loader terminé
  
  useEffect(() => {
    const minLoadTime = 5000; // Temps minimum de 5 secondes pour le loader
    const start = Date.now();
  
    const handleLoad = () => {
      const elapsed = Date.now() - start;
      const remainingTime = minLoadTime - elapsed;
  
      setTimeout(() => {
        // Démarre l'animation du Loader
        setStartAnimation(true);
  
        // Commence l'animation du Hero pendant que le Loader est encore en cours
        setTimeout(() => {
          // Déclencher l'animation du Hero
          setLoaderFinished(true);
          
          // Masquer le loader après un délai plus long
          setTimeout(() => {
            setLoading(false); // Cacher le loader après l'animation du Hero
          }, 1500); // Ajustez ici pour laisser le loader finir pendant que le Hero entre
        }, 1000); // Déclenche l'animation du Hero après 1 seconde
      }, remainingTime > 0 ? remainingTime : 0);
    };
  
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
  
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  

  return (
    <div>
      {loading && <MainLoader startAnimation={startAnimation} />}
      {!loading && <div>{children(loaderFinished)}</div>}  
    </div>
  );
};

LoaderWrapper.propTypes = {
  children: PropTypes.func.isRequired,  // Attente d'une fonction pour children
};

export default LoaderWrapper;
