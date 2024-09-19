import mainLogo from "/media/logo_test.png";
import { useEffect, useState } from "react";
import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true); // Par défaut, le menu est ouvert

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Inverse l'état du menu
  };

  const handleScroll = () => {
    // Utiliser FullPage.js API pour détecter la section actuelle
    const activeSection =
      document.querySelector(".fp-section.active").dataset.anchor;
    // Fermer automatiquement le menu si on quitte la section "hero"
    if (activeSection !== "hero") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Attache l'événement de défilement
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Nettoie l'événement de défilement
    };
  }, []);
  return (
    <header className="header">
      <div className="header_content">
        <img src={mainLogo} alt="Logo" className="header_content-mainLogo" />

        <div
          className={`menu_icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={`menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#hero">
                Accueil
              </a>
            </li>
            <li>
              <a href="#about">
                Présentation
              </a>
            </li>
            <li>
              <a href="#pricing">
                Tarifs
              </a>
            </li>
            <li>
              <a href="#journey">
                Galerie
              </a>
            </li>
            <li>
              <a href="#faq">
                FAQ
              </a>
            </li>
            <li>
              <a href="#transformation">
                Transformation
              </a>
            </li>
            <li>
              <a href="#review">
                Avis
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
