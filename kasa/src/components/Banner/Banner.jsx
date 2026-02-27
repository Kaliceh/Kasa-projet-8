import styles from "../../components/Banner/Banner.module.css";

export function Banner(props) {

    const text = props.text;

    const formattedText = text
        ? text.split("\n").map((line, idx) => (
            <span key={idx} className={styles.mobileBreak}>
                {line}
            </span>
        ))
        : null;

    return (
        <div className={styles.imgWrapper} style={{ backgroundImage: `url(${props.image})` }}
            aria-label={props.alt}>
            {props.text && <h1 className={styles.title}>{formattedText}</h1>}
        </div>
    )
}



