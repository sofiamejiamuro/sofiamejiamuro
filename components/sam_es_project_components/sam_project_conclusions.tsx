import React from 'react';
import Image from "next/image";

export default function SamConclusions() {
  return (
    <section 
    className="
      mb-10 max-w
      leading-8 sm:mb-10
      pb-20
      scroll-mt-28
      h-auto
      "
    >  
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 mt-20 px-10 sm:px-24'>
        {/**LESSONS LEARNED */}
        <div >
          <div className='flex justify-center'>
            <Image 
            src="/1-conclusions.png"
            quality={"100"}
            width={"250"}
            height={"900"}
            alt="lessons learned"
            style={{
            borderRadius: "10px",
            }}>
            </Image>  
          </div>
         
          <h2 className='sm:text-2xl font-semibold text-center mt-4'>Lecciones Aprendidas</h2>
          <ul className='
          leading-relaxed text-justify sm:text-xl 
          list-disc list-inside my-3'>
              <li className='mb-6'>
                  Integrar un Modelo de Lenguaje Grande (LLM) en un chatbot implica más que simplemente cambiar de una herramienta a otra. Dado que un LLM es fundamentalmente diferente de las herramientas tradicionales, todo el paradigma de desarrollo cambia, requiriendo nuevos enfoques para resolver problemas.
              </li>
              <li>
                  La familiaridad con los conceptos relacionados con LLM es crucial para navegar por los desafíos que surgen durante el diseño y desarrollo del chatbot.
              </li>

          </ul>
        </div>

        {/**FUTURE IMPROVEMENTS */}
        <div>
          <div className='flex justify-center'>
            <Image 
            src="/2-conclusions.png"
            quality={"100"}
            width={"250"}
            height={"900"}
            alt="future improvements"
            style={{
            borderRadius: "10px",
            }}>
            </Image>  
          </div>
          
          <h2 className='sm:text-2xl font-semibold text-center mt-4'>Mejoras a futuro</h2>
          <ul className='
          leading-relaxed text-justify sm:text-xl 
          list-none list-inside my-3'>
            <li className='mb-6'>
                <span className='font-bold'>Contenido Visual Mejorado: </span>
                Incorporar más contenido visual puede mejorar la experiencia del usuario al hacer que las interacciones sean más fluidas y reducir la carga cognitiva.
            </li>
            <li>
                <span className='font-bold'>Pruebas de Interacción Automatizadas: </span>
                Sistematizar el proceso de prueba mediante interacciones guiadas es esencial para garantizar un rendimiento consistente e identificar posibles problemas de manera temprana.
            </li>
          </ul>
        </div>
        
        {/**FINAL THOUGHTS */}
        <div>
          <div className='flex justify-center'>
            <Image 
            src="/3-conclusions.png"
            quality={"100"}
            width={"250"}
            height={"300"}
            alt="final thoughts"
            style={{
            borderRadius: "10px",
            }}>
            </Image>  
          </div>
        
          <h2 className='sm:text-2xl font-semibold  text-center mt-4'>Pensamientos Finales</h2>
          <ul className='
          leading-relaxed text-justify sm:text-xl 
          list-none list-inside my-3'>
            <li>Un chatbot impulsado por un LLM no es una solución única para todos los productos conversacionales. Es importante analizar los objetivos del chatbot y las necesidades del usuario para determinar si una herramienta generativa es la mejor opción.</li>
          </ul>
        </div>

      </div>
    </section>
  )
}
