import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const AnimatedChildren = ({ children, controls, transition }) => {
  return (
    <AnimatePresence>
      {children && (
        <motion.div
          className="animated-children"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          exit={{ opacity: 0, y: 50 }}
          transition={transition}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
AnimatedChildren.propTypes = {
    children: PropTypes.node.isRequired,
    controls: PropTypes.object.isRequired,
    transition: PropTypes.object,  // Validation pour transition
  };
export default AnimatedChildren;
