import './HomeHero.scss'; 
import MainBtn from "../../Shared/Buttons/MainBtn/MainBtn.jsx";
import { motion } from 'framer-motion'; 
import heroImg from "/media/hero_img_test-3.jpg";

const Hero = () => {
  return (
    <motion.section
      className="hero"
      initial={{ x: '-100vw', opacity: 0 }} // Le contenu commence en dehors de l'écran, à gauche
      animate={{ x: 0, opacity: 1 }} // Le contenu revient à sa position normale et devient visible
      transition={{ duration: 1, ease: 'easeOut' }} // Transition sur 1 seconde
    >
      <div className="left_side-container">
        <h1>
          Atteignez vos objectifs <br /> plus rapidement
        </h1>
        <p>
          Transforme ton corps avec notre coaching en musculation, que ce soit
          pour la prise de masse, la perte de poids, ou le développement de tes
          capacités physiques : force, endurance, et bien plus encore.
        </p>
        <MainBtn /> {/* Votre bouton */}
      </div>

      <div className="right_side-container">
        <motion.img
          src={heroImg}
          alt="hero"
          className="hero_img"
          initial={{ opacity: 0 }} // L'image commence invisible
          animate={{ opacity: 1 }} // L'image devient visible
          transition={{ duration: 0.5, ease: 'easeOut' }} // Délai de 1 seconde avant que l'image apparaisse
        />
      </div>
    </motion.section>
  );
};

export default Hero;
