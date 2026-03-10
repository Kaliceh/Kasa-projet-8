import styles from "../Property/Property.module.css";
import star from "../../assets/star.png";
import Collapse from "../Collapse/Collapse";
import collapseStyles from "../Collapse/Collapse.module.css";

function Property(props) {
    const { logement } = props;
    const [firstName, lastName] = logement.host.name.split(" ");

    return (
        <div className={styles.propertyContainer}>

            <h1 className={styles.logementTitle}>{logement.title}</h1>

            <p className={styles.logementLocation}>{logement.location}</p>

            <div className={styles.tagsRatingContainer}>
                <div className={styles.logementTags}>
                    {logement.tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>{tag}</span>
                    ))}
                </div>

                <div className={styles.logementRating}>
                    {[1, 2, 3, 4, 5].map((starNumber) => (
                        <img
                            key={starNumber}
                            src={star}
                            alt="étoile"
                            className={starNumber <= logement.rating ? styles.starActive : styles.starInactive}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.logementHost}>
                <div className={styles.hostName}>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                </div>
                <img
                    src={logement.host.picture}
                    alt={logement.host.name}
                    className={styles.hostPicture}
                />
            </div>

            <div className={collapseStyles.propertyCollapseContainer}>
                <Collapse
                    title="Description"
                    content={logement.description}
                    customClass={collapseStyles.propertyCollapse}
                />
                <Collapse
                    title="Équipements"
                    content={logement.equipments.map((eq, i) => <div key={i}>{eq}</div>)}
                    customClass={collapseStyles.propertyCollapse}
                />
            </div>
        </div>
    )
}

export default Property;