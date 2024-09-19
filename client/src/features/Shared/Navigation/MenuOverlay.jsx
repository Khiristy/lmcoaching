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
      <img src={mainLogo} alt="" className="nav_logo" />
      <div className={`nav_overlay ${navOpen ? "open" : ""}`}>
        <FontAwesomeIcon icon={faTimes} className="fas" onClick={toggleNav} />
        <ul className="list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
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
