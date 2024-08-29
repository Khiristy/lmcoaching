import "./Footer.module.scss";
import mainLogo from "/media/main_logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <img src={mainLogo} alt="" className="footer_logo" />
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="footer_picto">
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-snapchat"></i>
          </a>
        </div>
        {/* <div className="footer_nav"></div> */}
      </div>
      <div className="footer_divider"></div>
      <p className="footer_rights-reserved">&copy; 2024 LMCoaching. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
