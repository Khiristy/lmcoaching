import "./PriceCard.scss";
import PriceBtn from "../../Buttons/PriceBtn/PriceBtn.jsx";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Transition from "../../../Form/TransitionPricing/TransitionPricing.jsx";

const PriceCard = ({ type, description, price, details, note, className }) => {
  return (
    <div className= {className}>
      <h4  className="priceCard_title">{type}</h4>
      <p className="priceCard_description">{description}</p>
      <h5 className="priceCard_price">{price}</h5>
      <p className="priceCard_note">{note}</p>
      <PriceBtn href={Transition}/>
      <ul className="priceCard_layer">
        {details.map((detail, index) => (
          <li className="priceCard_layer-detail" key={index}>
            <FontAwesomeIcon className="priceCard-icon" icon={faCircleCheck} />{" "}
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

PriceCard.propTypes = {
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired, // On attend un tableau de chaînes de caractères
  note: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default PriceCard;
