import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './LoadingScreen.scss';  // Importation du fichier SCSS



const LoaderWithContent = ({ children }) => {
  const [loading, setLoading] = useState(true);  // État pour le loader actif
  const [animationStarted, setAnimationStarted] = useState(false);  // État pour l'animation de sortie

  useEffect(() => {
    const minLoadTime = 2500;  // Délai minimum de 2.5 secondes
    const start = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - start;
      const remainingTime = minLoadTime - elapsed;

      console.log(`Temps écoulé : ${elapsed}ms, temps restant : ${remainingTime}ms`);

      setTimeout(() => {
        console.log('Chargement terminé, animation va commencer');
        setLoading(false);  // Indique que le chargement est terminé
        setAnimationStarted(true);  // Démarre l'animation
        console.log('État de animationStarted : ', animationStarted);
      }, remainingTime > 0 ? remainingTime : 0);
    };

    // Si la page est déjà complètement chargée, on lance l'animation directement
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);  // Nettoyage de l'event listener
    };
  }, [animationStarted]);  // Ajout de l'état pour forcer l'update

  // Variants d'animation simplifiés
  const slideVariants = {
    initial: { x: 0, y: 0 },  // Position initiale (bloc dans la vue)
    exitLeft: { x: '-100%' },  // Glissement à gauche
    exitRight: { x: '100%' },  // Glissement à droite
    exitTop: { y: '-100%' },  // Glissement vers le haut
    exitBottom: { y: '100%' },  // Glissement vers le bas
  };

  return (
    <div>
      {loading && (
        <div className="loader">
          {/* Bloc qui glisse vers l'extérieur (gauche) */}
          <motion.div
            className="loader-block-left"
            variants={slideVariants}
            initial="initial"
            animate={animationStarted ? 'exitLeft' : 'initial'}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{ willChange: 'transform', zIndex: 1000 }}  // Forcer z-index pour éviter les blocages
          />

          {/* Image qui glisse vers l'extérieur (haut) */}
          <motion.img
            className="loader-block-top"
            src="/path-to-your-image-top.png"
            variants={slideVariants}
            initial="initial"
            animate={animationStarted ? 'exitTop' : 'initial'}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.1 }}
            style={{ willChange: 'transform', zIndex: 1000 }}
          />

          {/* Image qui glisse vers l'extérieur (bas) */}
          <motion.img
            className="loader-block-bottom"
            src="/path-to-your-image-bottom.png"
            variants={slideVariants}
            initial="initial"
            animate={animationStarted ? 'exitBottom' : 'initial'}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
            style={{ willChange: 'transform', zIndex: 1000 }}
          />

          {/* Image qui glisse vers l'extérieur (droite) */}
          <motion.img
            className="loader-block-right"
            src="/path-to-your-image-right.png"
            variants={slideVariants}
            initial="initial"
            animate={animationStarted ? 'exitRight' : 'initial'}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
            style={{ willChange: 'transform', zIndex: 1000 }}
          />
        </div>
      )}

      {!loading && (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="content"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

// Ajout de la validation des PropTypes
LoaderWithContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoaderWithContent;