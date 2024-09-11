import "./HomeFaq.scss";
import CollapsibleFaq from "../../Shared/FaqComponents/CollapsibleFaqLayer.jsx";
import faqImg from "/media/faq_img.webp";

const FaqSection = () => {
  return (
    <section className="faq">
      <h3>FAQ</h3>
      <img src={faqImg} alt="" className="faq_img" />
      <div className="faq_content">
        <div className="faq_content-collapsible">
          <CollapsibleFaq />
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
