import NavBar from "../components/NavBar";
import Image from 'next/image'
import {BsFillCheckCircleFill} from "react-icons/bs";


export default function Home() {
    return (
        <div className={''}>
            <NavBar/>
            <main className={''}>
                <div className={'content-base w-11/12 mx-auto'}>
                    <p className={'text-5xl pt-24 align-baseline'}>Präzise Ganganalyse für zuhause</p>
                    <p className={'text-lg pt-8'}>Finde heraus wie sich dein Gang auf deinen gesamten Körper auswirkt.
                        Ganz easy und bequem von Zuhause
                        und unterwegs!</p>

                    <div className={'flex justify-center rounded-lg font-bold bg-blue-200 py-4 w-2/3 mx-auto mt-10'}>
                        <p>Los geht‘s!</p>
                    </div>
                </div>
                <div className={'bg-blue-200'}>
                    <div className={'content-base w-11/12 mx-auto mt-12'}>
                        <div className={'grid grid-cols-2 gap-x-1'}>
                            <div className={'relative'}>
                                <Image src={'/images/up-left.svg'} width={500} height={500}/>
                                <div className={'absolute inset-x-0 top-0 text-center pt-14 text-amber-200'}>
                                    <p className={'text-3xl font-bold tracking-wide'}>4000</p>
                                    <p>Tester:innen</p>
                                </div>
                            </div>
                            <div className={'relative'}>
                                <Image src={'/images/up-right.svg'} width={500} height={500}/>
                                <div className={'absolute inset-x-0 top-0 text-center pt-14 text-amber-200'}>
                                    <p className={'text-3xl font-bold tracking-wide'}>100%</p>
                                    <p>vertraulich</p>
                                </div>
                            </div>
                            <div className={'relative'}>
                                <Image src={'/images/down-left.svg'} width={500} height={500}/>
                                <div className={'absolute inset-x-0 top-0 text-center pt-14 text-amber-200'}>
                                    <p className={'text-3xl font-bold tracking-wide'}>5 min</p>
                                    <p>Aufwand</p>
                                </div>
                            </div>
                            <div className={'relative'}>
                                <Image src={'/images/down-right.svg'} width={500} height={500}/>
                                <div className={'absolute inset-x-0 top-0 text-center pt-14 text-amber-200'}>
                                    <p className={'text-3xl font-bold tracking-wide'}>8h</p>
                                    <p>Langzeitmessung</p>
                                </div>
                            </div>
                        </div>
                        <p className={'text-3xl font-bold mt-10'}>Wir helfen DIR</p>
                        <p className={'text-lg mt-6'}>Wir helfen Menschen, die minimale Fehlstellungen haben, eine
                            Entspannung der Muskulatur zu
                            erreichen. In unseren Analysen werden nach Ursachen für unerklärliche
                            Muskel-Skelett-Beschwerden gesucht. Wir können herausfinden, ob das Problem bereits in den
                            Schuhe seinen Ursprung findet und mittels individueller Anpassung optimal ausgleichen.</p>
                        <div
                            className={'flex justify-center rounded-lg font-bold bg-white py-4 w-2/3 mx-auto mt-10'}>
                            <p>Los geht‘s!</p>
                        </div>
                        <div className={'flex flex-col space-y-3 mt-10'}>
                            <div className={'flex text-xl'}>
                                <p className={'pt-1 text-white'}><BsFillCheckCircleFill/></p>
                                <p className={'pl-4'}>Überall & immer durchführbar</p>
                            </div>
                            <div className={'flex text-xl'}>
                                <p className={'pt-1 text-white'}><BsFillCheckCircleFill/></p>
                                <p className={'pl-4'}>Kostengünstig</p>
                            </div>
                            <div className={'flex text-xl'}>
                                <p className={'pt-1 text-white'}><BsFillCheckCircleFill/></p>
                                <p className={'pl-4'}>Einzigartige Technologie</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
