import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import de Framer Motion
import PriceCard from "./PriceCard.jsx";
import "./PriceCardContainer.scss";
import { useScrollAnimation } from "../../../Hooks/Animation/useScrollAnimation";

const PriceCardContainer = () => {
  const [priceCards, setPriceCards] = useState([]);
  const [animations, setAnimations] = useState([]); // Stocker les animations ici
  const { isVisible, elementRef } = useScrollAnimation(0.2); // Hook pour détecter la visibilité de la section

  useEffect(() => {
    // Charger les données JSON depuis le répertoire /public
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setPriceCards(data.priceCards);

        // Générer les variantes d'animation directement ici, sans hook
        const generatedAnimations = data.priceCards.map((_, index) => ({
          hidden: { opacity: 0, x: 300 }, // Carte hors écran à droite
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              delay: index * 0.4 + 0.5, // Délai basé sur l'index pour un effet de cascade
              duration: 0.8,
              ease: "easeOut",
            },
          },
        }));
        setAnimations(generatedAnimations); // Stocker les variantes d'animation pour chaque carte
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données JSON:", error);
      });
  }, []); // Appel du fetch et des hooks uniquement après le montage

  return (
    <section className="pricingPlan_cardLayer" ref={elementRef}>
      {priceCards.map((card, index) => {
        const cardClass = `priceCard ${card.type.toLowerCase()}-card`;

        // Utiliser les variantes d'animation générées uniquement si elles existent
        const slideVariants = animations[index] || {};

        return (
          <motion.div
            key={index}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"} // L'animation démarre seulement si la section est visible
            variants={slideVariants}
            custom={index}
          >
            <PriceCard
              type={card.type}
              description={card.description}
              price={card.price}
              details={card.details}
              note={card.note}
              className={cardClass} // Classe dynamique
            />
          </motion.div>
        );
      })}
    </section>
  );
};

export default PriceCardContainer;
