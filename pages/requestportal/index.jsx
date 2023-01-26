import Head from "next/head";
import RightMenu from "../../components/RightMenu";
import PageTitle from "../../components/PageTitle";
import Link from "next/link";
import styles from "../../styles/RequesPortanlIndex.module.scss";

function RequestPortalIndex() {

    return (
        <div className="page"
            id={styles['request-portal-index']}
        >
            <Head>
                <title>Barangay SanJose | Request Portal</title>
            </Head>
            <main>
                <PageTitle title="Document Request Portal" />
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This feature has been designed to simplify the process of requesting documents, saving you valuable time and effort. <br /><br />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This feature will also improve the efficiency of the document request process. You will be able to track the status of your request when your documents are ready for pickup.<br /><br />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We understand that time is of the essence, and we want to make the process of requesting documents as easy and efficient as possible. This new feature is just one of the many ways that we are working to improve our services and enhance the user experience. <br /><br />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We hope that you will find this new feature to be a valuable addition to our services, and we look forward to hearing your feedback. As always, if you have any questions or concerns, please do not hesitate to contact us.</p>
                <div className={styles['request-portal-subpage-links']} >
                    <Link href={"/requestportal/request"} >Request Document</Link>
                    <Link href={"/requestportal/checkstatus"} >Check Request Status</Link>
                </div>
            </main>
            <RightMenu/>
        </div>
    );

}

export default RequestPortalIndex;