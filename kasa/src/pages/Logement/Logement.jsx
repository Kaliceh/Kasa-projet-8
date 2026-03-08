import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../Logement/Logement.module.css";

function Logement() {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchLogement = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/properties");
                if (!response.ok) throw new Error("Erreur lors de la récupération du logement");

                const data = await response.json();
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

    const nextSlide = () => {
        if (!logement?.pictures) return;
        setCurrentIndex((prev) =>
            prev === logement.pictures.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        if (!logement?.pictures) return;
        setCurrentIndex((prev) =>
            prev === 0 ? logement.pictures.length - 1 : prev - 1
        );
    };

    if (error) return <p>Une erreur est survenue : {error}</p>;
    if (!logement) return <p>Chargement…</p>;

    const hasMultiplePictures = logement.pictures.length > 1;

    return (
        <div className={styles.logementContainer}>

            <div className={styles.logementGallery}>
                <img
                    src={logement.pictures[currentIndex]}
                    alt={`${logement.title} ${currentIndex + 1}`}
                    className={styles.carouselImage}
                />

                {hasMultiplePictures && (
                    <>
                        {/* Flèches minimalistes */}
                        <button className={styles.arrowLeft} onClick={prevSlide}>
                            ❮
                        </button>
                        <button className={styles.arrowRight} onClick={nextSlide}>
                            ❯
                        </button>

                        {/* Indicateur fractionnel */}
                        <div className={styles.slideCounter}>
                            {currentIndex + 1}/{logement.pictures.length}
                        </div>
                    </>
                )}
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