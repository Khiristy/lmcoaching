import "./PersoCardLayer.module.scss";
import PersoCard from "./PersoCard.jsx";

const PersoCardLayer = () => {
  return (
    <section className="perso_card-layer">
      <PersoCard />
      <PersoCard />
      <PersoCard />
    </section>
  );
};

export default PersoCardLayer;
