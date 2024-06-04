import React from 'react';
import Image from "next/image";
import SamDifferencesMobile from './sam_differences_mobile';
import Carousel from '@/components/carousel';

export default function UserFlowsPartOne() {

  let slides = [
    "/sam/sam-differences-1.png",
    "/sam/sam-differences-2.png",
  ]

  return (
    <div>
      <h2 className='text-3xl font-semibold'> 
      User Conversational Flows 
      </h2>
      <h3 className='mt-6 text-2xl font-semibold'> 
      The implications of a virtual assistant powered by an LLM
      </h3>
      <p className='my-3 leading-relaxed text-justify text-xl'>
      Creating user conversational flows for non-generative tools like DialogFlow compared to generative tools like ChatGPT involves several differences and similarities. 
      Here is a detailed comparison:
      </p>
      <div className='w-[70%] m-auto my-5'>
        <Carousel slides={slides}/>
      </div>
      
      <p className="my-3 leading-relaxed text-justify text-xl">
        More about this topic was addressed in this conference 
        <span className='italic'>Does the conversational design change when implementing a large language model (LLM) in a chatbot? (es){"   "}</span>
          <a
            className='hover:underline text-violet-900'
            href="https://www.youtube.com/watch?v=hOSfF1P6QBo"
            target="_blank"
          >Click here to watch video.</a>
      </p>
      <SamDifferencesMobile />
    </div>
  )
}
