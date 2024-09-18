import PropTypes from "prop-types";
import "./Preloader.scss"; // Ajoute ici tes styles

const Preloader = ({ resourcesLoaded, totalResources}) => {
  const percentage = Math.round((resourcesLoaded / totalResources) * 100);

  return (
    <div className="preloader">
      <div className="spinner"></div>
      <p>Chargement en cours... {percentage}%</p>

    </div>
  );
};

// Validation des props avec PropTypes
Preloader.propTypes = {
  resourcesLoaded: PropTypes.number.isRequired, // Doit être un nombre, obligatoire
  totalResources: PropTypes.number.isRequired, // Doit être un nombre, obligatoire

};

export default Preloader;
