import Image from "next/image";
import {AiFillStar} from "react-icons/ai";


const Customers = () => {
    return (
        <div>
            <p className={'text-3xl text-center font-poppins mt-20'}>Unsere Kund:innen</p>
            <div
                className={'content flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:justify-around mt-16'}>
                <div className={'flex flex-col rounded-xl lg:w-1/4 shadow-xl bg-xblue p-6'}>
                    <div className={'flex flex-col'}>
                        <div className={'flex justify-between'}>
                            <div className={'flex'}>
                                <div className={'h-12 w-12 rounded-full'}>
                                    <Image src={'/images/man.png'} width={100} height={100}/>
                                </div>
                                <div className={'ml-2'}>
                                    <p className={'text-xl font-poppins'}>Diego Rodriguez</p>
                                    <p className={'text-sm'}>Ravensburg, Deutschland</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={'flex justify-end mt-4'}>
                        <p>4/5</p>
                        <div className={'mt-1 ml-2'}>
                            <AiFillStar/>
                        </div>
                    </div>
                    <p className={'mt-1'}>“Wow... Ich bin so glücklich, dass ich diese Analyse gemacht habe. Endlich
                        weiss ich, dass meine
                        Schuhe meine Wadenkrämpfe verursachen. Seit ich die Insole täglich trage, kann ich endlich
                        wieder in Ruhe schlafen ohne ständig von schmerzhaften Krämpfen geweckt zu werden.“</p>
                </div>
                <div className={'flex flex-col rounded-xl lg:w-1/4 shadow-xl bg-xblue p-6'}>
                    <div className={'flex flex-col'}>
                        <div className={'flex justify-between'}>
                            <div className={'flex'}>
                                <div className={'h-12 w-12 rounded-full'}>
                                    <Image src={'/images/girl.png'} width={100} height={100}/>
                                </div>
                                <div className={'ml-2'}>
                                    <p className={'text-xl font-poppins'}>Jessica Martin</p>
                                    <p className={'text-sm'}>München, Deutschland</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={'flex justify-end mt-4'}>
                        <p>5/5</p>
                        <div className={'mt-1 ml-2'}>
                            <AiFillStar/>
                        </div>
                    </div>
                    <p className={'mt-1'}>“Ich liebe die Insoles. Sie haben mich
                        überzeugt weil sie 100% individualisiert
                        und perfekt auf mich und meinen Schuh
                        angepasst sind.”</p>
                </div>
                <div className={'flex flex-col rounded-xl lg:w-1/4 shadow-xl bg-xblue p-6'}>
                    <div className={'flex flex-col'}>
                        <div className={'flex justify-between'}>
                            <div className={'flex'}>
                                <div className={'h-12 w-12 rounded-full'}>
                                    <Image src={'/images/woman.png'} width={100} height={100}/>
                                </div>
                                <div className={'ml-2'}>
                                    <p className={'text-xl font-poppins'}>Juliana Gerardi</p>
                                    <p className={'text-sm'}>Kaiserslautern, Deutschland</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={'flex justify-end mt-4'}>
                        <p>4.5/5</p>
                        <div className={'mt-1 ml-2'}>
                            <AiFillStar/>
                        </div>
                    </div>
                    <p className={'mt-1'}>“Ich war erst 23 Jahre alt als ich das erste Mal Knieprobleme bekam. Dass
                        diese Schmerzen in den Schuhen entstehen können, hätte ich nie gedacht. Mit der anschaulichen
                        3D-Darstellung und der verständlichen Erklärung konnte ich die Analyse sehr gut nachvollziehen
                        .”</p>
                </div>
            </div>
        </div>

    )
}
export default Customers
