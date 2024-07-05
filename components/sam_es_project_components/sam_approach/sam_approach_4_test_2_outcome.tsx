import React from 'react';
import Image from "next/image";


export default function SamTestOutcome() {
  return (
    <div className='
    sm:mx-12 text-neutral-950 
    place-content-center p-10'
    id="deliver">
        <h1 className='text-3xl font-semibold mb-10'>Resultados</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
            <div className=' flex justify-center'>
                <div className='w-[40%] self-center'>
                   <Image 
                src="/sam/iterate.png"
                quality={"100"}
                width={"300"}
                height={"900"}
                alt="Sam phone"
                className='max-w'
                style={{
                borderRadius: "10px",
                }}>
                </Image>   
                </div>
                
            </div>
            <div>
                <h2 className='sm:text-2xl font-semibold'>¿Qué conclusiones surgieron?</h2>
                <ul className='leading-relaxed text-justify sm:text-xl list-decimal list-inside my-3'>
                    <li><span className='font-bold'>Organización de las Fuentes de Datos: </span>
                    Se hizo evidente la necesidad de mejorar la organización de nuestras fuentes de datos utilizadas para el entrenamiento del modelo. Reconocimos la necesidad de reestructurar el contenido en un formato de preguntas y respuestas más conciso para mejorar la efectividad del chatbot.</li>
                    <li><span className='font-bold'>Conciencia del Margen de Error: </span>
                    Dada la naturaleza probabilística del modelo, reconocimos la importancia de considerar los márgenes de error. Comunicar estos efectivamente a los interesados ayudó a establecer expectativas realistas respecto al rendimiento del chatbot.</li>
                    <li><span className='font-bold'>Optimización de la Longitud de Respuesta: </span>
                    La naturaleza generativa del modelo nos llevó a abordar el problema de respuestas extensas, que podrían abrumar a los usuarios, especialmente en ciertos dispositivos. Realizamos pruebas para condensar las respuestas, asegurando que sean concisas y minimicen la carga cognitiva en los usuarios.</li>
                </ul>
                <p className='my-3 leading-relaxed text-justify sm:text-xl'>Estas conclusiones nos guiaron en refinar la funcionalidad del bot y la experiencia del usuario, alineándola más estrechamente con las expectativas de los usuarios y las capacidades de los dispositivos.</p>
            </div>
        </div>

    </div>
        
  )
}
