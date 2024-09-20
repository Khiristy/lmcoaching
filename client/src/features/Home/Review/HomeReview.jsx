import "./HomeReview.scss";
import ReviewCard from "../../Shared/Components/Review/ReviewCard.jsx"; // Import des composants enfants (cartes de témoignages)

const HomeReview = () => {
    // Vous pouvez conserver le hook d'animation si nécessaire pour d'autres animations
 

    return (
        <section className="review">
            <div className="review_-title">
                <h3>Témoignages de nos clients</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry&apos;s standard.
                </p>
            </div>

            <div className="review_card_pos">
                <ReviewCard />
                <ReviewCard />
            </div>
        </section>
    );
};

export default HomeReview;
