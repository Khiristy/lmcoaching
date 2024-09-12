import "./HomeHero.scss";
import heroImg from "/media/homeHero/hero_img.webp";

import useScrollAnimation from '../../Hooks/Animation/useScrollAnimation.jsx';
import { motion } from 'framer-motion';


const HomeHero = () => {
  const { ref, controls } = useScrollAnimation(0.5);

  return (
    <motion.section
      className="section hero"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <div className="right_side-container">
        <div className="hero_img-bckgrd"></div>
        <img src={heroImg} alt="hero" className="hero_img" />
      </div>
    </motion.section>
  );
};

export default HomeHero;
