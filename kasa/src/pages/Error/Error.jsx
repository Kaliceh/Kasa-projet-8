import styles from "./Error.module.css";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

function Error() {
  return (
    <Layout>
      <div className={styles.error}>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link className={styles.linkReturn} to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </Layout>
  );
}

export default Error;