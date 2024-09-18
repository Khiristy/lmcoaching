import { motion } from "framer-motion";
import Header from "../../features/Home/Header/Header";
import HomeHero from "../../features/Home/Hero/HomeHero";
import HomeAbout from "../../features/Home/About/HomeAbout";
import HomePricingPlan from "../../features/Home/PricingPlan/HomePricingPlan";
import HomeJourney from "../../features/Home/Journey/HomeJourney";
import HomeFaq from "../../features/Home/Faq/HomeFaq";
import HomeTransformation from "../../features/Home/Transformation/HomeTransformation";
import HomeReview from "../../features/Home/Review/HomeReview";
import { useScrollSections } from "../../features/Hooks/Animation/useScrollSections";
import { getSectionAnimation } from "../../features/Shared/Utils/getSectionAnimation";
import "./Home.scss";

const Home = () => {
  const { sectionRefs, activeIndex, scrollToSection } = useScrollSections(7); // 7 sections

  // Tableau de sections pour éviter la répétition
  const sections = [
    { id: "hero", component: <HomeHero />, ref: sectionRefs.current[0] },
    { id: "about", component: <HomeAbout />, ref: sectionRefs.current[1] },
    { id: "pricing", component: <HomePricingPlan />, ref: sectionRefs.current[2] },
    { id: "journey", component: <HomeJourney />, ref: sectionRefs.current[3] },
    { id: "faq", component: <HomeFaq />, ref: sectionRefs.current[4] },
    { id: "transformation", component: <HomeTransformation />, ref: sectionRefs.current[5] },
    { id: "review", component: <HomeReview />, ref: sectionRefs.current[6] },
  ];

  return (
    <div className="home">
      {/* Ajoutez des boutons dans le Header pour scroller vers chaque section */}
      <Header
        scrollToSection={scrollToSection}
        refs={{
          heroRef: sectionRefs.current[0],
          aboutRef: sectionRefs.current[1],
          pricingRef: sectionRefs.current[2],
          journeyRef: sectionRefs.current[3],
          faqRef: sectionRefs.current[4],
          transformationRef: sectionRefs.current[5],
          reviewRef: sectionRefs.current[6],
        }}
      />

      {/* Boucle sur les sections pour éviter la répétition */}
      {sections.map((section, index) => (
        <motion.div
          key={section.id}
          id={section.id}
          ref={section.ref}
          {...getSectionAnimation(activeIndex, index)} // Utilisation de l'utilitaire pour l'animation
          className="section" // Chaque section a déjà une hauteur 100vh via la classe CSS
        >
          {section.component}
        </motion.div>
      ))}
    </div>
  );
};

export default Home;
