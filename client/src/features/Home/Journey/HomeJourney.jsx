import "./HomeJourney.scss";
import JourneyCarrousel from "./Carrousel/JourneyCarrousel";

import useScrollAnimation from "../../Hooks/Animation/useScrollAnimation.jsx";
import { motion } from "framer-motion";

const HomeJourney = () => {
  const { ref, controls } = useScrollAnimation(0.5);

  return (
    <motion.section 
    className="section journey"
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={controls}
    transition={{ duration: 0.5 }}
    >
      <div className="journey_content">
        <h3>Êtes-vous prêt à dépasser vos limites?</h3>
        <p>Eux l&apos;ont fait ! Pourquoi pas vous ?</p>
      </div>
      <div className="journey_content-carrousel">
        <JourneyCarrousel />
      </div>
    </motion.section>
  );
};

export default HomeJourney;
