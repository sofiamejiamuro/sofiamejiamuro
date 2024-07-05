import React from 'react';
import SPCards from './sp_cards';
import SPCreation from './sp_creation';
import { SlPencil } from "react-icons/sl";
import { IoKeyOutline } from "react-icons/io5";
import { BsArrowRepeat } from "react-icons/bs";


export default function SystemPrompt() {
  return (
    <div>
      <h2 className='sm:text-2xl font-semibold'>Preparación</h2>
      <p className='my-3 text-justify leading-relaxed sm:text-xl'>
        Crear un System Prompt robusto y efectivo para la implementación de un Large Language Model (ChatGPT) implica un enfoque exhaustivo y metódico.
        Como fue nuestra primera vez trabajando con esta tecnología, mi viaje comenzó con un profundo estudio para entender los fundamentos.
        Además, durante la fase de prototipado tuvimos que innovar y desarrollar nuestras propias metodologías y herramientas de prueba, ya que la novedad de la tecnología significaba que los recursos existentes eran insuficientes.
      </p>
      {/* TARJETAS */}
      <div>
          <div className='flex'>
              <div className='place-self-center'>
                  <SlPencil color='black' fontSize='3em'/>
              </div>
              <p className="ml-5 leading-relaxed sm:text-xl text-justify"><span className='font-bold'>Entrenamiento inicial: </span>
              Es esencial entender cómo funciona un LLM antes de empezar a trabajar con él. Tomar cursos y recibir formación en el funcionamiento de modelos de lenguaje como el utilizado en el System Prompt es una base sólida para comenzar.
              </p>   
          </div> 

          <div className='flex mt-3 '>
              <div className='place-self-center'>
                  <IoKeyOutline color='black' fontSize='3em'/>
              </div>
              <p className="ml-5 leading-relaxed sm:text-xl text-justify"><span className='font-bold'>Comprensión de conceptos clave: </span>
              Entender conceptos como la tokenización (el proceso de dividir el texto en unidades más pequeñas), las alucinaciones (errores o salidas inconsistentes del modelo) y RAG (Recuperar, Agregar, Generar) es crucial para trabajar efectivamente con el modelo y abordar problemas que puedan surgir durante el proceso de creación.</p>   
          </div> 

          <div className='flex mt-3'>
              <div className='place-self-center'>
                  <BsArrowRepeat color='black' fontSize='3em'/>
              </div>
              <p className="ml-5 leading-relaxed sm:text-xl text-justify"><span className='font-bold'>Accuracy: </span>
              Este paso muestra un enfoque iterativo y en continuo desarrollo. Construir las partes del Sistema Prompt, como el contexto, el enfoque y el formato de respuesta, implica prueba y error, ajustes y refinamientos para lograr resultados óptimos. Además, entender cómo relacionar funciones y herramientas específicas aplicadas al LLM es crucial para garantizar un rendimiento consistente y de alta calidad.
              </p>   
          </div> 
      </div>

      {/**<SPCards /> */}  
      {/**System Prompt*/}
      <SPCreation />
    </div>
  )
}
