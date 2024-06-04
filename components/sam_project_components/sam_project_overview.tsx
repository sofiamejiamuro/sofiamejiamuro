import React from 'react';
import SectionHeading from '@/components/section-heading';
import Image from "next/image";


export default function SamOverview() {
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
        {/** GOALS */}
        <div className='
          mx-6 sm:mx-12 text-neutral-950 
          place-content-center sm:px-10'>
          <h1 className='text-xl backdrop:sm:text-3xl font-semibold  sm:mb-10'>Goals</h1>
          <ul className='sm:mt-2 leading-relaxed text-justify sm:text-xl  list-disc list-inside'>
            <li>Increase leads generated through the website from 0 to 23 annually.</li>
            <li>Decrease the bounce rate from 81.48% to 50% (the bounce rate is the percentage of visitors who leave a webpage without taking any action), improving website usability.</li>
            <li>Increase the average session duration on the website by 50%, from 80 minutes to 120 minutes.</li>
            <li>Provide a virtual assistant for conversing about technology and how it can improve customer business.</li>
            <li>Provide a virtual assistant to answer all queries related to Santex services and solutions.</li>
          </ul>

        </div>
        {/** PROBLEM */}
        <div className='
          rounded-lg mx-6 sm:mx-12 text-neutral-950 
          sm:p-10
        '>
          <h1 className='text-xl backdrop sm:text-3xl mt-2 font-semibold sm:mb-10'>Problem</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
            <div className='rounded-lg mt-2' >
              <Image
              src="/sam-vicky.png"
              quality={"100"}
              width={"700"}
              height={"510"}
              alt="Sam phone"
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
                <li>The chatbot, built in DialogFlow, had very few training phrases, often failing to understand user queries.</li>
                <li>Lack of clear conversational flow and information architecture made menu navigation difficult, causing users to abandon the conversation.</li> 
                <li>The website only allowed navigation through the chatbot, which was unintuitive and unguided due to lack of instructions.</li> 
                <li>The chatbot’s static image missed the chance to convey visual information and didn’t reference Santex’s activities.</li> 
                <li>No lead generation flow existed to inform users about Santex’s services, hindering customer interest advancement to appointments.</li>  
              </ul>
            </div>
          </div>
        </div>  
        {/** SOLUTION */}        
        <div className='
     
          mx-6 sm:mx-12 text-neutral-950 
          place-content-center sm:p-10'>
          <h1 className='text-xl backdrop sm:text-3xl mt-2 font-semibold sm:mb-10'>How</h1>
          <p className='mt-2 leading-relaxed text-justify sm:text-xl'>
          To solve the detected problem in the chatbot, we aim to create a product that seamlessly integrates existing channels (website and chatbot) to enhance the user experience. This involved implementing a large language model (LLM) tool to provide users with an intelligent conversational experience, meeting their needs and ultimately generating leads.
          </p>
        </div>
      </div>
    </section>
    
  )
}
