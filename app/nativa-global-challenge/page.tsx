import React from 'react';
import ToBeUpdated from '@/components/to_be_updated';
import BackButton from '@/components/back_button';
import Image from "next/image";


export default function NativaGlobal() {
  return (
    <main className='bg-[#CDCBFE] pt-12 sm:pt-28'>
       <BackButton />
      <section 
        className="
          mb-0 max-w p-10
          leading-8 sm:mb-10
          scroll-mt-28 text-neutral-950
          h-auto"
        id='ng-description'
      >
      <h1 className='
        text-3xl sm:text-5xl text-center font-medium
        sm:mb-14'>
        Nativa Global - Challenge</h1>
      <div className='grid sm:grid-cols-2 gap-10'>
        <div>
          <Image
            src="/challenges/nativa-global-bg.png"
            quality={"100"}
            width={"500"}
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
          <p className=''>Company: Nativa Global</p>
          <p className=''>Role: Bot Developer Manager</p>
          <p className=''>Date: June 2024</p>
          <p className=''>
            Description: Four exercises on feasibility, integrations and attention to an incident.
            Analyze each case and prepare an explanation and if needed a workaround.
          </p>
        </div>
      </div>
      </section>

      <section  
        className="
          mb-0 max-w p-10
          leading-8
          scroll-mt-28 text-neutral-950
          h-auto bg-neutral-100 "
        id='ng-exercise-1'>
        <div className='grid sm:grid-cols-2 gap-10'>
          <div className='
            text-lg sm:text-xl leading-10 text-justify
            content-center justify-self-center'>
            <h2 className='text-lg sm:text-4xl leading-10 font-medium mb-3'>
              Exercise 1</h2>
            <p> 
              A customer in the retail vertical requires a WhatsApp bot that functions as a lead bot, 
              the bot should ask the user's name, telephone number, email address and location of the 
              development/subdivision of interest.</p>
            <p> Additionally, as a mandatory requirement you need 
              to integrate with HubSpot to store these leads.</p>
            <p> The client requests the viability of this last point ASAP.</p>
            <ul className='mt-5 list-decimal list-inside'>
              <li>Is it possible to integrate the bot with hubspot?</li>
              <li>What does Nativa Global need to do it?</li>
              <li> What does the client need?</li>
              <li> If it is not possible to integrate, what workaround could we offer?</li>
            </ul>
          </div>
          <div>
            <Image
              src="/challenges/nativa-global-bg.png"
              quality={"100"}
              width={"500"}
              height={"900"}
              alt="lessons learned"
              style={{

              }}>
            </Image>
          </div>
        </div>
      </section>

      <section
        className="
        mb-0 max-w p-10
        leading-8
        scroll-mt-28 text-neutral-950
        h-auto bg-violet-100 "
        id='ng-exercise-2'>
        <div className='grid sm:grid-cols-2 gap-10'>
          <div>
            <h2>Exercise 2</h2>
            <p> 
              A customer in the retail vertical requires a WhatsApp bot that functions as a lead bot, 
              the bot should ask the user's name, telephone number, email address and location of the 
              development/subdivision of interest. Additionally, as a mandatory requirement you need 
              to integrate with HubSpot to store these leads. The client requests the viability of this last point ASAP.</p>
            <ul>
              <li>Is it possible to integrate the bot with hubspot?</li>
              <li>What does Nativa Global need to do it?</li>
              <li> What does the client need?</li>
              <li> If it is not possible to integrate, what workaround could we offer?</li>
            </ul>
          </div>
          <div>
            <Image
              src="/challenges/nativa-global-bg.png"
              quality={"100"}
              width={"500"}
              height={"900"}
              alt="lessons learned"
              style={{

              }}>
            </Image>
          </div>
        </div>
      </section>

      <section
        className="
        mb-0 max-w p-10
        leading-8
        scroll-mt-28 text-neutral-950
        h-auto bg-neutral-100 "
        id='ng-exercise-3'>
        <div className='grid sm:grid-cols-2 gap-10'>
          <div>
            <h2>Exercise 3</h2>
            <p> 
              A customer in the retail vertical requires a WhatsApp bot that functions as a lead bot, 
              the bot should ask the user's name, telephone number, email address and location of the 
              development/subdivision of interest. Additionally, as a mandatory requirement you need 
              to integrate with HubSpot to store these leads. The client requests the viability of this last point ASAP.</p>
            <ul>
              <li>Is it possible to integrate the bot with hubspot?</li>
              <li>What does Nativa Global need to do it?</li>
              <li> What does the client need?</li>
              <li> If it is not possible to integrate, what workaround could we offer?</li>
            </ul>
          </div>
          <div>
            <Image
              src="/challenges/nativa-global-bg.png"
              quality={"100"}
              width={"500"}
              height={"900"}
              alt="lessons learned"
              style={{

              }}>
            </Image>
          </div>
        </div>
      </section>

      <section
        className="
        mb-0 max-w p-10
        leading-8 
        scroll-mt-28 text-neutral-950
        h-auto bg-violet-100 "
        id='ng-exercise-4'>
        <div className='grid sm:grid-cols-2 gap-10'>
          <div>
            <h2>Exercise 4</h2>
            <p> 
              A customer in the retail vertical requires a WhatsApp bot that functions as a lead bot, 
              the bot should ask the user's name, telephone number, email address and location of the 
              development/subdivision of interest. Additionally, as a mandatory requirement you need 
              to integrate with HubSpot to store these leads. The client requests the viability of this last point ASAP.</p>
            <ul>
              <li>Is it possible to integrate the bot with hubspot?</li>
              <li>What does Nativa Global need to do it?</li>
              <li> What does the client need?</li>
              <li> If it is not possible to integrate, what workaround could we offer?</li>
            </ul>
          </div>
          <div>
            <Image
              src="/challenges/nativa-global-bg.png"
              quality={"100"}
              width={"500"}
              height={"900"}
              alt="lessons learned"
              style={{

              }}>
            </Image>
          </div>
        </div>
      </section>
    </main>
    
  )
}