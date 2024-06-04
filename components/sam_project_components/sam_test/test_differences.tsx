import React from 'react';
import Image from "next/image";
import Carousel from '@/components/carousel';

export default function TestDifferences() {
  let slides = [
    "/sam/sp-testing-1.png",
    "/sam/sp-testing-2.png",
  ]

  return (
    <div>
      <h1 className='text-3xl font-semibold mb-10'>Testing</h1>
      <p className='my-3 leading-relaxed text-xl'>
          Just as in the process of designing the conversational experience, the testing process had to be approached understanding the difference between non-generative and generative technologies.  
      </p>
      <p className='my-3 leading-relaxed text-xl'>
          When comparing the testing and evaluation of a chatbot powered by a non-generative tool like Dialogflow to one powered by a large language model (LLM) such as GPT-4, there are several key differences. These pertain to aspects such as test methodology, performance metrics, and the nature of interactions.
      </p>
      <div className='w-[70%] m-auto my-5'>
        <Carousel slides={slides}/>
      </div>
    </div>
  )
}
