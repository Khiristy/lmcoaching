import { motion } from "framer-motion";
import PropTypes from "prop-types";

const LoaderBlock = ({ direction, startAnimation, delay = 0 }) => {
  const slideVariants = {
    initial: { x: 0, y: 0 },
    exitLeft: { x: "-500px" },
    exitRight: { x: "1000px" },
    exitTop: { y: "-1000px" },
    exitBottom: { y: "1000px" },
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

  // Ajout d'un log pour vérifier si startAnimation est bien reçu
  ("startAnimation dans LoaderBlock:", startAnimation);

  return (
    <motion.div
      className={`loader-block-${direction}`}
      variants={slideVariants}
      initial="initial"
      animate={startAnimation ? getVariant() : "initial"} // Utilisation de startAnimation ici
      transition={{ duration: 2, ease: "easeInOut" }}
      style={{
        zIndex: 1001,
      }}
    >
      <motion.div
        className={`loader-block-${direction}-content`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay }} // Applique un fondu à tout le contenu
      >
        <img src="/media/main_logo.png" alt="Logo" />
        <h1>LmCoaching</h1>
      </motion.div>
    </motion.div>
  );
};

// Validation des PropTypes
LoaderBlock.propTypes = {
  direction: PropTypes.oneOf(["left", "right", "top", "bottom"]).isRequired, // Vérifie que la direction est bien définie
  startAnimation: PropTypes.bool.isRequired, // Vérifie que startAnimation est bien une booléenne
  delay: PropTypes.number,
};

export default LoaderBlock;