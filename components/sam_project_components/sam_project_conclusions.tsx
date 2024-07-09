import React from 'react';
import Image from "next/image";

export default function SamConclusions() {
  return (
    <section 
    className="
      mb-10 max-w
      leading-8 sm:mb-10
      pb-20
      scroll-mt-28
      h-auto
      "
    >  
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 mt-20 px-10 sm:px-24'>
        {/**LESSONS LEARNED */}
        <div >
          <div className='flex justify-center'>
            <Image 
            src="/1-conclusions.png"
            quality={"100"}
            width={"250"}
            height={"900"}
            alt="lessons learned"
            style={{
            borderRadius: "10px",
            }}>
            </Image>  
          </div>
         
          <h2 className='sm:text-2xl font-semibold text-center mt-4'>LESSONS LEARNED</h2>
          <ul className='
          leading-relaxed text-justify sm:text-xl 
          list-disc list-inside my-3'>
              <li className='mb-6'>
              Integrating a Large Language Model (LLM) into a chatbot involves more than simply switching from one tool to anotherr. Since an LLM is fundamentally different from traditional tools, the entire development paradigm shifts, requiring new approaches to problem-solving.</li>
              <li> Familiarity with LLM-related concepts is crucial for navigating the challenges that arise during the design and development of the chatbot.</li>
          </ul>
        </div>

        {/**FUTURE IMPROVEMENTS */}
        <div>
          <div className='flex justify-center'>
            <Image 
            src="/2-conclusions.png"
            quality={"100"}
            width={"250"}
            height={"900"}
            alt="future improvements"
            style={{
            borderRadius: "10px",
            }}>
            </Image>  
          </div>
          
          <h2 className='sm:text-2xl font-semibold text-center mt-4'>FUTURE IMPROVEMENTS</h2>
          <ul className='
          leading-relaxed text-justify sm:text-xl 
          list-none list-inside my-3'>
              <li  className='mb-6'><span className='font-bold'>Enhanced Visual Content: </span>
              Incorporating more visual content can enhance the user experience by making interactions smoother and reducing cognitive load.</li>
              <li><span className=' font-bold'>Automated Interaction Testing: </span> Systematizing the testing process through scripted interactions is essential to ensure consistent performance and identify potential issues early.</li>
          </ul>
        </div>
        
        {/**FINAL THOUGHTS */}
        <div>
          <div className='flex justify-center'>
            <Image 
            src="/3-conclusions.png"
            quality={"100"}
            width={"250"}
            height={"300"}
            alt="final thoughts"
            style={{
            borderRadius: "10px",
            }}>
            </Image>  
          </div>
        
          <h2 className='sm:text-2xl font-semibold  text-center mt-4'>FINAL THOUGHTS</h2>
          <ul className='
          leading-relaxed text-justify sm:text-xl 
          list-none list-inside my-3'>
              <li>A chatbot powered by an LLM is not a one-size-fits-all solution for all conversational products. It is important to analyze the objectives of the chatbot and user needs to determine if a generative tool is the best option.</li>
          </ul>
        </div>

      </div>
    </section>
  )
}
