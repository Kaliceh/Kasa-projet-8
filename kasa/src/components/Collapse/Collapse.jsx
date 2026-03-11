import { useState } from "react";
import styles from "../Collapse/Collapse.module.css";
import vector from "../../assets/vector.png";

function Collapse({ title, content, customClass }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${styles.collapse} ${customClass || ""}`}>
            <div className={styles.buttonWrapper}>
                <div className={styles.button} onClick={() => setIsOpen(!isOpen)}>
                    <span className={styles.titlebutton}>{title}</span>
                    <img
                        src={vector}
                        alt="Chevron"
                        className={`${styles.vector} ${isOpen ? styles.open : ""}`}
                    />
                </div>

                {isOpen && (
                    <div className={styles.content}>
                        <div className={styles.contentText}>{content}</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Collapse;