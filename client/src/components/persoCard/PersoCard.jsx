import "./PersoCard.module.scss"
import Basketball from "/media/Basketball.png";

const PersoCard = () => {
 return (
    <div className="perso_card">
        <img src={Basketball} alt="" className="perso_card-img"/>
        <h3>Basketball Experience</h3>
        <p>Then I turned to basketball, where I played as a point guard for. several years. This sport taught me the importance of teamwork, fairness, and equality</p>
    </div>
 );
};

export default PersoCard;