import { motion } from "framer-motion";
import mainLogo from "/media/logo_test.png";
import PropTypes from "prop-types";

import "./Header.scss"
const Header = ({ scrollToSection }) => { // Suppression de refs ici
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ willChange: "opacity, transform" }}
      className="header"
    >
      <div className="header_content">
        <img src={mainLogo} alt="Logo" className="header_content-mainLogo" />
      </div>

      <nav className="header_content-menu">
        <ul>
          <li>
            <button onClick={() => scrollToSection(0)}>Accueil</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(1)}>Présentation</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(2)}>Tarifs</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(3)}>Gallerie</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(4)}>FAQ</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(5)}>Transformation</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(6)}>Avis</button>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

// Validation des PropTypes
Header.propTypes = {
  scrollToSection: PropTypes.func.isRequired, // On ne valide que scrollToSection
};

export default Header;
