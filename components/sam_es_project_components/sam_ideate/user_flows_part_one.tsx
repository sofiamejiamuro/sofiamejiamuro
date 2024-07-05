import React from 'react';
import Image from "next/image";
import SamDifferencesMobile from './sam_differences_mobile';
import Carousel from '@/components/carousel';

export default function UserFlowsPartOne() {

  let slides = [
    "/sam/sam-differences-1.png",
    "/sam/sam-differences-2.png",
  ]

  return (
    <div>
      <h2 className='text-lg sm:text-3xl font-semibold'> 
      User Conversational Flows 
      </h2>
      <h3 className='mt-3 sm:mt-6 sm:text-2xl font-semibold'> 
      Las implicaciones de un asistente virtual impulsado por un LLM
      </h3>
      <p className='my-3 leading-relaxed text-justify sm:text-xl'>
      Crear flujos conversacionales para herramientas no generativas como DialogFlow en comparación con herramientas generativas como ChatGPT implica varias diferencias y similitudes. 
      Aquí, una comparación detallada:
      </p>
      <div className='w-[70%] m-auto my-5'>
        <Carousel slides={slides}/>
      </div>
      
      <p className="my-3 leading-relaxed text-justify sm:text-xl">        
      Se abordó más sobre este tema en esta conferencia. 
        <span className='italic'> Does the conversational design change when implementing a large language model (LLM) in a chatbot? (es){"   "}</span>
          <a
            className='hover:underline text-violet-900'
            href="https://www.youtube.com/watch?v=hOSfF1P6QBo"
            target="_blank"
          >Click here to watch video.</a>
      </p>
      <SamDifferencesMobile />
    </div>
  )
}
