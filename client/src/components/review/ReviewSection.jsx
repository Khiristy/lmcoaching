import "./ReviewSection.module.scss";
import ReviewCard from "./ReviewCard.jsx";

const ReviewSection = () => {
  return (
    <section className="review_section">
      <h3>Témoinages de nos clients</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys
      </p>
      <div className="review_section-card_pos">
        <ReviewCard />
        <ReviewCard />
      </div>
    </section>
  );
};

export default ReviewSection;
