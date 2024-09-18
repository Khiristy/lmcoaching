// import "./Loader.scss";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux"; // Redux hooks
// import Hero from "../../Home/Hero/HomeHero";

// import useFadeInAnimation from "../../Hooks/Loader/useFadeInAnimation";
// import useExitAnimation from "../../Hooks/Loader/useExitAnimation";
// import { stopLoading, setHomeLoaded } from "../../../redux/Slices/loadingSlice";

// // Déclarer les variables de durée globales
// const globalAnimationTimer = 5000;
// const fadeAnimationTimer = 2;
// const exitAnimationTimer = 2.5;
// const heroAnimationTimer = 3;
// const heroAnimationDelay = 0.3;

// const createAnimationVariant = (x, y, delay = 0.5, exit = true) => ({
//   opacity: exit ? 0 : 1,
//   x: x || "0",
//   y: y || "0",
//   transition: { duration: exitAnimationTimer, delay },
// });

// const Loader = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isVisible = useFadeInAnimation(fadeAnimationTimer);
//   const isOut = useExitAnimation(globalAnimationTimer);
//   const isHomeLoaded = useSelector((state) => state.loading.isHomeLoaded); // Sélecteur Redux

//   const [startHeroAnimation, setStartHeroAnimation] = useState(false);

//   useEffect(() => {
//     if (isOut) {
//       setStartHeroAnimation(true);
//     }
//   }, [isOut]);

//   // Charger la page Home pendant le loader
//   useEffect(() => {
//     const loadHome = async () => {
//       await new Promise((resolve) => {
//         setTimeout(() => {
//           dispatch(setHomeLoaded()); // Indique que la page Home est chargée
//           resolve();
//         }, 2000); // Simule un chargement asynchrone (2 secondes)
//       });
//     };
//     loadHome();
//   }, [dispatch]);

//   // Lorsque le loader est terminé, arrêter le chargement et rediriger vers Home
//   useEffect(() => {
//     if (startHeroAnimation && isHomeLoaded) {
//       const timer = setTimeout(() => {
//         dispatch(stopLoading()); // Arrête l'état de chargement
//         navigate("/"); // Redirection vers la page Home
//       }, heroAnimationTimer * 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [startHeroAnimation, isHomeLoaded, navigate, dispatch]);

//   const variants = {
//     initial: { opacity: 0 },
//     enter: { opacity: 1, transition: { duration: fadeAnimationTimer } },
//     exitLeft: createAnimationVariant("-100vw"),
//     exitRight: createAnimationVariant("100vw"),
//     exitUp: createAnimationVariant("-30vw", "-100vh"),
//     exitDown: createAnimationVariant("30vw", "100vh"),
//     enterLeft: {
//       opacity: 1,
//       x: "0",
//       transition: {
//         duration: heroAnimationTimer,
//         delay: heroAnimationDelay,
//       },
//     },
//     initialHero: {
//       opacity: 0,
//       x: "-100vw",
//       transition: {
//         duration: heroAnimationTimer,
//         delay: heroAnimationDelay,
//       },
//     },
//   };

//   const renderMotionImage = (src, alt, className, exitVariant) => (
//     <motion.img
//       src={src}
//       alt={alt}
//       className={className}
//       variants={variants}
//       initial="initial"
//       animate={isOut ? exitVariant : "enter"}
//     />
//   );

//   return (
//     <motion.div
//       className="loader-container"
//       initial="initial"
//       animate={isVisible ? "enter" : ""}
//       exit={isOut ? "exit" : ""}
//     >
//       <motion.div
//         className="left-div"
//         variants={variants}
//         initial="initial"
//         animate={isOut ? "exitLeft" : "enter"}
//       >
//         <img src="/media/majina_logo.png" alt="Logo" className="logo" />
//         <h1>Coaching</h1>
//       </motion.div>

//       {renderMotionImage(
//         "/media/loader/slide_loader_top.png",
//         "Top Image",
//         "top-image",
//         "exitUp"
//       )}
//       {renderMotionImage(
//         "/media/loader/loader_img.png",
//         "Center Image",
//         "center-image",
//         "exitRight"
//       )}
//       {renderMotionImage(
//         "/media/loader/slide_loader_bot.png",
//         "Bottom Image",
//         "bottom-image",
//         "exitDown"
//       )}

//       <motion.section
//         variants={variants}
//         initial="initialHero"
//         animate={startHeroAnimation ? "enterLeft" : ""}
//       >
//         <Hero />
//       </motion.section>
//     </motion.div>
//   );
// };

// export default Loader;
