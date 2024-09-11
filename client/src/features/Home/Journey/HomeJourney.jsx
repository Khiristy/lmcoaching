import "./HomeJourney.scss";

import JourneyCarrousel from "./Carrousel/JourneyCarrousel";
const Journey = () => {
  return (
    <section className="journey">
      <div className="journey_content">
        <h3>Êtes-vous prêt à dépasser vos limites?</h3>
        <p>Eux l&apos;ont fait ! Pourquoi pas vous ?</p>
      </div>
      <div className="journey_content-carrousel">
        <JourneyCarrousel />
      </div>
    </section>
  );
};

export default Journey;
