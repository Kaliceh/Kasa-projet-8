import styles from "../../components/Banner/Banner.module.css";

export function Banner(props) {

    return (
        <div className={styles.imgWrapper} style={{ backgroundImage: `url(${props.image})` }}
            aria-label={props.alt}>
            {props.text && <h1 className={styles.title}>{props.text}</h1>}
        </div>
    )
}



