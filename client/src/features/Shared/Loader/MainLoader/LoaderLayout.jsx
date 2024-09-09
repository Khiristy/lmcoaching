import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import LoaderBlock from "../LoaderBlock";
import LoaderImage from "../LoaderImage";
import MotionLoaderHero from "../LoaderHero";
import "./LoaderLayout.scss";

const LoaderLayout = ({ startAnimation }) => {
    const [readyToAnimate, setReadyToAnimate] = useState(false);
    const [animationEnded, setAnimationEnded] = useState(false); // Nouvel état pour suivre la fin de l'animation
  
    useEffect(() => {
      if (startAnimation) {
        console.log("StartAnimation received in LoaderLayout, starting internal animations...");
        
        setTimeout(() => {
          console.log("Setting readyToAnimate to true after delay.");
          setReadyToAnimate(true);
  
          setTimeout(() => {
            // Définir la fin de l'animation après le temps géré par LoaderWrapper
            setAnimationEnded(true);
            console.log("Animation ended, hiding loader.");
          }, 3000); // Le temps ici doit correspondre au temps de LoaderWrapper
        }, 500); // Ajoute un délai avant que l'animation ne démarre
      } else {
        console.log("startAnimation is false, LoaderLayout not starting.");
      }
    }, [startAnimation]);
  
    console.log("Rendering LoaderLayout with readyToAnimate:", readyToAnimate, "and animationEnded:", animationEnded);
  
    return (
      <div
        className="loader"
        style={{ display: animationEnded ? "none" : "block" }} // Appliquer display: none quand l'animation est terminée
      >
        <LoaderBlock
          className="loader-block-left"
          direction="left"
          startAnimation={readyToAnimate}
          delay={0}
        />
  
        <LoaderImage
          className="loader-image-right"
          src="/media/loader_img.png"
          direction="right"
          startAnimation={readyToAnimate}
          delay={0}
        />
  
        <LoaderImage
          className="loader-image-top"
          src="/media/slide_loader_top.png"
          direction="top"
          startAnimation={readyToAnimate}
          delay={0}
        />
  
        <LoaderImage
          className="loader-image-bottom"
          src="/media/slide_loader_bot.png"
          direction="bottom"
          startAnimation={readyToAnimate}
          delay={0}
        />
  
        <MotionLoaderHero
          className="loader-hero"
          direction="left"
          startAnimation={readyToAnimate}
        />
      </div>
    );
  };
  
  LoaderLayout.propTypes = {
    startAnimation: PropTypes.bool.isRequired,
  };
  
  export default LoaderLayout;