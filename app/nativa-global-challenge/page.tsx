import React from 'react';
import ToBeUpdated from '@/components/to_be_updated';
import BackButton from '@/components/back_button';
import Image from "next/image";
import Carousel from '@/components/carousel';

export default function NativaGlobal() {
  let slides = [
    "/nativa_global/ng-ex-3-1.png",
    "/nativa_global/ng-ex-3-2.png",
    "/nativa_global/ng-ex-3-3.png"
  ]
  let slides_2 =[
    "/nativa_global/ng-ex-4-1.png",
    "/nativa_global/ng-ex-4-1-2.png",
    "/nativa_global/ng-ex-4-2.png",
    "/nativa_global/ng-ex-4-3.png"
  ]

  return (
    <main className='bg-[#CDCBFE] pt-12 sm:pt-28 mb-5'>
      <BackButton />
      {/**JOB CHALLENGE DESCRIPTION */}
      <section 
        className="
          mb-0 max-w p-14
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
          <p className='leading-relaxed'>Company: Nativa Global</p>
          <p className='leading-relaxed'>Role: Bot Developer Manager</p>
          <p className='leading-relaxed'>Date: June 2024</p>
          <p className='leading-relaxed'>
            Description: Four exercises on feasibility, integrations and attention to an incident.
            Analyze each case and prepare an explanation and if needed a workaround.
          </p>
        </div>
      </div>
      </section>
      
      {/**EXERCISE 1 */}
      <section  
        className="
          mb-0 max-w p-14
          leading-8
          scroll-mt-28 text-neutral-950
          h-auto bg-neutral-100 "
        id='ng-exercise-1'>
        <div className='grid sm:grid-cols-2 gap-10'>
          <div className='
            text-lg sm:text-xl text-justify
            content-center justify-self-center'>
            <h2 className='text-lg sm:text-4xl font-medium mb-3'>
              Exercise 1</h2>
            <p className='leading-relaxed'> 
              A customer in the retail vertical requires a WhatsApp bot that functions as a lead bot, 
              the bot should ask the user's name, telephone number, email address and location of the 
              development/subdivision of interest.</p>
            <p className='leading-relaxed'> Additionally, as a mandatory requirement you need 
              to integrate with HubSpot to store these leads.</p>
            <p className='leading-relaxed'> The client requests the viability of this last point ASAP.</p>
            <ul className='mt-5 list-decimal list-inside leading-relaxed'>
              <li>Is it possible to integrate the bot with hubspot?</li>
              <li>What does Nativa Global need to do it?</li>
              <li> What does the client need?</li>
              <li> If it is not possible to integrate, what workaround could we offer?</li>
            </ul>
          </div>
          <div>
            <Image
              src="/nativa_global/ng-ex-1.png"
              quality={"100"}
              width={"700"}
              height={"900"}
              alt="lessons learned"
              style={{

              }}>
            </Image>
          </div>
        </div>
      </section>
      {/**EXERCISE 2 */}
      <section
        className="
        mb-0 max-w p-14
        leading-8
        scroll-mt-28 text-neutral-950
        h-auto bg-violet-100 "
        id='ng-exercise-2'>
        <div className='grid sm:grid-cols-2 gap-10'>
          <div className='
            text-lg sm:text-xl text-justify
            content-center justify-self-center'>
            <h2 className='text-lg sm:text-4xl font-medium mb-3'>Exercise 2</h2>
            <p className='leading-relaxed'> 
              A customer in the financial vertical needs to integrate its services into the bot, such as, for example, identifying clients by phone number, 
              downloading account statements, movements, etc.</p>
            <p className='leading-relaxed'>
              Being a company in the financial vertical, according to the integration policies with external services, the bot must follow the highest security 
              standards, which is why they are requesting that communication be through VPN if possible.
            </p>
            <p className='leading-relaxed'>
              On the part of the commercial team, two platform proposals have been offered to the client to develop the bot: Infobip and Liveperson, 
              so it is necessary to be certain of the viability of the project on each platform.
            </p>
            <p className='leading-relaxed'>- Infobip official documentation {' '}
              <a href='https://www.infobip.com/docs/answers/chatbot-elements/core-elements'
                target='_blank'
                className='underline underline-offsite-1'
              >here.</a></p>
            <p className='leading-relaxed'>- Official Liveperson Documentation{' '}
              <a href='https://developers.liveperson.com/conversation-builder-integrations-api-integrations.html'
                target='_blank'
                className='underline underline-offsite-1'
              >here.</a></p>
            <p className='mt-3 leading-relaxed'>Answer the following questions:</p>  
            <ul  className='list-decimal list-inside leading-relaxed'>
              <li>Is it feasible to meet the VPN communication requirement with the client's APIs? Just because? Why not?</li>
              <li>If yes, what is needed?</li>
              <li>If not, what alternatives do we offer? Take into account that the client requires high security standards.</li>
              <li>Which of the platforms do you recommend to carry out the project?</li>
            </ul>
          </div>
          <div>
            <Image
              src="/nativa_global/ng-ex-2.png"
              quality={"100"}
              width={"700"}
              height={"900"}
              alt="lessons learned"
              style={{

              }}>
            </Image>
          </div>
        </div>
      </section>
      {/**EXERCISE 3 */}
      <section
        className="
        mb-0 max-w p-14
        leading-8
        scroll-mt-28 text-neutral-950
        h-auto bg-neutral-100 "
        id='ng-exercise-3'>
          <div className='
            text-lg sm:text-xl text-justify
            content-center justify-self-center'>
            <h2 className='text-lg sm:text-4xl font-medium mb-3'>Exercise 3</h2>
            <p className='leading-relaxed'> 
              You have a new IA project where the bot should use different documents for different products, they are having the issue that the doc is very 
              similar for all their products so when a customer ask something the bot answer randomly with the firs doc that it found.</p>
            <p className='leading-relaxed'>Please provide the best practices to have a good experiences with the bot and what you will consider for a IA project 
              (Google IA) and a possible conclusion about what it is happening.</p>
          </div>  
          <div className='w-[70%] m-auto my-5'>
            <Carousel slides={slides}/>
          </div>
      </section>
      {/**EXERCISE 4 */}
      <section
        className="
        mb-0 max-w p-14
        leading-8 
        scroll-mt-28 text-neutral-950
        h-auto bg-violet-100 "
        id='ng-exercise-4'>
        <div className='
          text-lg sm:text-xl text-justify
          content-center justify-self-center'>
          <h2 className='text-lg sm:text-4xl font-medium mb-3'>Exercise 4</h2>
          <p className='leading-relaxed'>The client reports errors in user conversations. </p>
          <p className='leading-relaxed'>The bot has 2 API integrations: </p>
          <p className='leading-relaxed'>- to consult personal data</p>
          <p className='leading-relaxed'>- to modify said data</p>
          <p className='leading-relaxed'>For this exercise the APIs point to mock services that simulate the client's real APIs.</p>
          <p className='leading-relaxed'>The bot went into production weeks ago and the only change recently made by our development team was a text adjustment to the initial greeting.</p>
          <p className='leading-relaxed'>The client is very upset since all his queries are affected, he mentions that the bot is useless and is considering stopping future related projects until the issue is resolved and assures that the problem originated from the bot's side.</p>
          <p className='leading-relaxed'>We urgently require that you do a global analysis of the problem, obtaining root cause and conclusions. For the next session with the client, it is required to have this analysis ready, with conclusions, possible solutions or alternatives either from the client's side or from Nativa Global.</p>
          <p className='leading-relaxed'>Consider the tense situation with the client in your explanation and seek to explain the cause and solutions in the best possible way.</p>
          <p className='leading-relaxed'>It is recommended that you carry out all the necessary tests, with all the tools that you consider, in order to be certain of the root cause, as well as to have all possible evidence ready (Audit, logs, screenshots, diagrams, documentation, etc.).</p>
        </div>
        <div className='w-[70%] m-auto my-5'>
            <Carousel slides={slides_2}/>
          </div>
      </section>
    </main>
    
  )
}