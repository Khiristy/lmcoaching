import { useEffect, useState } from "react";
import PriceCard from "./PriceCard.jsx";
import "./PriceCardContainer.scss";

const PriceCardContainer = () => {
  const [priceCards, setPriceCards] = useState([]);

  useEffect(() => {
    // Charger les données JSON depuis le répertoire /public
    fetch("/data/data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPriceCards(data.priceCards);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données JSON:", error);
      });
  }, []);

  return (
    <section className="pricingPlan_cardLayer">
      {priceCards.map((card, index) => {
        const cardClass = `priceCard ${card.type.toLowerCase()}-card`;

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
