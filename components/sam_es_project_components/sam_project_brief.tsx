
import React from 'react';
import Image from "next/image";

export default function SamBrief() {
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
        SAM - Santex Virtual Assistant
        </h2>
        <div className='
          grid grid-cols-1 sm:grid-cols-2 sm:mt-10
          
        ' >
          <div className='
          
            rounded-lg  place-content-center '
          >
            <Image
              src="/sam_phone_mockup_2.png"
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
              SAM (Santex AI Member) el  <span className="font-bold text-neutral-950">asistente virtual inteligente</span> de una empresa de tecnología especializada en transformación digital.
              El objetivo de SAM <span className="font-bold text-neutral-950">responder preguntas relacionadas con Santex</span> ya sea sobre soluciones y servicios
              <span className="font-bold text-neutral-950 "> ayudar en la generación de clientes potenciales (leads) </span>
              a través de una experiencia conversacional inteligente, y discutir cómo las últimas tecnologías, conocimientos de la industria y noticias tecnológicas actuales se relacionan con los intereses del cliente.
            </p>
          </div>
        </div>
      </section>
  )
}
