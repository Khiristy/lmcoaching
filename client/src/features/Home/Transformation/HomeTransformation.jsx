import TransformationCard from "../../Shared/TransformationComponents/TransformationCard.jsx";
import VersusLogo from "/media/transformation/versus_logo.jpg";
import "./HomeTransformation.scss";

const TransformationSection = () => {
  return (
    <section className="transformation">
    <h3 className="transformation-title">TRANSFORMATIONS</h3>
      <div className="transformation-layer">
        <TransformationCard />
        <img src={VersusLogo} alt="" className="versus_logo" />
      </div>
    </section>
  );
};

export default TransformationSection;
