import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Créer le contexte pour le chargement
export const LoadingContext = createContext();  // Exporter le contexte ici

// Provider pour gérer et distribuer l'état de chargement
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Changer l'état de chargement après 5 secondes
    }, 5000);

    return () => clearTimeout(timer); // Nettoyage du timer
  }, []);

  return (
    <LoadingContext.Provider value={isLoading}>  
    {children}
    </LoadingContext.Provider>
  );
};

LoadingProvider.propTypes = {
  children: PropTypes.node.isRequired, // Valider que le prop children est fourni
};
