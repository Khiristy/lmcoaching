import "./HomeTransformation.scss";
import TransformationCard from "../../Shared/Components/Transformation/TransformationCard.jsx"; // Composant enfant

const HomeTransformation = () => {
  // Vous pouvez conserver le hook d'animation si nécessaire pour d'autres animations


  return (
    <section className="transformation">
      
      <div className="transformation-container">
      <h3 className="transformation-title">TRANSFORMATIONS</h3>
        <TransformationCard />
      </div>
    </section>
  );
};

export default HomeTransformation;
