import "./HomeFaq.scss";
import CollapsibleFaq from "../../Shared/FaqComponents/CollapsibleFaqLayer.jsx";
import faqImg from "/media/faq/faq_img.webp";

const FaqSection = () => {
  return (
    <section className="faq">
      <img src={faqImg} alt="" className="faq_img" />
      <div className="faq_content">
        <h3>FAQ</h3>
        <div className="faq_content-collapsible">
          <CollapsibleFaq />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
