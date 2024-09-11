import "./HomeFaq.scss";
import CollapsibleFaq from "../../Shared/FaqComponents/CollapsibleFaq.jsx";
import faqImg from "/media/faq_img.webp";

const FaqSection = () => {
  return (
    <section className="faq">
      <h3>FAQ</h3>
      <div className="faq_content">
        <img src={faqImg} alt="" className="faq_content-img" />

        <div className="faq_content-collapsible">
          <CollapsibleFaq />
          <CollapsibleFaq />
          <CollapsibleFaq />
          <CollapsibleFaq />
          <CollapsibleFaq />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
