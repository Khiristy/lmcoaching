
// import { motion } from 'framer-motion';
// import PropTypes from 'prop-types';

// const LoadingScreen = ({ loaded }) => {
//   console.log('LoadingScreen rendu avec loaded:', loaded);  // Log pour vérifier la réception de `loaded`

//   return (
//     <div className="loader">
//       {typeof loaded !== 'undefined' && (  // Protection contre `undefined`
//         <motion.div
//           className="loader-block block-left"
//           initial={{ x: 0 }}
//           animate={loaded ? { x: '100vw' } : { x: 0 }}
//           transition={{ duration: 1 }}
//           style={{ width: '100px', height: '100px', backgroundColor: 'red' }}
//         >
//           Left Block
//         </motion.div>
//       )}
//     </div>
//   );
// };

// // Ajout de la validation des PropTypes
// LoadingScreen.propTypes = {
//   loaded: PropTypes.bool.isRequired,
// };

// export default LoadingScreen;