import "./HomePricingPlan.scss";
import PriceCardContainer from "../../Shared/Components/PriceCard/PriceCardContainer.jsx";

const HomePricingPlan = () => {
  // Vous pouvez conserver le hook d'animation si nécessaire pour d'autres animations


  return (
    <section className="pricingPlan">
      <div className="pricingPlan_content">
        <div className="pricingPlan_content-top">
          <h3 className="pricingPlan_content-top--title">
            Flexibilité et Simplicité
          </h3>
          <p className="pricingPlan_content-top--text">
            Choisissez le plan qui vous convient et commencez dès
            aujourd&apos;hui.
          </p>
        </div>

        <div className="pricingPlan_cardLayer">
          <PriceCardContainer />
        </div>
      </div>
    </section>
  );
};

export default HomePricingPlan;
