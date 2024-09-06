import { useState } from 'react';
import './PersoCard.module.scss';
import PropTypes from 'prop-types';

const MAX_LENGTH = 150; // Nombre de caractères avant de tronquer le texte

const PersoCard = ({ title, icon, description }) => {
  const [isExpanded, setIsExpanded] = useState(false); // Gérer l'état du texte

  // Fonction pour basculer entre texte tronqué et complet
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="perso_card">
      <img src={icon} alt="" className="perso_card-img" />
      <h3>{title}</h3>
      <p>
        {isExpanded ? description : `${description.substring(0, MAX_LENGTH)}...`}
        {/* Afficher le bouton voir plus / moins selon l'état */}
        <button className="toggle-button" onClick={toggleText}>
          {isExpanded ? 'Voir moins' : 'Voir plus'}
        </button>
      </p>
    </div>
  );
};

PersoCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PersoCard;
