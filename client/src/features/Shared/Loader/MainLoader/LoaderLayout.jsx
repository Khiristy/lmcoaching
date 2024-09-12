import PropTypes from 'prop-types';

const LoaderLayout = ({ isLoading }) => {
  console.log('LoaderLayout - isLoading:', isLoading);

  if (!isLoading) return null;

  return (
    <div className="loader">
      {/* Images du loader */}
      <div className="loader-image loader-image-top">
        <img src="/media/top_image.png" alt="Top loader" />
      </div>
      <div className="loader-image loader-image-center">
        <img src="/media/center_image.png" alt="Center loader" />
      </div>
      <div className="loader-image loader-image-bottom">
        <img src="/media/bottom_image.png" alt="Bottom loader" />
      </div>
      {/* Logo et titre */}
      <div className="loader-content">
        <img src="/media/main_logo.png" alt="Logo" className="loader-logo" />
        <h1 className="loader-title">Mon Site</h1>
      </div>
    </div>
  );
};

LoaderLayout.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default LoaderLayout;
