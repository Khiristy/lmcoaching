import "./CollapsibleFaq.scss";
import Collapsible from "react-collapsible";
import PropTypes from "prop-types";

const CollapsibleFaq = ({ question, answer, isOpen, onClick }) => {
  return (
    <div onClick={onClick}>
    <Collapsible
      trigger={question}
      transitionTime="250"
      open={isOpen}
     
    >
      <p>{answer}</p>
    </Collapsible>
     </div>
  );
};

CollapsibleFaq.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired, // Gérer si le collapsible est ouvert ou non
  onClick: PropTypes.func.isRequired, // Fonction pour gérer le clic
};
export default CollapsibleFaq;
