import React from 'react';
import Image from "next/image";
import Carousel from '@/components/carousel';

export default function SamDefine() {
  let slides = [
    "/sam/sam-up-1-large.png",
    "/sam/sam-up-2-large.png",
  ]
  
  return (
    <div className='
    mx-10 sm:mx-12 text-neutral-950 
    place-content-center sm:p-10 mb-4'
    id="discover">
    <h1 className='text-xl sm:text-3xl font-semibold mt-6 mb-4 sm:mb-10'>Discover</h1>
    <h2 className='sm:text-2xl font-semibold'> User Persona</h2>
    <p className='my-3 leading-relaxed text-justify sm:text-xl'>
    Al adentrarnos en el proceso de diseño de conversaciones, es crucial entender la diversa audiencia a la que estamos atendiendo. Al comprender y diseñar conversaciones con estas personas en mente, podemos asegurar que nuestras soluciones satisfacen de manera efectiva las diversas necesidades y preferencias de nuestra audiencia objetivo.
    </p>
    <div className='w-[70%] m-auto my-5'>
      <Carousel slides={slides}/>
    </div>

    <h2 className='sm:text-2xl font-semibold mt-7'> Cómo abordar estos perfiles </h2>
    <ul className='
        leading-relaxed text-justify sm:text-xl 
        list-disc list-inside my-3'>
      <li>Elaborar mensajes concisos priorizando la claridad y evitando jerga para respetar su tiempo.</li>
      <li>Destacar beneficios específicos del asistente virtual: abordar desafíos, aumentar la eficiencia y fomentar la innovación.</li>
      <li>Respaldar afirmaciones con estudios de caso y datos para generar confianza en la efectividad del asistente virtual.</li>
      <li>Simplificar las interacciones, ofreciendo información detallada como opcional para comprender la propuesta de valor principal.</li>
      <li>Reforzar la seguridad y confiabilidad del asistente virtual en cada interacción.</li>
      <li>Enfatizar la adaptabilidad del asistente virtual para satisfacer las necesidades cambiantes de las startups y el panorama tecnológico.</li>
      <li>Ofrecer oportunidades de networking y conocimientos de la industria para facilitar el aprendizaje y las conexiones.</li>
      <li>Mantener una comunicación transparente, proporcionando acceso fácil a información completa sobre las capacidades del asistente virtual.</li>
    </ul>
    <h2 className='sm:text-2xl font-semibold mt-7'> Topics Mapping </h2>
    <p className='my-3 leading-relaxed text-justify sm:text-xl'>
    Definir el conjunto de temas que el asistente virtual debe conocer mínimamente (MVK), es decir, mapeando qué solicitudes entenderá y qué respuestas podrá proporcionar. Así como cuáles no podrá.
    </p>
    <div className='flex justify-center items-center mt-6'>
      <Image 
        src="/sam/topics_mapping.png"
        quality={"100"}
        width={"800"}
        height={"510"}
        alt="Sam phone"
        className='max-w'
        style={{
          borderRadius: "10px",
        }}>
      </Image>
    </div>
  </div>

  )
}
