import { useEffect, useState } from 'react';
import LoaderBlock from '../LoaderBlock';
import LoaderImage from '../LoaderImage';
import PropTypes from 'prop-types';
import './MainLoader.scss';

const Loader = ({ startAnimation }) => {
  const [readyToAnimate, setReadyToAnimate] = useState(false);

  useEffect(() => {
    if (startAnimation) {
      console.log("Déclenchement de l'animation !");
      setTimeout(() => {
        setReadyToAnimate(true);
        console.log("readyToAnimate:", true);
      }, 500); // Délai avant que l'animation ne démarre
    }
  }, [startAnimation]);
  
  return (
    <div className="loader">
      <LoaderBlock
        className="loader-block-left"
        direction="left"
        startAnimation={readyToAnimate}
        delay={1} // Animation des blocs démarre après 0.5s
      />
  
      {/* Image de fond */}
      <LoaderImage
        className="loader-image-right"
        src="/media/loader_img.png"
        direction="right"
        startAnimation={readyToAnimate}
        delay={1} // L'image démarre immédiatement
      />
  
      {/* Slider du haut */}
      <LoaderImage
        className="loader-image-top"
        src="/media/slide_loader_top.png"
        direction="top"
        startAnimation={readyToAnimate}
        delay={0} // L'image démarre immédiatement
      />
  
      {/* Slider du bas */}
      <LoaderImage
        className="loader-image-bottom"
        src="/media/slide_loader_bot.png"
        direction="bottom"
        startAnimation={readyToAnimate}
        delay={0} // L'image démarre immédiatement
      />
    </div>
  );
};

// Validation des PropTypes
Loader.propTypes = {
  startAnimation: PropTypes.bool.isRequired,  // Validation du booléen requis
};

export default Loader;
