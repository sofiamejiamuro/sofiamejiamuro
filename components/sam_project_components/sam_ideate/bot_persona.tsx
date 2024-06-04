import React from 'react';
import Image from "next/image";

export default function BotPersona() {
  return (
    <div className=''>
        <h2 className='text-3xl font-semibold'> Bot Persona</h2>
        <p className='my-3 leading-relaxed text-justify text-xl'>
        The bot persona was created to ensure a consistent and engaging user experience. 
        By humanizing the bot, interactions become more relatable and enjoyable for users. 
        The persona outlines the characteristics of the bot, tone, and style, guiding developers and 
        content creators to maintain a unified voice across all interactions. This approach enhances
        user satisfaction, builds trust, and fosters familiarity.
        Additionally, a well-defined bot persona ensures alignment with brand values and 
        effectively addresses user needs, resulting in a more intuitive and rewarding digital experience.
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
