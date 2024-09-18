import PropTypes from "prop-types";
import "./Preloader.scss"; // Ajoute ici tes styles

const Preloader = ({ resourcesLoaded, totalResources, loadingTime }) => {
  const percentage = Math.round((resourcesLoaded / totalResources) * 100);
  const loadingTimeInSeconds = (loadingTime / 1000).toFixed(2); // Conversion en secondes

  return (
    <div className="preloader">
      <div className="spinner"></div>
      <p>Chargement en cours... {percentage}%</p>
      {loadingTime > 0 && (
        <p>Durée de chargement : {loadingTimeInSeconds} secondes</p>
      )}
    </div>
  );
};

// Validation des props avec PropTypes
Preloader.propTypes = {
  resourcesLoaded: PropTypes.number.isRequired, // Doit être un nombre, obligatoire
  totalResources: PropTypes.number.isRequired, // Doit être un nombre, obligatoire
  loadingTime: PropTypes.number.isRequired, // Durée de chargement en millisecondes
};

export default Preloader;
