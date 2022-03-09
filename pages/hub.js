import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hubspot from "../components/Hubspot";

export default function Hub() {
    return (
        <div className={'text-xblack'}>
            <Head>
                <title>Eversion Technologies</title>
                <meta name="description" content="Eversion Technologies - Ganganalyse von Zuhause"/>
                <meta name="keywords" content="Ganganalyse, Gesundheit, Füße, Schuhe, Fußfehlstellung"/>
                <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
                <link rel="manifest" href="/favicons/site.webmanifest"/>
                <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#ffffff"/>
                <link rel="shortcut icon" href="/favicons/favicon.ico"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="msapplication-config" content="/favicons/browserconfig.xml"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
            <main className={'font-poppins-default'}>
                <NavBar/>
                <div className={'w-11/12 mx-auto'}>
                    <Hubspot/>
                </div>
            </main>
            <Footer/>
        </div>
    )
}
