import "./HomeHero.scss";
import { motion } from "framer-motion";
import heroImg from "/media/homeHero/hero_img.webp";
import PropTypes from "prop-types";
import useScrollAnimation from "../../Hooks/Animation/useScrollAnimation";
import useAnimateChildren from "../../Hooks/Animation/useAnimateChildren";

const HomeHero = ({ children }) => {
  const { ref, controls: sectionControls, inView } = useScrollAnimation(0.5);
  const childrenControls = useAnimateChildren(inView);

  return (
    <motion.section
      className="section hero"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={sectionControls}
      transition={{ duration: 0.5 }}
    >
      <div className="right_side-container">
        <div className="hero_img-bckgrd"></div>
        <img src={heroImg} alt="hero" className="hero_img" />
      </div>
      <motion.div
        initial={{ opacity: 1, y: 50 }}
        animate={childrenControls}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};
HomeHero.propTypes = {
  children: PropTypes.node, // Définit que `children` est requis et doit être un noeud React (élément, texte, etc.)
};

export default HomeHero;
