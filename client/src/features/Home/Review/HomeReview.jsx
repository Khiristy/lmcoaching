import "./HomeReview.scss";
import ReviewCard from "../../Shared/Components/Review/ReviewCard.jsx"; // Import des composants enfants (cartes de témoignages)
import useScrollAnimation from "../../Hooks/Animation/useScrollAnimation.jsx"; // Import du hook d'animation au scroll
import useAnimateChildren from "../../Hooks/Animation/useAnimateChildren.jsx"; // Import du hook pour l'animation des enfants
import AnimatedChildren from "../../Shared/Animation/AnimatedChildren.jsx"; // Import du composant AnimatedChildren
import { motion } from "framer-motion";

const HomeReview = () => {
    // Utilisation du hook pour l'animation principale de la section
    const { ref, controls: sectionControls } = useScrollAnimation(0.5);

    // Utilisation du hook pour l'animation des enfants
    const { controls: childrenControls, transition: childrenTransition } = useAnimateChildren(true);

    return (
        <motion.section
            className="review review_layer"
            ref={ref} // Utilisation du ref pour déclencher l'animation au scroll
            initial={{ opacity: 0, y: 50 }}
            animate={sectionControls}
            transition={{ duration: 0.5 }}
        >
            <div className="review_-title">
                <h3>Témoignages de nos clients</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry&apos;s standard.
                </p>
            </div>

            {/* Section animée pour les cartes de témoignages */}
            <AnimatedChildren controls={childrenControls} transition={childrenTransition}>
                <div className="review_card_pos">
                    <ReviewCard />
                    <ReviewCard />
                </div>
            </AnimatedChildren>
        </motion.section>
    );
};

export default HomeReview;
