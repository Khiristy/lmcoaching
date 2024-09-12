import LoaderLayout from './LoaderLayout';
import Home from './Home';
import { useLoading } from '../../../Utils/contexts/LoadingProvider'; 

const LoaderWrapper = () => {
  const isLoading  = useLoading(); // 5 secondes minimum pour le loader

  console.log("LoaderWrapper - isLoading:", isLoading); // Log pour vérifier isLoading

  return (
      <>
          {isLoading  ? (
              <LoaderLayout isLoading={isLoading} /> // Transmettre isLoading à LoaderLayout
          ) : (
              <Home isLoading={isLoading} /> // Transmettre isLoading à Home
          )}
      </>
  );
};

export default LoaderWrapper;