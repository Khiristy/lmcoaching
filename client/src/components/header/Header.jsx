import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.mainMenu}>
          <li>
            <Link to="/about">Qui suis-je ?</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/">
              <div className="mainLogo"></div>
            </Link>
          </li>
          <li>
            <Link to="/Faq">FAQ</Link>
          </li>
          <li>
            <Link to="/Resultats">Avant/Après</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
