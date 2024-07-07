import styles from "./Home.module.scss";
import Modal from "../components/modal/ModalComponent.jsx";

const Home = () => (

    <div className={styles.home}>
      <h1>Welcome to lmcoaching</h1>
      <Modal/>
    </div>

);

export default Home;
