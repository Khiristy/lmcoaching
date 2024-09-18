import "./HomeHero.scss";
import { motion } from "framer-motion";
import heroImg from "/media/homeHero/hero_img.webp";
import PropTypes from "prop-types";
import useAnimateChildren from "../../Hooks/Animation/useAnimateChildren"; // Animation des enfants
import { forwardRef } from "react"; // Import de forwardRef
import MainBtn from "../../Shared/Buttons/MainBtn/MainBtn.jsx";
// import slideBot from "/media/homeHero/Rectangle1.png"
// import slideTop from "/media/homeHero/Rectangle2.png"

const HomeHero = forwardRef(({ children }, ref) => {
  // Utilisation du hook d'animation des enfants
  const { childrenControls, transition: childrenTransition } =
    useAnimateChildren(true);

  return (
    <motion.section
      className="hero"
      ref={ref} // Utilisation de ref ici
      initial={{ opacity: 1, y: 0 }} // Retrait du translateY
      animate={childrenControls}
      transition={{ duration: 0.5 }}
    >
      <div className="hero_leftSide">
        <h1>
          Atteignez vos objectifs <br /> plus rapidement
        </h1>
        <p>
          Transforme ton corps avec notre coaching en musculation, que ce soit
          pour la prise de masse, la perte de poids, ou le développement de tes
          capacités physiques : force, endurance, et bien plus encore.
        </p>
      </div>
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
        <MainBtn
            className=""
            text="Réserver maintenant !"
          />
      {/* 
        <div className="hero_container-socialLink">
            <a href="">
              <i className="fa fa-facebook fa-4x icon-3d"></i>
            </a>
            <a href="">
              <i className="fa fa-instagram fa-4x icon-3d"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-snapchat fa-4x icon-3d"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-tiktok fa-4x icon-3d"></i>
            </a>
          </div> */}
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
});

// Ajout du displayName pour éviter l'avertissement ESLint
HomeHero.displayName = "HomeHero";

HomeHero.propTypes = {
  children: PropTypes.node,
};

export default HomeHero;
