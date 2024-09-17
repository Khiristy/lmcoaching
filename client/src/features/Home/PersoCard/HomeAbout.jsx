import "./HomeAbout.scss";
import useScrollAnimation from "../../Hooks/Animation/useScrollAnimation.jsx"; // Hook d'animation pour la section principale
import useAnimateChildren from "../../Hooks/Animation/useAnimateChildren.jsx"; // Hook d'animation pour les enfants
import AnimatedChildren from "../../Shared/Animation/AnimatedChildren.jsx"; // Composant pour gérer les animations des enfants
import { motion } from "framer-motion";
import aboutImg from "/media/about/homeAbout_img.webp";

const HomeAbout = () => {
  // Utilisation du hook pour l'animation principale de la section
  const { ref, controls: sectionControls } = useScrollAnimation(0.5);

  // Utilisation du hook pour l'animation des enfants
  const { controls: childrenControls, transition: childrenTransition } =
    useAnimateChildren(true);

  return (
    <motion.section
      className="HomeAbout HomeAbout_layer"
      ref={ref} // Utilisation du ref pour déclencher l'animation au scroll
      initial={{ opacity: 0, y: 50 }}
      animate={sectionControls}
      transition={{ duration: 0.5 }}
    >
      <AnimatedChildren
        controls={childrenControls}
        transition={childrenTransition}
      >
        <div className="HomeAbout_container">
          <div className="HomeAbout_container-left">
            <img
              src={aboutImg}
              alt=""
              className="HomeAbout_container-left--img"
            />
          </div>
          <div className="HomeAbout_container-right">
            <i className="fa-solid fa-quote-left"></i>
            <h3 className="HomeAbout_container-right--title">Bienvenue !</h3>
            <p className="HomeAbout_container-right--text">
              Ma passion pour le judo, la boxe et le basket m&apos;ont appris la
              discipline, la résilience, le respect des autres ainsi que le
              dépassement de soi.
              <br />
              Aujourd&apos;hui, je souhaite transmettre cette passion et ces
              valeurs à tous ceux qui souhaitent les découvrir.
              <i className="fa-solid fa-quote-right"></i>
            </p>
          </div>
        </div>
      </AnimatedChildren>
    </motion.section>
  );
};

export default HomeAbout;
