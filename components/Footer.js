import Image from "next/image";
import Link from 'next/link'
import {BsInstagram} from "react-icons/bs";
import {IoLogoLinkedin} from "react-icons/io";
import {FiMail} from "react-icons/fi";

const Footer = () => {
    return (
        <div className={'bg-xblue mt-10'}>
            <div className={'content pb-4 pt-10 flex flex-col'}>
                <div className={'flex text-4xl justify-center space-x-6 mb-6'}>
                    <div className={'text-3xl mt-1 cursor-pointer hover'}>
                        <Link href={'https://www.instagram.com/eversiontech/'}>
                            <BsInstagram/>
                        </Link>
                    </div>
                    <div className={'cursor-pointer hover'}>
                        <Link href={'https://www.linkedin.com/company/solemate-app'}>
                            <IoLogoLinkedin/>
                        </Link>
                    </div>
                    <div className={'cursor-pointer hover'}>
                        <Link href={'mailto:info@eversion.tech'}>
                            <FiMail/>
                        </Link>
                    </div>
                </div>
                <div className={'mx-auto text-center mb-8'}>
                    <Link href={'/impressum'}>
                        <p className={'underline hover'}>Impressum</p>
                    </Link>
                    <Link href={'/datenschutz'}>
                        <p className={'underline hover'}>Datenschutzerklärung</p>
                    </Link>
                </div>
                <Image src={'/images/logo.svg'} width={120} height={50}/>
                <p className={'text-center w-full text-sm mt-2'}>© 2022 Eversion Technologies </p>
            </div>
        </div>
    )
}
export default Footer
