import Head from "next/head";
import { useState } from "react";
import { checkRequestStatus } from "../../backend/requests";
import PageTitle from "../../components/PageTitle";
import RightMenu from "../../components/RightMenu";
import styles from "../../styles/CheckRequestStatus.module.scss";

function parseRequestType( type ) {

    switch (parseInt(type)) {
        case 0:
            return "Barangay Clearance";
        case 1:
            return "Bussiness Clearance";
        case 2:
            return "Certificate of Residency";
        default:
            return;
    }

}

function parseRequestStatus( status ) {
    switch (parseInt(status)) {
        case 0:
            return "Pending";
        case 1:
            return "Processing";
        case 2:
            return "For Pickup";
        case 3:
            return "Completed";
        case 4:
            return "Declined";
        default:
            break;
    }
}

function CheckRequestStatusPage() {

    const [ result, setResult ] = useState(null);

    function idOnSubmit( e ) {
        e.preventDefault();
        
        checkRequestStatus( e.target["request-id-input"].value, ( response ) => {
            if ( response.message === undefined ) {
                setResult(
                    <div className={styles['result-wrapper']} >
                        <span className={styles['request-id']}>{response.id}</span>
                        <span className={styles['result-lb']} >Name : </span>
                        <span className={styles['request-name']} >{response.name}</span>
                        <span className={styles['result-lb']}>Document type :</span>
                        <span className={styles['request-type']} >{parseRequestType(response.type)}</span>
                        <span className={styles['result-lb']}>Date Requested :</span>
                        <span className={styles['request-type']} >{response.req_date.split("T")[0]}</span>
                        <span className={styles['result-lb']}>Status :</span>
                        <span className={`${styles['request-status']}  ${styles[`stat-${response.status}`]}`} >{parseRequestStatus(response.status)}</span>
                    </div>
                );
            } else {
                setResult(
                    <div className={styles['result-wrapper']} >
                        <span>No request found.</span>
                    </div>
                );
            }
        } )
    }

    return (
        <div className="page"
            id={styles['check-request-status-page']}
        >
            <Head>
                <title>Barangay SanJose | Check Request Status</title>
            </Head>
            <main>
                <PageTitle title={"Document Request Portal - Check Status"} />
                <form onSubmit={idOnSubmit} >
                    <div className={styles['id-input-wrapper']}>
                        <label htmlFor="request-id-input">Request ID</label>
                        <input type="text" id="request-id-input" pattern="[A-Za-z0-9]{5}" placeholder="Ex. 8GRT1"/>
                        <button type="submit">Check</button>
                    </div>
                    <div className={styles['result-container']} >
                        {result}
                    </div>
                </form>
            </main>
            <RightMenu/>
        </div>
    );

}

export default CheckRequestStatusPage;