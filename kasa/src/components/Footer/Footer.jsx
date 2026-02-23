import logoFooter from "../../assets/logo-footer.png";
import styles from "../Footer/Footer.module.css";

function Footer() {
    return (
        <footer>
            <img src={logoFooter} alt="Logo Kasa" className={styles.logoFooter} />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
