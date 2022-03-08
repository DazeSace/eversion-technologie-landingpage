import NavBar from "../components/NavBar";
import Image from 'next/image'
import {BsFillCheckCircleFill} from "react-icons/bs";
import Head from "next/head";
import Hero from "../components/Hero";
import HelpinYa from "../components/HelpinYa";


export default function Home() {
    return (
        <div className={''}>
            <Head>
                <title>Eversion Technologies</title>
                <meta name="description" content="Eversion Technologies - Ganganalyse von Zuhause"/>
                <meta name="keywords" content="Ganganalyse, Gesundheit, Füße, Schuhe, Fußfehlstellung"/>
            </Head>
            <NavBar/>
            <main className={'font-poppins-default'}>
                <Hero/>
                <HelpinYa/>
                <div className={'mt-12 content-base relative'}>
                    <Image src={'/images/blob-from-left-1.svg'} width={500} height={500}/>
                    <div className={'absolute inset-x-0 top-0 content-base w-11/12 mx-auto'}>
                        <p className={'text-3xl font-bold '}>Deine Analyse</p>
                        <p className={'text-lg mt-6'}>Um eine Analyse bei dir durchzuführen, senden wir dir Messsohlen
                            zu, welche du in deinen Schuh legst. Über unsere App kannst du diese konfigurieren und mit
                            deiner Analyse starten. Du benötigst kein Fachwissen und kannst alles bequem von zuhause
                            oder unterwegs starten. Wichtig wäre lediglich, dass du am Tag der Messung etwas läufst,
                            damit wir genug Daten für ein aussagekräftiges Ergebnis haben.</p>
                    </div>
                    <div
                        className={'flex justify-center rounded-lg font-bold bg-amber-200 py-4 w-2/3 mx-auto '}>
                        <p>Jetzt loslegen</p>
                    </div>
                </div>
                <div className={'content-base w-11/12 mx-auto flex flex-col space-y-4 mt-12'}>
                    <div className={'text-center rounded-xl p-10 shadow-xl'}>
                        <div className={'h-20 w-20 bg-indigo-300 mx-auto'}>

                        </div>
                        <p className={'mt-6 text-xl font-bold'}>Tracking</p>
                        <p className={'mt-4 text-gray-500'}>
                            Dein Solemate begleitet dich <br/> den ganzen Tag und sammelt <br/> Daten über deinen Gang.
                        </p>
                    </div>
                    <div className={'text-center rounded-xl p-10 shadow-xl'}>
                        <div className={'h-20 w-20 bg-indigo-300 mx-auto'}>

                        </div>
                        <p className={'mt-6 text-xl font-bold'}>Analyse</p>
                        <p className={'mt-4 text-gray-500'}>
                            Unsere einzigartigen und <br/> modernsten Algorithmen werten <br/> alle gesammelten Daten
                            aus <br/> und berechnen
                            deren Wirkung.
                        </p>
                    </div>
                    <div className={'text-center rounded-xl p-10 shadow-xl'}>
                        <div className={'h-20 w-20 bg-indigo-300 mx-auto'}>

                        </div>
                        <p className={'mt-6 text-xl font-bold'}>Anpassung</p>
                        <p className={'mt-4 text-gray-500'}>
                            Auf Grundlage der Daten kann <br/> eine optimale und genaue <br/> Anpassung der
                            Schuhe <br/> vorgenommen werden.
                        </p>
                    </div>
                </div>
                <div
                    className={'flex justify-center rounded-lg font-bold py-4 w-2/3 mx-auto mt-20 border-2 border-black'}>
                    <p>Erfahre mehr</p>
                </div>
                <div className={'content-base w-11/12 mx-auto'}>

                </div>
            </main>
        </div>)
}
