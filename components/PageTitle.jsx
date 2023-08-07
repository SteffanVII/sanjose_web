import styles from "../styles/PageTitle.module.scss";

function PageTitle( { title, open, setOpen } ) {
    return (
        <div className={styles['page-title']}>
            <h2>{title}</h2>
            <button onClick={() => {
                setOpen(!open)
            }}>
                <img src="/san_jose_seal.png" />
            </button>
        </div>
    );
}

export default PageTitle;