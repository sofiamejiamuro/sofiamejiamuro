import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import BackButton from '@/components/back_button';


export default function VoiceProjects() {
  return (
    <main className='bg-neutral-100 pt-12 sm:py-28 mb-10'> 
      <BackButton />
      <h1 className='
      text-center text-xl sm:text-5xl font-semibold 
      mt-4 mb-4 sm:mb-10'>
        VOICE PROJECTS</h1>
      {/**danger planet */}
      <section
        className='bg-violet-100 m-10'
        id='planeta-peligro'>
        <Link 
          href="/danger-planet-challenge"
          className='flex flex-row hover:bg-[#CDCBFE]'>
          <div className='w-2/5 grid place-content-center p-3.5'>
            <h2 className="text-2xl font-bold">Multimodal App</h2>
            <p className="text-gray-700 text-xl">Google Action</p>
            <br></br>
            <p className="text-gray-700 text-xl">
              Designed as a supplement to the education received in school related to civil protection.
            </p>
          </div>
          <div className='w-3/4'>
            <Image 
            src="/challenges/danger-planet-bg.png"
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
        id='box-trainer'>
        <Link 
        href="/boxing"
        className='flex flex-row hover:bg-[#CDCBFE]'>
          <div className='w-3/4'>
            <Image 
            src="/voice/box-trainer-bg.png"
            quality={"100"}
            width={"1000"}
            height={"900"}
            alt="lessons learned"
            style={{
            
            }}>
            </Image> 
          </div>
          <div className='w-2/5 grid place-content-center p-3.5'>
            <h2 className="text-2xl font-bold">Multimodal App</h2>
            <p className="text-gray-700 text-xl">Alexa Skill</p>
            <br></br>
            <p className="text-gray-700 text-xl">
            An Skill that serves as a boxing coach for guiding and training users in boxing techniques, 
            improving their physical condition, and motivating them during their workouts.
            </p>
            <p className="text-gray-700 text-xl mt-4 italic">Work in porgress...</p>
          </div>
        </Link>
      </section>
      {/**recipes */}
      <section
        className='bg-violet-100 m-10'
        id='recipes'>
          <Link 
            href="/recipes"
            className='flex flex-row hover:bg-[#CDCBFE]'>
            <div className='w-2/5 grid place-content-center p-3.5'>
              <h2 className="text-2xl font-bold">Multimodal App</h2>
              <p className="text-gray-700 text-xl">Alexa Skill</p>
              <br></br>
              <p className="text-gray-700 text-xl">
                Creating new channels of interaction with the brand (food company) based on the use of its products 
                in recipes and the implementation of a skill powered by a Large Language Models.
              </p>
              <p className="text-gray-700 text-xl mt-4 italic">Work in porgress...</p>
            </div>
            <div className='w-3/4'>
              <Image 
              src="/voice/recipes-bg.png"
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
    </main>
  )
}
