import "./HomeFAQ.scss";
import FAQItems from "../../Shared/Components/Faq/FAQItems"; // Import du nouveau composant FAQItems
import faqImg from "/media/faq/faq_img-2.webp";

const HomeFAQ = () => {
  return (
    <section className="faq">
      <div className="faq_container">
        <img src={faqImg} alt="" className="faq_img" />
        <div className="faq_bckgrd"></div>
        <div className="faq_content">
          <h3 className="faq_content-title">Questions Fréquentes</h3>
          <p className="faq_content-txt">
            Retrouvez ici les réponses aux questions les plus posées.
          </p>
        </div>

        <FAQItems />
      </div>
    </section>
  );
};

export default HomeFAQ;
