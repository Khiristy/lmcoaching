import { useEffect, useState } from "react";
import {useLoader} from "../../../Hooks/Loader/useLoader";  // Utilise ton hook personnalisé
import LoaderLayout from "../MainLoader/LoaderLayout";
import Header from "../../../Home/Header/Header";
import Home from "../../../../pages/Home/Home";  // Assure-toi que l'import du composant Home est correct

const LoaderWrapper = () => {
  const { isLoading } = useLoader();  // Utilise le hook pour vérifier l'état de chargement
  const [startAnimation, setStartAnimation] = useState(false);

  // Simule un délai de 5 secondes pour démarrer l'animation du Header
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 5000);  // Début de l'animation après 5 secondes

    return () => clearTimeout(timer);  // Nettoie le timer pour éviter des fuites de mémoire
  }, []);

  return (
    <>
      {isLoading ? (
        <LoaderLayout isLoading={isLoading} />  // Affiche le loader si la page charge encore
      ) : (
        <>
          <Header startAnimation={startAnimation} />  {/* Affiche le Header avec l'animation */}
          <Home />  {/* Affiche le contenu de la page une fois le chargement terminé */}
        </>
      )}
    </>
  );
};

export default LoaderWrapper;
