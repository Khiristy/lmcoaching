import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const useFade = (initialOpacity = 0, finalOpacity = 1, duration = 1) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: [initialOpacity, finalOpacity],
      transition: { duration }
    });

    return () => {
      controls.stop();
    };
  }, [controls, initialOpacity, finalOpacity, duration]);

  return controls;
};

export default useFade;

// import { motion } from 'framer-motion';
// import useFade from './useFade';

// const FadeComponent = () => {
//   const controls = useFade(0, 1);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={controls}
//     >
//       <p>Contenu avec animation de fondu</p>
//     </motion.div>
//   );
// };

// export default FadeComponent;
