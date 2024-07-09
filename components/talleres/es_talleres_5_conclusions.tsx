import React from 'react';
import Image from "next/image";

export default function AlviConclusionsEs() {
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
            <span className='font-bold'> Ajustar un system prompt a regionalismos: </span>
           Adaptar un system prompt al dialecto argentino no es tarea sencilla. Sería beneficioso explorar herramientas no generativas que permitan mantener la consistencia en este aspecto, asegurando una mayor precisión y coherencia en las respuestas del asistente.
            </li>
            <li className='mb-6'>
            <span className='font-bold'>Importancia de data sources estructurados: </span>
            Es crucial contar con fuentes de datos bien estructuradas para optimizar el entrenamiento del LLM. La calidad y organización de estos datos influyen directamente en el rendimiento y precisión del modelo.
            </li>
            <li>
            <span className='font-bold'>Investigación de UX previa mejor definida:</span>
            Realizar una investigación de UX previa es esencial para definir el contenido que buscan los usuarios, en lugar de enfocarse únicamente en lo que el cliente desea mostrar. Esto mejora la efectividad del bot y asegura una experiencia más relevante y satisfactoria para los usuarios.   
            </li>
          </ul>
        </div>

        {/**FUTURE IMPROVEMENTS */}
        <div>
          <div className='flex justify-center'>
            <Image 
            src="/3-conclusions.png"
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
            <span className='font-bold'>Integración con APIs adecuadas: </span>
            Implementar la integración con APIs que proporcionen datos en tiempo real, como resultados de partidos y noticias relevantes, para enriquecer la conversación con el usuario y mantener la información actualizada.
            </li>
            <li className='mb-6'>
            <span className='font-bold'>Creación de guidelines: </span>
            Desarrollar guías detalladas para establecer un proceso claro y eficiente en la creación de asistentes virtuales basados en LLMs, asegurando consistencia y calidad en el diseño y desarrollo.
            </li>
            <li>
            <span className='font-bold'>Pruebas de interacción automatizadas: </span>
            Sistematizar el proceso de pruebas mediante interacciones guiadas automatizadas es esencial para garantizar un rendimiento consistente y detectar problemas de manera temprana.
            </li>
          </ul>
        </div>
        
        {/**FINAL THOUGHTS */}
        <div>
          <div className='flex justify-center'>
            <Image 
            src="/2-conclusions.png"
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
            <li>
                <span className='font-bold'>Evaluación de Soluciones: </span>
                Aunque es posible personalizar asistentes virtuales basados en LLMs, es crucial evaluar si son la solución que mejor se adapta a las necesidades específicas del proyecto. Esta evaluación debe considerar factores como la precisión, consistencia y capacidad de manejo de regionalismos y otros aspectos únicos del proyecto.
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}
