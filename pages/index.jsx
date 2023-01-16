import Head from 'next/head';
import Banners from '../components/Banners';
import PageTitle from '../components/PageTitle';
import RightMenu from '../components/RightMenu';
import styles from "../styles/Index.module.scss";

export default function Home() {
  return (
    <div className={"page"}>
      <Head>
        <title>Barangay SanJose | Home</title>
        <meta name="description" content="Barangay SanJose Official Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageTitle title="Home" />
        <Banners/>
      </main>
      <RightMenu/>
    </div>
  )
}
