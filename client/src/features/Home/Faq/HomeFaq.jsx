import "./HomeFAQ.scss";
import FAQItems from "../../Shared/Components/Faq/FAQItems"; // Import du nouveau composant FAQItems
import useScrollAnimation from "../../Hooks/Animation/useScrollAnimation"; // Import du hook d'animation au scroll
import useAnimateChildren from "../../Hooks/Animation/useAnimateChildren"; // Import du hook pour les enfants animés
import AnimatedChildren from "../../Shared/Animation/AnimatedChildren"; // Import du composant AnimatedChildren
import { motion } from "framer-motion";
import faqImg from "/media/faq/faq_img-2.webp";

const HomeFAQ = () => {
  // Utilisation du hook pour l'animation principale de la section
  const { ref, controls: sectionControls } = useScrollAnimation(0.5);

  // Utilisation du hook pour l'animation des enfants
  const { controls: childrenControls, transition: childrenTransition } =
    useAnimateChildren(true);

  return (
    <motion.section
      className="faq"
      ref={ref} // Utilisation du ref pour déclencher l'animation au scroll
      initial={{ opacity: 0, y: 50 }}
      animate={sectionControls}
      transition={{ duration: 0.5 }}
    >
      <div className="faq_container">
        <AnimatedChildren
          controls={childrenControls}
          transition={childrenTransition}
        >
          <img src={faqImg} alt="" className="faq_img" />
          <div className="faq_bckgrd"></div>
          <div className="faq_content">
            <h3 className="faq_content-title">Questions Fréquentes</h3>
            <p className="faq_content-txt">
              Retrouvez ici les réponses aux questions les plus posées.
            </p>
          </div>

          <FAQItems />
        </AnimatedChildren>
      </div>
    </motion.section>
  );
};

export default HomeFAQ;
