import "./Form.scss";
import MainForm from "../../features/Form/MainForm/MainForm.jsx";
import bckImg from "/media/form/bck_img-3.png"
const Form = () => {
    
    return (
      <div className="form">
        <img src={bckImg} alt="" className="bckImg"/>
          <MainForm />
      </div>
    );
  };
  
  export default Form;
  