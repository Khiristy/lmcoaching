import { motion } from "framer-motion";
import PropTypes from "prop-types";

const LoaderBlock = ({ direction, startAnimation, delay = 0 }) => {
  const slideVariants = {
    initial: { x: 0, y: 0 },
    exitLeft: { x: "-500px" },
    exitRight: { x: "100%" },
    exitTop: { y: "-100%" },
    exitBottom: { y: "100%" },
  };

  const getVariant = () => {
    switch (direction) {
      case "left":
        return "exitLeft";
      case "right":
        return "exitRight";
      case "top":
        return "exitTop";
      case "bottom":
        return "exitBottom";
      default:
        return "initial";
    }
  };

  return (
    <motion.div
      className={`loader-block-${direction}`}
      variants={slideVariants}
      initial="initial"
      animate={startAnimation ? getVariant() : "initial"}
      transition={{ duration: 2, ease: "easeInOut"}}
      style={{
        willChange: "transform",
        zIndex: 1001,
      }}
    >
      <motion.div
        className={`loader-block-${direction}-content`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay}} // Applique un fondu à tout le contenu
      >
        <img src="/media/main_logo.png" alt="Logo" />
        <h1>LmCoaching</h1>
      </motion.div>
    </motion.div>
  );
};

// Validation des PropTypes
LoaderBlock.propTypes = {
  direction: PropTypes.oneOf(["left", "right", "top", "bottom"]).isRequired,
  startAnimation: PropTypes.bool.isRequired,
  delay: PropTypes.number,
};

export default LoaderBlock;
