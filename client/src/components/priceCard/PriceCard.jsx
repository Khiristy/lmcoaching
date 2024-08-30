import "./PriceCard.module.scss";

const PriceCard = () => {
  return (
    <div className="price_card">
      <h4>Online</h4>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page
      </p>
      <h5>$50</h5>
      <p>Pause or Cancel anytime.
      7 Days money back guarantee</p>
      <a href="">Get Started</a>
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
