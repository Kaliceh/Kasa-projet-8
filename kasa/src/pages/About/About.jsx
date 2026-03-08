import { Banner } from "../../components/Banner/Banner";
import styles from "../About/About.module.css";
import imgabout from "../../assets/imgabout.png";
import Collapse from "../../components/Collapse/Collapse";
import { aboutList } from "../../data/aboutList";

function About() {
    return (
        <div className={styles.about}>
            <Banner image={imgabout} alt="Photo de montagne" />

            <div className={styles.collapseContainer}>
                {aboutList.map((item, index) => (
                    <Collapse
                        key={index}
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </div>
        </div>
    );
}

export default About
