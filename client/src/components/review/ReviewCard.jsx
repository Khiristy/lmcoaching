import "./ReviewCard.module.scss";
import mainLogo from "/media/main_logo.png";

const ReviewCard = () => {
  return (
    <article className="review_card">
      <h4>
      &ldquo;Joining this gym has been life-changing! The trainers are incredibly
        knowledgeable, and the community is so supportive. Ive never felt
        better&ldquo;
      </h4>
      <div className="review_card-score">
        <img src={mainLogo} className="review_card-score--img"></img>
        <div className="review_card-score--txt">
          <h5>Helena</h5>
          <p>Model</p>
        </div>
        <div className="review_card-score--stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;
