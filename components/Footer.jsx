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
                    <a href="https://www.facebook.com/barangay.sanjose.140?mibextid=ZbWKwL" target={"_blank"}><img src="/facebook.svg" alt="facebook link"/></a>
                    <a href="https://tuybatangas.gov.ph/" target={"_blank"} >Municipality of Tuy Official Website</a>
                </div>
                <img src="/hotline.jpg" alt="Hotline" />
                <span>External links</span>
                <div className={styles["external_links"]}>
                    <a target={"_blank"} href={"https://www.batangas.gov.ph/portal/"} ><img src="/pob.jpg" alt="Province of Batangas" /></a>
                    <a target={"_blank"} href={"https://www.officialgazette.gov.ph/"} ><img src="/gazette.jpg" alt="Official Gazette of the Republic of the Philippines" /></a>
                    <a target={"_blank"} href={"http://president.gov.ph/"} ><img src="/presiden.jpg" alt="Office of the President of the Philippines" /></a>
                    <a target={"_blank"} href={"http://www.dilg.gov.ph/"} ><img src="/dilg.jpg" alt="Department of Interior and Local Government" /></a>
                </div>
            </nav>
            <div className={styles['texts']}>© 2023 Barangay SanJose. All rights reserved.</div>

        </footer>
    );
}

export default Footer;