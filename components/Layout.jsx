import styles from "../styles/Layout.module.scss";
import Footer from "./Footer";

function Layout( {children} ) {
    return (
        <div id={styles['layout']}>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;