import Header from "../../features/Home/Header/Header";
import HomeHero from "../../features/Home/Hero/HomeHero";
import HomeAbout from "../../features/Home/About/HomeAbout";
import HomePricingPlan from "../../features/Home/PricingPlan/HomePricingPlan";
import HomeJourney from "../../features/Home/Journey/HomeJourney";
import HomeFaq from "../../features/Home/Faq/HomeFaq";
import HomeTransformation from "../../features/Home/Transformation/HomeTransformation";
import HomeReview from "../../features/Home/Review/HomeReview";
import { motion } from "framer-motion";
import ReactFullpage from "@fullpage/react-fullpage"; // Import React FullPage
import "fullpage.js/dist/fullpage.css";

import "./Home.scss";

const Home = () => {
  return (
    <ReactFullpage
      licenseKey={"MVJ7H-WNQ18-VIM07-MP547-NMJVM"}
      scrollingSpeed={1200} // Vitesse de défilement
      anchors={[
        "hero",
        "about",
        "pricing",
        "journey",
        "faq",
        "transformation",
        "review",
      ]}
      navigation
      autoScrolling={true}
      fitToSection={true}
      scrollHorizontally={false}
      scrollBar={false}
      scrollOverflow={false} // Désactive la gestion du débordement
      render={() => {
        return (
          <div>
            <div id="Header">
              <Header />
            </div>
            <div className="section" data-anchor="hero">
              {/* Animation de la section HomeHero */}
              <motion.div
                initial={{ opacity: 0, y: 50 }} // Commence avec une opacité à 0 et 50px en dessous
                whileInView={{ opacity: 1, y: 0 }} // Passe à l'opacité complète et y=0 quand visible
                transition={{ duration: 2 }} // Durée de l'animation
              >
                <HomeHero />
              </motion.div>
            </div>
            <div className="section" data-anchor="about">
              {/* Animation de la section HomeAbout */}
              <motion.div
                initial={{ opacity: 0, x: -100 }} // Translation depuis la gauche
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                <HomeAbout />
              </motion.div>
            </div>
            <div className="section" data-anchor="pricing">
              {/* Animation de la section HomePricingPlan */}
              <motion.div
                initial={{ opacity: 0, x: 100 }} // Translation depuis la droite
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                <HomePricingPlan />
              </motion.div>
            </div>
            <div className="section" data-anchor="journey">
              {/* Animation de la section HomeJourney */}
              <motion.div
                initial={{ opacity: 0, y: -50 }} // Translation depuis le haut
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
              >
                <HomeJourney />
              </motion.div>
            </div>
            <div className="section" data-anchor="faq">
              {/* Animation de la section HomeFaq */}
              <motion.div
                initial={{ opacity: 0, y: 50 }} // Translation depuis le bas
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
              >
                <HomeFaq />
              </motion.div>
            </div>
            <div className="section" data-anchor="transformation">
              {/* Animation de la section HomeTransformation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }} // Effet de mise à l'échelle
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
              >
                <HomeTransformation />
              </motion.div> {/* <-- Balise de fermeture ajoutée */}
            </div>
            <div className="section" data-anchor="review">
              <motion.div>
                <HomeReview />
              </motion.div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default Home;
