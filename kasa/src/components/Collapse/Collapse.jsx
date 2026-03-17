import { useState } from "react";
import styles from "../Collapse/Collapse.module.css";
import vector from "../../assets/vector.png";

function Collapse({ title, content, customClass, contentClass }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${styles.collapse} ${customClass || ""}`}>
            <div className={styles.buttonWrapper}>
                <div
                    className={styles.button}
                    onClick={() => setIsOpen(!isOpen)}
                    data-testid="collapse-toggle"
                >
                    <span className={styles.titlebutton}>{title}</span>
                    <img
                        src={vector}
                        alt="Chevron"
                        className={`${styles.vector} ${isOpen ? styles.open : ""}`}
                        data-testid="collapse-chevron"
                    />
                </div>

                <div className={`${styles.contentWrapper} ${isOpen ? styles.open : ""}`}>
                    <div className={`${styles.content} ${contentClass || ""}`}>
                        <div className={styles.contentText}>{content}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collapse;