import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Faq from "./pages/Faq/Faq";
import Form from "./pages/Form/Form";
import Footer from "./features/Shared/Footer/Footer";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const App = () => {
  const [isFirstMount, setIsFirstMount] = useState(true);
  const location = useLocation();  // Just use useLocation for the current path

  useEffect(() => {
    setIsFirstMount(false);  // Update the state as needed without listen
  }, []);

  const PageWrapper = ({ children }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  };

  const AnimatedFooter = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 3 }}
      >
        <Footer />
      </motion.div>
    );
  };
  
  PageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<PageWrapper><Home isFirstMount={isFirstMount} /></PageWrapper>}
          />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/faq" element={<PageWrapper><Faq /></PageWrapper>} />
          <Route path="/form" element={<PageWrapper><Form /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      <AnimatedFooter />
    </>
  );
};

export default App;
