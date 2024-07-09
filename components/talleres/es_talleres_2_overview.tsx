import React from 'react';
import Image from "next/image";


export default function AlviOverviewEs() {
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
          Mi rol en este proyecto fue como Diseñador de IA Conversacional (Conversational AI Designer), con una participación de aproximadamente dos meses.
          </p>
          <p className='mt-2 leading-relaxed text-justify sm:text-xl'>
          Mis responsabilidades incluyeron el mapeo de tópicos, el diseño de la personalidad del bot y la definición de su tono y voz, así como la creación y testeo del system prompt. 
          </p>
          <p className='mt-2 leading-relaxed text-justify sm:text-xl'>
          Dirigí realicé workshops para compartir los conocimientos y metodologías desarrolladas durante el proyecto 
          <span className="font-semibold underline">
            <a
              href="https://sofiamejiamuro.vercel.app/sam-asistente-virtual"
              target="_blank"
            > SAM (Santex AI Member) </a>
          </span> 
          ,incluyendo la etapa del diseño conversacional, 
          la optimización de los system prompts, las metodologías de evaluación, la estructura de los reportes, las métricas relevantes y la estructuración de las fuentes de datos para un 
          mejor entrenamiento del modelo.
          </p>
        </div>
        <br />
        {/** GOALS */}
        <div className='
          rounded-lg mx-6 sm:mx-12 text-neutral-950 
          sm:p-10
        '>
          <h1 className='text-xl backdrop sm:text-3xl mt-2 font-semibold sm:mb-10'>Goals</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
            <div className='rounded-lg mt-2' >
              <Image
              src="/talleres/alvi-overview.png"
              quality={"100"}
              width={"700"}
              height={"510"}
              alt="Alvi phone"
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
                    <li><span className="font-bold text-neutral-950">Mejorar la Experiencia del Socio: </span>Proporcionar respuestas rápidas y precisas y una experiencia interactiva que aumente la satisfacción y lealtad.</li>
                    <li><span className="font-bold text-neutral-950">Promover la Afiliación al Club: </span>Facilitar la inscripción de nuevos socios, renovar membresías e informar sobre beneficios exclusivos.</li>
                    <li><span className="font-bold text-neutral-950">Fomentar el Sentido de Comunidad y Pertenencia: </span>Conectar a los socios con un asistente que refleje la pasión del club y compartir contenido exclusivo.</li>
                    <li><span className="font-bold text-neutral-950">Optimizar la Comunicación del Club: </span>Mantener a los socios informados sobre partidos, eventos y actividades y facilitar el acceso a redes sociales.</li>
              </ul>
            </div>
          </div>
        </div> 
      </div>
    </section>
    
  )
}
