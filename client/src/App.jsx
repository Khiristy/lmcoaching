import { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Form from "./pages/Form/Form";
import ParticlesComponent from "./features/Shared/Animation/ParticlesComponent";
import Preloader from './features/Shared/Components/Preloader/Preloader';
import { useResourceLoader } from './features/Hooks/useResourceLoader';

const App = () => {

  // Utilisation de useMemo pour éviter de redéfinir les ressources à chaque rendu
  const resources = useMemo(() => [
    { type: 'image', src: '/images/image1.jpg' },
    { type: 'image', src: '/images/image2.jpg' },

  ], []);

  // Utilisation du hook pour charger les ressources
  const { loading, resourcesLoaded, totalResources } = useResourceLoader(resources);

  if (loading) {
    return <Preloader resourcesLoaded={resourcesLoaded} totalResources={totalResources} />;
  }

  return (
    <>
      <ParticlesComponent id="particles-background" /> {/* Composant des particules */}
      <Routes location={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>À propos</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/faq" element={<div>FAQ</div>} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
};

export default App;
