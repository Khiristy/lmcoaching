import "./TransformationCard.module.scss";
import TransformationCardTest from "/media/transformation_card_test.png";

const TransformationCard = () => {
  return (
    <img src={TransformationCardTest} alt="" className="transformation_card-img" />
  );
};

export default TransformationCard;