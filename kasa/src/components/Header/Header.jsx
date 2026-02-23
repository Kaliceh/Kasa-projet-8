import { NavLink } from "react-router-dom";
import styles from "./Header.module.css"
import logo from "../../assets/logo.png";

function Header() {
    return (
        <header className={styles.header}>

            <div className={styles.inner}>
                <img src={logo} alt="Logo Kasa" className={styles.logo} />
                <nav className={styles.nav}>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? `${styles.link} ${styles.active}` : styles.link
                        }
                    >
                        Accueil
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? `${styles.link} ${styles.active}` : styles.link
                        }
                    >
                        A Propos
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
