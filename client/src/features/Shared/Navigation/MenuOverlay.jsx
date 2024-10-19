import { useState } from "react";
import "./MenuOverlay.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import mainLogo from "/media/logo_test.png";

const NavOverlay = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="container">
      <a href="#">
        <img src={mainLogo} alt="logo principal" className="nav_logo" />
      </a>
      <div className={`nav_overlay ${navOpen ? "open" : ""}`}>
        <FontAwesomeIcon icon={faTimes} className="fas" onClick={toggleNav} />
        <ul className="list">
            <li>
              <a href="#hero">Accueil</a>
            </li>
            <li>
              <a href="#about">Présentation</a>
            </li>
            <li>
              <a href="#pricing">Tarifs</a>
            </li>
            <li>
              <a href="#journey">Galerie</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#transformation">Transformation</a>
            </li>
            <li>
              <a href="#review">Avis</a>
            </li>
          </ul>
      </div>

      <div className="nav">
        <FontAwesomeIcon icon={faBars} className="fas" onClick={toggleNav} />
      </div>
    </div>
  );
};

export default NavOverlay;
