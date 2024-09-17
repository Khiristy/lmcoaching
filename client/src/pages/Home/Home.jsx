// Home.js
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../features/Home/Header/Header";
import HomeHero from "../../features/Home/Hero/HomeHero";
import HomePersoCard from "../../features/Home/PersoCard/HomePersoCard";
import HomePricingPlan from "../../features/Home/PricingPlan/HomePricingPlan";
import HomeJourney from "../../features/Home/Journey/HomeJourney";
import HomeFaq from "../../features/Home/Faq/HomeFaq";
import HomeTransformation from "../../features/Home/Transformation/HomeTransformation";
import HomeReview from "../../features/Home/Review/HomeReview";
// import Footer from "../../features/Home/Footer/Footer";
import "./Home.scss";

const sections = [
  { id: "hero", component: <HomeHero /> },
  { id: "persoCard", component: <HomePersoCard /> },
  { id: "pricing", component: <HomePricingPlan /> },
  { id: "journey", component: <HomeJourney /> },
  { id: "faq", component: <HomeFaq /> },
  { id: "transformation", component: <HomeTransformation /> },
  { id: "review", component: <HomeReview /> },
];

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length); // passe à la section suivante
  };

  const prevSection = () => {
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length); // retourne à la section précédente
  };

  return (
    <div className="home">
      <Header />
      <AnimatePresence mode="wait">
        {" "}
        {/* Utilisation de mode="wait" */}
        <motion.div
          key={sections[currentSection].id}
          className="section"
          initial={{ opacity: 0, y: "100vh" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100vh" }}
          transition={{ duration: 0.8 }}
        >
          {sections[currentSection].component}
        </motion.div>
      </AnimatePresence>

      {/* <div className="navigation-buttons">
        <button onClick={prevSection}>Précédent</button>
        <button onClick={nextSection}>Suivant</button>
      </div> */}

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
