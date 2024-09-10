import './MainBtn.scss';
import { useNavigate } from "react-router-dom";

const MainBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0); // Scroller en haut de la page
    navigate("/Form"); // Rediriger vers le formulaire
  };

  return (
    <button className="main_btn" onClick={handleClick} >
      Réserver maintenant !
    </button>
  );
};

export default MainBtn;