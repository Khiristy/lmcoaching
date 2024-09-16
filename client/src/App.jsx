import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux"; // Import Redux hooks
import { stopLoading } from "./redux/Slices/loadingSlice"; // Import de l'action Redux
import Loader from "./features/Shared/Loader/Loader"; // Loader
import Home from "./pages/Home/Home"
import Form from "./pages/Form/Form"

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoading = useSelector((state) => state.loading.isLoading); // Sélection de l'état de chargement

  useEffect(() => {
    // Simule l'arrêt du chargement après 3 secondes
    const timer = setTimeout(() => {
      dispatch(stopLoading()); // Dispatch l'action pour arrêter le chargement
    }, 90000);

    return () => clearTimeout(timer); // Nettoie le timer
  }, [dispatch]);

  return (
    <>
      {/* Le loader s'affiche uniquement si isLoading est true */}
      {isLoading && <Loader />}
      
      {/* Affiche le contenu des routes après le chargement */}
      <AnimatePresence mode="wait">
        {!isLoading && ( // Les routes ne sont rendues qu'après la fin du chargement
          <Routes location={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div>À propos</div>} />
            <Route path="/contact" element={<div>Contact</div>} />
            <Route path="/faq" element={<div>FAQ</div>} />
            <Route path="/form" element={<Form />} />
          </Routes>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
