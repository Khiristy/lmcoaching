import "./PriceBtn.scss";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const PriceBtn = (props) => {

  console.log(props)
  let className = `price_btn ${props.type.toLowerCase()}`;
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0); // Scroller en haut de la page
    navigate("/Form"); // Rediriger vers le formulaire
  };

  return (
    <a className={className}  onClick={handleClick}>
      Je me lance !<i className="fa-solid fa-location-arrow"></i>
    </a>
  );
};
PriceBtn.propTypes  = {
  type: PropTypes.string.isRequired,
};
export default PriceBtn;
