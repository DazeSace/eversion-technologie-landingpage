import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className={'content'}>
            <div className={'lg:w-1/2'}>
                <p className={'text-5xl mt-14 font-poppins font-extralight leading-normal'}>Präzise Ganganalyse für
                    Zuhause</p>
                <p className={'text-lg mt-10 leading-relaxed'}>Finde heraus wie sich dein Gang auf deinen gesamten
                    Körper auswirkt.
                    Ganz easy und bequem von Zuhause
                    und unterwegs!</p>
                <Link href={'/hub'}>
                    <div
                        className={'flex hover cursor-pointer justify-center rounded-lg font-bold bg-xblue py-4 w-2/3 lg:w-1/2 xl:w-2/5 mx-auto lg:mx-0 mt-10'}>
                        <p>Los geht‘s!</p>
                    </div>
                </Link>
            </div>
            <div className={'hidden lg:flex justify-center w-1/2'}>
                <Image src={'/images/juicy-boi.png'} width={500} height={500} layout={"fixed"}/>
            </div>
        </div>
    )
}
export default Hero
