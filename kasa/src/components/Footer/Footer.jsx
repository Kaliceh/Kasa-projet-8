import logoFooter from "../../assets/logo-footer.png";
import styles from "../Footer/Footer.module.css";

function Footer({ page }) {

    let marginTop;
    switch (page) {
        case "about":
            marginTop = "10px";
            marginTop = "0";
            break;
    }

    return (
        <footer style={{ marginTop }} className={styles.footer}>
            <div className={styles.inner}>
                <img
                    src={logoFooter}
                    alt="Logo Kasa"
                    className={styles.logoFooter}
                />
                <p>
                    © 2020 Kasa. All{" "}
                    <span className={styles.breakLine}>rights reserved</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
