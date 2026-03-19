import logoFooter from "../../assets/logo-footer.png";
import styles from "../Footer/Footer.module.css";

function Footer({ page }) {

    let marginTop;
    switch (page) {
        case "about":
            marginTop = "10px";
            break;
    }

    return (
        <footer className={`${styles.footer} ${page === "about" ? styles.aboutFooter : ""}`}>
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
