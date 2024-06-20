import styles from "./Footer.module.scss";
import logo from '../../assets/logos/main_logo.jpg';



const Footer = () => {
    return (
      <footer className={styles.footer}>
        <img className={styles.main_logo} src={logo} alt="logo principal" />
        <p>&copy; 2024 LMCoaching. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
