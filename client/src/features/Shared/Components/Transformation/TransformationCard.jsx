import "./TransformationCard.scss";
// import TransformationCardBronze from "/media/transformation/transformation_card-bronze.png";
import TransformationCardSilver from "/media/transformation/transformation_card-diamond-test.png";
import TransformationCardSMaster from "/media/transformation/transformation_card-master.png";
import VersusLogo from "/media/transformation/versus_logo.png"; // Logo Versus

const TransformationCard = () => {
  return (
    <div className="transformation_card-items">
      <img
        src={TransformationCardSilver}
        alt=""
        className="transformation_card-img"
      />
      <img src={VersusLogo} alt="Versus" className="versus_logo" />
      <img
        src={TransformationCardSMaster}
        alt=""
        className="transformation_card-img"
      />
    </div>
  );
};

export default TransformationCard;
