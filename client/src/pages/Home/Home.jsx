// Home.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundAnimation from "../../features/Shared/Animation/BackgroundAnimation"; // Composant d'animation en fond
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

// Liste des sections à afficher
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
    setCurrentSection((prev) => (prev + 1) % sections.length); // Passe à la section suivante
  };

  const prevSection = () => {
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length); // Retourne à la section précédente
  };

  return (
    <div className="home">
      {/* Intégration de l'animation en arrière-plan */}
      <BackgroundAnimation />
      
      {/* Header avec les boutons de navigation */}
      <Header />
      
      {/* Transition animée entre les différentes sections */}
      <AnimatePresence mode="wait">
        <motion.div
          key={sections[currentSection].id} // Utilisation d'une clé unique pour chaque section
          className="section"
          initial={{ opacity: 0, y: "100vh" }} // Initialement en bas de l'écran
          animate={{ opacity: 1, y: 0 }} // Animation de montée
          exit={{ opacity: 0, y: "-100vh" }} // Sortie vers le haut de l'écran
          transition={{ duration: 0.8 }} // Durée de l'animation
        >
          {sections[currentSection].component} {/* Affiche la section actuelle */}
        </motion.div>
      </AnimatePresence>

      {/* Boutons de navigation pour changer de section */}
      <div className="navigation-buttons">
        <button onClick={prevSection}>Précédent</button>
        <button onClick={nextSection}>Suivant</button>
      </div>

      {/* Footer peut être ajouté ici */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
