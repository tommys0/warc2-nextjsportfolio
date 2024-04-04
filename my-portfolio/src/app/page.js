import './globals.css';
import Image from "next/image";
import Card from './components/card';

export default function Page() {
    return (
        <main className="flex flex-col items-center justify-center mt-10">
            {/* Box part */}
            <div className={'w-10/12 flex flex-col md:flex-row gap-2 font-light'}>
                {/* Left side*/}
                <div className={'flex-1 flex flex-col'}>
                    <div className={'h-full bg-customLightGray rounded-3xl p-5 relative'}>
                        <p className={'text-7xl font-bolder'}>TIMELESS DESIGN</p>
                        <p className={'absolute bottom-0 inset-x-0 mb-5 ml-5 text-sm'}>Where vision meets precision, elegance
                            transcends boundaries. Explore a world of timeless architecture and inspiring interiors
                            crafted with unparalleled artistry.</p>
                    </div>
                    <div className={'flex flex-grow gap-2 mt-2'}>
                        <div className={'flex-grow bg-customOrange text-white p-5 rounded-3xl'}>
                            <p className={'text-5xl'}>01</p>
                            <p className={'mt-2 mb-2 text-xl'}>CONCEPT</p>
                            <p className={'text-sm'}>Explore a world of timeless architecture and inspiring interiors
                                crafted with unparalleled artistry.</p>
                        </div>
                        <div className={'flex-grow bg-customGray text-white p-5 rounded-3xl'}>
                            <p className={'text-5xl'}>02</p>
                            <p className={'mt-2 mb-2 text-xl'}>DESIGN</p>
                            <p className={'text-sm'}>Discover the art of architectural precision and the essence of
                                sophisticated design principles.</p>
                        </div>
                    </div>
                </div>
                {/* Right side */}
                <div className={'flex-1 flex justify-center relative'}>
                    <div className={'max-w-full relative'}>
                        <Image src={'/gray-house.webp'} alt={'gray house'} layout={'responsive'} width={300}
                               height={300} className={'rounded-3xl'}/>
                        <div
                            className={'absolute border border-solid border-white text-white bottom-2 rounded-3xl p-5 mx-2'}>
                            <p className="text-3xl mb-10">IT IS NOT POSSIBLE TO GO FORWARD WHILE LOOKING BACK.</p>
                            <button className="flex items-center mt-2 px-3 py-1 bg-white text-black rounded-full">
                                BOOK A CALL
                                <Image src={'/arrow.png'} alt={'arrow'} width={'20'} height={'20'}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Full width 2 boxes */}
            <div className='w-full bg-customLighterGray mt-10'>
                <div className='w-10/12 flex justify-between mx-auto my-8 gap-2'>
                    <div className='bg-customGray w-5/12 p-5 rounded-3xl text-white'>
                        <p className='font-light mb-40 text-xl'>LEARN HOW WE THINK</p>
                        <p className='text-4xl'>LUDWIG MIES VAN DER ROHE</p>
                    </div>
                    <div className='border relative border-solid border-black w-full text-black p-5 rounded-3xl'>
                        <button className='flex items-center mt-2 px-3 py-1 bg-white text-black font-light rounded-full'>
                            ABOUT US
                            <Image src={'/arrow.png'} alt={'arrow'} width={'20'} height={'20'}/>
                        </button>
                        <p className='absolute bottom-5 left-5 mr-3 text-4xl font-light'>¨A CHAIR IS A VERY DIFFICULT OBJECT. A SKYSCRAPER IS ALMOST EASIER. THAT IS WHY CHIPPENDALE IS FAMOUS.¨</p>
                    </div>
                </div>
            </div>
            
        </main>
    )
}
