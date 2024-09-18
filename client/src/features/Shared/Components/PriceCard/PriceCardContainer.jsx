import { useEffect, useState } from "react";
import PriceCard from "./PriceCard.jsx";
import "./PriceCardContainer.scss";

const PriceCardContainer = () => {
  const [priceCards, setPriceCards] = useState([]);

  useEffect(() => {
    // Charger les données JSON depuis le répertoire /public
    fetch("/data/data.json")
      .then((response) => {
        console.log("Réponse du fetch:", response); // Vérifier la réponse du fetch
        return response.json();
      })
      .then((data) => {
        console.log("Données chargées:", data); // Vérifier les données JSON
        setPriceCards(data.priceCards);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données JSON:", error);
      });
  }, []);

  return (
    <section className="pricingPlan_cardLayer">
      {priceCards.map((card, index) => {
        console.log("Carte actuelle:", card); // Vérifier les données de chaque carte
        const cardClass = `priceCard ${card.type.toLowerCase()}-card`;
        console.log("Classe CSS pour la carte:", cardClass); // Vérifier la classe générée
        return (
          <PriceCard
            key={index}
            type={card.type}
            description={card.description}
            price={card.price}
            details={card.details}
            note={card.note}
            className={cardClass} // Classe dynamique
          />
        );
      })}
    </section>
  );
};

export default PriceCardContainer;
