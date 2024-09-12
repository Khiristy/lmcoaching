import "./HomePricingPlan.scss";
import { motion } from "framer-motion";
import PriceCardContainer from "../../Shared/Components/PriceCard/PriceCardContainer.jsx";
import MainBtn from "../../Shared/Buttons/MainBtn/MainBtn.jsx";
import Transition from "../../Form/TransitionPricing/TransitionPricing.jsx";
import useScrollAnimation from "../../Hooks/Animation/useScrollAnimation"; // Import du hook d'animation au scroll
import useAnimateChildren from "../../Hooks/Animation/useAnimateChildren"; // Import du hook pour les enfants animés
import AnimatedChildren from "../../Shared/Animation/AnimatedChildren"; // Import du composant AnimatedChildren

const HomePricingPlan = () => {
    // Utilisation du hook pour l'animation principale de la section
    const { ref, controls: sectionControls } = useScrollAnimation(0.5);

    // Utilisation du hook pour l'animation des enfants
    const { controls: childrenControls, transition: childrenTransition } = useAnimateChildren(true);

    console.log("Section Controls:", sectionControls);
    console.log("Children Controls:", childrenControls);
    console.log("Children Transition:", childrenTransition);

    return (
        <motion.section
            className="section pricing_plan_section"
            ref={ref} // Utilisation du ref pour déclencher l'animation au scroll
            initial={{ opacity: 0, y: 50 }}
            animate={sectionControls}
            transition={{ duration: 0.5 }}
        >
            <div className="pricing_plan_section-left">
                <h3>Flexibilité et Simplicité</h3>
                <h4>
                    Choisissez le plan qui vous convient et commencez dès aujourd&apos;hui. Que vous souhaitiez une expérience en ligne accessible partout, ou une option flexible qui s&apos;adapte à votre emploi du temps, nous avons ce qu&apos;il vous faut.
                </h4>
                <MainBtn text="Voir toutes nos offres !" href={Transition} />
            </div>

            {/* Section animée pour les cartes */}
            <AnimatedChildren controls={childrenControls} transition={childrenTransition}>
                <PriceCardContainer />
            </AnimatedChildren>
        </motion.section>
    );
};

export default HomePricingPlan;
