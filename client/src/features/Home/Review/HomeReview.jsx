import "./HomeReview.scss";
import ReviewCard from "../../Shared/Components/Review/ReviewCard.jsx";

import useScrollAnimation from "../../Hooks/Animation/useScrollAnimation.jsx";
import { motion } from "framer-motion";


const HomeReview = () => {
  const { ref, controls } = useScrollAnimation(0.5);

  return (
    <motion.section className="section review_section"
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={controls}
    transition={{ duration: 0.5 }}
    >
      <div className="review_section-title">
        <h3>Témoinages de nos clients</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys
        </p>
      </div>
      <div className="review_section-card_pos">
        <ReviewCard />
        <ReviewCard />
      </div>
    </motion.section>
  );
};

export default HomeReview;
