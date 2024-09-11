import TransformationCard from "../../Shared/TransformationComponents/TransformationCard.jsx";
import VersusLogo from "/media/versus_logo_1.png";
import "./HomeTransformation.scss";

const TransformationSection = () => {
  return (
    <section className="transformation">
    <h3 className="transformation-title">TRANSFORMATIONS</h3>
      <div className="transformation-layer">
        <TransformationCard />
        <img src={VersusLogo} alt="" className="versus_logo" />
        <TransformationCard />
      </div>
    </section>
  );
};

export default TransformationSection;
