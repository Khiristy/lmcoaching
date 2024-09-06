import "./PriceCard.module.scss";
// import PriceBtn from "../btnComponents/PriceBtn.jsx"
import PropTypes from 'prop-types';

const PriceCard = ({ type, description, price, details, note }) => {
  return (
    <div className="price_card">
      <h4>{type}</h4>
      <p>{description}</p>
      <h5>{price}</h5>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <p>{note}</p>
    </div>
  );
};

PriceCard.propTypes = {
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired, // On attend un tableau de chaînes de caractères
  note: PropTypes.string.isRequired
};

export default PriceCard;

{/* <h5>150€/mois</h5>
<span>Arrêtez ou suspendez votre abonnementà tout moment.<br/><br/></span>
<PriceBtn />
        <li><i className="fa-regular fa-circle-check"></i>programme d&apos;entrainement sur-mesure</li>
        <li><i className="fa-regular fa-circle-check"></i>progamme nutritionnel adapté à vos besoins</li>
</ul>
</div> */}