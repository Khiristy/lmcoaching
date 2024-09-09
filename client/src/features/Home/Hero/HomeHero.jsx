import PropTypes from 'prop-types';
import './HomeHero.scss';
import MainBtn from '../../Shared/Buttons/MainBtn/MainBtn.jsx';
import { motion } from 'framer-motion';
import heroImg from '/media/hero_img_test-3.jpg';

const Hero = ({ loaderFinished }) => {
  return (
<motion.section
  className="hero"
  initial={{ x: '-100vw', opacity: 0 }} // Hero commence hors écran, à gauche
  animate={loaderFinished ? { x: 0, opacity: 1 } : {}} // Déclenche le Hero légèrement avant la fin du Loader
  transition={{ duration: 1, ease: 'easeOut' }} // Synchronise avec la fin du Loader
>
  {/* Contenu de gauche */}
  <div className="left_side-container">
    <h1>Atteignez vos objectifs <br /> plus rapidement</h1>
    <p>Transforme ton corps avec notre coaching en musculation...</p>
    <MainBtn />
  </div>

  {/* Contenu de droite */}
  <div className="right_side-container">
    <motion.img
      src={heroImg}
      alt="hero"
      className="hero_img"
      initial={{ opacity: 0 }} // L'image commence invisible
      animate={loaderFinished ? { opacity: 1 } : {}} // Afficher l'image dès que loaderFinished est vrai
      transition={{ duration: 0.5, ease: 'easeOut' }} // Transition douce
    />
  </div>
</motion.section>

  );
};

Hero.propTypes = {
  loaderFinished: PropTypes.bool.isRequired,  // Validation de la prop loaderFinished
};

export default Hero;
