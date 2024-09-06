import "./HomePersoCard.scss";
import PersoCard from "../../Shared/PersoCardComponents/PersoCard.jsx";
import { useEffect, useState } from "react";

const PersoCardLayer = () => {
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
  });

  return (
    <section className="perso_card-layer">
      {persoCards.map((card, index) => (
        <PersoCard
          key={index}
          title={card.title}
          icon={card.icon}
          description={card.description}
        />
      ))}
    </section>
  );
};

export default PersoCardLayer;
