import { useEffect, useState } from 'react';
import PersoCard from '../Shared/PersoCardComponents/PersoCard';

const PersoCardList = () => {
  const [persoCards, setPersoCards] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then((response) => response.json())
      .then((data) => setPersoCards(data.persoCards))
      .catch((error) => console.error("Erreur lors du chargement des données :", error));
  }, []);

  return (
    <div className="persoCard-list">
      {persoCards.map((card, index) => (
        <PersoCard
          key={index}
          title={card.title}
          icon={card.icon}
          description={card.description}
          className="persoCard-item"
        />
      ))}
    </div>
  );
};

export default PersoCardList;
