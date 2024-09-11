// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import mainLogo from "/media/main_logo.png";
import MainBtn from "../Buttons/MainBtn/MainBtn.jsx";
import "./MotionHomeHeader.scss"; // Vos styles actuels

const MotionHomeHeader = ({ startAnimation }) => {
  return (
    <motion.header
      initial={{ opacity: 0 }} // Commence avec une opacité de 0 et hors écran vers le haut
      animate={startAnimation ? { opacity: 1, y: 0 } : {}} // Anime vers une opacité de 1 et revient à sa position d'origine
      transition={{ duration: 2 }} // L'animation dure 2 secondes
      style={{ willChange: "opacity, transform" }}
      className="motionHeader"
    >
      <div className="motionHeader_content">
        <img
          src={mainLogo}
          alt="Logo"
          className="motionHeader_content-mainLogo"
        />
        <div className="motionHeader_content-leftSide">
          <h1>
            Atteignez vos objectifs <br /> plus rapidement
          </h1>
          <p>
            Transforme ton corps avec notre coaching en musculation, que ce soit
            pour la prise de masse, la perte de poids, ou le développement de
            tes capacités physiques : force, endurance, et bien plus encore.
          </p>
          <MainBtn className="mainBtn_motionHeader" text="Réserver maintenant !" />
          <div className="motionHeader_socialLink">
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
          </div>
        </div>
      </div>

      {/* Si besoin, décommentez le menu */}
      {/* <nav>
        <ul className="main_menu">
          <li><a href="/accueil">Accueil</a></li>
          <li><a href="/about">Qui suis-je ?</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/result">Avant/Après</a></li>
        </ul>
      </nav> */}
    </motion.header>
  );
};

MotionHomeHeader.propTypes = {
  startAnimation: PropTypes.bool.isRequired, // Vérifie que startAnimation est un booléen et obligatoire
};

export default MotionHomeHeader;
