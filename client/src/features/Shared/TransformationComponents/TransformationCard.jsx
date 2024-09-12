import "./TransformationCard.scss";
// import TransformationCardBronze from "/media/transformation/transformation_card-bronze.png";
import TransformationCardSilver from "/media/transformation/transformation_card-silver.png";

const TransformationCard = () => {
  return (
    <div>
    <img src={TransformationCardSilver} alt="" className="transformation_card-img" />
    </div>
  );
};

export default TransformationCard;