// LoaderWrapper.jsx
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Loader from "./Loader";

const LoaderWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false); // Pour gérer l'état de l'animation
  useEffect(() => {
    // Fonction de gestion du chargement
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => setLoaded(true), 2000000); // Déclencher l'animation après 200ms
      }, 2000000);
    };
    // Vérifie si la page est déjà complètement chargée
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      // Ajoute un listener sur l'événement `load` si la page n'est pas encore chargée
      window.addEventListener("load", handleLoad);
    }

    // Nettoyage de l'événement listener au cas où le composant se démonte
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={`content-wrapper ${loaded ? "loaded" : ""}`}>
      {children}
    </div>
  );
};

LoaderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoaderWrapper;
