import React from 'react';
import Image from "next/image";


export default function AlviOverviewEn() {
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
          My role in this project was as a Conversational AI Designer, with a participation of approximately two months.
          </p>
          <p className='mt-2 leading-relaxed text-justify sm:text-xl'>
          My responsibilities included mapping topics, designing the bot's personality, and defining its tone and voice, as well as creating and testing the system prompt.
          </p>
          <p className='mt-2 leading-relaxed text-justify sm:text-xl'>
          I also conducted workshops to share the knowledge and methodologies developed during the 
          <span className="font-semibold underline">
            <a
              href="https://sofiamejiamuro.vercel.app/sam-asistente-virtual"
              target="_blank"
            > SAM (Santex AI Member) </a>
          </span> 
          project, including the conversational design stage, system prompt optimization, evaluation methodologies, report structure, relevant metrics, and structuring data sources for better model training.
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
                    <li><span className="font-bold text-neutral-950">Improve Member Experience: </span>
                    Provide quick and accurate responses and an interactive experience that increases satisfaction and loyalty.
                    </li>
                    <li><span className="font-bold text-neutral-950">Promote Club Membership: </span>
                    Facilitate the registration of new members, renew memberships, and inform about exclusive benefits.
                    </li>
                    <li><span className="font-bold text-neutral-950">Foster a Sense of Community and Belonging: </span>
                    Connect members with an assistant that reflects the club's passion and share exclusive content.
                    </li>
                    <li><span className="font-bold text-neutral-950">Optimize Club Communication: </span>
                    Keep members informed about events and activities and facilitate access to social media.
                    </li>
              </ul>
            </div>
          </div>
        </div> 
      </div>
    </section>
    
  )
}
