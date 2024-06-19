import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
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
