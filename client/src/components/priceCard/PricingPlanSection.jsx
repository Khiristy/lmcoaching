import "./PricingPlanSection.module.scss";
import PriceCard from "./PriceCard.jsx";
import MainBtn from "../btnComponents/MainBtn.jsx"

const PricingPlanSection = () => {
  return (
    <section className="pricing_plan_section">
      <div className="pricing_plan_section-left">
        <h3>Our Pricing Plan</h3>
        <h4>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </h4>
        <MainBtn />
      </div>
      <PriceCard />
      <PriceCard />
    </section>
  );
};

export default PricingPlanSection;
