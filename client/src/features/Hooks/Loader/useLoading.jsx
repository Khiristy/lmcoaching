import { useContext } from 'react';
import { LoadingContext } from '../../Utils/contexts/LoadingProvider';  // Importer le contexte

console.log("useLoading.jsx loaded");

export const useLoading = () => {
  console.log("useLoading hook appelé");
  return useContext(LoadingContext);  // Utiliser le contexte pour récupérer isLoading
};
