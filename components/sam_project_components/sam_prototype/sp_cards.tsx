import React from 'react';

export default function SPCards() {
  return (
    <div>
      <div className='initial-training mb-4'>
        <div className='max-w-sm w-full lg:max-w-full lg:flex'>
          <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded shadow-lg lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-spOne" 
                title="initial training">
          </div>
          <div className=" rounded shadow-lg lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">1. Initial training</div>
              <p className="text-gray-700 text-base">It is essential to understand how an LLM works before starting to work with it. Taking courses and getting trained in the functioning of language models like the one used in the System Prompt is a solid foundation to begin with.</p>
              <br></br>
            </div>
          </div>
        </div>
      </div> 
      <div className='key-concepts mb-4'>
        <div className='max-w-sm w-full lg:max-w-full lg:flex'>
          <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded shadow-lg lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-spTwo" 
                title="key concepts">
          </div>
          <div className=" rounded shadow-lg lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">2. Understanding key concepts</div>
              <p className="text-gray-700 text-base">Understanding concepts such as tokenization (the process of dividing text into smaller units), hallucinations (errors or inconsistent outputs from the model), and RAG (Retrieve, Add, Generate) is crucial for effectively working with the model and addressing issues that may arise during the creation process.</p>
              <br></br>
            </div>
          </div>
        </div>
      </div> 
      <div className='sp-building mb-4'>
        <div className='max-w-sm w-full lg:max-w-full lg:flex'>
          <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded shadow-lg lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-spThree" 
                title="SP iteration">
          </div>
          <div className=" rounded shadow-lg lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">3. Iteration in constructing the System Prompt</div>
              <p className="text-gray-700 text-base">This step shows an iterative and continuously developing approach. Building the parts of the System Prompt, such as the context, approach, and response format, involves trial and error, adjustments, and refinements to achieve optimal results. Additionally, understanding how to relate specific functions and tools applied to the LLM is crucial to ensuring consistent and high-quality performance.</p>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}
