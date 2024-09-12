import "./HomeHero.scss";
import { motion } from "framer-motion";
import heroImg from "/media/homeHero/hero_img.webp";
import PropTypes from "prop-types";
import useAnimateChildren from "../../Hooks/Animation/useAnimateChildren"; // Animation des enfants
import { useRef } from "react";

const HomeHero = ({ children }) => {
  const ref = useRef(null);
  // Suppression de l'utilisation de useFade
  const { childrenControls, transition: childrenTransition } =
    useAnimateChildren(true);

  return (
    <motion.section
      className="hero hero_layer"
      ref={ref}
      initial={{ opacity: 1, y: 0 }} // Retrait du translateY
      animate={childrenControls}
      transition={{ duration: 0.5 }}
    >
      <div className="hero_container">
       
        <motion.img
          src={heroImg}
          alt="hero"
          className="hero_container-img"
          initial={{ opacity: 1, y: 0 }} // Retrait du translateY
          animate={childrenControls}
          transition={childrenTransition}
        />
         <div className="hero_container-img--bckgrd"></div>
      </div>

      <motion.div
        initial={{ opacity: 1, y: 0 }} // Retrait du translateY
        animate={childrenControls}
        transition={childrenTransition}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

HomeHero.propTypes = {
  children: PropTypes.node,
};

export default HomeHero;
