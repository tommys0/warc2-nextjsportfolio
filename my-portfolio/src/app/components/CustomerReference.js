import Image from "next/image";

export default function CustomerReference({ referenceText, pfp, name, position }) {
    return (
        <div className="p-5 relative border border-solid rounded-3xl border-white hover:border-black transition-colors duration-300 ease-in-out h-[400px] overflow-hidden w-[300px] flex flex-col justify-between">
                <p className="text-5xl font-bold">473.</p>

            <div className="flex-grow text-left text-customGray my-5 overflow-auto">
                <p>{referenceText}</p>
            </div>

            <div className="flex flex-col">
                <div className="rounded-full overflow-hidden w-12 h-12">
                    <Image
                        src={pfp}
                        alt="Profile picture"
                        width={48}
                        height={48}
                        layout="responsive"
                        className="rounded-full"
                    />
                </div>
                <p className={'my-1'}>{name}</p>
                <p className="text-sm text-customGray font-light">{position}</p>
            </div>
        </div>
    );
}
