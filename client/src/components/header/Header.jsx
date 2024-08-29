import { Link } from "react-router-dom";
import "./Header.module.scss";
import mainLogo from "/media/main_logo.png";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="main_menu">
        <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">Qui suis-je ?</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
         
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/result">Avant/Après</Link>
          </li>
        </ul>
      </nav>
      <img src={mainLogo} alt="" className="header-main_logo" />
      <a href="#" className="btn_header">Réserver maintenant !</a>
    </header>
  );
};

export default Header;
