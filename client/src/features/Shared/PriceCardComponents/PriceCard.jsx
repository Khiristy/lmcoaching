import "./PriceCard.scss";
import PriceBtn from "../Buttons/PriceBtn/PriceBtn.jsx"
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';


const PriceCard = ({ type, description, price, details, note }) => {
  return (
    <div className="price_card">
      <h4>{type}</h4>
      
        <p>{description}</p>
        <h5>{price}</h5>
        <PriceBtn />
        <p>{note}</p>
        <ul>
          {details.map((detail, index) => (
          <li key={index}>
          <FontAwesomeIcon className="price_card-icon" icon={faCircleCheck} /> {detail}
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
};

export default PriceCard;

