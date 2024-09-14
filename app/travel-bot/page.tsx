import React from 'react';
import BackButton from '@/components/back_button';
import Image from "next/image";
import TravelBotChallenge from '@/components/travel-bot/travel-bot-challenge';
import TravelBotResearch from '../../components/travel-bot/travel-bot-research';
import TravelBotProposal from '../../components/travel-bot/travel-bot-proposal';
import TravelBotProcess from '../../components/travel-bot/travel-bot-process';


export default function TravelBot() {
  return (
    <main className='bg-[#CDCBFE] pt-12 sm:pt-28 mb-5'>
      <BackButton />
      {/**Hackathon DESCRIPTION */}
      <section 
        className="
          mb-0 max-w p-14
          leading-8 sm:mb-10
          scroll-mt-28 text-neutral-950
          h-auto"
        id='dp-description'
      >
        <h1 className='
        text-3xl sm:text-5xl text-center font-medium
        sm:mb-14'>
        Auronix - Challenge</h1>
        <div className='grid sm:grid-cols-2 gap-10'>
          <div>
            <Image
              src="/challenges/travel-bot.png"
              quality={"100"}
              width={"800"}
              height={"900"}
              alt="lessons learned"
              style={{

              }}>
            </Image>
          </div>
          <div className='
            text-lg sm:text-2xl leading-10
            content-center justify-self-center'>
            <h2 className='
              text-lg sm:text-4xl leading-10 
              font-medium mb-3'>Job Application Challenge</h2>
            <p className='leading-relaxed'>Company: Auronix</p>
            <p className='leading-relaxed'>Role: Conversation Designer</p>
            <p className='leading-relaxed'>Date: Abril 2021</p>
            <p className='leading-relaxed'>
              Description: A travel bot chatbot to demonstrate understanding of chatbot functionalities and capabilities. 
            </p>
            <p>This project is the result of three days of working.<br></br>*The bot was designed in Spanish.</p>
          </div>
        </div>
      </section>  
      {/**Challenge description */}
      <TravelBotChallenge />
      {/**Challenge process */}
      <TravelBotResearch />
      <TravelBotProposal/>
      <TravelBotProcess />
    </main>    
  )
}
