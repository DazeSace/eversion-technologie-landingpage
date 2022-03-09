import Image from "next/image";
import Link from "next/link";


const Improve = () => {
    return (
        <div className={'mt-20 content flex flex-col lg:flex-row'}>
            <div className={'lg:w-1/3'}>
                <p className={'text-3xl font-poppins lg:mt-20'}>Verbessere DICH</p>
                <p className={'text-lg mt-10 leading-relaxed'}>Mithilfe unserer Expert:innen und der individuellen
                    Anpassung helfen wir dir deine Gesundheit zu verbessern. Wir bieten umfassendes Fachwissen in
                    Ergänzung mit gezielten Übungen und Tools, damit du deine Ziele erreichst. </p>
                <Link href={'/hub'}>
                    <div
                        className={'flex hover cursor-pointer justify-center rounded-lg font-bold bg-white border-2 border-xblack py-4 w-2/3 lg:w-1/2 xl:w-2/5 mx-auto lg:mx-0 mt-12'}>
                        <p>Jetzt testen</p>
                    </div>
                </Link>
            </div>
            <div className={'hidden lg:flex justify-center w-2/3'}>
                <Image src={'/images/improve.png'} width={800} height={500} layout={"fixed"}/>
            </div>
        </div>
    )
}
export default Improve
