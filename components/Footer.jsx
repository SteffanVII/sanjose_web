import Link from "next/link";
import styles from "../styles/Footer.module.scss";

function Footer() {
    return (
        <footer id={styles['footer']}>
            <nav className={styles['footer-nav-social-links']} >
                <div className={styles['footer-nav-links']}>
                    <Link href={"/"} >Home</Link>
                    <Link href={"/"} >Document Request</Link>
                    <Link href={"/"} >Help</Link>
                    <Link href={"/"} >Contacts</Link>
                </div>
                <div className={styles['footer-social-links']}>
                    <a href=""><img src="/facebook.svg" alt="facebook link"/></a>
                    <a href="">Municipaloty of Tuy Official Website</a>
                </div>
                <img src="/hotline.jpg" alt="Hotline" />
            </nav>
            <div className={styles['texts']}>© 2023 Barangay SanJose. All rights reserved.</div>

        </footer>
    );
}

export default Footer;