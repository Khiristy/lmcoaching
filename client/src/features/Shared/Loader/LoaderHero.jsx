import Header from "../Header/Header";
import HomeHero from "../../Home/Hero/HomeHero";
import { forwardRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const LoaderHero = forwardRef(({ children, direction, startAnimation }, ref) => {
    const slideVariants = {
      initial: { opacity: 0, x: "-100vw" }, // Commence hors de l'écran à gauche
      enterLeft: { opacity: 1, x: 0 },      // Se déplace au centre de l'écran
    };
  
    const getVariant = () => {
      switch (direction) {
        case "left":
          return "enterLeft";
        default:
          return "initial";
      }
    };
  
    console.log("startAnimation dans LoaderHero:", startAnimation); // Vérifiez la réception ici
    return (
      <motion.div
        className="loader_hero"
        ref={ref}
        variants={slideVariants}
        initial={{ opacity: 0, x: 0 }}
        animate={startAnimation ? getVariant() : "initial"} // Utilisez startAnimation ici
        exit={{ opacity: 0, y: 0 }} 
        transition={{ duration: 3 }}
      >
        <Header />
        <HomeHero />
        {children}
      </motion.div>
    );
  });
  
  LoaderHero.propTypes = {
    children: PropTypes.node,
    direction: PropTypes.oneOf(["left", "right", "top", "bottom"]).isRequired, // La direction est obligatoire
    startAnimation: PropTypes.bool.isRequired, // startAnimation est requis
  };
  
// Ajout du displayName pour eslint
LoaderHero.displayName = "LoaderHero";

// Validation des props avec PropTypes

const MotionLoaderHero = motion(LoaderHero);

MotionLoaderHero.displayName = "MotionLoaderHero";

export default MotionLoaderHero;
