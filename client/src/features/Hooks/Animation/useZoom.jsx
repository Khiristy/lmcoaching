// import { useAnimation } from 'framer-motion';
// import { useEffect } from 'react';

// const useZoom = (startScale = 0.8, endScale = 1, duration = 0.5) => {
//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start({
//       scale: endScale, // Définit la fin de l'animation
//       transition: { duration }
//     });

//     return () => {
//       controls.stop(); // Arrête l'animation lors du démontage
//     };
//   }, [controls, endScale, duration]);

//   return controls;
// };

// export default useZoom;



// // import { motion } from 'framer-motion';
// // import useZoom from './useZoom';

// // const ZoomComponent = () => {
// //   const controls = useZoom(0.8, 1);

// //   return (
// //     <motion.div
// //       initial={{ scale: 0.8 }} // Définir `startScale` comme valeur initiale
// //       animate={controls}       // Utiliser les contrôles du hook
// //     >
// //       <h1>Zoom Animation</h1>
// //     </motion.div>
// //   );
// // };

// // export default ZoomComponent;