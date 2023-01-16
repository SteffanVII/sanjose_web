import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useClassToggle, useClickOutside } from "../hooks/customHooks";
import styles from "../styles/NavDropdown.module.scss";

function NavDropdown( { hrefs, title = "" } ) {

    const [ drop, setDrop ] = useState(false);

    const navlinkroot = useRef(null);

    useEffect(() => {
        let clean = useClickOutside( navlinkroot.current, () => {
                        setDrop(false);
                    } );
        return clean;
    }, [])

    return (
        <div ref={navlinkroot} className={styles[useClassToggle( `nav-link`, drop )]}
            onClick={() => {
                if ( hrefs.length > 1 ) {
                    setDrop(!drop);
                };
            }}
        >
            <span className={styles['nav-link-dropdown-title']}>{title}</span>
           <div className={styles['nav-link-dropdown']}>
                { Array.from(hrefs).map( e => <Link href={e.href} >{e.title}</Link> ) }
            </div>
        </div>
    );
}

export default NavDropdown;