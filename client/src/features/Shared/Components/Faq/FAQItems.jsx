import "./FAQItems.scss";
import CollapsibleFaq from "./CollapsibleFaq";
import { useEffect, useState } from "react";

const FAQItems = () => {
  const [collapsibles, setCollapsibles] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null); // Gère quel collapsible est actif

  useEffect(() => {
    // Chargement des données JSON depuis le répertoire /public
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
    <section className="faq-items">
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

export default FAQItems;
