import { useLayoutEffect, useState } from "react";
import { parseMonth } from "../hooks/customHooks";
import styles from "../styles/EventNav.module.scss";

function EventNav( { data } ) {

    const [ date, setDate ] = useState('');

    useLayoutEffect(() => {

        let d = new Date(data.when);
        let month = parseMonth( d.getMonth() + 1 );
        setDate(`${month} ${d.getDate()}, ${d.getFullYear()}`);

    }, [])

    return (
        <div className={styles['event-nav']} >
            <p className={styles['event-date']}>{date}</p>
            <p className={styles['event-title']} >{data.title}</p>
            <div className={styles['details-float']}>
                <p className={styles['event-date-float']}>{date}</p>
                <p className={styles['event-title-float']} >{data.title}</p>
                <p className={styles['event-about-float']} >{data.about}</p>
            </div>
        </div>
    );

}

export default EventNav;