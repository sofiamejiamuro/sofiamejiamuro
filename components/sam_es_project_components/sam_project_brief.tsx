
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
        SAM - Santex AI Virtual Assistant
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
            <p className='sm:mt-2 leading-relaxed text-justify text-lg sm:text-2xl'>
            SAM (Santex AI Member) es un <span className="font-bold text-neutral-950 ">asistente virtual inteligente</span> para una empresa de tecnología especializada en transformación digital. 
            Su objetivo es <span className="font-bold text-neutral-950 ">responder preguntas sobre Santex</span> y sus servicios, discutir tecnologías y 
            <span className="font-bold text-neutral-950 "> generar leads mediante una experiencia conversacional inteligente.</span>
            </p>
          </div>
        </div>
      </section>
  )
}
