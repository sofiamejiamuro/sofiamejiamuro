import React from 'react'
import ToBeUpdated from '@/components/to_be_updated';
import BackButton from '@/components/back_button';
import { BsLinkedin } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { PiCalendarHeartFill } from "react-icons/pi";
import Link from "next/link";

export default function Contact() {
  return (
    <main className=' pt-12 sm:py-28 mb-10'> 
      <BackButton/>
      <div className='flex place-content-center sm:mb-40 sm:mt-40'>
        <div
          id=""
          className="  
          bg-gray-800 bg-opacity-10 backdrop-filter backdrop-blur-xl 
          sm:h-96 p-12 w-[60%] rounded-2xl
          sm:mb-0 sm:flex place-content-center "
        >
          <a
          className="
            bg-gray-600 bg-opacity-20 p-4 m-4 text-neutral-800 border-none
            hover:text-neutral-800 flex items-center 
            gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 
            transition cursor-pointer text-8xl "
          href="https://www.linkedin.com/in/sofiamejiamuro/"
          target="_blank"
            >
              <BsLinkedin />
            </a>
            <a
            className="
                bg-gray-600 bg-opacity-20 p-4 m-4 text-neutral-800 border-none
                hover:text-neutral-800 flex items-center 
                gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 
                transition cursor-pointer text-8xl "
            href="https://adplist.org/mentors/sofia-mejia?session=23901-mentorship-session"
            target="_blank"
            >
              <PiCalendarHeartFill />
            </a>
            <a
            className="
                bg-gray-600 bg-opacity-20 p-4 m-4 text-neutral-800 border-none
                hover:text-neutral-800 flex items-center 
                gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 
                transition cursor-pointer text-8xl "
            href="mailto:sofiamejiamuro@gmail.com"
            >
              <MdMail />
            </a>
          </div>   
      </div>
    </main>
  )
}