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