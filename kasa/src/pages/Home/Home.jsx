import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import imgbackground from "../../assets/imgbackground.png";
import { Banner } from "../../components/Banner/Banner";
import { Card } from "../../components/Card/Card"




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

            <div className={styles.cards}>
                {logements.map((property) => (
                    <Card
                        key={property.id}
                        id={property.id}
                        title={property.title}
                        cover={property.cover}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
