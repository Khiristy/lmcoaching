import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Loader.scss";

// Déclarer les variables de durée globales
const globalAnimationTimer = 4000; // Temps global pour la sortie
const fadeAnimationTimer = 2; // Durée du fade-in ajustée à 1 seconde
const exitAnimationTimer = 3; // Durée de chaque animation de sortie

const Loader = () => {
  const [isOut, setIsOut] = useState(false); // Pour déclencher la sortie

  // Gestion des timers pour le fade-in et la sortie
  useEffect(() => {
    // Déclencher la sortie après le globalAnimationTimer
    const exitTimer = setTimeout(() => {
      setIsOut(true); // Déclencher la sortie
      console.log("Sortie commencée, isOut:", true);
    }, globalAnimationTimer); // Utilisation de la variable de durée pour la sortie

    return () => {
      clearTimeout(exitTimer);
    };
  }, []);

  // Variants pour gérer l'animation de chaque élément
  const variants = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: fadeAnimationTimer } },
    exitLeft: {
      opacity: 0,
      x: "-100vw",
      transition: { duration: exitAnimationTimer, delay: 0.5 },
    },
    exitRight: {
      opacity: 0,
      x: "100vw",
      transition: { duration: exitAnimationTimer, delay: 0.5 },
    },
    exitUp: {
      opacity: 0,
      x: '-30vw',   // Sortie vers la droite
      y: '-100vh',
      transition: { duration: exitAnimationTimer },
    },
    exitDown: {
      opacity: 0,
      x: '30vw',   // Sortie vers la droite
      y: '100vh',
      transition: { duration: exitAnimationTimer },
    },
  };

  return (
    <motion.div
      className="loader-container"
      initial="initial"
      animate="enter"
      exit={isOut ? "exit" : ""}
    >
      {/* Div à gauche avec le logo et le titre */}
      <motion.div
        className="left-div"
        variants={variants}
        initial="initial"
        animate={isOut ? "exitLeft" : "enter"}
      >
        <img src="/media/majina_logo.png" alt="Logo" className="logo" />
        <h1>Coaching</h1>
      </motion.div>

      {/* Image du haut */}
      <motion.img
        src="/media/loader/slide_loader_top.png"
        alt="Top Image"
        className="top-image"
        variants={variants}
        initial="initial"
        animate={isOut ? "exitUp" : "enter"}
      />

      {/* Image du centre */}
      <motion.img
        src="/media/loader/loader_img.png"
        alt="Center Image"
        className="center-image"
        variants={variants}
        initial="initial"
        animate={isOut ? "exitRight" : "enter"}
      />

      {/* Image du bas */}
      <motion.img
        src="/media/loader/slide_loader_bot.png"
        alt="Bottom Image"
        className="bottom-image"
        variants={variants}
        initial="initial"
        animate={isOut ? "exitDown" : "enter"}
      />
    </motion.div>
  );
};

export default Loader;
