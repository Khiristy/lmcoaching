// GlobalAnimationController.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const GlobalAnimationController = ({ children }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Lance les animations après un petit délai ajusté pour le chevauchement
    const delay = setTimeout(() => {
      setStartAnimation(true);
    }, 1000); // Ajuster ce timing pour que l'animation du Hero démarre un peu avant la fin du Loader

    return () => clearTimeout(delay); // Nettoyage du délai
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={startAnimation ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

GlobalAnimationController.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalAnimationController;
