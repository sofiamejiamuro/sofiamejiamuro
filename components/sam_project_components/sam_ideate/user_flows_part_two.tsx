import React from 'react';
import Image from "next/image";


export default function UserFlowsPartTwo() {
  return (
    <div>
        <h3 className='mt-6 text-lg sm:text-2xl font-semibold'> 
      User Flows
      </h3>
      <p className='my-3 leading-relaxed text-justify sm:text-xl'> 
      To create conversational flows, it is essential to consider the differences between a non-generative tool (Dialog Flow) and a generative one (ChatGPT) and understand the specific characteristics and needs of each approach.
      </p>
      <h4 className='sm:text-2xl font-semibold text-center my-5'>Non-Generative</h4>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
        <div>
          <Image 
            src="/sam/sam-nogen-2.png"
            quality={"100"}
            width={"550"}
            height={"900"}
            alt="Sam phone"
            className='max-w'
            style={{
              borderRadius: "10px",
            }}>
          </Image>  
        </div>
        <div>
          <p className='my-3 leading-relaxed text-justify sm:text-xl'> 
          As seen in the flow, the texts and different variables that could occur at specific moments of the user journey are specified in the diagram.
          </p>
          <ul className='
          leading-relaxed text-justify sm:text-xl 
          list-disc list-inside my-3'>
            <li><span className='font-bold'>Static Question-Answer Flow:</span> The responses are predefined and do not change dynamically.</li>
            <li><span className='font-bold'>UX Writing: </span>It is crucial for conveying the personality of the bot and ensuring clarity in responses.</li>
            <li><span className='font-bold'>Total Content Control: </span>The content of the responses is controlled and pre-approved.</li>
          </ul>
        </div>
      </div>
      <h4 className='sm:text-2xl font-semibold text-center sm:my-5'>Generative</h4>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
        <div>
          <p className='my-3 leading-relaxed text-justify sm:text-xl'> 
          In contrast to non-generative flows, those powered by an LMM specify the content of the answer and how conversations should be led.
          </p>      
          <ul className='
          leading-relaxed text-justify sm:text-xl 
          list-disc list-inside my-3'>
            <li><span className='font-bold'>Generative Question-Answer Flow:</span> The responses are created dynamically by a language model.</li>
            <li><span className='font-bold'>Prompt System: </span> The prompts and data sources directly influence the quality of the responses.</li>
            <li><span className='font-bold'>Adaptability: </span>The responses can vary based on context and previous interaction.</li>
          </ul>
        </div>
        <div>
          <Image 
            src="/sam/sam-gen-2.png"
            quality={"100"}
            width={"550"}
            height={"900"}
            alt="Sam phone"
            className='max-w'
            style={{
              borderRadius: "10px",
            }}>
          </Image>
        </div>
      </div>
      <h4 className=' text-center sm:text-2xl font-semibold mt-10'>Form vs. Substance</h4>
      <div className='flex justify-center'>
        <ul className='
          max-w-[45rem]
          leading-relaxed sm:text-xl 
          my-3'>
          <li><span className='font-bold'>Non-Generative (Form):</span> Focus on the structure of the conversation, how information is presented, and the consistency of the voice of the bot.</li>
          <br></br>
          <li><span className='font-bold'>Generative (Substance):</span> - Focus on the substance and content of the responses, ensuring they are informative and relevant, supported by a robust prompt system and reliable data sources.</li>
        </ul>
      </div>
    </div>
  )
}
