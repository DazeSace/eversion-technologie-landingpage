import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
    return (
        <div className={'py-4 lg:py-8'}>
            <div className={'flex w-11/12 mx-auto justify-between'}>
                <div className={'flex cursor-pointer hover'}>
                    <Link href={'/'}>
                        <Image src={'/images/logo.svg'} width={120} height={50}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default NavBar
