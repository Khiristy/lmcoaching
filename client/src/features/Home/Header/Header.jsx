// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import mainLogo from "/media/main_logo.png";
import "./Header.scss"; // Vos styles actuels

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }} // Commence avec une opacité de 0 et hors écran vers le haut
      animate={ { opacity: 1, y: 0 } } // Anime vers une opacité de 1 et revient à sa position d'origine
      transition={{ duration: 2 }} // L'animation dure 2 secondes
      style={{ willChange: "opacity, transform" }}
      className="motionHeader"
    >
      
       <nav>
        <ul className="main_menu">
          <li><a href="/accueil">Accueil</a></li>
          <li><a href="/about">Qui suis-je ?</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/result">Avant/Après</a></li>
        </ul>
      </nav>
      <div className="motionHeader_content">
        <img
          src={mainLogo}
          alt="Logo"
          className="motionHeader_content-mainLogo"
        />

      </div>
    </motion.header>
  );
};


export default Header;

{
  /* Si besoin, décommentez le menu */
}
{
  /* <nav>
        <ul className="main_menu">
          <li><a href="/accueil">Accueil</a></li>
          <li><a href="/about">Qui suis-je ?</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/result">Avant/Après</a></li>
        </ul>
      </nav> */
}
