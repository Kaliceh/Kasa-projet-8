import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../Logement/Logement.module.css";

function Logement() {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLogement = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/properties");
                if (!response.ok) throw new Error("Erreur lors de la récupération du logement");

                const data = await response.json(); // data = tableau de logements
                const logementFind = data.find((logement) => logement.id === id);

                if (!logementFind) throw new Error("Logement non trouvé");

                setLogement(logementFind);
            } catch (err) {
                console.error(err);
                setError(err.message);
            }
        };

        fetchLogement();
    }, [id]);

    if (error) return <p>Une erreur est survenue : {error}</p>;
    if (!logement) return <p>Chargement…</p>;

    return (
        <div className={styles.logementContainer}>

            <div className={styles.logementGallery}>
                {logement.pictures.map((pic, index) => (
                    <img key={index} src={pic} alt={`${logement.title} ${index + 1}`} />
                ))}
            </div>

            <h1 className={styles.logementTitle}>{logement.title}</h1>

            <div className={styles.logementHost}>
                <p>{logement.host.name}</p>
                <img src={logement.host.picture} alt={logement.host.name} />
            </div>

            <p className={styles.logementLocation}>Location : {logement.location}</p>

            <div className={styles.logementTags}>
                {logement.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                ))}
            </div>

            <p className={styles.logementRating}>Rating : {logement.rating} </p>

            <p className={styles.logementDescription}>{logement.description}</p>

            <ul className={styles.logementEquipments}>
                {logement.equipments.map((eq, i) => (
                    <li key={i}>{eq}</li>
                ))}
            </ul>
        </div>
    );
}

export default Logement;
