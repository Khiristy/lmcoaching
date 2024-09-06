import "./ReviewSection.scss";
import ReviewCard from "../../../components/review/ReviewCard.jsx";

const ReviewSection = () => {
  return (
    <section className="review_section">
      <div className="review_section-title">
        <h3>Témoinages de nos clients</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys
        </p>
      </div>
      <div className="review_section-card_pos">
        <ReviewCard />
        <ReviewCard />
      </div>
    </section>
  );
};

export default ReviewSection;
