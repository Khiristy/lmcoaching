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
        console.log('Chargement terminé, lancé l\'animation');
        setLoading(false);  // Indique que le chargement est terminé
        setAnimationStarted(true);  // Démarre l'animation
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
  }, []);

  // Variants d'animation pour tester uniquement le mouvement
  const slideVariants = {
    initial: { x: 0, y: 0 },  // Position initiale (bloc dans la vue)
    exit: (direction) => {  // Déplacement vers l'extérieur selon la direction
      console.log('Animation déclenchée pour direction :', direction);
      switch (direction) {
        case 'left':
          return { x: '-100%' };
        case 'right':
          return { x: '100%' };
        case 'top':
          return { y: '-100%' };
        case 'bottom':
          return { y: '100%' };
        default:
          return {};
      }
    }
  };

  return (
    <div>
      {loading && (
        <div className="loader">
          {/* Bloc qui glisse vers l'extérieur (gauche) */}
          <motion.div
            className="loader-block-left"
            custom="left"
            variants={slideVariants}
            initial="initial"
            animate={animationStarted ? 'exit' : 'initial'}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{ willChange: 'transform' }}  // Limitation de `will-change`
          />

          {/* Image qui glisse vers l'extérieur (haut) */}
          <motion.img
            className="loader-block-top"
            src="/path-to-your-image-top.png"
            custom="top"
            variants={slideVariants}
            initial="initial"
            animate={animationStarted ? 'exit' : 'initial'}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.1 }}
            style={{ willChange: 'transform' }}  // Limitation de `will-change`
          />

          {/* Image qui glisse vers l'extérieur (bas) */}
          <motion.img
            className="loader-block-bottom"
            src="/path-to-your-image-bottom.png"
            custom="bottom"
            variants={slideVariants}
            initial="initial"
            animate={animationStarted ? 'exit' : 'initial'}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
            style={{ willChange: 'transform' }}  // Limitation de `will-change`
          />

          {/* Image qui glisse vers l'extérieur (droite) */}
          <motion.img
            className="loader-block-right"
            src="/path-to-your-image-right.png"
            custom="right"
            variants={slideVariants}
            initial="initial"
            animate={animationStarted ? 'exit' : 'initial'}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
            style={{ willChange: 'transform' }}  // Limitation de `will-change`
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