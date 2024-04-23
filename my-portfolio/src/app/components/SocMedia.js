import InstagramIcon from "@/app/components/InstagramIcon";
import TwitterIcon from "@/app/components/TwitterIcon";
import Image from "next/image";

export default function SocMedia() {
    return (
        <main className={'flex flex-row gap-3'}>
            <Image src={'/InstagramIcon.png'} alt={'instagram icon'} width={30} height={30}/>
            <Image src={'/TwitterIcon.png'} alt={'instagram icon'} width={30} height={30}/>
        </main>
    )
}