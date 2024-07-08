import React from 'react';
import Carousel from '@/components/carousel';

export default function PostLaunch() {
  let slides = [
    "/sam/sam-up-3-large.png",
    "/sam/sam-careers-flow.png"
  ]
  let slides_goals = [
    "/sam/goals-1.png",
    "/sam/goals-2.png"
  ]
  return (
    <section 
    className="
      max-w
      sm:pb-20
      
      h-auto
      bg-violet-100"
    >
      <h2 className="
      text-neutral-950 text-2xl sm:text-5xl font-medium capitalize pt-16 text-center">
        Post Launch
      </h2>
      <div className='sm:mx-10 text-neutral-950 place-content-center px-10 m'>
        <p className='my-7 leading-relaxed text-justify sm:text-xl'>
            Después de la implementación en producción, el análisis de los datos recopilados de usuarios reales proporcionó las siguientes percepciones:
        </p>
        <p className='leading-relaxed text-justify sm:text-xl'>
            <span className='font-bold'>1. Identificación de un Grupo de Usuarios Inesperado: </span>
        </p>
        <p className='leading-relaxed text-justify sm:text-xl'>
            Descubrimos un segmento de usuarios que visitaban el sitio principalmente para explorar oportunidades laborales. Estos usuarios interactuaron con SAM para consultar sobre posiciones disponibles, información salarial y consejos para prepararse para entrevistas técnicas.
        </p>
        <p className='leading-relaxed text-justify sm:text-xl'>
            Acciones Tomadas: Creamos una persona detallada para este grupo, mapeamos posibles flujos de conversación y desarrollamos fuentes de datos para proporcionar información relevante.
        </p>
        <div className='w-[70%] m-auto my-8'>
            <Carousel slides={slides}/>
        </div>
        <p className='leading-relaxed text-justify sm:text-xl'>
            <span className='font-bold'>2. Requisito de Mensaje de Bienvenida: </span>
        </p>
        <p className='leading-relaxed text-justify sm:text-xl'>
            Hubo una clara necesidad de un mensaje de bienvenida para ayudar a los usuarios a entender cómo SAM podría ayudarles. A pesar de esto, los interesados decidieron no agregar el mensaje.
        </p>

        <p className='leading-relaxed text-justify sm:text-xl mt-5'> 
            <span className='font-bold'>3. Mejora en Ayudas Visuales para la Navegación:</span>
        </p>
        <p className='leading-relaxed text-justify sm:text-xl'>
            Los usuarios necesitaban más ayudas visuales para navegar mejor por el sitio. Los datos del mapa de calor revelaron que los usuarios estaban buscando elementos clicables en todo el sitio, lo que indica confusión sobre la navegación.
        </p>
        <p className='leading-relaxed text-justify sm:text-xl'>
            Acciones Futuras: Este comportamiento fue anticipado, por lo tanto, resaltó la necesidad de una guía visual mejorada.
        </p>
      </div>
    </section>
    
  )
}
