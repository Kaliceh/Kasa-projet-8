import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.container}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;