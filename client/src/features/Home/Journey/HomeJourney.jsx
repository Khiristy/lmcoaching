import "./HomeJourney.scss";
import JourneyCarrousel from "./Carrousel/JourneyCarrousel";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../Hooks/Animation/useScrollAnimation"; // Assurez-vous que ce hook existe ou remplacez-le par un autre

const HomeJourney = () => {
  // Utiliser le hook pour détecter quand la section devient visible
  const { isVisible, elementRef } = useScrollAnimation(0.2); 

  return (
    <motion.section
      className="journey"
      ref={elementRef} // Attacher la référence pour l'observer
      initial={{ opacity: 0, y: 100 }} // Commence avec opacité 0 et en bas de l'écran
      animate={isVisible ? { opacity: 1, y: 0 } : {}} // Anime lorsque visible
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="journey_content">
        <h3>Êtes-vous prêt à dépasser vos limites?</h3>
        <p>Eux l&apos;ont fait ! Pourquoi pas vous ?</p>

        <div className="journey_content-carrousel">
          <JourneyCarrousel />
        </div>
      </div>
    </motion.section>
  );
};

export default HomeJourney;
