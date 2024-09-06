import { useEffect, useState } from 'react';
import PriceCard from './PriceCard.jsx';
import "./PriceCardLayer.module.scss";

const PriceCardLayer = () => {
  const [priceCards, setPriceCards] = useState([]);

  useEffect(() => {
    // Charger les données JSON depuis le répertoire /public
    fetch('/data/data.json')
      .then((response) => response.json())
      .then((data) => {
        setPriceCards(data.priceCards);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des données JSON:', error);
      });
  }, []);

  return (
    <section className="price_card-layer">
      {priceCards.map((card, index) => (
        <PriceCard 
          key={index} 
          type={card.type} 
          description={card.description} 
          price={card.price} 
          details={card.details} 
          note={card.note} 
        />
      ))}
    </section>
  );
};

export default PriceCardLayer;