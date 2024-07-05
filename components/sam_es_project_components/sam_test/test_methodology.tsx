import React from 'react'
import TestMethodology2 from './test_methodology_cards'
import MethodologyCreation from './test_methodology_creation'

export default function TestMethodology() {
  return (
    <div>
        <h2 className='sm:text-2xl font-semibold sm:mb-10'>Metodología</h2>
        <p className='my-3 leading-relaxed text-justify sm:text-xl'>Esta evaluación tiene como objetivo valorar varios aspectos de las respuestas, incluyendo la relevancia, completitud, precisión y conformidad con pautas específicas. Las siguientes secciones detallan los criterios utilizados para la evaluación, el proceso de sistematización de las anotaciones y las herramientas empleadas para analizar los datos. A través de este enfoque sistemático, buscamos identificar áreas de mejora y asegurar que el chatbot proporcione interacciones de alta calidad, precisas y relevantes para los usuarios.</p>
        <h3 className='sm:text-2xl font-semibold mt-6 mb-3'>Definir criterios de evaluación</h3>

        <TestMethodology2 />
        <MethodologyCreation />
    </div>
  )
}
