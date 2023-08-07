import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { fetchEvents } from "../backend/fetch";
import styles from "../styles/RightMenu.module.scss";
import EventNav from "./EventNav";
import NavDropdown from "./NavDropdown";

function RightMenu({ open, setOpen }) {

    const [ events, setEvents ] = useState([]);

    useEffect(() => {
        fetchEvents(( status, response ) => {
            if ( status === 200 ) {
                let ev = [];
                response.forEach( e => {
                    if ( new Date(e.when).getTime() > new Date().getTime() ) {
                        ev.push(<EventNav data={e} key={`${e.title}-${e.id}`} />);
                    }
                });
                console.log(response);
                setEvents(ev);
            }
        })
    }, []);

    return (
        <header id={styles['menu']} className={ open ? styles['open'] : '' } >
            <button id={styles['barangay_seal_wrapper']}
                    onClick={() => {
                        setOpen(!open);
                    }}
            >
                <img src="/san_jose_seal.png" />
            </button>
            <h1>Barangay SanJose, <span>Tuy Batangas</span></h1>
            <nav>
                <Link href={'/'} >Home</Link>
                <NavDropdown title="Services" hrefs={[
                    { href : "/requestportal/", title : "Request Portal" },
                    { href : "/contact", title : "Help" }
                ]} />
                <Link href={ '/contact' } >Contacts</Link>

            </nav>
            <div className={styles['events']}>
                <span className={styles['events-span-events']} >Events</span>
                <hr />
                <span className={styles['events-span-upcoming']} >Upcoming</span>
                <div className={styles['events-container']}>
                    {events}
                </div>
            </div>
        </header>
    );
}

export default RightMenu;