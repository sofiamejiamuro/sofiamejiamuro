import React from 'react';
import Image from "next/image";

export default function AlviConclusionsEn() {
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
         
          <h2 className='sm:text-2xl font-semibold text-center mt-4'>Lessons Learned</h2>
          <ul className='
          leading-relaxed text-justify sm:text-xl 
          list-none list-inside my-3'>
            <li className='mb-6'>
            <span className='font-bold'> Adjusting a system prompt to regionalisms: </span>
            Adapting a system prompt to the Argentine dialect is no easy task. It would be beneficial to explore non-generative tools that allow for maintaining consistency in this aspect, ensuring greater accuracy and coherence in the assistant's responses.            </li>
            <li className='mb-6'>
            <span className='font-bold'>Importance of structured data sources: </span>
            Having well-structured data sources is crucial to optimize the training of the LLM. The quality and organization of this data directly influence the model's performance and accuracy.            </li>
            <li>
            <span className='font-bold'>Prior UX research: </span>
            Conducting prior UX research is essential to define the content users are looking for, rather than focusing solely on what the client wants to show. This improves the bot's effectiveness and ensures a more relevant and satisfying experience for users.            </li>
          </ul>
        </div>

        {/**FUTURE IMPROVEMENTS */}
        <div>
          <div className='flex justify-center'>
            <Image 
            src="/3-conclusions.png"
            quality={"100"}
            width={"250"}
            height={"900"}
            alt="future improvements"
            style={{
            borderRadius: "10px",
            }}>
            </Image>  
          </div>
          
          <h2 className='sm:text-2xl font-semibold text-center mt-4'>Future Improvements</h2>
          <ul className='
          leading-relaxed text-justify sm:text-xl 
          list-none list-inside my-3'>
            <li className='mb-6'>
            <span className='font-bold'>Integration with appropriate APIs: </span>
            Implementing integration with APIs that provide real-time data, such as match results and relevant news, to enrich the conversation with the user and keep the information updated.            </li>
            <li className='mb-6'>
            <span className='font-bold'>Creation of guidelines:  </span>
            Developing detailed guidelines to establish a clear and efficient process in creating LLM-based virtual assistants, ensuring consistency and quality in design and development.            </li>
            <li>
            <span className='font-bold'>Automated interaction testing:  </span>
            Systematizing the testing process through guided automated interactions is essential to guarantee consistent performance and detect issues early on.            </li>
          </ul>
        </div>
        
        {/**FINAL THOUGHTS */}
        <div>
          <div className='flex justify-center'>
            <Image 
            src="/2-conclusions.png"
            quality={"100"}
            width={"250"}
            height={"300"}
            alt="final thoughts"
            style={{
            borderRadius: "10px",
            }}>
            </Image>  
          </div>
        
          <h2 className='sm:text-2xl font-semibold  text-center mt-4'>Final Thoughts</h2>
          <ul className='
          leading-relaxed text-justify sm:text-xl 
          list-none list-inside my-3'>
            <li>
                <span className='font-bold'>Evaluation of Solutions: </span>
                Although it is possible to customize LLM-based virtual assistants, it is crucial to assess whether they are the best solution for the specific needs of the project. This evaluation should consider factors such as accuracy, consistency, and the ability to handle regionalisms and other unique aspects of the project.            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}
