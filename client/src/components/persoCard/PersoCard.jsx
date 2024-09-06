import "./PersoCard.module.scss"
import PropTypes from 'prop-types';

const PersoCard = ({title, icon, description}) => {
 return (
    <div className="perso_card">
        <img src={icon} alt="" className="perso_card-img"/>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
 );
};

PersoCard.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  };

export default PersoCard;