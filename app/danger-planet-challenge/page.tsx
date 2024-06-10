import React from 'react';
import ToBeUpdated from '@/components/to_be_updated';
import BackButton from '@/components/back_button';
import Image from "next/image";
import Carousel from '@/components/carousel';

export default function DangerPlanet() {
  let slides = [
    "/danger_planet/dp-1.png",
    "/danger_planet/dp-2.png",
    "/danger_planet/dp-3.png",
    "/danger_planet/dp-5.png",
    "/danger_planet/dp-6.png"
  ]
  let slides_2 = [
    "/danger_planet/dp-ppt-0.png",
    "/danger_planet/dp-ppt-1.png",
    "/danger_planet/dp-ppt-2.png",
    "/danger_planet/dp-ppt-3.png",
    "/danger_planet/dp-ppt-4.png",
    "/danger_planet/dp-ppt-5.png",
    "/danger_planet/dp-ppt-6.png",
    "/danger_planet/dp-ppt-7.png",
    "/danger_planet/dp-ppt-8.png",
    "/danger_planet/dp-ppt-9.png",
    "/danger_planet/dp-ppt-10.png",
    "/danger_planet/dp-ppt-11.png",
    "/danger_planet/dp-ppt-12.png",
    "/danger_planet/dp-ppt-13.png",
    "/danger_planet/dp-ppt-14.png",
    "/danger_planet/dp-ppt-15.png",
    "/danger_planet/dp-ppt-16.png",
    "/danger_planet/dp-ppt-17.png",
    "/danger_planet/dp-ppt-18.png",
    "/danger_planet/dp-ppt-19.png",
  ]

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
        Danger Planet - Hackathon Women in Voice MX</h1>
      <div className='grid sm:grid-cols-2 gap-10'>
        <div>
          <Image
            src="/challenges/danger-planet-bg.png"
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
            font-medium mb-3'>Hackathon</h2>
          <p className='leading-relaxed'>Hackathon: Women in Voice MX - Google Edition</p>
          <p className='leading-relaxed'>Date: Dec 2020</p>
          <p className='leading-relaxed'>
          It is a multimodal action designed as a supplement to the education received in school related to 
          civil protection. The information provided aims to reinforce the instructions that children already know, 
          with the intention that they can act independently. The action will focus primarily on natural disasters 
          and accidents at home.
          </p>
          <p>This project is the result of two weeks of development, and won the second place. 
            <br></br>*The action was designed in Spanish.</p>
        </div>
      </div>
      </section>
      {/**Research  */}
      <section
        className="
        mb-0 max-w p-14
        leading-8
        scroll-mt-28 text-neutral-950
        h-auto bg-neutral-100 "
        id='research'>
          <div className='
            text-lg sm:text-xl text-justify
            content-center justify-self-center'>
            <h2 className='text-lg sm:text-4xl font-medium mb-3'>Research</h2>
            <ul className='mt-5 list-disc list-inside leading-relaxed'>
              <li>Consultation of bibliography related to Civil Protection in Mexico</li>
              <li>Research on the use of voice assistants and mobile devices</li>
              <li>Empathy Map</li>
              <li> Benchmark</li>
              <li>Survey Canvas</li>
              <li>Surveys</li>
              <li>User Persona</li>
              <li>Bot Persona</li>
              <li>Journey Map</li>
              <li>Problem Statement</li>
            </ul>
            <p className='leading-relaxed'>
              <a href='https://miro.com/app/board/o9J_lsxMnLY=/?share_link_id=331667071964'
                target='_blank'
                className='underline underline-offsite-1'
              >Here,</a> you can see the methodology and tools used in detail.</p>
            <div className='w-[70%] m-auto my-5'>
              <Carousel slides={slides}/>
            </div>
          </div>  
      </section>
       {/**script */}
       <section
        className="
        mb-0 max-w p-14
        leading-8
        scroll-mt-28 text-neutral-950
        h-auto bg-neutral-100 "
        id='research'>
          <div className='
            text-lg sm:text-xl text-justify
            content-center justify-self-center'>
            <h2 className='text-lg sm:text-4xl font-medium mb-3'>Script</h2>
            <p className='leading-relaxed'>For the structuring of the script, a table was used to record the user's input, the bot's responses, and the sounds and images for each interaction.</p>
            
            <p className='leading-relaxed'>
              <a href='https://docs.google.com/spreadsheets/d/1F8TxdWDee1ghmS-K4S2NRHWXMmypKuVhZzy1jDZcL00/edit?usp=sharing'
                target='_blank'
                className='underline underline-offsite-1'
              >Here,</a> you can see the template used to create the script.</p>
          </div>  
      </section>
      {/**code */}
      <section
        className="
        mb-0 max-w px-14 pb-14
        leading-8
        scroll-mt-28 text-neutral-950
        h-auto bg-neutral-100 "
        id='research'>
          <div className='
            text-lg sm:text-xl text-justify
            content-center justify-self-center'>
            <h2 className='text-lg sm:text-4xl font-medium mb-3'>Code</h2>
            <p className='leading-relaxed'>
              <a href='https://github.com/sofiamejiamuro/planeta-peligro'
                target='_blank'
                className='underline underline-offsite-1'
              >Here,</a> you can delve into the code and technology stack behind our award-winning multimodal action project, 
              crafted to enhance children's understanding of civil protection measures in natural disasters and home accidents.</p>

            <div className='flex justify-center'>
              <code className='p-10'><img width="80" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML"/></code>
              <code className='p-10'><img width="80" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS"/></code>
              <code className='p-10'><img width="80" src="https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png" alt="Firebase" title="Firebase"/></code>
              <code className='p-10'><img width="80" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/></code>
              <code className='p-10'><img width="80" src="https://user-images.githubusercontent.com/25181517/183911547-990692bc-8411-4878-99a0-43506cdb69cf.png" alt="GCP" title="GCP"/></code>
            </div>
          </div>  
      </section>
       {/**presentation */}
       <section
        className="
        mb-0 max-w p-14
        leading-8
        scroll-mt-28 text-neutral-950
        h-auto bg-violet-100 "
        id='research'>
          <div className='
            text-lg sm:text-xl text-justify
            content-center justify-self-center'>
            <h2 className='text-lg sm:text-4xl font-medium mb-3'>Final Presentation</h2>
            <p className='leading-relaxed'>
            Below, you'll find the final presentation given on the day of the hackathon, showcasing the research, results, and the next steps of the project.</p>
            <div className='w-[70%] m-auto my-5'>
              <Carousel slides={slides_2}/>
            </div>
          </div>  
      </section>
    </main>
  )
}
