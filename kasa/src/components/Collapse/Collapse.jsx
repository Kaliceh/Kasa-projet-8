import { useState } from "react";
import styles from "../Collapse/Collapse.module.css";
import vector from "../../assets/vector.png";

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${styles.collapse} ${props.customClass || ""}`}>
            <div className={styles.buttonWrapper}>
                <div className={styles.button}>
                    <span className={styles.titlebutton}>{props.title}</span>
                    <img
                        src={vector}
                        alt="Chevron"
                        className={`${styles.vector} ${isOpen ? styles.open : ""}`}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>

                {isOpen && (
                    <div className={styles.content}>
                        <div className={styles.contentText}>
                            {props.content}
                        </div>
                    </div>
                )
                }
            </div>
        </div >
    );
}

export default Collapse;