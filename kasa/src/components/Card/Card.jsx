import styles from "../Card/Card.module.css";
import { Link } from "react-router-dom";

export function Card(props) {

    return (

        <Link to={`/logement/${props.id}`} className={styles.card}>

            <div
                className={styles.imgWrapper}
                style={{ backgroundImage: `url(${props.cover})` }}
                aria-label={props.title}
            >
                <h2 className={styles.titleCard}>{props.title}</h2>
            </div>
        </Link>
    );
}