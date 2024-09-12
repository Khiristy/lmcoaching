import "./HomeFaq.scss";
import CollapsibleFaq from "../../Shared/Components/Faq/CollapsibleFaqLayer.jsx";
import faqImg from "/media/faq/faq_img.webp";

import useScrollAnimation from "../../Hooks/Animation/useScrollAnimation.jsx";
import { motion } from "framer-motion";

const HomeFaq = () => {
  const { ref, controls } = useScrollAnimation(0.5);

  return (
    <motion.section
      className="section faq"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <img src={faqImg} alt="" className="faq_img" />
      <div className="faq_content">
        <h3>FAQ</h3>
        <div className="faq_content-collapsible">
          <CollapsibleFaq />
        </div>
      </div>
    </motion.section>
  );
};

export default HomeFaq;
