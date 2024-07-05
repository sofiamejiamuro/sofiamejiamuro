import React from 'react';
import Image from "next/image";
import Carousel from '@/components/carousel';

export default function TestDifferences() {
  let slides = [
    "/sam/sp-testing-1.png",
    "/sam/sp-testing-2.png",
  ]

  return (
    <div>
      <h1 className='tex-lg sm:text-3xl font-semibold sm:mb-10'>Testing</h1>
      <p className='my-3 leading-relaxed text-justify sm:text-xl'>
    Al igual que en el proceso de diseño de la experiencia conversacional, el proceso de prueba debió abordarse comprendiendo la diferencia entre tecnologías no generativas y generativas.
      </p>
      <p className='my-3 leading-relaxed text-justify sm:text-xl'>
          Al comparar las pruebas y evaluaciones de un chatbot impulsado por una herramienta no generativa como Dialogflow con uno impulsado por un modelo de lenguaje grande (LLM) como GPT-4, existen varias diferencias clave. Estas se refieren a aspectos como la metodología de prueba, las métricas de rendimiento y la naturaleza de las interacciones.
      </p>
      <div className='w-[70%] m-auto my-5'>
        <Carousel slides={slides}/>
      </div>
    </div>
  )
}
