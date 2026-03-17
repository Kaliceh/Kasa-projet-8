import styles from "./Banner.module.css";

function Banner({ image, alt, text, customClass }) {
    return (
        <div
            className={`${styles.imgWrapper} ${customClass || ""}`}
            style={{ backgroundImage: `url(${image})` }}
            aria-label="banner"
        >
            {text && <h1 className={styles.title}>{text}</h1>}
        </div>
    );
}

export default Banner;
