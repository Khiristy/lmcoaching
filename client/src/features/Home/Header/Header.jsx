import mainLogo from "/media/logo_test.png";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header_content">
      <a href="#">
        <img src={mainLogo} alt="logo principal" className="nav_logo" />
      </a>

        {/* <div
          className={`menu_icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div> */}
        <nav className="menu">
          <ul>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
