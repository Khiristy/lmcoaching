import { useTransform, useScroll } from 'framer-motion';

const useParallax = (start = 0, end = -100) => {
  const { scrollY } = useScroll(); // Capture du défilement vertical
  const y = useTransform(scrollY, [0, 500], [start, end]); // Applique un déplacement en fonction du défilement

  return y; // Retourne la valeur `y` qui pourra être appliquée à un élément
};

export default useParallax;



// import { motion } from 'framer-motion';
// import useParallax from './useParallax';

// const ParallaxComponent = () => {
//   const y = useParallax(0, -100);

//   return (
//     <motion.div style={{ y }}>
//       <img src="parallax-image.jpg" alt="Parallaxe" />
//     </motion.div>
//   );
// };

// export default ParallaxComponent;