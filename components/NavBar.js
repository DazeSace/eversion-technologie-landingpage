import Image from 'next/image'

const NavBar = () => {
    return (
        <div className={'py-4 lg:py-8'}>
            <div className={'flex w-11/12 mx-auto justify-between'}>
                <div className={'flex space-x-4'}>
                    <Image src={'/images/logo.svg'} width={120} height={50}/>
                </div>
            </div>
        </div>
    )
}
export default NavBar
