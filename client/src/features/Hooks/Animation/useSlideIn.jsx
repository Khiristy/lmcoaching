import { useAnimation } from "framer-motion";


export const useSlideIn = (direction = "right", delay = 0, duration = 0.8) => {
  const controls = useAnimation();
  let xInitial;

  switch (direction) {
    case "left":
      xInitial = -300;
      break;
    case "right":
    default:
      xInitial = 300;
      break;
  }

  const slideVariants = {
    hidden: { opacity: 0, x: xInitial }, // Glissement initial en fonction de la direction
    visible: { opacity: 1, x: 0, transition: { delay, duration, ease: "easeOut" } }
  };

  return { controls, slideVariants };
};
