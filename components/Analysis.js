import Image from "next/image";


const Analysis = () => {
    return (
        <div className={'mt-12 content flex flex-col lg:flex-row'}>
            <div className={'hidden lg:flex justify-center w-1/2'}>
                <Image src={'/images/phone-hero.png'} width={500} height={500} layout={"fixed"}/>
            </div>
            <div className={'lg:w-1/2'}>
                <p className={'text-3xl font-poppins lg:mt-20'}>Deine Analyse</p>
                <p className={'text-lg mt-10 leading-relaxed'}>Um eine Analyse bei dir durchzuführen, senden wir dir
                    Messsohlen
                    zu, welche du in deinen Schuh legst. Über unsere App kannst du diese konfigurieren und mit
                    deiner Analyse starten. Du benötigst kein Fachwissen und kannst alles bequem von zuhause
                    oder unterwegs starten. Wichtig wäre lediglich, dass du am Tag der Messung etwas läufst,
                    damit wir genug Daten für ein aussagekräftiges Ergebnis haben.</p>
                <div
                    className={'flex cursor-pointer justify-center rounded-lg font-bold bg-xyellow py-4 w-2/3 lg:w-1/2 xl:w-2/5 mx-auto lg:mx-0 mt-10'}>
                    <p>Jetzt loslegen</p>
                </div>
            </div>
        </div>
    )
}
export default Analysis
