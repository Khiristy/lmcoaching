import "./PriceCard.module.scss";
import PriceBtn from "../btnComponents/PriceBtn.jsx"

const PriceCard = () => {
  return (
    <div className="price_card">
      <h4>Online</h4>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page
      </p>
      <h5>$50</h5>
      <span>Pause or Cancel anytime.<br/> 7 Days money back guarantee<br/></span>
      <PriceBtn />
      <ul>
        <li>Fusce accumsan nulla.</li>
        <li>Aliquam non metus a risus.</li>
        <li>Ut ut libero eget massa.</li>
        <li>Cras euismod lorem in.</li>
      </ul>
    </div>
  );
};

export default PriceCard;
