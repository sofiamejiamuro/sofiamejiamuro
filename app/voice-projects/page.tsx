import React from 'react'
import Image from "next/image";
import Link from 'next/link';


export default function VoiceProjects() {
  return (
    <main className='bg-neutral-100 pt-12 sm:py-28 mb-10'> 
      <h1 className='
      text-center text-xl sm:text-5xl font-semibold 
      mt-4 mb-4 sm:mb-10'>
        VOICE PROJECTS</h1>
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
        id='recipes'>
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
