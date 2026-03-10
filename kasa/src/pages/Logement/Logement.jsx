import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../Logement/Logement.module.css";
import { Slideshow } from "../../components/Slideshow/Slideshow";
import Error from "../Error/Error";

function Logement() {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetchLogement = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/properties");
                if (!response.ok) throw new Error();

                const data = await response.json();
                const logementFind = data.find((l) => l.id === id);

                if (!logementFind) {
                    setNotFound(true);
                } else {
                    setLogement(logementFind);
                }
            } catch {
                setNotFound(true);
            } finally {
                setLoading(false);
            }
        };

        fetchLogement();
    }, [id]);

    if (loading) return <p>Chargement…</p>;
    if (notFound) return <Error />;

    return (
        <div className={styles.logementContainer}>

            <Slideshow pictures={logement.pictures} />

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


            <p className={styles.logementRating}>Rating : {logement.rating}</p>

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
