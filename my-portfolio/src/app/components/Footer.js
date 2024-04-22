import LogoComp from "@/app/components/LogoComp";
import Link from "next/link";

export default function Footer({ address, phone, contactSupport }) {
    return (
        <main className={'w-full bg-customGray text-white font-light'}>
            <div className={'w-10/12 mx-auto pt-10 pb-3'}>
                <LogoComp color={'white'}></LogoComp>
            </div>
            <div className={'w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between pb-10'}>
                <div>
                    <div>
                        <p>{address}</p>
                        <p>{phone}</p>
                        <div className={'h-10'}></div>
                        <p>{contactSupport}</p>
                    </div>
                </div>
                <div className={'flex flex-row gap-10'}>
                    <div >
                        <Link href="/">
                            <p>HOME</p>
                        </Link>
                        <Link href={'/confis/portfolio'} className={'p-10'}>
                            <p>PORTFOLIO</p>
                        </Link>
                        <Link href={'/confis/about'}>
                            <p>ABOUT</p>
                        </Link>
                    </div>
                    <div>
                        <Link href="/confis/team">
                            <p>TEAM</p>
                        </Link>
                        <Link href={'/confis/services'} className={'p-10'}>
                            <p>SERVICES</p>
                        </Link>
                        <Link href={'/confis/contact'}>
                            <p>CONTACT</p>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}