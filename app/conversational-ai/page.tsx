import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import BackButton from '@/components/back_button';


export default function ConversationalAI() {
  return (
    <main className='bg-neutral-100 pt-12 sm:py-28 mb-10'> 
      <BackButton />
      <h1 className='
      text-center text-xl sm:text-5xl font-semibold 
      mt-4 mb-4 sm:mb-10'>
        CONVERSATIONAL AI</h1>
      {/**danger planet */}
      <section
        className='bg-violet-100 m-10'
        id='sam'>
        <Link 
          href="/sam-virtual-assistant"
          className='flex flex-row hover:bg-[#CDCBFE]'>
          <div className='w-2/5 grid place-content-center p-3.5'>
            <h2 className="text-2xl font-bold">SAM</h2>
            <p className="text-gray-700 text-xl">AI Agent</p>
            <br></br>
            <p className="text-gray-700 text-xl">
            SAM (Santex AI Member) is an intelligent virtual assistant for a technology company specialized in digital transformation.
            </p>
          </div>
          <div className='w-3/4'>
            <Image 
            src="/sam/sam-cover.png"
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
      {/**box trainer */}
      <section
        className='bg-violet-100 m-10'
        id='talleres'>
        <Link 
        href="/club-atletico-talleres-en"
        className='flex flex-row hover:bg-[#CDCBFE]'>
          <div className='w-3/4'>
            <Image 
            src="/talleres/alvi-cover.png"
            quality={"100"}
            width={"1000"}
            height={"900"}
            alt="lessons learned"
            style={{
            
            }}>
            </Image> 
          </div>
          <div className='w-2/5 grid place-content-center p-3.5'>
            <h2 className="text-2xl font-bold">ALVI</h2>
            <p className="text-gray-700 text-xl">AI Agent</p>
            <br></br>
            <p className="text-gray-700 text-xl">
            Alvi is a friendly and passionate viratual assitant, 
            ready to answer all questions related to Club Atlético Talleres.
            </p>
            <p className="text-gray-700 text-xl mt-4 italic">Work in progress...</p>
          </div>
        </Link>
      </section>
    </main>
  )
}
