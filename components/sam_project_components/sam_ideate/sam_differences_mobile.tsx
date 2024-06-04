import React from 'react'

export default function SamDifferencesMobile() {
  return (
    <div className='sm:hidden'>
        <p className='my-3 leading-relaxed text-center font-bold sm:text.xl'>Scripted vs. Generative Responses</p>
        <h3 className='sm:text.xl font-semibold'>DialogFlow</h3>
        <p className='my-3 leading-relaxed text-justify sm:text.xl'>Requires predefined intents and responses. Each user interaction must be anticipated and scripted.</p>
        <h3 className='sm:text.xl font-semibold  '>ChatGPT</h3>
        <p className='my-3 leading-relaxed text-justify sm:text.xl'>Generates responses dynamically based on the context and input, without requiring predefined scripts.</p>
        
        <p className='my-3 leading-relaxed text-center font-bold sm:text.xl'>Training and Maintenance</p>
        <h3 className='sm:text.xl font-semibold  '>DialogFlow</h3>
        <p className='my-3 leading-relaxed text-justify sm:text.xl'> Involves extensive setup and maintenance of intents, entities, contexts, and response variations. Regular updates are needed as new user intents are discovered.</p>
        <h3 className='sm:text.xl font-semibold '>ChatGPT</h3>
        <p className='my-3 leading-relaxed text-justify sm:text.xl'>Requires fine-tuning (if needed) on specific datasets, but generally, the model can handle a wider range of topics and adapt to new inputs more flexibly.</p>

        <p className='my-3 leading-relaxed text-center font-bold sm:text.xl'>Flexibility and Adaptability:</p>
        <h3 className='sm:text.xl font-semibold  '>DialogFlow</h3>        
        <p className='my-3 leading-relaxed text-justify sm:text.xl'>Limited to the predefined intents and entities. Handling unexpected user inputs requires extensive planning.</p>
        <h3 className='sm:text.xl font-semibold  '>ChatGPT</h3>
        <p className='my-3 leading-relaxed text-justify sm:text.xl'>More adaptable to varied and unexpected inputs due to its generative nature, offering more natural and diverse interactions.</p>

        <p className='my-3 leading-relaxed text-center font-bold sm:text.xl'>Development Complexity</p>
        <h3 className='sm:text.xl font-semibold'>DialogFlow</h3>
        <p className='my-3 leading-relaxed text-justify sm:text.xl'>Involves designing a detailed flowchart of possible interactions, specifying intents, and managing complex dialogue states.</p>
        <h3 className='sm:text.xl font-semibold '>ChatGPT</h3>
        <p className='my-3 leading-relaxed text-justify sm:text.xl'>Focuses more on defining the initial prompt and any specific guidelines for the conversation, with less need for intricate flowchart designs.</p>
        
        <p className='my-3 leading-relaxed text-center font-bold sm:text.xl'>Context Management</p>
        <h3 className='sm:text.xl font-semibold '>DialogFlow</h3>
        <p className='my-3 leading-relaxed text-justify sm:text.xl'>Uses explicit context management to maintain state across turns in a conversation. Contexts must be defined and managed manually.</p>
        <h3 className='sm:text.xl font-semibold  '>ChatGPT</h3>
        <p className='my-3 leading-relaxed text-justify sm:text.xl'>Maintains context implicitly within the conversation but might need explicit instructions or input tokens to retain specific context over longer interactions.</p>

        <p className='my-3 leading-relaxed text-center font-bold sm:text.xl'>User Control</p>
        <h3 className='sm:text.xl font-semibold '>DialogFlow</h3>  
        <p className='my-3 leading-relaxed text-justify sm:text.xl'>Provides more control over the conversation flow, ensuring users stay within the predefined paths and get expected responses.</p>
        <h3 className='sm:text.xl font-semibold '>ChatGPT</h3>
        <p className='my-3 leading-relaxed text-justify sm:text.xl'>Offers less control, as responses are generated on-the-fly and can sometimes deviate from expected paths.</p>

  </div>
  )
}
