import './MainBtn.scss';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const MainBtn = ({ text,  }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate("/Form");
  };

  return (
    <div className="mainBtn">
      <button className="mainBtn-btn" onClick={handleClick}>
        <span className="mainBtn-text">{text}</span>
      </button>
    </div>
  );
};

MainBtn.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MainBtn;
