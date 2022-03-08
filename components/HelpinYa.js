import Image from 'next/image'
import {BsFillCheckCircleFill} from "react-icons/bs";

const HelpinYa = () => {
    return (
        <div className={'mt-20'}>
            <Image src={'/images/top-wave.svg'} width={1440} height={88}/>
            <div className={'bg-xblue pb-10 -mt-3'}>
                <div className={'flex flex-col lg:flex-row'}>
                    <div className={'content lg:w-1/2 flex justify-center '}>
                        <div className={'grid grid-cols-2 gap-x-1.5 w-5/6 -mt-10'}>
                            <div className={'relative'}>
                                <Image src={'/images/up-left.svg'} width={400} height={400}/>
                                <div
                                    className={'absolute inset-x-0 top-0 text-center pt-14 sm:pt-24 md:pt-32 lg:pt-16 xl:pt-24 text-amber-200'}>
                                    <p className={'text-3xl font-poppins tracking-wide sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl'}>4000</p>
                                    <p className={'text-sm sm:text-lg md:text-xl lg:text-sm xl:text-lg'}>Tester:innen</p>
                                </div>
                            </div>
                            <div className={'relative'}>
                                <Image src={'/images/up-right.svg'} width={400} height={400}/>
                                <div
                                    className={'absolute inset-x-0 top-0 text-center pt-14 sm:pt-24 md:pt-32 lg:pt-16 xl:pt-24 text-amber-200'}>
                                    <p className={'text-3xl font-poppins tracking-wide sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl'}>100%</p>
                                    <p className={'text-sm sm:text-lg md:text-xl lg:text-sm xl:text-lg'}>vertraulich</p>
                                </div>
                            </div>
                            <div className={'relative'}>
                                <Image src={'/images/down-left.svg'} width={400} height={400}/>
                                <div
                                    className={'absolute inset-x-0 top-0 text-center pt-14 sm:pt-24 md:pt-32 lg:pt-16 xl:pt-24 text-amber-200'}>
                                    <p className={'text-3xl font-poppins tracking-wide sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl'}>5min</p>
                                    <p className={'text-sm sm:text-lg md:text-xl lg:text-sm xl:text-lg'}>Aufwand</p>
                                </div>
                            </div>
                            <div className={'relative'}>
                                <Image src={'/images/down-right.svg'} width={400} height={400}/>
                                <div
                                    className={'absolute inset-x-0 top-0 text-center pt-14 sm:pt-24 md:pt-32 lg:pt-16 xl:pt-24 text-amber-200'}>
                                    <p className={'text-3xl font-poppins tracking-wide sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl'}>8h</p>
                                    <p className={'text-sm sm:text-lg md:text-xl lg:text-sm xl:text-lg'}>Langzeitmessung</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'lg:w-1/2 content flex flex-col justify-center'}>
                        <div className={'w-5/6'}>
                            <p className={'text-3xl font-poppins mt-16 lg:mt-0'}>Wir helfen DIR</p>
                            <p className={'text-lg mt-6 leading-relaxed'}>Wir helfen Menschen, die minimale Fehlstellungen haben, eine
                                Entspannung der Muskulatur zu
                                erreichen. In unseren Analysen werden nach Ursachen für unerklärliche
                                Muskel-Skelett-Beschwerden gesucht. Wir können herausfinden, ob das Problem bereits in
                                den
                                Schuhe seinen Ursprung findet und mittels individueller Anpassung optimal
                                ausgleichen.</p>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col mx-auto w-11/12 lg:flex-row space-y-3 lg:space-y-0 justify-evenly mt-16'}>
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
            <div className={'-mt-2'}>
                <Image src={'/images/bot-wave.svg'} width={1440} height={101}/>
            </div>
        </div>
    )
}
export default HelpinYa