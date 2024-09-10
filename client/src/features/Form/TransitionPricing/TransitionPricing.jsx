import "./TransitionPricing.scss";
import { motion } from "framer-motion";

import transistionImg from "/media/transition_pricing.webp";



const TransitionPricing = () => {
  return (
    <motion.div className="transition">
      <img src={transistionImg} alt="" className="transition_img" />
      <span className="transition_txt">C&apos;est parti !</span>
    </motion.div>
  );
};

export default TransitionPricing;
