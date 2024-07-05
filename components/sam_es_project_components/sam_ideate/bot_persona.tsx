import React from 'react';
import Image from "next/image";

export default function BotPersona() {
  return (
    <div className=''>
        <h2 className='text-lg sm:text-3xl font-semibold'> Bot Persona</h2>
        <p className='sm:my-3 leading-relaxed text-justify sm:text-xl'>
        La personalidad del bot se creó para asegurar una experiencia de usuario consistente y atractiva. 
        Al humanizar el bot, las interacciones se vuelven más comprensibles y agradables para los usuarios. 
        La personalidad describe las características del bot, el tono y el estilo, guiando a los desarrolladores y 
        creadores de contenido para mantener una voz unificada en todas las interacciones. 
        Este enfoque mejora la satisfacción del usuario, genera confianza y fomenta la familiaridad. 
        Además, una personalidad de bot bien definida asegura la alineación con los valores de la marca y aborda eficazmente 
        las necesidades del usuario, resultando en una experiencia digital más intuitiva y gratificante.
        </p>
        <div className='flex justify-center items-center mt-6 mb-10'>
            <Image
            src="/sam/sam-bot-persona.png"
            quality={"100"}
            width={"900"}
            height={"900"}
            alt="Sam persona"
            className='max-w'
            style={{
              borderRadius: "10px",
            }}
            >
            </Image>
        </div>
    </div>
  )
}
