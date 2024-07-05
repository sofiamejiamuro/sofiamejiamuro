import React from 'react';

export default function MethodologyCreation() {
  return (
    <div>
       <h3 className='sm:text-2xl font-semibold mt-8 mb-3'>Creación de la metodología</h3>
        {/**Creation of Annotation Scripts */}
        <p className='leading-relaxed sm:text-xl text-violet-950 font-bold'>Creación de Scripts de Anotación</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-2 mb-6 text-justify'>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-medium'>Objetivo: </span>
                Desarrollar scripts para manipular y formatear datos, permitiendo la creación de un sistema de anotación estructurado.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-medium'>Implementación: </span>
                Escribir scripts en Python y Google Apps Script para procesar datos de conversaciones de chatbot, estandarizar el formato y prepararlo para la anotación.</p>
            </div>
        </div>
        {/**Generation of Analytical Reports */}
        <p className='leading-relaxed sm:text-xl  text-violet-950 font-bold'>Generación de Informes Analíticos</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-2 mb-6 text-justify'>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-medium'>Objetivo: </span>
                Producir informes completos que resuman las anotaciones y analicen las conversaciones.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-medium'>Implementación: </span>
                Crear informes detallados que destaquen los hallazgos clave de las anotaciones. Estos informes deben incluir métricas sobre relevancia, completitud, exactitud, tipos de errores, adherencia al tema, consistencia del lenguaje y longitud de respuesta.</p>
            </div>
        </div>
        {/**Manual Annotation and Systematization*/}
        <p className='leading-relaxed sm:text-xl  text-violet-950 font-bold'>Anotación Manual y Sistematización</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-2 mb-6 text-justify'>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-bold'>Fase Inicial </span></p>
                <p className='leading-relaxed sm:text-xl'><span className='font-medium'>Método: </span>
                Realizar anotaciones manuales para evaluar las respuestas del chatbot basadas en los criterios definidos (relevancia, completitud, exactitud, etc.).</p>
                <p className='leading-relaxed sm:text-xl'><span className='font-medium'>Resultado: </span>
                Obtener una comprensión exhaustiva de los datos y refinar la metodología de evaluación.</p>
            </div>
            <div>
                <p className='leading-relaxed sm:text-xl'><span className='font-bold'>Fase Sistematizada </span></p>
                <p className='leading-relaxed sm:text-xl'><span className='font-medium'>Método: </span>
                Una vez validada la metodología a través de la anotación manual, el proceso se sistematizó utilizando Tableau y ChatGPT.</p>
                <p className='leading-relaxed sm:text-xl'><span className='font-medium'>Implementación: </span>
                Utilizar Tableau para automatizar el proceso de anotación y análisis, permitiendo una evaluación eficiente y escalable de las conversaciones del chatbot.</p>
            </div>
        </div>

    </div>
  )
}
