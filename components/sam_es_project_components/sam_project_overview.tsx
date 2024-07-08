import React from 'react';
import SectionHeading from '@/components/section-heading';
import Image from "next/image";


export default function SamOverview() {
  return (
    <section 
    className="
      max-w
      leading-8       
      pb-10 sm:pb-20
      scroll-mt-28
      h-auto
      bg-violet-100"
    >
      <h2 className="
      text-neutral-950 text-3xl sm:text-5xl font-medium capitalize pt-6 sm:pt-16 text-center">
        Overview
      </h2>
      <div className='sm:mt-10 ' > 
        {/**OVERVIEW */}
        <div className='
          mx-6 sm:mx-12 text-neutral-950 
          place-content-center sm:px-10'>
          <p className='mt-2 leading-relaxed text-justify sm:text-xl'>
          El rediseño del contenido del sitio, la implementación de una arquitectura de la información optimizada y la creación de flujos conversacionales intuitivos mejoraron significativamente la experiencia del usuario.
          Además, la creación de un system prompt y el desarrollo de guidelines y metodologías para un producto impulsado por un LLM resolvieron eficazmente los desafíos existentes y nuevos.
          </p>
          <p className='mt-2 leading-relaxed text-justify sm:text-xl'>
          Mi rol en este proyecto fue como Conversational AI Designer, y el diseño y desarrollo de este producto tuvo una duración aproximada de 1 año. 
          Mis principales responsabilidades abarcaron varias etapas, incluyendo la investigación de UX, donde definí GOals y KPIs, realicé user research, 
          creé user personas, mapeé tópicos y desarrollé la bot persona con su tono y voz. En la fase de diseño conversacional, me encargué de la creación de 
          flujos conversacionales, prompts y copywriting, así como del prototipado y testeo con usuarios. En el diseño de AI conversacional, creé system prompts,
          desarrollé metodologías para evaluar LLMs y realicé pruebas con usuarios. Finalmente, en el lanzamiento del producto, analicé la data obtenida de
          interacciones reales, mejoré el producto a partir de esa información y creé reportes y métricas.
          </p>
        </div>
        <br />
        {/** PROBLEM */}
        <div className='
          rounded-lg mx-6 sm:mx-12 text-neutral-950 
          sm:p-10
        '>
          <h1 className='text-xl backdrop sm:text-3xl mt-2 font-semibold sm:mb-10'>Problem</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
            <div className='rounded-lg mt-2' >
              <Image
              src="/sam-vicky.png"
              quality={"100"}
              width={"700"}
              height={"510"}
              alt="Sam phone"
              className='max-w'
              style={{
                borderRadius: "10px",
              }}
              ></Image>
            </div>
            <div className='place-content-center'>
              <ul className='
                sm:mt-2 leading-relaxed text-justify sm:text-xl 
                list-disc list-inside '>
                <li>No había información clara de la utilidad del chatbot.</li>
                <li>El chatbot, construido en DialogFlow, tenía muy pocas frases de entrenamiento, por lo que a menudo no lograba entender las consultas de los usuarios.</li> 
                <li>La falta de un flujo conversacional claro y de una arquitectura de la información dificultaba la navegación por el menú, lo que provocaba que los usuarios abandonaran la conversación.</li> 
                <li>El sitio web solo permitía la navegación a través de una conversación con el chatbot, lo cual era poco intuitivo y carecía de instrucciones que facilitaran su uso.</li> 
                <li>No se transmitía información visual y no se hacía referencia a las actividades de Santex, dejando sin pista alguna al usuario de lo que podría encontrar en el sitio.</li> 
                <li>No existía un flujo conversacional para la generación de clientes potenciales para informar a los usuarios sobre los servicios de Santex, lo que impedía que el interés de los clientes avanzara hacia la concertación de citas.</li>
              </ul>
            </div>
          </div>
        </div>  
        {/** GOALS */}
        <div className='
          mx-6 sm:mx-12 text-neutral-950 
          place-content-center sm:px-10'>
          <h1 className='text-xl backdrop sm:text-3xl font-semibold  sm:mb-10'>Goals</h1>
          <ul className='sm:mt-2 leading-relaxed text-justify sm:text-xl  list-disc list-inside'>
            <li>Aumentar los leads generados a través del sitio web de 0 a 23 anualmente.</li>
            <li>Disminuir la tasa de rebote del 81.48% al 50% (la tasa de rebote es el porcentaje de visitantes que abandonan una página web sin realizar ninguna acción), mejorando la usabilidad del sitio web.</li>
            <li>Incrementar la duración promedio de las sesiones en el sitio web en un 50%, de 80 minutos a 120 minutos.</li>
            <li>Proveer un asistente virtual para conversar sobre tecnología y cómo puede mejorar el negocio de los clientes.</li>
            <li>Proveer un asistente virtual para responder a todas las consultas relacionadas con los servicios y soluciones de Santex.</li>
          </ul>
        </div>
      </div>
    </section>
    
  )
}
