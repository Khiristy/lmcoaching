import "./HomeTransformation.scss";
import TransformationCard from "../../Shared/Components/Transformation/TransformationCard.jsx"; // Composant enfant
import VersusLogo from "/media/transformation/versus_logo.jpg"; // Logo Versus
import useScrollAnimation from "../../Hooks/Animation/useScrollAnimation"; // Hook d'animation pour la section principale
import useAnimateChildren from "../../Hooks/Animation/useAnimateChildren"; // Hook d'animation pour les enfants
import AnimatedChildren from "../../Shared/Animation/AnimatedChildren"; // Composant pour gérer les animations des enfants
import { motion } from "framer-motion";

const HomeTransformation = () => {
    // Utilisation du hook pour l'animation principale de la section
    const { ref, controls: sectionControls } = useScrollAnimation(0.5);

    // Utilisation du hook pour l'animation des enfants
    const { controls: childrenControls, transition: childrenTransition } = useAnimateChildren(true);

    return (
        <motion.section
            className="transformation transformation_layer"
            ref={ref} // Utilisation du ref pour déclencher l'animation au scroll
            initial={{ opacity: 0, y: 50 }}
            animate={sectionControls}
            transition={{ duration: 0.5 }}
        >
            <h3 className="transformation-title">TRANSFORMATIONS</h3>
            <AnimatedChildren controls={childrenControls} transition={childrenTransition}>
                <div className="transformation-container">
                    <TransformationCard />
                    <img src={VersusLogo} alt="Versus" className="versus_logo" />
                </div>
            </AnimatedChildren>
        </motion.section>
    );
};

export default HomeTransformation;
