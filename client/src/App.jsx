import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { stopLoading } from './redux/Slices/loadingSlice';
import Loader from './features/Shared/Loader/Loader';
// import Home from './pages/Home/Home';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(stopLoading()); // Arrête le chargement après 3 secondes
    }, 3000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <>
      <Loader /> {/* Le loader est affiché ici */}
      <AnimatePresence mode="wait">
        <Routes location={location.pathname}>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/about" element={<div>À propos</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/faq" element={<div>FAQ</div>} />
          <Route path="/form" element={<div>Formulaire</div>} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
