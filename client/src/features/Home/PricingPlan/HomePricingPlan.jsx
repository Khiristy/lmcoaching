import "./HomePricingPlan.scss";
import { motion } from "framer-motion";
import PriceCardContainer from "../../Shared/Components/PriceCard/PriceCardContainer.jsx";
import useScrollAnimation from "../../Hooks/Animation/useScrollAnimation"; // Import du hook d'animation au scroll
import useAnimateChildren from "../../Hooks/Animation/useAnimateChildren"; // Import du hook pour les enfants animés
import AnimatedChildren from "../../Shared/Animation/AnimatedChildren"; // Import du composant AnimatedChildren

const HomePricingPlan = () => {
  // Utilisation du hook pour l'animation principale de la section
  const { ref, controls: sectionControls } = useScrollAnimation(0.5);

  // Utilisation du hook pour l'animation des enfants
  const { controls: childrenControls, transition: childrenTransition } =
    useAnimateChildren(true);

  return (
    <motion.section
      className="pricingPlan"
      ref={ref} // Utilisation du ref pour déclencher l'animation au scroll
      initial={{ opacity: 0, y: 0 }}
      animate={sectionControls}
      transition={{ duration: 0.5 }}
    >
      <div className="pricingPlan_content">
        <div className="pricingPLan_left">
          <h3 className="pricingPlan_left-title">Flexibilité et Simplicité</h3>
          <h4 className="pricingPlan_left-txt">
            Choisissez le plan qui vous convient et commencez dès
            aujourd&apos;hui. Que vous souhaitiez une expérience en ligne
            accessible partout, ou une option flexible qui s&apos;adapte à votre
            emploi du temps, nous avons ce qu&apos;il vous faut.
          </h4>
        </div>

        {/* Section animée pour les cartes */}
        <AnimatedChildren
          controls={childrenControls}
          transition={childrenTransition}
        >
          <PriceCardContainer className="price_card-layer" />
        </AnimatedChildren>
      </div>
    </motion.section>
  );
};

export default HomePricingPlan;
