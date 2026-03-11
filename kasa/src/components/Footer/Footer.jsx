import logoFooter from "../../assets/logo-footer.png";
import styles from "../Footer/Footer.module.css";

function Footer() {
    return (
        <footer>
            <div className={styles.inner}>
                <img src={logoFooter} alt="Logo Kasa" className={styles.logoFooter} />
                <p>
                    © 2020 Kasa. All <span className={styles.breakLine}>rights reserved</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
