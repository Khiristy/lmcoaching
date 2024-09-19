import { useState } from 'react';
import './MenuOverlay.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

const MenuOverlay = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container">
      <div className={`menu_overlay ${menuOpen ? 'open' : ''}`}>
        <FontAwesomeIcon icon={faTimes} className="fas" onClick={toggleMenu} />
        <ul className="list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div className="menu">
        <FontAwesomeIcon icon={faBars} className="fas" onClick={toggleMenu} />
      </div>
    </div>
  );
};

export default MenuOverlay;
