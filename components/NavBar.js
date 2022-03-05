import {AiOutlineMenu} from "react-icons/ai";


const NavBar = () => {
    return (
        <div className={'py-4'}>
            <div className={'flex w-11/12 mx-auto justify-between'}>
                <div className={'flex'}>
                    <div className={'bg-red-400 h-12 w-12 '}>

                    </div>
                    <p className={'poppins-bold pl-2 pt-3 text-lg font-extralight'}>EVERSION TECHNOLOGIES</p>
                </div>
                <AiOutlineMenu className={'h-12 w-12 font-extralight'} onClick={() => console.log('Menu Button pressed')}/>
            </div>
        </div>
    )
}
export default NavBar
