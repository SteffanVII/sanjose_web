import styles from "../styles/PageTitle.module.scss";

function PageTitle( { title } ) {
    return (
        <h2 className={styles['page-title']}>{title}</h2>
    );
}

export default PageTitle;