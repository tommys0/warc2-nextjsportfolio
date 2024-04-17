import Image from "next/image";

export default function RecentProject({ image, alt, width, height, name, date, city, service, customClass }) {
    return (
        <main>
            <div className={customClass}>
                <Image
                    src={image}
                    alt={alt}
                    width={width}
                    height={height}
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="center"
                />
            </div>
            <div className={'flex flex-row justify-between w-full h-full p-5 bg-white rounded-3xl my-5 text-left'}>
                <p className={'w-1/2 font-thin text-4xl'}>{name}</p>
                <div className={'text-left font-light w-1/2'}>
                    <p className={'text-sm mt-2 mb-1'}>DATE</p>
                    <p className={'text-xl'}>{date}</p>
                    <p className={'text-sm mt-2 mb-1'}>CITY</p>
                    <p className={'text-xl'}>{city}</p>
                    <p className={'text-sm mt-2 mb-1'}>SERVICE</p>
                    <p className={'text-xl'}>{service}</p>
                </div>
            </div>
        </main>
    );
}
