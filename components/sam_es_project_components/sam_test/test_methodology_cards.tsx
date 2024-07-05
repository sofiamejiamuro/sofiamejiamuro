import React from 'react';
import Image from "next/image";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


export default function TestMethodology2() {
  const style = { color: 'blue', size: '50px',}

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-2 mb-6'>
        <div>
          <div className='flex'>
            <div className='place-self-center'>
              <IoIosCheckmarkCircleOutline color='black' fontSize='3em'/>
            </div>
            <p className="ml-5 leading-relaxed sm:text-xl text-justify"><span className='font-bold'>Relevancia: </span>
            La respuesta debe abordar directamente la pregunta o tema planteado.</p>   
          </div> 

          <div className='flex mt-3 '>
            <div className='place-self-center'>
              <IoIosCheckmarkCircleOutline color='black' fontSize='3em'/>
            </div>
            <p className="ml-5 leading-relaxed sm:text-xl text-justify"><span className='font-bold'>Completitud: </span>
            La respuesta debe cubrir adecuadamente todos los aspectos importantes de la pregunta.</p>   
          </div> 

          <div className='flex mt-3'>
            <div className='place-self-center'>
              <IoIosCheckmarkCircleOutline color='black' fontSize='3em'/>
            </div>
            <p className="ml-5 leading-relaxed sm:text-xl text-justify"><span className='font-bold'>Exactitud: </span>
            La información proporcionada en la respuesta debe ser precisa y correcta. No debe contener información falsa o inexacta.</p>   
          </div> 
        </div>
        <div>
          <div className='flex mt-2'>
            <div className='place-self-center'>
              <IoIosCheckmarkCircleOutline color='black' fontSize='3em'/>
            </div>
            <p className="ml-5 leading-relaxed sm:text-xl"><span className='font-bold'>Idioma: </span>
            El idioma en el que se hizo la solicitud y si el asistente virtual continuó la conversación en el mismo idioma o cambió al inglés.</p>  
          </div>
          <div className='flex'>
            <div className='place-self-center'>
              <IoIosCheckmarkCircleOutline color='black' fontSize='3em'/>
            </div>
            <p className="ml-5 leading-relaxed sm:text-xl text-justify"><span className='font-bold'>Número de palabras: </span>
            El número de palabras en la respuesta. Medir la longitud de la respuesta para estimar los costos asociados con el procesamiento y la generación de respuestas.</p>   
          </div> 
          <div className='flex mt-3'>
            <div className='place-self-center'>
              <IoIosCheckmarkCircleOutline color='black' fontSize='3em'/>
            </div>
            <p className="ml-5 leading-relaxed sm:text-xl text-justify"><span className='font-bold'>Tema: </span>
            Registrar si se responden temas restringidos o no.</p>   
          </div> 
        </div>      
      </div>  

      <div className='flex'>
        <div className='place-self-center'>
          <IoIosCheckmarkCircleOutline color='black' fontSize='3em'/>
        </div>
        <p className="ml-5 leading-relaxed sm:text-xl text-justify"><span className='font-bold'>Tipo de error: </span> <br></br> 
          <span className='font-semibold'>Información faltante: </span>Evaluación de casos donde la información solicitada no se encuentra en la base de conocimientos con la que el modelo fue personalizado a través del entrenamiento. {' '}
          <span className='font-semibold'>Alucinaciones: </span>Contar el número de instancias en las que el modelo genera información que no está fundamentada en los datos de entrada o en hechos del mundo real, resultando en contenido inexacto o fabricado.{' '}
          <span className='font-semibold'>Fallas de API: </span>Documentar cualquier falla en la API de OpenAI durante la interacción.</p>
      </div>
    </div>
  )
}
