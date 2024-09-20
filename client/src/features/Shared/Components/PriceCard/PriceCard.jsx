import "./PriceCard.scss";
import PriceBtn from "../../Buttons/PriceBtn/PriceBtn.jsx";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const PriceCard = ({ type, description, price, details, note, className }) => {
  return (
    <div className={className}>
      <h4 className="priceCard_title">{type}</h4>
      <p className="priceCard_description">{description}</p>
      <h5 className="priceCard_price">
        <span className="priceCard_priceValue">{price}</span>
        <span className="priceCard_priceUnit">€/MOIS</span>
      </h5>
      <p className="priceCard_note">{note}</p>
      <PriceBtn type={type} />
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
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
  note: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default PriceCard;
