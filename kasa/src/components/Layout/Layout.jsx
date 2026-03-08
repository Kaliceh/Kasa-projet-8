import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css"

function Layout() {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
