import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import imgbackground from "../../assets/imgbackground.png";
import { Banner } from "../../components/Banner/Banner";
import { Link } from "react-router-dom";



function Home() {
    const [logements, setLogements] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLogements = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/properties");

                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des données");
                }

                const data = await response.json();
                setLogements(data);
            } catch (err) {
                console.error(err);
                setError(err.message);
            }
        };

        fetchLogements();
    }, []);

    return (
        <div className={styles.home}>

            <Banner image={imgbackground} alt="Photo de falaises" text="Chez vous, partout et ailleurs" />

            <div className={styles.container}>
                <div className={styles.cards}>
                    {logements.map((property) => (
                        <Link
                            key={property.id}
                            to={`/logement/${property.id}`}
                            className={styles.card} >
                            <img src={property.cover} alt={property.title} />
                            <h2>{property.title}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home
