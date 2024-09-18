import mainLogo from "/media/logo_test.png";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

import "./Header.scss";

const Header = ({ refs }) => {
  console.log(refs)
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <nav>
        <ul className="header_content-menu">
          <li>
            <button onClick={() => scrollToSection(refs.heroRef)}>Accueil</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(refs.aboutRef)}>Présentation</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(refs.pricingRef)}>Tarifs</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(refs.journeyRef)}>Gallerie</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(refs.faqRef)}>FAQ</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(refs.transformationRef)}>Transformation</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(refs.reviewRef)}>Avis</button>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

Header.propTypes = {
  refs: PropTypes.object.isRequired,
};

export default Header;
