import { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Form from "./pages/Form/Form";
import ParticlesComponent from "./features/Shared/Animation/ParticlesComponent";
import Preloader from "./features/Shared/Components/Preloader/Preloader";
import { useResourceLoader } from "./features/Hooks/useResourceLoader";
import MenuOverlay from "./features/Shared/Navigation/MenuOverlay";
const App = () => {
  // Utilisation de useMemo pour éviter de redéfinir les ressources à chaque rendu
  const resources = useMemo(
    () => [
      { type: "image", src: "/images/image1.jpg" },
      { type: "image", src: "/images/image2.jpg" },
    ],
    []
  );

  // Utilisation du hook pour charger les ressources
  const { loading, resourcesLoaded, totalResources } =
    useResourceLoader(resources);

  if (loading) {
    return (
      <Preloader
        resourcesLoaded={resourcesLoaded}
        totalResources={totalResources}
      />
    );
  }

  return (
    <>
      <ParticlesComponent id="particles-background" />{" "}
      <MenuOverlay />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />{" "}
      </Routes>
    </>
  );
};

export default App;
