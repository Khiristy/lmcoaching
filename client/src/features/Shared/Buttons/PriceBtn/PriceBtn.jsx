import "./PriceBtn.scss";
import { useNavigate } from "react-router-dom";

const PriceBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0); // Scroller en haut de la page
    navigate("/Form"); // Rediriger vers le formulaire
  };

  return (
    <a className="price_btn"  onClick={handleClick}>
      Je me lance !<i className="fa-solid fa-location-arrow"></i>
    </a>
  );
};

export default PriceBtn;
