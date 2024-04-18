import './globals.css';
import Image from "next/image";
import Card from './components/card';
import RecentProject from "@/app/components/RecentProject";


export default function Page() {
    return (
        <main className="flex flex-col items-center justify-center mt-10">
            {/* Box part */}
            <div className={'w-10/12 flex flex-col md:flex-row gap-2 font-light'}>
                {/* Left side*/}
                <div className={'flex-1 flex flex-col'}>
                    <div className={'h-full bg-customLightGray rounded-3xl p-5 relative'}>
                        <p className={'text-7xl font-bolder'}>TIMELESS DESIGN</p>
                        <p className={'absolute bottom-0 inset-x-0 mb-5 ml-5 text-sm'}>Where vision meets precision,
                            elegance
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
                            height={300} className={'rounded-3xl'} />
                        <div
                            className={'absolute border border-solid border-white text-white bottom-2 rounded-3xl p-5 mx-2'}>
                            <p className="text-3xl mb-10">IT IS NOT POSSIBLE TO GO FORWARD WHILE LOOKING BACK.</p>
                            <button className="flex items-center mt-2 px-3 py-1 bg-white text-black rounded-full">
                                BOOK A CALL
                                <Image src={'/arrow.png'} alt={'arrow'} width={'20'} height={'20'} />
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
                        <button
                            className='flex items-center mt-2 px-3 py-1 bg-white text-black font-light rounded-full'>
                            ABOUT US
                            <Image src={'/arrow.png'} alt={'arrow'} width={'20'} height={'20'} />
                        </button>
                        <p className='absolute bottom-5 left-5 mr-3 text-4xl font-light'>¨A CHAIR IS A VERY DIFFICULT
                            OBJECT. A SKYSCRAPER IS ALMOST EASIER. THAT IS WHY CHIPPENDALE IS FAMOUS.¨</p>
                    </div>
                </div>
            </div>
            {/* Card section */}
            <div className='flex gap-2 my-20 font-light mx-20 justify-between w-10/12'>
                <Card
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                            <path
                                d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z" />
                        </svg>
                    }
                    name={'ADAPTABILITY'}
                    description={'Embracing change, our designs evolve with time, ensuring relevance and functionality in every architectural endeavor.'}
                ></Card>
                <Card
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                        </svg>
                    }
                    name={'QUALITY'}
                    description={'Crafted with precision, our commitment to quality transcends aesthetics, defining every detail of our architectural creations.'}
                ></Card>
                <Card
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                            <path d="M1 11v10h5v-6h4v6h5V11L8 6z" />
                            <path d="M10 3v1.97l7 5V11h2v2h-2v2h2v2h-2v4h6V3H10zm9 6h-2V7h2v2z" />
                        </svg>
                    }
                    name={'CLIENT-CENTRIC'}
                    description={'Placing your vision at the forefront, we design spaces that not only meet expectations but exceed them, making your dreams a reality.'}
                ></Card>
            </div>
            {/* Recent Project*/}
            <div className='bg-customLightGray w-full text-center'>
                <div className='w-10/12 mx-auto'>
                    <div className='flex justify-between my-10'>
                        <p className='text-4xl'>RECENT PROJECTS</p>
                        <button
                            className='flex items-center mt-2 px-3 py-1 bg-customDarkGray text-white font-light rounded-full hover:cursor-pointer'>
                            All Projects
                            <Image src={'/arrow.png'} alt={'arrow'} width={'20'} height={'20'} className='invert' />
                        </button>
                    </div>
                    <div className=''>
                        {/* CARD 1 */}
                        <div className=''>
                            <RecentProject
                                image={'/project1.webp'}
                                alt={'project1'}
                                width={3000}
                                height={3}
                                name={'INNOVATIVE BALANCE'}
                                date={'JAN 26, 2024'}
                                city={'BERLIN'}
                                service={'COMMERCIAL DESIGN'}
                                customClass={'h-96 overflow-hidden rounded-3xl'}
                            />
                            <RecentProject
                                image={'/project2.webp'}
                                alt={'project2'}
                                width={3000}
                                height={3}
                                name={'STEEL SYMPHONY'}
                                date={'JAN 1, 2024'}
                                city={'LONDON'}
                                service={'INTERIOR DESIGN'}
                                customClass={'h-96 overflow-hidden rounded-3xl'}
                            />
                            <RecentProject
                                image={'/project3.webp'}
                                alt={'project3'}
                                width={3000}
                                height={3}
                                name={'MODERNIST MARVELS'}
                                date={'OCT 4, 2023'}
                                city={'NEW YORK'}
                                service={'COMMERCIAL DESIGN'}
                                customClass={'h-96 overflow-hidden rounded-3xl'}
                            />
                            <RecentProject
                                image={'/project4.webp'}
                                alt={'project4'}
                                width={3000}
                                height={3}
                                name={'FORM FOLLOWS FUNCTION'}
                                date={'JAN 28, 2024'}
                                city={'NEW YORK'}
                                service={'COMMERCIAL DESIGN'}
                                customClass={'h-96 overflow-hidden rounded-3xl'}
                            />
                        </div>

                    </div>
                </div>
            </div>
            {/* Full width 2 boxes */}
            <div className='w-full'>
                <div className='w-10/12 flex justify-between mx-auto my-10 gap-2'>
                    <div className='bg-customGray w-5/12 p-5 rounded-3xl text-white'>
                        <p className='font-light text-xl'>DONT BE SHY</p>
                        <p className='text-4xl my-5'>WE WOULD LOVE HEARING FROM YOU</p>
                    </div>
                    <div className='border border-solid border-black w-full p-5 rounded-3xl'>
                        <div className={'mt-10'}>
                            <p className={'text-4xl mb-3'}>DROP US A LINE ANYTIME</p>
                            <div className={'bottom-5 left-5'}>
                                <label className={'flex'}>
                                    <input type={"text"} placeholder={'NAME'}
                                        className={'w-full bg-customGray p-4 placeholder-white rounded-full font-bolder mr-1'}></input>
                                    <input type={"text"} placeholder={'EMAIL'}
                                        className={'w-full bg-customGray p-4 placeholder-white rounded-full font-bolder ml-1'}></input>
                                </label>
                            </div>
                            <button className={'w-full bg-customDarkGray py-4 text-white rounded-full font-bolder mt-2'}>
                                SEND
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className="wrapper grid grid-cols-3 gap-4 mb-4">
                    <img src={'/image1.webp'} alt={'image with house'} className="w-60 h-60 rounded-3xl object-cover"></img>
                    <img src={'/image2.webp'} alt={'image with house'} className="w-80 h-60 rounded-3xl object-cover"></img>
                    <img src={'/image3.webp'} alt={'image with house'} className="w-60 h-60 rounded-3xl object-cover"></img>
                </div>
                <div className="wrapper grid grid-cols-3 gap-4 mb-4">
                    <img src={'/image4.webp'} alt={'image with house'} className="w-60 h-60 rounded-3xl object-cover"></img>
                    <img src={'/image5.webp'} alt={'image with house'} className="w-60 h-60 rounded-3xl object-cover"></img>
                    <img src={'/image6.webp'} alt={'image with house'} className="w-80 h-60 rounded-3xl object-cover"></img>
                </div>
                <div className="wrapper grid grid-cols-3 gap-4 mb-4">
                    <img src={'/image7.webp'} alt={'image with house'} className="w-80 h-60 rounded-3xl object-cover"></img>
                    <img src={'/image8.webp'} alt={'image with house'} className="w-60 h-60 rounded-3xl object-cover"></img>
                    <img src={'/image9.webp'} alt={'image with house'} className="w-60 h-60 rounded-3xl object-cover"></img>
                </div>
            </div>
            <div className='w-full bg-customGray gap-2 font-light'>
                <div className='w-3/12 aspect-w-1 aspect-h-1 bg-white my-20 p-5 rounded-3xl'>
                    <p className={'text-5xl'}>FAQ</p>
                    <p className={'text-xl my-7'}>If any other question comes to mind, please just put in contact with us and let us know.</p>
                    <button className={'flex items-center mt-2 px-3 py-1 bg-customDarkGray text-white font-light rounded-full hover:cursor-pointer'}>
                        BOOK A CALL
                        <Image src={'/arrow.png'} alt={'arrow'} width={'20'} height={'20'} className={'invert'}/>
                    </button>
                </div>
                <div className=''></div>
            </div>
        </main>
    )
}
