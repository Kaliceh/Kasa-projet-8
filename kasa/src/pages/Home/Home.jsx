import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { Banner } from "../../components/Banner/Banner";



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

            {error && <p>Une erreur est survenue : {error}</p>}

            <Banner text="Chez vous, partout et ailleurs." />


            <div className={styles.container}>
                <div className={styles.cards}>
                    {logements.map((property) => (
                        <div key={property.id} className={styles.card}>
                            <img src={property.cover} alt={property.title} />
                            <h2>{property.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home
