import "./PricingPlanSection.scss";
import PriceCardLayer from "./PriceCardLayer.jsx";
import MainBtn from "../btnComponents/MainBtn.jsx";

const PricingPlanSection = () => {
  return (
    <section className="pricing_plan_section">
      <div className="pricing_plan_section-left">
        <h3>Flexibilité et Simplicité</h3>
        <h4>
          Choisissez le plan qui vous convient et commencez dès aujourd&apos;hui. Que
          vous souhaitiez une expérience en ligne accessible partout, ou une
          option flexible qui s&apos;adapte à votre emploi du temps, nous avons ce
          qu&apos;il vous faut.
        </h4>
        <MainBtn />
        <p>voir plus d&apos;offres</p>
      </div>
      <PriceCardLayer />
    </section>
    
  );
};

export default PricingPlanSection;
