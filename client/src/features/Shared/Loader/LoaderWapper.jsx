import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MainLoader from './MainLoader/MainLoader.jsx';

const LoaderWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true); // Contrôle du chargement
  const [startAnimation, setStartAnimation] = useState(false); // Contrôle de l'animation

  useEffect(() => {
    const minLoadTime = 5000; // Délai minimum de 5 secondes pour le Loader
    const start = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - start;
      const remainingTime = minLoadTime - elapsed;

      // Déclenche l'animation après le délai
      setTimeout(() => {
        setStartAnimation(true);
      }, remainingTime > 0 ? remainingTime : 0);

      // Cache le Loader après l'animation
      setTimeout(() => setLoading(false), remainingTime + 2500);
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
      {!loading && <div className="content-wrapper">{children}</div>} {/* Affiche le contenu après le Loader */}
    </div>
  );
};

LoaderWrapper.propTypes = {
  children: PropTypes.node.isRequired, // Validation: doit être un noeud React valide
};

export default LoaderWrapper;
