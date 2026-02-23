import { useParams } from "react-router-dom";

function Logement() {
    const { id } = useParams();

    return (
        <h1>Fiche logement {id}</h1>
    );
}

export default Logement;
