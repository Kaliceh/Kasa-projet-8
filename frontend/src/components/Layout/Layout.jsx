import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";

function Layout() {
  const location = useLocation();

  let pageType;
  if (location.pathname === "/") pageType = "home";
  else if (location.pathname.startsWith("/logement")) pageType = "logement";
  else if (location.pathname === "/about") pageType = "about";
  else pageType = "error";

  return (
    <>
      <div className={styles.wrapper}>
        <Header page={pageType} />
        <main className={styles.container}>
          <Outlet />
        </main>
      </div>

      <Footer page={pageType} />
    </>
  );
}

export default Layout;
