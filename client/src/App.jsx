import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
// import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Faq from "./pages/Faq/Faq";
import Form from "./pages/Form/Form";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import LoaderWrapper from "./features/Shared/Loader/MainLoader/LoaderWrapper"; // Assure-toi que le chemin est correct
import PropTypes from "prop-types";
import { LoadingProvider } from "./features/Shared/Utils/contexts/LoadingProvider"; // Assurez-vous que le chemin est correct
const App = () => {
  const [isFirstMount, setIsFirstMount] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsFirstMount(false); // Cela met à jour l'état après le premier rendu
  }, []);

  const PageWrapper = ({ children }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );

  PageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <Provider store={store}>
      <LoadingProvider>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  {isFirstMount ? (
                    <div>Chargement initial...</div> // Affiche un contenu spécial au premier rendu
                  ) : (
                    <LoaderWrapper /> // Affiche le LoaderWrapper après le premier rendu
                  )}
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              }
            />
            <Route
              path="/faq"
              element={
                <PageWrapper>
                  <Faq />
                </PageWrapper>
              }
            />
            <Route
              path="/form"
              element={
                <PageWrapper>
                  <Form />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </LoadingProvider>
    </Provider>
  );
};

export default App;
