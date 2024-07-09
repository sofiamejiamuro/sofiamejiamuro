import React from 'react';
import Carousel from '@/components/carousel';
import Image from "next/image";

export default function AlviAchievementsEs() {
    let slides = [
        "/sam/achievements_1.png",
        "/sam/achievements_2.png",
        "/sam/achievements_3.png",
      ]
    return (
        <section 
        className="
        mb-10 max-w
        leading-8 sm:mb-0   
        h-auto px-10 sm:px-24
        pb-10 sm:pb-24
        bg-neutral-100"
        >
            <h2 className="text-neutral-950 text-2xl sm:text-5xl font-medium capitalize pt-8 sm:pt-16 text-center">
                METAS LOGRADAS
            </h2>
            <p className='my-6 leading-relaxed text-justify sm:text-xl'>
            Alvi aun está en fase de prueba, sin embargo, para medir si se lograron los objetivos y evaluar su funcionalidad cualitativamente, se proponen las siguientes métricas:
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                <div className='place-content-center rounded-lg' >
                    <Image
                    src="/talleres/alvi-goals-1.png"
                    quality={"100"}
                    width={"500"}
                    height={"510"}
                    alt="Alvi phone"
                    className='max-w'
                    style={{
                        borderRadius: "10px",
                    }}
                    ></Image>
                </div>
                <div className='place-content-center'>
                    <p className='leading-relaxed text-justify sm:text-xl'><span className="font-bold text-neutral-950">Mejorar la Experiencia del Socio: </span></p>
                    <ul className='
                        sm:mt-2 leading-relaxed text-justify sm:text-xl 
                        list-disc list-inside'>
                        <li>Medir la satisfacción del usuario: Implementar encuestas de satisfacción al final de cada interacción y calcular el Net Promoter Score (NPS).</li>
                        <li>Tiempo de respuesta: Monitorear el tiempo promedio que el asistente tarda en responder a las consultas de los socios.</li>
                        <li>Tasa de resolución en la primera interacción: Medir el porcentaje de consultas que se resuelven en la primera interacción sin necesidad de asistencia adicional.</li>
                    </ul>
                    <p className='sm:mt-2 leading-relaxed text-justify sm:text-xl'><span className="font-bold text-neutral-950">Promover la Afiliación al Club:</span></p>
                    <ul className='
                        sm:mt-2 leading-relaxed text-justify sm:text-xl 
                        list-disc list-inside'>
                        <li>Contar nuevas inscripciones: Registrar el número de nuevos socios inscritos a través del asistente virtual cada mes.</li>
                        <li>Tasa de renovación: Medir el porcentaje de socios que renuevan su membresía utilizando el asistente.</li>
                        <li>Conversión de consultas a afiliaciones: Evaluar el porcentaje de consultas sobre la afiliación que resultan en una nueva inscripción.</li>
                    </ul>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 sm:mt-4'>
                
                <div className='place-content-center'>
                    <p className='leading-relaxed text-justify sm:text-xl'><span className="font-bold text-neutral-950">Fomentar el Sentido de Comunidad y Pertenencia:</span></p>
                    <ul className='
                        sm:mt-2 leading-relaxed text-justify sm:text-xl 
                        list-disc list-inside'>
                        <li>Medir interacciones recurrentes: Contabilizar el número de socios que interactúan con el asistente más de una vez al mes.</li>
                        <li>Feedback positivo: Recopilar y analizar comentarios positivos y valoraciones de los usuarios sobre su sentido de pertenencia al club.</li>
                        <li>Engagement con contenido exclusivo: Medir la cantidad de visualizaciones y la interacción (likes, shares) con el contenido exclusivo proporcionado por el asistente.</li>
                    </ul>
                    <p className='sm:mt-2 leading-relaxed text-justify sm:text-xl'><span className="font-bold text-neutral-950">Optimizar la Comunicación del Club:</span></p>
                    <ul className='
                        sm:mt-2 leading-relaxed text-justify sm:text-xl 
                        list-disc list-inside'>
                        <li>Frecuencia de actualizaciones: Monitorear la regularidad con la que se actualizan las noticias y eventos en el asistente.</li>
                        <li>Tasa de interacción con noticias/eventos: Medir el porcentaje de usuarios que acceden a las noticias y eventos a través del asistente.</li>
                        <li>Tráfico hacia redes sociales y sitio web: Contar el número de redirecciones desde el asistente a las redes sociales y el sitio web oficial del club.</li>
                    </ul>
                </div>
                <div className='place-content-center rounded-lg' >
                    <Image
                    src="/talleres/alvi-goals-2.png"
                    quality={"100"}
                    width={"500"}
                    height={"510"}
                    alt="Alvi phone"
                    className='max-w'
                    style={{
                        borderRadius: "10px",
                    }}
                    ></Image>
                </div>
            </div>
        </section>
        
    )
}