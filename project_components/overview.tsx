import React from 'react';

export default function Overview({ content }) {
  return (
    <section 
    className=" max-w leading-8 pb-10 sm:pb-20 scroll-mt-28 h-auto bg-violet-100">
        <h2 className="text-3xl sm:text-5xl font-medium capitalize pt-6 sm:pt-16 text-center">
            In a Nutshell
        </h2>
        <div className='mx-6 sm:mx-12 place-content-center sm:px-10 my-8 text-justify sm:text-xl'>
          <p className='leading-relaxed'>
          {content.about_project}
          // El rediseño del contenido del sitio, la implementación de una arquitectura de la información optimizada y la creación de flujos conversacionales intuitivos mejoraron significativamente la experiencia del usuario.
          </p>
          <br></br>
          <p className='leading-relaxed'>
          {content.about_my_role}
          // Mi rol en este proyecto fue como Conversational AI Designer, y el diseño y desarrollo de este producto tuvo una duración aproximada de 1 año. 
          Mis principales responsabilidades abarcaron varias etapas, incluyendo la investigación de UX, donde definí GOals y KPIs, realicé user research, 
          creé user personas, mapeé tópicos y desarrollé la bot persona con su tono y voz. En la fase de diseño conversacional, me encargué de la creación de 
          flujos conversacionales, prompts y copywriting, así como del prototipado y testeo con usuarios. En el diseño de AI conversacional, creé system prompts,
          desarrollé metodologías para evaluar LLMs y realicé pruebas con usuarios. Finalmente, en el lanzamiento del producto, analicé la data obtenida de
          interacciones reales, mejoré el producto a partir de esa información y creé reportes y métricas.
          </p>
        </div>
    </section>
  )
}