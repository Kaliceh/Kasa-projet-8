import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../Logement/Logement.module.css";
import { Slideshow } from "../../components/Slideshow/Slideshow";
import Error from "../Error/Error";
import Property from "../../components/Property/Property";

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

            <Property logement={logement} />

        </div>
    );
}

export default Logement;
