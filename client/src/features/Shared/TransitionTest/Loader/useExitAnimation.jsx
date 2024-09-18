// import { useEffect, useState } from "react";

// // Hook pour gérer l'animation de sortie
// const useExitAnimation = (globalAnimationTimer) => {
//   const [isOut, setIsOut] = useState(false);

//   useEffect(() => {
//     const exitTimer = setTimeout(() => {
//       setIsOut(true); // Déclencher l'animation de sortie
//     }, globalAnimationTimer); // Utilisation du globalAnimationTimer

//     return () => clearTimeout(exitTimer); // Nettoyer le timer
//   }, [globalAnimationTimer]);

//   return isOut;
// };

// export default useExitAnimation;
