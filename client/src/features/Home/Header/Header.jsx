// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import mainLogo from "/media/logo_test.png";
import "./Header.scss"; // Vos styles actuels
// import Menu from "../../Shared/Components/Menu/Menu";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }} // Commence avec une opacité de 0 et hors écran vers le haut
      animate={{ opacity: 1, y: 0 }} // Anime vers une opacité de 1 et revient à sa position d'origine
      transition={{ duration: 2 }} // L'animation dure 2 secondes
      style={{ willChange: "opacity, transform" }}
      className="header"
    >
      <div className="header_content">
        <img src={mainLogo} alt="Logo" className="header_content-mainLogo" />
      </div>
      <nav>
        <ul className="header_content-menu">
          <li>
            <a href="/accueil">Accueil</a>
          </li>
          <li>
            <a href="/about">présentation</a>
          </li>
          <li>
            <a href="/contact">Tarifs</a>
          </li>
          <li>
            <a href="/faq">Gallerie</a>
          </li>
          <li>
            <a href="/result">Faq</a>
          </li>
          <li>
            <a href="/result">Transformation</a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
