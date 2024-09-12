import PropTypes from 'prop-types';

const LoaderLayout = ({ isLoading }) => {
  if (!isLoading) return null; // Si le chargement est terminé, ne rien afficher

  return (
    <div className="loader">
      {/* Image du haut */}
      <div className="loader-image loader-image-top">
        <img src="/media/top_image.png" alt="Top loader" />
      </div>

      {/* Image du milieu */}
      <div className="loader-image loader-image-center">
        <img src="/media/center_image.png" alt="Center loader" />
      </div>

      {/* Image du bas */}
      <div className="loader-image loader-image-bottom">
        <img src="/media/bottom_image.png" alt="Bottom loader" />
      </div>

      {/* Logo et Titre à gauche, superposés à l'image centrale */}
      <div className="loader-content">
        <img src="/media/main_logo.png" alt="Logo" className="loader-logo" />
        <h1 className="loader-title">Mon Site</h1>
      </div>
    </div>
  );
};

LoaderLayout.propTypes = {
  isLoading: PropTypes.bool.isRequired, // Le loader est affiché si isLoading est vrai
};

export default LoaderLayout;
