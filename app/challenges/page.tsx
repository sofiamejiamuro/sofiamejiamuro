import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import BackButton from '@/components/back_button';

export default function Challenges() {
  return (
    <main className='bg-neutral-100 pt-12 sm:py-28 mb-10'> 
      <BackButton/>
      <h1 className='
        text-center text-xl sm:text-5xl font-semibold 
        mt-4 mb-4 sm:mb-10'>
        CHALLENGES</h1>
        {/**NATIVA GLOBAL */}
      <section
        className='bg-violet-100 m-10'
        id='cielito-querido'>
        <Link 
        href="/cielito-querido"
        className='flex flex-row hover:bg-[#CDCBFE]'>
          <div className='w-3/4'>
            <Image 
            src="/challenges/cielito-cover.png"
            quality={"100"}
            width={"1000"}
            height={"900"}
            alt="lessons learned"
            style={{
            
            }}>
            </Image> 
          </div>
          <div className='w-2/5 grid place-content-center p-3.5'>
            <h2 className="text-2xl font-bold">Cielito Querido Café</h2>
            <p className="text-gray-700 text-xl">WhatsApp</p>
            <br></br>
            <p className="text-gray-700 text-xl">
              A bot to promote new coffee options
            </p>
          </div>
        </Link>
      </section>
       {/**travel bot */}
       <section
        className='bg-violet-100 m-10'
        id='travel-bot'>
        <Link 
        href="/travel-bot-challenge"  
        className='flex flex-row hover:bg-[#CDCBFE]'>
          <div className='w-2/5 grid place-content-center p-3.5'>
            <h2 className="text-2xl font-bold">Travel Bot</h2>
            <p className="text-gray-700 text-xl">Chatbot</p>
            <br></br>
            <p className="text-gray-700 text-xl">
            A bot to demonstrate understanding of chatbot functionalities and capabilities. 
            </p>
          </div>
          <div className='w-3/4'>
            <Image 
            src="/challenges/travel-bot.png"
            quality={"100"}
            width={"1000"}
            height={"900"}
            alt="lessons learned"
            style={{
            
            }}>
            </Image> 
          </div>
        </Link>
      </section>
      {/**NATIVA GLOBAL */}
      <section
        className='bg-violet-100 m-10'
        id='nativa-global'>
        <Link 
        href="/nativa-global-challenge"
        className='flex flex-row hover:bg-[#CDCBFE]'>
          <div className='w-3/4'>
            <Image 
            src="/challenges/nativa-global-bg.png"
            quality={"100"}
            width={"1000"}
            height={"900"}
            alt="lessons learned"
            style={{
            
            }}>
            </Image> 
          </div>
          <div className='w-2/5 grid place-content-center p-3.5'>
            <h2 className="text-2xl font-bold">4 Challenges</h2>
            <p className="text-gray-700 text-xl">API Integrations - Google AI - Security - Customer Service</p>
            <br></br>
            <p className="text-gray-700 text-xl">
              Feasibility, Integrations, Problem solving.
            </p>
          </div>
        </Link>
      </section>
      
    </main>
  )
}
