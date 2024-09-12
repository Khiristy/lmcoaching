import "./HomeTransformation.scss";
import TransformationCard from "../../Shared/Components/Transformation/TransformationCard.jsx";
import VersusLogo from "/media/transformation/versus_logo.jpg";

import useScrollAnimation from "../../Hooks/Animation/useScrollAnimation.jsx";
import { motion } from "framer-motion";

const HomeTransformation = () => {
  const { ref, controls } = useScrollAnimation(0.5);

  return (
    <motion.section
      className="transformation"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <h3 className="transformation-title">TRANSFORMATIONS</h3>
      <div className="transformation-layer">
        <TransformationCard />
        <img src={VersusLogo} alt="" className="versus_logo" />
      </div>
    </motion.section>
  );
};

export default HomeTransformation;
