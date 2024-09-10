import "./HomeJourney.scss";

import JourneyCarrousel from "./Carrousel/JourneyCarrousel";
const Journey = () => {
  return (
    <section className="journey">
      <div className="journey_content">
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
      <div className="journey_content-carrousel">
        <JourneyCarrousel />
      </div>
    </section>
  );
};

export default Journey;
