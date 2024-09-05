import "./PriceCard.module.scss";
import PriceBtn from "../btnComponents/PriceBtn.jsx"

const PriceCard = () => {
  return (
    <div className="price_card">
      <h4>Online</h4>
      <p>
      Réservez maintenant pour profiter de ces offres et commencer votre aventure !
      </p>
      <h5>150€/mois</h5>
      <span>Arrêtez ou suspendez votre abonnementà tout moment.<br/><br/></span>
      <PriceBtn />
      <ul>
        <li><i className="fa-regular fa-circle-check"></i>programme d&apos;entrainement sur-mesure</li>
        <li><i className="fa-regular fa-circle-check"></i>progamme nutritionnel adapté à vos besoins</li>
        <li><i className="fa-regular fa-circle-check"></i>suivi de votre évolution via une application dédiée</li>
        <li><i className="fa-regular fa-circle-check"></i>bilan hebdomadaire en visio ou par téléphone</li>
      </ul>
    </div>
  );
};

export default PriceCard;

{/* <h5>150€/mois</h5>
<span>Arrêtez ou suspendez votre abonnementà tout moment.<br/><br/></span>
<PriceBtn />
        <li><i className="fa-regular fa-circle-check"></i>programme d&apos;entrainement sur-mesure</li>
        <li><i className="fa-regular fa-circle-check"></i>progamme nutritionnel adapté à vos besoins</li>
</ul>
</div> */}