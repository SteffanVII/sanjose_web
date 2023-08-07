import Head from 'next/head';
import Banners from '../components/Banners';
import PageTitle from '../components/PageTitle';
import RightMenu from '../components/RightMenu';
import styles from "../styles/Index.module.scss";
import { useState } from 'react';

export default function Home() {

  const [ open, setOpen ] = useState(false);

  return (
    <div className={"page"}>
      <Head>
        <title>Barangay SanJose | Home</title>
        <meta name="description" content="Barangay SanJose Official Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageTitle title="Home" setOpen={setOpen} open={open} />
        <h1 className={styles['welcome-h1']}>Welcome to Barangay SanJose Official Website 👏 </h1>
        <Banners/>
        <div className={styles["covid-infographics"]}>
          <img src="/infographics-for-the-world-immunization-week-2020-english-page-1.png" alt="Covid Infographic 1" />
          <img src="/infographics-for-the-world-immunization-week-2020-english-page-2.png" alt="Covid Infographic 2" />
          <img src="/infographics-for-the-world-immunization-week-2020-english-page-3.webp" alt="Covid Infographic 3" />
          <img src="/infographics-for-the-world-immunization-week-2020-english-page-4.png" alt="Covid Infographic 4" />
        </div>
        <div className={styles['mapouter']}>
                <span>Planning to visit us?</span>
                <div className={styles['gmap_canvas']}>
                    <iframe className={styles.gmap_iframe} width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Tuy Batangas&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
        </div>
      </main>
      <RightMenu setOpen={setOpen} open={open}/>
    </div>
  )
}
