
import React from 'react';
import Image from "next/image";

export default function AlviBriefEs() {
  return (
    <section 
        className="
          mb-0 max-w p-10
          leading-8 sm:mb-10
          scroll-mt-28 
          h-auto
         "
      >
        <h2 className="
        text-neutral-950 text-3xl sm:text-5xl font-medium capitalize mb-8 text-center">
        Alvi - Virtual Assistant
        </h2>
        <div className='
          grid grid-cols-1 sm:grid-cols-2
        ' >
          <div className='
            rounded-lg  place-content-center '
          >
            <Image
              src="/talleres/alvi-brief.png"
              quality={"100"}
              width={"1000"}
              height={"510"}
              alt="Sam phone"
              className='max-w'
            >
            </Image>
          </div>
          <div className='
         
            rounded-lg  text-neutral-950 
            place-content-center sm:p-12'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-10'>Brief</h1>
            <p className='sm:mt-2 leading-relaxed text-justify text-lg sm:text-2xl'>
            Alvi es un <span className="font-bold text-neutral-950">apasionado hincha del Club Atlético Talleres de Córdoba</span>, 
            uno de los equipos de fútbol más queridos y seguidos en Argentina.
            Este asistente virtual está diseñado para <span className="font-bold text-neutral-950">conectar con los socios del club</span> y brindarles una experiencia interactiva y personalizada. 
            Alvi no solo responde preguntas y resuelve inquietudes, sino que también juega un papel crucial en 
            <span className="font-bold text-neutral-950"> promover la afiliación al club, fomentando un sentido de comunidad y pertenencia</span> entre los aficionados.
            </p>
          </div>
        </div>
      </section>
  )
}