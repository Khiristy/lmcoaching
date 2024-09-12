import "./HomePersoCard.scss";
import PersoCard from "../../Shared/PersoCardComponents/PersoCard.jsx";
import { useEffect, useState } from "react";

import useScrollAnimation from "../../Hooks/Animation/useScrollAnimation.jsx";
import { motion } from "framer-motion";

const HomePersoCard = () => {
  const { ref, controls } = useScrollAnimation(0.5);
  const [persoCards, setPersoCards] = useState([]);

  useEffect(() => {
    // Charger les données JSON depuis le répertoire /public
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setPersoCards(data.persoCards);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données JSON:", error);
      });
  }, []); // Tableau de dépendances vide pour éviter la boucle infinie

  return (
    <motion.section 
    className="persoCard_content"
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={controls}
    transition={{ duration: 0.5 }}
    >
      <div className="persoCard_text">
        <h2>Bienvenue sur mon site !</h2>
        <p>
          Ma passion pour le judo, la boxe et le basket m&apos;ont appris la
          discipline, la résilience, le respect des autres ainsi que le
          dépassement de soi.
          <br />
          Aujourd&apos;hui, je souhaite transmettre cette passion et ces valeurs
          à tous ceux qui souhaitent les découvrir.
        </p>
      </div>
      <div className="section persoCard_layer">
        {persoCards.map((card, index) => (
          <PersoCard
            key={index}
            title={card.title}
            icon={card.icon}
            description={card.description}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default HomePersoCard;
