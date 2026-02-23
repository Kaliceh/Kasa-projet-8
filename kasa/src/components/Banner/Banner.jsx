import imgbackground from "../../assets/imgbackground.png";
import styles from "../../pages/Home/Home.module.css";

export function Banner(props) {
    return (
        <div className={styles.imgWrapper}>
            <img
                src={imgbackground}
                alt="Photo de falaises"
                className={styles.imgbackground}
            />
            <h1 className={styles.title}>{props.text}</h1>
        </div>
    )
}



