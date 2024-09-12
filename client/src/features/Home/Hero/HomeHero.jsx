import "./HomeHero.scss";
import { motion } from "framer-motion";
import heroImg from "/media/homeHero/hero_img.webp";
import PropTypes from "prop-types";
import useFade from "../../Hooks/Animation/useFade";
import useAnimateChildren from "../../Hooks/Animation/useAnimateChildren";
import { useRef } from "react";

const HomeHero = ({ children }) => {
  const ref = useRef(null);
  const controls = useFade(0, 1, 0.5); // Utilisation de useFade
  const childrenControls = useAnimateChildren(); // Utilisation actuelle non modifiée

  console.log("ref:", ref.current);
  console.log("controls (useFade):", controls);
  console.log("childrenControls:", childrenControls);

  return (
    <motion.section
      className="section hero"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls} // Utilisation de controls retourné par useFade
      transition={{ duration: 0.5 }}
    >
      <div className="right_side-container">
        <div className="hero_img-bckgrd"></div>
        <img src={heroImg} alt="hero" className="hero_img" />
      </div>
      <motion.div
        initial={{ opacity: 1, y: 50 }}
        animate={childrenControls.controls}
        transition={childrenControls.transition}
      >
        {children || <div>Default content</div>}
      </motion.div>
    </motion.section>
  );
};

HomeHero.propTypes = {
  children: PropTypes.node,
};

export default HomeHero;
