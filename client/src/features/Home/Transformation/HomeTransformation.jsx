import TransformationCard from "../../Shared/TransformationComponents/TransformationCard.jsx";
import VersusLogo from "/media/versus_logo_1.png";
import "./HomeTransformation.scss";

const TransformationSection = () => {
  return (
    <section className="transformation_section">
    <h3 className="transformation_section-title">TRANSFORMATIONS</h3>
      <div className="transformation_section-layer">
        <TransformationCard />
        <img src={VersusLogo} alt="" className="versus_logo" />
        <TransformationCard />
      </div>
    </section>
  );
};

export default TransformationSection;
