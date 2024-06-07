import React from 'react'
import ToBeUpdated from '@/components/to_be_updated';
import Image from "next/image";
import Link from 'next/link';

export default function Challenges() {
  return (
    <main className='bg-neutral-100 pt-12 sm:py-28 mb-10'> 
      <h1 className='
        text-center text-xl sm:text-5xl font-semibold 
        mt-6 mb-4 sm:mb-10'>
        VOICE PROJECTS</h1>
      <section
        className='bg-violet-100 m-10'
        id='nativa-global'>
        <Link 
        href="/recipes"
        className='flex flex-row hover:bg-[#CDCBFE]'>
          <div className='w-3/4'>
            <Image 
            src="/challenges/nativa-global-bg.png"
            quality={"100"}
            width={"1000"}
            height={"900"}
            alt="lessons learned"
            style={{
            borderRadius: "10px",
            }}>
            </Image> 
          </div>
          <div className='w-2/5 place-content-center p-3.5'>
            <h2 className="text-2xl font-bold mb-4">Título del Texto</h2>
            <p className="text-gray-700">
                Este es un párrafo de ejemplo. Puedes agregar aquí el contenido que desees.
                Tailwind CSS facilita la creación de diseños flexibles y modernos con utilidades predefinidas.
            </p>
          </div>
        </Link>
      </section>
      <section
        className='bg-violet-100 m-10'
        id='planeta-peligro'>
          <Link 
            href="/recipes"
            className='flex flex-row hover:bg-[#CDCBFE]'>
            <div className='w-2/5 place-content-center p-3.5'>
              <h2 className="text-2xl font-bold mb-4">Multimodal App</h2>
              <p className="text-gray-700">
                  Este es un párrafo de ejemplo. Puedes agregar aquí el contenido que desees.
                  Tailwind CSS facilita la creación de diseños flexibles y modernos con utilidades predefinidas.
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
              borderRadius: "10px",
              }}>
              </Image> 
            </div>
          </Link>   
      </section>
      <section
        className='bg-violet-100 m-10'
        id='uber'>
        <Link 
        href="/recipes"  
        className='flex flex-row hover:bg-[#CDCBFE]'>
          <div className='w-3/4'>
            <Image 
            src="/challenges/travel-bot.png"
            quality={"100"}
            width={"1000"}
            height={"900"}
            alt="lessons learned"
            style={{
            borderRadius: "10px",
            }}>
            </Image> 
          </div>
          <div className='w-2/5 place-content-center p-3.5'>
            <h2 className="text-2xl font-bold mb-4">Título del Texto</h2>
            <p className="text-gray-700">
                Este es un párrafo de ejemplo. Puedes agregar aquí el contenido que desees.
                Tailwind CSS facilita la creación de diseños flexibles y modernos con utilidades predefinidas.
            </p>
          </div>
        </Link>
      </section>
      <section
        className='bg-violet-100 m-10'
        id='guru-de-viaje'>
        <Link 
        href="/recipes"
        className='flex flex-row hover:bg-[#CDCBFE]'>
          <div className='w-2/5 place-content-center p-3.5'>
            <h2 className="text-2xl font-bold mb-4">Título del Texto</h2>
            <p className="text-gray-700">
                Este es un párrafo de ejemplo. Puedes agregar aquí el contenido que desees.
                Tailwind CSS facilita la creación de diseños flexibles y modernos con utilidades predefinidas.
            </p>
          </div>
          <div className='w-3/4 '>
            <Image 
            src="/challenges/uber-bg.png"
            quality={"100"}
            width={"1000"}
            height={"900"}
            alt="lessons learned"
            style={{
            borderRadius: "10px",
            }}>
            </Image> 
          </div>
        </Link> 
      </section>
    </main>
  )
}
