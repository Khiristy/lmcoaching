import "./CollapsibleFaqLayer.scss";
import CollapsibleFaq from "./CollapsibleFaq";
import { useEffect, useState } from "react";

const CollapsibleFaqLayer = () => {
  const [collapsibles, setCollapsibles] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null); // Gère quel collapsible est actif
  useEffect(() => {
    // Charger les données JSON depuis le répertoire /public
    fetch("/data/faqData.json")
      .then((response) => response.json())
      .then((data) => {
        setCollapsibles(data.collapsibles);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données JSON:", error);
      });
  }, []);

  return (
    <section className="collapsibleFaq-layer">
      {collapsibles.slice(0, 7).map((faq, index) => ( 
        <CollapsibleFaq
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={index === activeIndex} // Seul l'indice actif sera ouvert
          onClick={() => setActiveIndex(index === activeIndex ? null : index)}
        />
      ))}
    </section>
  );
};

export default CollapsibleFaqLayer;
