import { motion } from "framer-motion";
import "./HomeHero.scss";
import heroImg from "/media/homeHero/hero_img.webp";
import PropTypes from "prop-types";
import MainBtn from "../../Shared/Buttons/MainBtn/MainBtn.jsx";
import { useFadeIn } from "../../Hooks/Animation/useFadeIn.jsx";

const HomeHero = () => {
  // Hooks pour les animations d'apparition du texte
  const fadeInTitle = useFadeIn(0.2);
  const fadeInText = useFadeIn(0.4);

  return (
    <section className="hero">
      <motion.div className="hero_leftSide" {...fadeInTitle}>
        <h1>
          Atteignez vos objectifs <br /> plus rapidement
        </h1>
      </motion.div>

      <motion.div className="hero_leftSide" {...fadeInText}>
        <p>
          Transforme ton corps avec notre coaching en musculation, que ce soit
          pour la prise de masse, la perte de poids, ou le développement de tes
          capacités physiques : force, endurance, et bien plus encore.
        </p>
      </motion.div>

      <div className="hero_container">
        {/* Image sans parallax */}
        <img src={heroImg} alt="hero" className="hero_container-img" />
        <div className="hero_container-img--bckgrd"></div>

        {/* Bouton sans parallax */}
        <div>
          <MainBtn text="Réserver maintenant !" />
        </div>
      </div>
    </section>
  );
};

// Ajout du displayName pour éviter l'avertissement ESLint
HomeHero.displayName = "HomeHero";

HomeHero.propTypes = {
  children: PropTypes.node,
};

export default HomeHero;
