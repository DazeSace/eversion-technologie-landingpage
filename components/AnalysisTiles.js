import Image from "next/image";


const AnalysisTiles = () => {
    return (
        <div
            className={'content flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:justify-around mt-20'}>
            <div className={'text-center rounded-xl p-10 shadow-xl border border-gray-50'}>
                <div className={'h-20 w-20 mx-auto'}>
                    <Image src={'/images/shoe.svg'} width={100} height={100}/>
                </div>
                <p className={'mt-6 text-xl font-poppins'}>Tracking</p>
                <p className={'mt-4'}>
                    Dein Solemate begleitet dich <br/> den ganzen Tag und sammelt <br/> Daten über deinen Gang.
                </p>
            </div>
            <div className={'text-center rounded-xl p-10 shadow-xl border border-gray-50'}>
                <div className={'h-20 w-20 mx-auto'}>
                    <Image src={'/images/analysis.svg'} width={100} height={100}/>
                </div>
                <p className={'mt-6 text-xl font-poppins'}>Analyse</p>
                <p className={'mt-4'}>
                    Unsere einzigartigen und <br/> modernsten Algorithmen werten <br/> alle gesammelten Daten
                    aus <br/> und berechnen
                    deren Wirkung.
                </p>
            </div>
            <div className={'text-center rounded-xl p-10 shadow-xl border border-gray-50'}>
                <div className={'h-20 w-20 mx-auto'}>
                    <Image src={'/images/fit.svg'} width={100} height={100}/>
                </div>
                <p className={'mt-6 text-xl font-poppins'}>Anpassung</p>
                <p className={'mt-4'}>
                    Auf Grundlage der Daten kann <br/> eine optimale und genaue <br/> Anpassung der
                    Schuhe <br/> vorgenommen werden.
                </p>
            </div>
        </div>
    )
}
export default AnalysisTiles
