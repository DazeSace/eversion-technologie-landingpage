import Image from "next/image";
import Link from 'next/link'

const Eval = () => {
    return (
        <div className={'mt-20 content flex flex-col lg:flex-row'}>
            <div className={'lg:w-1/2'}>
                <p className={'text-3xl font-poppins lg:mt-20'}>Deine Auswertung</p>
                <p className={'text-lg mt-10 leading-relaxed'}>Mithilfe unserer einzigartigen Wirkkettenalgorithmen
                    können wir die Auswirkungen deines Schuhs auf den gesamten Körper berechnen. Du siehst in deiner
                    individuellen 3D Animation, wie sich die Muskeln in deinem Körper aufgrund deiner Schuhe
                    verhalten.</p>
                <div className={'flex mt-10'}>
                    <div className={'w-1/5 flex justify-center'}>
                        <Image src={'/images/safe.svg'} width={80} height={80}/>
                    </div>
                    <div className={'ml-4 lg:ml-0'}>
                        <p className={'font-poppins text-lg'}>100% Sicherheit</p>
                        <p className={''}>Deine Daten behandeln wir selbstverständlich vertraulich</p>
                    </div>
                </div>
                <Link href={'https://share-eu1.hsforms.com/1A_dkU6agRK-gpMEyYGpMOAf582b'}>
                    <div
                        className={'flex hover cursor-pointer justify-center rounded-lg font-bold bg-white border-2 border-xblack py-4 w-2/3 lg:w-1/2 xl:w-2/5 mx-auto lg:mx-0 mt-12'}>
                        <p>Jetzt testen</p>
                    </div>
                </Link>
            </div>
            <div className={'hidden lg:flex justify-center w-1/2'}>
                <Image src={'/images/phone-hero.png'} width={500} height={500} layout={"fixed"}/>
            </div>
        </div>
    )

}
export default Eval
