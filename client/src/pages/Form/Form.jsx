import "./Form.scss";
import MainForm from "../../features/Form/MainForm/MainForm.jsx";
import bckImg from "/media/form/bck_img.png";
const Form = () => {
  
  return (
    <div className="form">
      <div className="form_container">
      <img src={bckImg} alt="" className="bckImg" />
        <MainForm />
      </div>
    </div>
  );
};

export default Form;
