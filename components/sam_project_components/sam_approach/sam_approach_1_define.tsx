import React from 'react';
import Image from "next/image";
import Carousel from '@/components/carousel';

export default function SamDefine() {
  let slides = [
    "/sam/sam-up-1-large.png",
    "/sam/sam-up-2-large.png",
  ]
  
  return (
    <div className='
    mx-10 sm:mx-12 text-neutral-950 
    place-content-center sm:p-10 mb-4'
    id="discover">
    <h1 className='text-xl sm:text-3xl font-semibold mt-6 mb-4 sm:mb-10'>Discover</h1>
    <h2 className='sm:text-2xl font-semibold'> User Persona</h2>
    <p className='my-3 leading-relaxed text-justify sm:text-xl'>
    As we delve into the conversation design process, it is crucial to understand the diverse audience we are catering to.
    By understanding and designing conversations with these personas in mind, we can ensure our solutions effectively meet the diverse needs and preferences of our target audience.
    </p>
    <div className='w-[70%] m-auto my-5'>
      <Carousel slides={slides}/>
    </div>

    <h2 className='sm:text-2xl font-semibold mt-7'> How to address these profiles </h2>
    <ul className='
        leading-relaxed text-justify sm:text-xl 
        list-disc list-inside my-3'>
      <li>Craft concise messages prioritizing clarity and avoiding jargon to respect their time.</li>
      <li>Highlight specific benefits of the virtual assistant: addressing challenges, boosting efficiency, and fostering innovation.</li>
      <li>Back up claims with case studies and data to build confidence in the effectiveness of the virtual assistant </li>
      <li>Streamline interactions, offering detailed information as optional for understanding the core value proposition.</li>
      <li>Reinforce the security and reliability of the virtual assistant in every interaction.</li>
      <li>Emphasize the adaptability of the virtual assistant to meet the evolving needs of startups and the tech landscape.</li>
      <li>Offer networking opportunities and industry insights to facilitate learning and connections.</li>
      <li>Maintain transparent communication, providing easy access to comprehensive information about the capabilities of the virtual assistant.</li>
    </ul>
    <h2 className='sm:text-2xl font-semibold mt-7'> Topics Mapping </h2>
    <p className='my-3 leading-relaxed text-justify sm:text-xl'>
    Define the set of topics the virtual assistant Minimum Viable Knowledge (MVK), that is, mapping which requests it will understand and which answers it will be able to provide. As well as which ones won’t.
    </p>
    <div className='flex justify-center items-center mt-6'>
      <Image 
        src="/sam/topics_mapping.png"
        quality={"100"}
        width={"800"}
        height={"510"}
        alt="Sam phone"
        className='max-w'
        style={{
          borderRadius: "10px",
        }}>
      </Image>
    </div>
  </div>

  )
}
