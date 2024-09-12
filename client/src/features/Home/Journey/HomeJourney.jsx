import "./HomeJourney.scss";
import JourneyCarrousel from "./Carrousel/JourneyCarrousel";
import useScrollAnimation from "../../Hooks/Animation/useScrollAnimation"; // Import du hook d'animation au scroll
import useAnimateChildren from "../../Hooks/Animation/useAnimateChildren"; // Import du hook pour les enfants animés
import AnimatedChildren from "../../Shared/Animation/AnimatedChildren"; // Import du composant AnimatedChildren
import { motion } from "framer-motion";

const HomeJourney = () => {
    // Utilisation du hook pour l'animation principale de la section
    const { ref, controls: sectionControls } = useScrollAnimation(0.5);

    // Utilisation du hook pour l'animation des enfants
    const { controls: childrenControls, transition: childrenTransition } = useAnimateChildren(true);

    console.log("Section Controls:", sectionControls);
    console.log("Children Controls:", childrenControls);
    console.log("Children Transition:", childrenTransition);

    return (
        <motion.section
            className="section journey"
            ref={ref} // Utilisation du ref pour déclencher l'animation au scroll
            initial={{ opacity: 0, y: 50 }}
            animate={sectionControls}
            transition={{ duration: 0.5 }}
        >
            <div className="journey_content">
                <h3>Êtes-vous prêt à dépasser vos limites?</h3>
                <p>Eux l&apos;ont fait ! Pourquoi pas vous ?</p>

                {/* Section animée pour le carrousel */}
                <AnimatedChildren controls={childrenControls} transition={childrenTransition}>
                    <div className="journey_content-carrousel">
                        <JourneyCarrousel />
                    </div>
                </AnimatedChildren>
            </div>
        </motion.section>
    );
};

export default HomeJourney;
