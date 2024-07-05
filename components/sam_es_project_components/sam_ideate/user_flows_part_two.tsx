import React from 'react';
import Image from "next/image";


export default function UserFlowsPartTwo() {
  return (
    <div>
        <h3 className='mt-6 text-lg sm:text-2xl font-semibold'> 
      User Flows
      </h3>
      <p className='my-3 leading-relaxed text-justify sm:text-xl'> 
      Para crear flujos conversacionales, es esencial considerar las diferencias entre una herramienta no generativa (Dialog Flow) y una generativa (ChatGPT),
       y entender las características específicas y necesidades de cada enfoque.
      </p>
      <h4 className='sm:text-2xl font-semibold text-center my-5'>Non-Generative</h4>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
        <div>
          <Image 
            src="/sam/sam-nogen-2.png"
            quality={"100"}
            width={"550"}
            height={"900"}
            alt="Sam phone"
            className='max-w'
            style={{
              borderRadius: "10px",
            }}>
          </Image>  
        </div>
        <div>
          <p className='my-3 leading-relaxed text-justify sm:text-xl'> 
          Como se observa en el flujo, en el diagrama se especifican los textos y las diferentes variables que podrían ocurrir en momentos específicos del recorrido del usuario.
          </p>
          <ul className='
          leading-relaxed text-justify sm:text-xl 
          list-disc list-inside my-3'>
            <li><span className='font-bold'>Flujo estático de preguntas y respuestas:</span> Las respuestas están predefinidas y no cambian dinámicamente.</li>
            <li><span className='font-bold'>Escritura de UX:</span> Es crucial para transmitir la personalidad del bot y asegurar claridad en las respuestas.</li>
            <li><span className='font-bold'>Control total del contenido:</span> El contenido de las respuestas está controlado y preaprobado.</li>
          </ul>
        </div>
      </div>
      <h4 className='sm:text-2xl font-semibold text-center sm:my-5'>Generativo</h4>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
        <div>
          <p className='my-3 leading-relaxed text-justify sm:text-xl'> 
          A diferencia de los flujos no generativos, aquellos impulsados por un LMM especifican el contenido de la respuesta y cómo deben llevarse las conversaciones.
          </p>      
          <ul className='
          leading-relaxed text-justify sm:text-xl 
          list-disc list-inside my-3'>
            <li><span className='font-bold'>Flujo generativo de preguntas y respuestas:</span> Las respuestas son creadas dinámicamente por un modelo de lenguaje.</li>
            <li><span className='font-bold'>System Prompt:</span> Los prompts y fuentes de datos influyen directamente en la calidad de las respuestas.</li>
            <li><span className='font-bold'>Adaptabilidad:</span> Las respuestas pueden variar según el contexto y la interacción previa.</li>
          </ul>
        </div>
        <div>
          <Image 
            src="/sam/sam-gen-2.png"
            quality={"100"}
            width={"550"}
            height={"900"}
            alt="Sam phone"
            className='max-w'
            style={{
              borderRadius: "10px",
            }}>
          </Image>
        </div>
      </div>
      <h4 className=' text-center sm:text-2xl font-semibold mt-10'>Forma vs. Fondo</h4>
      <div className='flex justify-center'>
        <ul className='
          max-w-[45rem]
          leading-relaxed sm:text-xl 
          my-3'>
          <li><span className='font-bold'>No generativo (Form):</span> Se centra en la estructura de la conversación, cómo se presenta la información y la consistencia de la voz del bot.</li>
          <br></br>
          <li><span className='font-bold'>Generativo (Fondo):</span> Se enfoca en la sustancia y el contenido de las respuestas, asegurando que sean informativas y relevantes, respaldadas por un sistema robusto de estímulos y fuentes de datos confiables.</li>

        </ul>
      </div>
    </div>
  )
}
