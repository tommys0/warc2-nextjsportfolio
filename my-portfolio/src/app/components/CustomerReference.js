import Image from "next/image";

export default function CustomerReference({ num, referenceText, pfp, name, position }) {
    return (
        <div>
            {/* SVG 473 NEEDED*/}
            <p>{referenceText}</p>
            <Image src={pfp} alt={'profile picture'} width={50} height={50}></Image>
            <p>{name}</p>
            <p>{position}</p>
        </div>
    );
}