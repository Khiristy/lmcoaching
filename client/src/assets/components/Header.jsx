import { Link } from "react-router-dom";
import styles from"./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.mainMenu}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">Qui suis-je ?</Link>
                    </li>
                    <li>
                        <Link to="/Contact">About</Link>
                    </li>
                    <li>
                        <Link to="/Faq">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
