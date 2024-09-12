import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const AnimatedHomePersoCard = ({ children, ref, controls }) => {
  return (
    <motion.section
      className="section persoCard_content animated-home-persocard"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
};

AnimatedHomePersoCard.propTypes = {
  children: PropTypes.node.isRequired, // Assure que children est bien passé
  ref: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]), // Valide le type de la référence
  controls: PropTypes.object.isRequired, // Assure que controls est bien passé
};

export default AnimatedHomePersoCard;
