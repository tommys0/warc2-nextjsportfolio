import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Card = ({ icon, name, description }) => {
  return (
    <Link href="/path/to/destination">
      <div className='p-5 relative border border-solid rounded-lg border-white hover:border-black transition-colors duration-300 ease-in-out block cursor-pointer'>
        {/* ICON */}
        <div>{icon}</div>
        {/* NAME */}
        <h3 className='text-xl my-5'>{name}</h3>
        {/* DESCRIPTION */}
        <p className='mb-10 flex relative text-'>{description}</p>
        {/* BUTTON */}
        <button className='flex absolute bottom-5 left-5 items-center mt-2 px-3 py-1 bg-customDarkGray text-white font-light rounded-full'>
          Learn More
          <Image src={'/arrow.png'} alt={'arrow'} width={'20'} height={'20'}/>
        </button>
      </div>
    </Link>
  );
};

export default Card;
