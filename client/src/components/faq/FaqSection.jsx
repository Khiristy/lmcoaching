import "./FaqSection.module.scss";
import CollapsibleFaq from "./CollapsibleFaq.jsx";

const FaqSection = () => {
  return (
    <section className="faq_section">
      <div className="faq_section-title">
        <h3>FAQ</h3>
      </div>
      <div className="faq_section-collapsible">
        <CollapsibleFaq />
        <CollapsibleFaq />
        <CollapsibleFaq />
        <CollapsibleFaq />
        <CollapsibleFaq />
      </div>
    </section>
  );
};

export default FaqSection;
