import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Créer le contexte
const LoaderContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsPageLoaded(true);
    };

    window.addEventListener("load", handleLoad);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <LoaderContext.Provider value={{ isLoading, isPageLoaded }}>
      {children}
    </LoaderContext.Provider>
  );
};

LoadingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LoaderContext };
