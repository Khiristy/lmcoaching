import LoaderLayout from './LoaderLayout';
import Home from './Home'; // Composant de la page principale
import useLoader from './hooks/useLoader'; // Import du hook personnalisé

const LoaderWrapper = () => {
  const { isLoading, isPageLoaded } = useLoader(50000); // 5 secondes minimum pour le loader

  return (
    <>
      <LoaderLayout isLoading={isLoading || !isPageLoaded} />
      {!isLoading && isPageLoaded && <Home />} 
    </>
  );
};

export default LoaderWrapper;
