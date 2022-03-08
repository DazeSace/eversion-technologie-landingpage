import NavBar from "../components/NavBar";
import Head from "next/head";
import Hero from "../components/Hero";
import HelpinYa from "../components/HelpinYa";
import Analysis from "../components/Analysis";
import AnalysisTiles from "../components/AnalysisTiles";
import Eval from "../components/Eval";


export default function Home() {
    return (<div className={'text-xblack'}>
        <Head>
            <title>Eversion Technologies</title>
            <meta name="description" content="Eversion Technologies - Ganganalyse von Zuhause"/>
            <meta name="keywords" content="Ganganalyse, Gesundheit, Füße, Schuhe, Fußfehlstellung"/>
        </Head>
        <main className={'font-poppins-default'}>
            <NavBar/>
            <Hero/>
            <HelpinYa/>
            <Analysis/>
            <AnalysisTiles/>
            <Eval/>

        </main>
    </div>)
}
