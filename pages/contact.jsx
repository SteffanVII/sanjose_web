import Head from "next/head";
import PageTitle from "../components/PageTitle";
import RightMenu from "../components/RightMenu";
import styles from "../styles/ContactsTab.module.scss";
import { useState } from "react";

export default function ContactsTab() {

    const [ open, setOpen ] = useState(false);

    return (
        <div className="page"
            id={styles['contacts-tab']}
        >
            <Head>
                <title>Barangay SanJose | Contacts</title>
            </Head>
            <main>
                <PageTitle title={"Contacts"} setOpen={setOpen} open={open}/>
                <h3 className={styles['trunklines']}>Trunkline: (043)276-0047 / (043)276-0100 / (043)276-0104 / (043)276-0102</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Departments</th>
                            <th>Local Numbers</th>
                            <th>Directlines</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Office of the Mayor</td>
                            <td>200-201</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Sangguniang Bayn</td>
                            <td></td>
                            <td>(043) 276-0121</td>
                        </tr>
                        <tr>
                            <td>Municipal Accounting Office</td>
                            <td>214</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Municipal Assessor's Office</td>
                            <td>207</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Municipal Budget Office</td>
                            <td>203</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Municipal Engineering Office</td>
                            <td></td>
                            <td>(043) 206-0105</td>
                        </tr>
                        <tr>
                            <td>Municipal Planning & Development Office</td>
                            <td>206</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Municipal Health Office</td>
                            <td></td>
                            <td>(043) 276-0113</td>
                        </tr>
                        <tr>
                            <td>Municipal Social Welfare & Development Office</td>
                            <td></td>
                            <td>(043) 276-0117</td>
                        </tr>
                        <tr>
                            <td>Municipal Agriculture Office</td>
                            <td>219</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Municipal Treasurer's Office</td>
                            <td>223-224</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Municipal Civil Registrar's Office</td>
                            <td>220</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Human Resource Management Office</td>
                            <td>209</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Municipal Disaster Risk Reduction Management Office</td>
                            <td></td>
                            <td>(043) 276-0120</td>
                        </tr>
                        <tr>
                            <td>Municipal Library</td>
                            <td></td>
                            <td>(043) 276-0082</td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <RightMenu setOpen={setOpen} open={open}/>
        </div>
    );

}