import "./HomePricingPlan.scss";
import PriceCardLayer from "../../Shared/PriceCardComponents/PriceCardContainer.jsx";
import MainBtn from "../../Shared/Buttons/MainBtn/MainBtn.jsx";
import Transition from "../../Form/TransitionPricing/TransitionPricing.jsx";

import useScrollAnimation from "../../Hooks/Animation/useScrollAnimation.jsx";
import { motion } from "framer-motion";

const HomePricingPlan = () => {
  const { ref, controls } = useScrollAnimation(0.5);

  return (
    <motion.section
      className="section pricing_plan_section"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <div className="pricing_plan_section-left">
        <h3>Flexibilité et Simplicité</h3>
        <h4>
          Choisissez le plan qui vous convient et commencez dès
          aujourd&apos;hui. Que vous souhaitiez une expérience en ligne
          accessible partout, ou une option flexible qui s&apos;adapte à votre
          emploi du temps, nous avons ce qu&apos;il vous faut.
        </h4>
        <MainBtn text="Voir toutes nos offres !" href={Transition} />
      </div>
      <PriceCardLayer />
    </motion.section>
  );
};

export default HomePricingPlan;
