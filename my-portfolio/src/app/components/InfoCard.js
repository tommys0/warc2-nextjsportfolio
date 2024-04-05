import Link from "next/link";

const InfoCard = ({ name, date, city, service }) => {
    return (
        <main>
            <Link href="/">
                <div className='flex w-full h-10'>
                    {/* LEFT SIDE*/}
                    <div className='w-1/2'>
                        <p>{name}</p>
                    </div>

                    {/* RIGHT SIDE*/}
                    <div className='w-1/2'>
                        <p>DATE</p>
                        <p>{date}</p>
                        <p>CITY</p>
                        <p>{city}</p>
                        <p>SERVICE</p>
                        <p>{service}</p>
                    </div>
                </div>
            </Link>
        </main>
    )
}

export default InfoCard()