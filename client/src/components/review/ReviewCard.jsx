import "./ReviewCard.module.scss";


const ReviewCard = () => {
  return (
    <article className="review_card">
      <h4>
        Joining this gym has been life-changing! The trainers are incredibly
        knowledgeable, and the community is so supportive. Ive never felt better
      </h4>
      <div className="review_card-score">
        <img></img>
        <h5>Helena</h5>
        <p>Model</p>
        <i></i>
      </div>
    </article>
  );
};

export default ReviewCard;
