import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const LoaderImage = ({ src, direction, startAnimation }) => {
  const slideVariants = {
    initial: { x: 0, y: 0 },
    exitLeft: { x: '-100%' },
    exitRight: { x: '100%' },
    exitTop: { y: '-100%' },
    exitBottom: { y: '100%' },
  };

  const getVariant = () => {
    switch (direction) {
      case 'left':
        return 'exitLeft';
      case 'right':
        return 'exitRight';
      case 'top':
        return 'exitTop';
      case 'bottom':
        return 'exitBottom';
      default:
        return 'initial';
    }
  };



  return (
    <motion.img
      src={src}
      className={`loader-image-${direction}`}
      variants={slideVariants}
      initial="initial"
      animate={startAnimation ? getVariant() : 'initial'}
      transition={{ duration: 2, ease: 'easeInOut',  }}
      style={{ zIndex: 1000 }}
    />
  );
};

LoaderImage.propTypes = {
  src: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
  startAnimation: PropTypes.bool.isRequired,
  delay: PropTypes.number, // S'assurer que le délai est bien passé
};

export default LoaderImage;
